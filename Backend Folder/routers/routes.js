import express from 'express';
import routerController from '../controllers/routercontroller.js';

const routes = express.Router();

routes.get('/', routerController.serverGetMessage); // server side GET Endpoint
routes.get("/api/send/newsletter/mail", routerController.mailGetMessage); // Newsletter GET Endpoint
routes.post("/api/send/newsletter/mail", routerController.sendNewsletterMail); // Newsletter POST Endpoint

export default routes;