const forgotPasswordTemplate = ({ name, otp }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50,rgb(1, 6, 1)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Reset Password    </h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Dear, ${name}</p>
    <p>You're Requested a password reset. Please use the following OTP code to reset your Password.</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">${otp}</span>
    </div>
    <p>Enter this OTP in the Binkeyit website on reset password page to proceed with resetting your password.</p>
    <p>This code will expire in 1 hour for security reasons.</p>

    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>The Binkeyit Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
    `;
};

export default forgotPasswordTemplate;
