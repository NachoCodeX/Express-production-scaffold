import User from '../models/user';



module.exports={
    deleteUsers(){
        return User.remove({}).then(res=>res);
    },
    getUsers(){
        return User.findAsync({}).then(res=>res);
    },
    createUser(user){
        let _user=new User(user);
        console.log(_user);
        return _user.save().then(res=>res);
    }




}