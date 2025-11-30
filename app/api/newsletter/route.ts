import { NextResponse } from 'next/server';
import * as Brevo from '@getbrevo/brevo';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const apiKey = process.env.BREVO_API_KEY;

        if (!apiKey) {
            console.error('BREVO_API_KEY is not defined');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const apiInstance = new Brevo.ContactsApi();
        apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, apiKey);

        const contact = new Brevo.CreateContact();
        contact.email = email;
        contact.updateEnabled = true; // Update if exists

        try {
            await apiInstance.createContact(contact);
            return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 201 });
        } catch (error: any) {
            // Check for duplicate contact error (400 Bad Request usually for duplicates in Brevo)
            if (error.response && error.response.statusCode === 400) {
                // We can assume it might be a duplicate or invalid data. 
                // For better UX, we can say subscribed (idempotent) or check specific error code if available in body
                const body = error.body;
                if (body && body.code === 'duplicate_parameter') {
                    return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
                }
            }

            console.error('Brevo SDK Error:', error);
            return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
        }

    } catch (error) {
        console.error('Newsletter API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
