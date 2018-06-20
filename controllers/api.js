import {createUser,deleteUsers,getUsers} from '../db/helpers_user'

module.exports={
    async signUp(req,res){
        const response= await createUser({firstName:'Jesus',lastName:'Castillo'})
        console.log(response);
        
        return res.status(200).send(response)
    
    },
    async getUsers(req,res){
        const users=await getUsers().then(res=>res)
        console.log(users)
        return res.status(200).send(users)
    },
    async deleteUsers(req,res){
        const response=await deleteUsers().then(res=>res)
        console.log(response)
        return res.status(200).send(response)
        
    },


}    


