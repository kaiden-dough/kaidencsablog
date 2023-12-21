const dotenv = require('dotenv');
dotenv.config(); // Load variables from .env into process.env

const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;
const d = process.env.PENI;

console.log('API Key:', apiKey);
console.log('Database URL:', dbUrl);
