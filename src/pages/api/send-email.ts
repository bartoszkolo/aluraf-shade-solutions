import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      szerokość,
      głębokość,
      wysokość,
      zadaszenie,
      kolor,
      oświetlenieLED,
      ścianyTarasu,
      lokalizacja,
      uwagi,
      email,
      telefon,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bartosz.kolo@gmail.com',
      subject: 'Nowa wycena z formularza Aluraf',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e30613;">Nowa wycena z formularza Aluraf</h2>
          
          <h3 style="color: #333; margin-top: 20px;">Wymiary:</h3>
          <ul style="list-style: none; padding: 0;">
            <li>Szerokość: ${szerokość} cm</li>
            <li>Głębokość: ${głębokość} cm</li>
            <li>Wysokość: ${wysokość} cm</li>
          </ul>

          <h3 style="color: #333; margin-top: 20px;">Specyfikacja:</h3>
          <ul style="list-style: none; padding: 0;">
            <li>Zadaszenie: ${zadaszenie}</li>
            <li>Kolor: ${kolor}</li>
            <li>Oświetlenie LED: ${oświetlenieLED}</li>
            <li>Ściany tarasu: ${ścianyTarasu}</li>
          </ul>

          <h3 style="color: #333; margin-top: 20px;">Lokalizacja:</h3>
          <p>${lokalizacja}</p>

          <h3 style="color: #333; margin-top: 20px;">Uwagi:</h3>
          <p>${uwagi || 'Brak uwag'}</p>

          <h3 style="color: #333; margin-top: 20px;">Dane kontaktowe:</h3>
          <ul style="list-style: none; padding: 0;">
            <li>Email: ${email}</li>
            <li>Telefon: ${telefon}</li>
          </ul>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
} 