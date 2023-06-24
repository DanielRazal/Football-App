import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;
const LEAGUES_PATH = process.env.REACT_APP_LEAGUES_PATH;
const STANDINGS_PATH = process.env.REACT_APP_STANDINGS_PATH;

export const getStandings = async (league, year) => {
    try {
        const url = `${API_BASE_URL}${LEAGUES_PATH}${league}${STANDINGS_PATH}${year}`;
        const response = await axios.get(url);
        return response.data.data.standings;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getLeagues = async () => {
    try {
        const url = `${API_BASE_URL}${LEAGUES_PATH}`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
