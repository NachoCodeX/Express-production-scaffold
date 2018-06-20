
import app from './app';
import {waterfall} from 'async';
import {connect} from './db/';
import {PORT} from './config';
const server=app;

const tasks=[
    //MONGO DB CONNECT
    done=>connect(done),
    // EXPRESS.JS SERVER LISTEN ON PORT 5000
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




