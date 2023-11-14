import mongoose from 'mongoose';

export async function connectDb() {
  try {
    const dbURI = process.env.DB_CONNECTION;
    const connection = await mongoose.connect(dbURI, {
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log('Mongo DB connect in: ' + url);
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
  }
}
