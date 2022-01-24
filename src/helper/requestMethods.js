import axios from "axios";
import { getUserFailure, getUserStart, registerSuccess} from "../redux/userRedux"

const BASE_URL = "https://mern-e-commerce-api.herokuapp.com/api/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
//   export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${TOKEN}` },
//   });

//   USER

//Create / Register
export const createUser = async (dispatch, newuser) => {
    dispatch(getUserStart());
    try {
      await publicRequest.post("/auth/register", newuser);
      dispatch(registerSuccess());
    } catch (error) {
      dispatch(getUserFailure());
    }
  };