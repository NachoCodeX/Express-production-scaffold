import {promisifyAll} from 'bluebird';
const mongoose = promisifyAll(require('mongoose'))
import {URI,MONGODB_CONFIG} from '../config';


module.exports={
    connect(done){
        return mongoose.connect(URI,MONGODB_CONFIG)
                .then(()=>done())
                .catch(e=>done(e));
    },


}


