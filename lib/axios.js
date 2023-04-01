import Axios from "axios";

const headers = {
  'X-RapidAPI-Key': "064962a1damsh6d25767fe79ce3dp10d55ejsn19998a1a8094",
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
};

export const axios = Axios.create({
  baseURL: "https://bayut.p.rapidapi.com",
  headers: headers
});