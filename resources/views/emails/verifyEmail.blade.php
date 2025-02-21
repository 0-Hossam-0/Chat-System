<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="background-color: rgb(56, 57, 148); padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #ffffff; font-size: 34px; margin-bottom: 20px; text-align: center;font-weight:bolder;">Indigo</h1>
        <p style="color: #ffffff; font-size: 16px; margin-bottom: 20px;font-weight: bold;">Your passcode</p>
        <p style="color: #ffffff; font-size: 16px; margin-bottom: 20px;">Please use the verification code below to sign in:</p>
        <div style="background-color: rgb(36, 37, 97); padding: 15px; border-radius: 4px; text-align: center; margin-bottom: 20px;">
            <span style="color: #f5f5f5; font-size: 28px; font-weight: bold;">{{$verificationCode}}</span>
        </div>
        <p style="color: #fafafa; font-size: 14px; margin-bottom: 20px;">The code will expire in 10 minutes and can be used only once.</p>
        <p style="color: #ffffff; font-size: 12px; margin-bottom: 20px;">If you did not request this email, please alert us.</p>
        <p style="color: #ffffff; font-size: 12px; text-align: center;">Made By H0SS</p>
    </div>
</body>
</html>