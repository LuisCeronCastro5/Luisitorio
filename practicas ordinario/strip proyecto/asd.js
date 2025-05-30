const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51RMHCqR2Okm3W9GZpM40BQE5yVsFm3r4rA3xq7zgN7T68Od8t87dRQjY4jmkn6Ery1H2s02XIb4z7NhTSq49TlEP007RAJ9QBW'); // Reemplaza con tu llave secreta de Stripe
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para crear un intento de pago
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, email } = req.body;
    
    // Validar la cantidad
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'La cantidad debe ser mayor que 0' });
    }
    
    // Validar el email
    if (!email) {
      return res.status(400).json({ error: 'El correo electrónico es requerido' });
    }
    
    // Crear un cliente en Stripe (opcional)
    const customer = await stripe.customers.create({
      email: email,
      description: 'Cliente creado para el pago único',
    });
    
    // Crear el PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Asegurarse de que sea un entero
      currency: 'mxn', // Moneda en pesos mexicanos
      description: 'Pago de prueba',
      customer: customer.id,
      metadata: {
        email: email,
      },
      payment_method_types: ['card'],
    });
    
    // Enviar el clientSecret al cliente
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error al crear el pago:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook para recibir eventos de Stripe (opcional pero recomendado)
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  let event;
  
  try {
    // Verificar la firma del webhook con tu clave de webhook
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      'sk_test_51RMHCqR2Okm3W9GZpM40BQE5yVsFm3r4rA3xq7zgN7T68Od8t87dRQjY4jmkn6Ery1H2s02XIb4z7NhTSq49TlEP007RAJ9QBW' // Reemplaza con tu clave secreta de webhook
    );
  } catch (err) {
    console.error('Error al verificar webhook:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  // Manejar el evento
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent exitoso:', paymentIntent.id);
      // Aquí puedes actualizar tu base de datos, enviar emails, etc.
      break;
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('Pago fallido:', failedPayment.id, failedPayment.last_payment_error?.message);
      break;
    default:
      console.log(`Evento no manejado: ${event.type}`);
  }
  
  res.json({ received: true });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});