import { set, connect } from 'mongoose';

export const connectDb = async () =>{
    try {
        set('strictQuery',false)
        const connection= await connect(process.env.DB_CONNECTION,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })

        const url =  `${connection.connection.host}:${connection.connection.port}`;
        console.log('Mongo DB connect in: ' + url);
    } catch (error) {
        console.log(error.message);
    }
}

