import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, email, comment } = await req.json();

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail's SMTP server
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password if 2FA is enabled
      },
    });

    // Set up email data with unicode symbols
    let mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER, // List of recipients
      subject: 'Consulta desde el formulario de contacto', // Subject line
      text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo electrónico: ${email}\nConsulta: ${comment}`, // Plain text body
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
