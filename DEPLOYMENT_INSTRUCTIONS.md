# Deployment Instructions

## Environment Variables

This project uses environment variables to store sensitive information like API keys. These variables are not committed to version control and must be set up manually in your deployment environment.

### Local Development

For local development, create a file named `.env.local` in the root of the project and add the following content:

```
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
```

Replace the placeholder values with your actual Firebase project credentials.

### Production Deployment

When deploying your application to a hosting provider like Vercel, Netlify, or others, you will need to set up the environment variables in the project settings.

For each of the variables listed above, add a new environment variable in your hosting provider's dashboard with the corresponding key and value.

For example, on Vercel, you would go to your project's "Settings" tab, then "Environment Variables", and add each variable one by one.

**Important:** Make sure to use the correct values for your production Firebase project.