import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, email, comment='', subject} = await req.json();

    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'huellitasctgna@outlook.com', 
      subject: `Web Huellitas - ${subject}`, 
      text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo electrónico: ${email}\nConsulta: ${comment}`, 
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
