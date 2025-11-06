# Zencuit Email Server Setup

This is the backend server for handling contact form submissions from the Zencuit website.

## Setup Instructions

### 1. Install Dependencies

Navigate to the server directory and install the required packages:

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your credentials:

```env
# Your Gmail address (or other email service)
EMAIL_USER=your-email@gmail.com

# Gmail App Password (NOT your regular password)
EMAIL_APP_PASSWORD=your-16-character-app-password

# Company email where form submissions will be sent
COMPANY_EMAIL=sandagomi@zencuit.com

# Server port
PORT=3001
```

### 3. Getting Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to: https://myaccount.google.com/apppasswords
4. Select "Mail" and your device
5. Generate the password (16-character code)
6. Use this password in the `EMAIL_APP_PASSWORD` field

**Important:** Use the App Password, NOT your regular Gmail password!

### 4. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3001`

### 5. Test the Server

You can test if the server is running:

```bash
curl http://localhost:3001/api/health
```

## API Endpoints

### POST /api/contact
Sends an email with the contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about services",
  "message": "I would like to know more about your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### GET /api/health
Health check endpoint to verify server is running.

## Running Both Frontend and Backend

You'll need two terminal windows:

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```

**Terminal 2 - Backend (Email Server):**
```bash
cd server
npm start
```

## Troubleshooting

### "Invalid credentials" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled on your Google account

### CORS errors
- The server is configured to accept requests from any origin
- Make sure the server is running on port 3001

### Port already in use
- Change the PORT in `.env` file
- Update the API URL in Contact.tsx accordingly

## Production Deployment

For production, you should:
1. Use environment variables on your hosting platform
2. Update the API URL in `Contact.tsx` to point to your production server
3. Use a proper email service (SendGrid, AWS SES, etc.) instead of Gmail
4. Add rate limiting to prevent spam
5. Add more robust error handling and logging
