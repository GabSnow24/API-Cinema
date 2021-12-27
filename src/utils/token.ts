const jwt = require('jsonwebtoken')
const createError = require('http-errors')
require('dotenv').config()
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET


export default function createNewToken(payload: any) {
    let doc = {
      userID: payload.userID,
    };
    const token = jwt.sign(doc, process.env.SECRET_KEY, { expiresIn: "10h" });
    return token;
  }
  export function verifyToken(token: any) {
    let verifier = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (err: any, decoded_data: any) => {
        if (err) {
          return false;
        }
        return decoded_data;
      }
    );
    return verifier;
  }
