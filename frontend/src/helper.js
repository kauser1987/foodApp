import axios from "axios";

export const getCart = async (user) => {
  const res = await axios.get(`https://foodapp-o963.onrender.com/api/get-cart/${user._id}`);
  const data = await res.data;
  return data;
};
