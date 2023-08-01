import { importIncidentData } from '../helpers/dataImportHelper';
import { getWeatherData } from './weatherService';
import dayjs from '../helpers/dayjs'

export const getIncidentData = () => {
    const incident1 = importIncidentData('F01705150050.json');
    const incident2 = importIncidentData('F01705150090.json');
    return [incident1, incident2];
};

export const enrichIncidentData = async (incidents) => {

    const enrichedIncidents = await Promise.all(incidents.map(async (incident) => {
        const { latitude, longitude } = incident.address;
        const { event_opened } = incident.description;
    
    
        const dateObj = dayjs(event_opened);
    
        const date = dateObj.utc().format('YYYY-MM-DD');
        const time = parseInt(dateObj.utc().format('HH'));

        const weatherData = await getWeatherData(latitude, longitude, date, time);
    
        incident.weather = weatherData;
        return incident;
    }))

    return enrichedIncidents;
};
