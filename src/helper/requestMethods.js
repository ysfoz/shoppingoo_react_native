import axios from "axios";
import { getUserFailure, getUserStart, registerSuccess,loginSuccess,logoutSuccess} from "../redux/userRedux"
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  export const login = async(dispatch,user) => {
    dispatch(getUserStart())
    try {
      const res = await publicRequest.post("/auth/login",user)
      await AsyncStorage.setItem("@current_User",res.data.jwtToken)
     dispatch(loginSuccess(res?.data)) 
     
    } catch (error) {
      dispatch(getUserFailure())
    }
  }

 //Logout
export const logout = async (dispatch) => {
  dispatch(getUserStart());
  try {
    dispatch(logoutSuccess());
    await AsyncStorage.removeItem("@current_User")
  } catch (error) {
    dispatch(getUserFailure());
  }
};