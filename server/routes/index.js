import express from 'express';
import Providers from '../controllers/Providers';

const router = express.Router();

router.post('/isp/',Providers.addProvider);
router.get('isp/',);
router.put('isp/:id',);
router.delete('isp/:1d',);

export default router;