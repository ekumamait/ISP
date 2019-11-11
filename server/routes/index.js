import express from 'express';
import Providers from '../controllers/Providers';

const router = express.Router();

router.post('/isp/', Providers.addProvider);
router.get('/isp/', Providers.getAllProviders);
router.get('/isp/:id', Providers.getOneProvider); 
router.put('/isp/:id', Providers.updateProvider);
router.delete('/isp/:id', Providers.deleteProvider);

export default router;