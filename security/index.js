import jwt from 'jwt-simple'
import moment from 'moment'
import {SECRET_TOKEN} from '../config'

function checkToken(token){
    const payload=jwt.decode(token,SECRET_TOKEN)
    if(payload.exp <= moment().unix()){
         throw {status:401,message:'Token has expired'}
    }
    return payload;
}


module.exports={
    isAuth(token){
        try {
            const payload = checkToken(token);
            return {isValid:true}
        } catch (error) {
            console.error(error);
            return {isValid:false}
        }
    },
    decodeToken(token){
        const decode=new Promise((resolve,reject)=>{
            try {
                const payload=checkToken(token);
                // const payload=jwt.decode(token,SECRET_TOKEN)
                // if(payload.exp <= moment().unix()) return reject({status:401,message:'Token has expired'})
                return resolve(payload.sub);

            } catch (error) {
                console.error(error);
                
                return reject({status:500,message:'Token is invalid'})
            }
        })

        return decode

    },
    generateToken(sub){
        const payload={
            sub,
            iat:moment().unix(),
            exp:moment().add(1,'days').unix()
        }
        return jwt.encode(payload,SECRET_TOKEN)
    }





}