const Router=require('express').Router();
import * as apiController from '../controllers/api';


Router.post('/users',apiController.signUp);
Router.get('/users',apiController.getUsers);
Router.delete('/users',apiController.deleteUsers);

export default Router;
