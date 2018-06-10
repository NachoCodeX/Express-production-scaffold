import app from './app';
import mongoose from 'mongoose';
import {waterfall} from 'async';
mongoose.Promise=global.Promise;


import {PORT,URI,MONGODB_CONFIG} from './config';
const server=app;

const tasks=[
    done=>{
        // mongoose.connect(URI,MONGODB_CONFIG)
        // .then(()=>done())
        // .catch(e=>done(e))
        done();
    },
    done=>{
        server.listen(PORT,e=>{
            if(e) return done(e);
            console.log(`Server on port ${PORT}`);
            return done();
        });
    }
],
    resultCallback=(e,response)=>{
        console.log(e,response);
        
    };
waterfall(tasks,resultCallback);




