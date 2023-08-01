import express from 'express';
import { getIncidents, getEnrichedIncidents } from '../controllers/incidentController';

const router = express.Router();

router.get('/incidents', getIncidents);
router.get('/enriched-incidents', getEnrichedIncidents);

export default router;
