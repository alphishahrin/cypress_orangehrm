
// /**
//  * Generates a strong password with at least one uppercase, one lowercase, one digit, and a minimum length of 8 characters.
//  * @returns {string} - The generated password.
//  */
function generateStrongPassword() {
    const length = 8; // Minimum length of password
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitChars = '0123456789';
    const allChars = lowercaseChars + uppercaseChars + digitChars + '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let password = '';
    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    password += digitChars[Math.floor(Math.random() * digitChars.length)];
    password += allChars[Math.floor(Math.random() * allChars.length)];
  
    // Fill the rest of the password length with random characters
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
  
    return password.split('').sort(() => 0.5 - Math.random()).join(''); // Shuffle password to ensure random distribution
  }
  
  export { generateStrongPassword };
  