// src/app/api/webhook/payment/route.ts
import { NextResponse } from 'next/server';

/**
 * Handles incoming webhooks from payment providers.
 * This is a crucial endpoint for asynchronously confirming payment status.
 */
export async function POST(request: Request) {
  console.log('Webhook received at /api/webhook/payment');
  
  try {
    const payload = await request.json();
    console.log('Webhook payload:', payload);

    // TODO: Add logic here to process the webhook payload
    // - Verify the webhook signature to ensure it's from the payment provider.
    // - Check the payment status in the payload.
    // - If payment is successful, update the order status in your database.
    //   For example, mark the CV download as permanently unlocked for the user.
    // - Handle different event types (e.g., payment succeeded, failed, refunded).

    // Respond to the payment provider that we have successfully received the webhook.
    return NextResponse.json({ status: 'success', message: 'Webhook received' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    // If something goes wrong, return a server error status
    return new NextResponse('Error processing webhook', { status: 500 });
  }
}

export async function GET() {
    // This endpoint is not meant to be accessed via GET, but we'll provide a message.
    return NextResponse.json({ message: 'This endpoint is for POST requests from payment providers.' });
}
