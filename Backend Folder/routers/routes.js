import express from 'express';
import routerController from '../controllers/routercontroller.js';

const routes = express.Router();

routes.get('/', routerController.serverGetMessage); // server side GET Endpoint
routes.get("/api/send/newsletter/mail", routerController.mailGetMessage); // Newsletter GET Endpoint
routes.post("/api/send/newsletter/mail", routerController.sendNewsletterMail); // Newsletter POST Endpoint
routes.get('/api/send/contact/form/data', routerController.contactFromGet); // Contact From GET Endpoint
routes.post('/api/send/contact/form/data', routerController.contactFromPostData); // Contact From POST Endpoint

export default routes;