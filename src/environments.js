import dotenv from 'dotenv';
dotenv.config()

const vars = {
    PORT: process.env.PORT || 6000,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_CLUSTER,
    SECRET: process.env.SECRET,
}