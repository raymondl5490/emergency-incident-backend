import { importIncidentData } from '../helpers/dataImportHelper';

export const getIncidentData = () => {
    const incident1 = importIncidentData('F01705150050.json');
    const incident2 = importIncidentData('F01705150090.json');
    return [incident1, incident2];
};

export const enrichIncidentData = async (incidents) => {
    return {};
};
