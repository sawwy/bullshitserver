import axios from "axios";

const BullshitService = {
  getHeroes: async () => {
    const url = "/api/heroes";
    const result = await axios.get(url);
    console.log("data", result.data);
    return result.data;
  },
};

export default BullshitService;
