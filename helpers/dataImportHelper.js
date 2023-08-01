import fs from 'fs';
import path from 'path';

const dataFolderPath = path.join(__dirname, '..', 'data');

export const importIncidentData = (filename) => {
  const filepath = path.join(dataFolderPath, filename);
  const data = fs.readFileSync(filepath, 'utf8');
  return JSON.parse(data);
};
