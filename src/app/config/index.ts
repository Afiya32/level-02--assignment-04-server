import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  database_url: process.env.DATABASE_URL || '',
  jwt_secret: process.env.JWT_SECRET || 'default_jwt_secret'
};

export default config;