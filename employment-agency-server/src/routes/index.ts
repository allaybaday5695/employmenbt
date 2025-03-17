import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
  app.use('/api/jobs', router);
  
  router.get('/', indexController.getAllJobs.bind(indexController));
  router.post('/', indexController.createJob.bind(indexController));
}