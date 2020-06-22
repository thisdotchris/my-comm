import axios from "axios";

const apiURL = "http://localhost:3000/v1/communities";

export default {
  getAvailableCommunitiesByUserId: async (_id) =>
    axios.get(`${apiURL}/available/${_id}`),
  getCommunitiesByUser: async (_id) => axios.get(`${apiURL}/user/${_id}`),
  addCommunity: async (data) => axios.post(apiURL, data),
  updateCommunity: async (data) => axios.put(apiURL, data),
  deleteCommunity: async (_id) => axios.delete(`${apiURL}/${_id}`),
};
