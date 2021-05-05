import yelp from 'yelp-fusion';
import axios from 'axios';

const client = yelp.client(
  'yaEXMLdjlqTt00DYiCNAjJ-VuhejCvKY-lioFUeKXBo-7SuCwHjMX0ZsJbCuYTlpomyttqm-OpyQWwc3aE7WqnoL0ZUE8162n8UHw5svuHXb-bwZvSPVN4Pv4tWSYHYx'
);
const apiKey =
  'yaEXMLdjlqTt00DYiCNAjJ-VuhejCvKY-lioFUeKXBo-7SuCwHjMX0ZsJbCuYTlpomyttqm-OpyQWwc3aE7WqnoL0ZUE8162n8UHw5svuHXb-bwZvSPVN4Pv4tWSYHYx';

// for apis to run using local host open this link in your browser and 
// get a temporary access https://cors-anywhere.herokuapp.com/corsdemo
const get = (url) => {
  return axios
    .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${url}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        },
        params: {
          categories: 'icecream'
        }
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
        return Promise.reject(err);
    });
};

export { client, get };
