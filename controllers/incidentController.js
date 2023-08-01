import { getIncidentData, enrichIncidentData } from '../services/incidentService';

export const getIncidents = (req, res) => {
  const incidents = getIncidentData();
  res.json(incidents);
};

export const getEnrichedIncidents = async (req, res) => {
  const incidents = getIncidentData();
  const enrichedIncidents = await enrichIncidentData(incidents);
  res.json(enrichedIncidents);
};
