import dotenv from 'dotenv';

dotenv.config();

const { MONGO_USERNAME: USERNAME, MONGO_PASSWORD: PASSWORD } = process.env;

const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@doclogdb.5okxc3m.mongodb.net/doclogdb` as string;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
