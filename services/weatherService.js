import axios from 'axios';

export const getWeatherData = async (lat, lon, date, time) => {
    // console.log(lat, lon, date, time);

    const options = {
        method: 'GET',
        url: `${process.env.RAPID_API_HOST}/point/hourly`,
        params: {
            lat,
            lon,
            start: date,
            end: date,
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
        }
    };

    try {
        const response = await axios.request(options);
        const { data } = response.data;
        const climate = data[time];
        console.log(climate);
        return climate;
    } catch (error) {
        console.error(error);
        return {};
    }
};
