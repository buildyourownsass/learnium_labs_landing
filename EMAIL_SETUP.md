# Email Setup Instructions for Contact Form

## Overview
The contact form now sends emails to `learn@learniumlabs.com` using Nodemailer with Gmail SMTP.

## Setup Instructions

### 1. Environment Variables
Update the `.env.local` file with your email credentials:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-app-password
```

### 2. Gmail Setup (Recommended)

#### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

#### Step 2: Generate App Password
1. In Google Account Security settings
2. Go to "2-Step Verification"
3. Scroll down to "App passwords"
4. Select "Mail" and "Other (custom name)"
5. Enter "Learnium Labs Contact Form"
6. Copy the generated 16-character password
7. Use this password in `EMAIL_PASSWORD` (not your regular Gmail password)

### 3. Alternative Email Providers

#### Outlook/Hotmail
```javascript
service: 'outlook'
```

#### Yahoo
```javascript
service: 'yahoo'
```

#### Custom SMTP
```javascript
host: 'your-smtp-server.com',
port: 587, // or 465 for SSL
secure: false, // true for 465, false for other ports
```

## Features

### Email Template
- Professional HTML email template
- Branded with Learnium Labs colors
- Includes all form fields (name, email, phone, organization, program, message)
- Responsive design
- Timestamp included

### Form Validation
- Required fields: name, email, message
- Error handling for API failures
- Success/error feedback to users
- Form reset on successful submission

### Security
- Environment variables for credentials
- Input validation and sanitization
- Error logging for debugging

## API Endpoint

**URL:** `/api/contact`
**Method:** `POST`
**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "organization": "Company Name",
  "program": "Program Name",
  "message": "Message content"
}
```

**Response:**
```json
// Success
{
  "message": "Email sent successfully"
}

// Error
{
  "error": "Error message"
}
```

## Testing

1. Fill out the contact form on `/contact`
2. Submit the form
3. Check `learn@learniumlabs.com` for the email
4. Verify all form data is included in the email

## Troubleshooting

### Common Issues

1. **Gmail App Password not working**
   - Make sure 2FA is enabled
   - Use the app password, not your regular password
   - Check that the app password hasn't expired

2. **SMTP Connection errors**
   - Verify internet connection
   - Check if your hosting provider blocks SMTP
   - Try using port 465 with secure: true

3. **Environment variables not loading**
   - Restart the development server after adding .env.local
   - Check file is named `.env.local` exactly
   - Verify variables are properly formatted

### Logs
Check the server console for detailed error messages when submissions fail.

## Production Deployment

1. Set environment variables in your hosting platform
2. Ensure SMTP ports are not blocked
3. Consider using a dedicated email service like SendGrid or Amazon SES for higher reliability
4. Monitor email delivery and set up proper error handling

## Security Notes

- Never commit `.env.local` to version control
- Use app passwords, not regular passwords
- Consider rate limiting for production
- Validate and sanitize all input data
- Monitor for spam submissions