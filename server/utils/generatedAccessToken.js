import jwt from "jsonwebtoken"

const generatedAccessToken = async (userId)=>{
    const token =  jwt.sign({ id: userId }, process.env.SECRET_KEY_ACCESS_TOKEN, { expiresIn: "1h" });
    return token;
}

export default generatedAccessToken;