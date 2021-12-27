import { serverHttp } from "./app";
require("dotenv-safe").config();


serverHttp.listen(process.env.PORT, () => console.log(`🃏 Server running on ${process.env.HOST}:${process.env.PORT} `))