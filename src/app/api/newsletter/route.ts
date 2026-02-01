import { NextResponse } from 'next/server'

interface NewsletterRequestBody {
    email: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as NewsletterRequestBody

        // Validate email
        if (!body.email || !/^\S+@\S+\.\S+$/.test(body.email)) {
            return NextResponse.json(
                { message: 'Please enter a valid email address' },
                { status: 400 }
            )
        }

        // Here you would typically send the email to a service like Mailchimp, Resend, etc.
        // For now, we simulate a delay and success
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Successfully subscribed to the newsletter!' },
            { status: 200 }
        )
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to subscribe'
        return NextResponse.json(
            { message: errorMessage },
            { status: 500 }
        )
    }
}
