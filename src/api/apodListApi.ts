import axios from "axios";

export const getApodList = async () => {
  try {
    const response = await axios.get("../data/apodList.ts");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
