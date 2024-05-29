import axios from "axios";

export const getApodList = async ({ rowsPerPage }: { rowsPerPage: number }) => {
  try {
    const res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=82NR8O1qhfFCbLOPfYPKluKpXSf8Il3Fzv59MWlB&count=${rowsPerPage}&thumbs=true`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
