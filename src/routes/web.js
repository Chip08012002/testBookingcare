import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();
let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.get('/get-crud', homeController.getDisplayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.post('/put-crud', homeController.putCRUD);
    return app.use('/', router)
}

module.exports = initWebRoute;