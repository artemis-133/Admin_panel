import axios from "axios";
import { useSelector } from "react-redux";

//const token = useSelector((state)=>state.token);

export default axios.create({
  baseURL: "http://localhost:",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer `, // Added JWT token to Authorization header.
  },
});
