import axios from "axios";

const apiUrl = "http://localhost:3000/v1/feeds";

export default {
  getFeeds: async () => {
    return axios.get(apiUrl);
  },

  getFeedsOfUser: async (_id) => {
    return axios.get(`${apiUrl}/user/${_id}`);
  },
};
