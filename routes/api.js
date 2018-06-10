const Router=require('express').Router();
import {testController} from '../controllers/api';


Router.get('/test',testController);


export default Router;
