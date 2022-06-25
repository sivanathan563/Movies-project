import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: actionTypes.auth, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log("lllllllll");
    console.log(data);
    dispatch({ type: actionTypes.auth, data });
    navigate("/");
  } catch (error) {
    console.log("kkkkkkkkkkkkk", error.message);
    dispatch({ type: "error", error });
  }
};
