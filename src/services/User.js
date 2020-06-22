import axios from "axios";

const apiURL = "http://localhost:3000/v1/users";

export default {
  getUser: async (_id) => {
    return axios.get(`${apiURL}/${_id}`);
  },
  updateUser: async (updatedUser) => axios.put(`${apiURL}`, updatedUser),
};
