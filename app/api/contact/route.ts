import { NextResponse } from 'next/server';
import * as Brevo from '@getbrevo/brevo';

export async function POST(request: Request) {
    try {
        const { name, company, email, phone, inquiry, message } = await request.json();

        if (!email || !message || !name) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const apiKey = process.env.BREVO_API_KEY;
        const adminEmail = process.env.ADMIN_EMAIL; // User needs to set this
        const senderEmail = process.env.SENDER_EMAIL || 'no-reply@sparklabinfo.com'; // User needs to set this

        if (!apiKey) {
            console.error('BREVO_API_KEY is not defined');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const apiInstance = new Brevo.TransactionalEmailsApi();
        apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

        const sendSmtpEmail = new Brevo.SendSmtpEmail();
        sendSmtpEmail.subject = `New Contact Form Submission from ${name}`;
        sendSmtpEmail.sender = { name: 'SparkLabInfo Website', email: senderEmail };
        sendSmtpEmail.to = [{ email: adminEmail || email, name: 'Admin' }]; // Fallback to sender if admin not set (for testing)
        sendSmtpEmail.replyTo = { email: email, name: name };
        sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h1>New Contact Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Inquiry Type:</strong> ${inquiry || 'General'}</p>
          <br/>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </body>
      </html>
    `;

        try {
            await apiInstance.sendTransacEmail(sendSmtpEmail);
            return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
        } catch (error) {
            console.error('Brevo Transactional Email Error:', error);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
