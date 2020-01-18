import axios from 'axios';
import cheerio from 'cheerio';

export const fetchHtmlFromUrl = async url => {
  return await axios
    .get(enforceHttpsUrl(url))
    .then(response => cheerio.load(response.data))
    .catch(error => {
      error.status = (error.response && error.response.status) || 500;
      throw error;
    });
