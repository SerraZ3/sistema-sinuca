export default {
  port: parseInt(process.env.SERVER_PORT) || 3333,
  ip: process.env.SERVER_IP || "127.0.0.1",
};
