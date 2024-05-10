import axios from "axios";

export const getApodList = async () => {
  try {
    const res = await axios.get("/sample.json");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
