import axios from "axios";
import {
  GET_SUMMARYDATA_REQUEST,
  GET_SUMMARYDATA_REQUEST_SUCCESS,
  GET_SUMMARYDATA_REQUEST_ERROR,
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_REQUEST_ERROR,
  GET_ALL_CUSTOMERS_REQUEST_SUCCESS,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_REQUEST_ERROR,
  GET_CUSTOMER_REQUEST_SUCCESS
} from "../constant/co-pilot";
import { setNotification } from "./notification";

export const getSummaryData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SUMMARYDATA_REQUEST });
    const { data } = await axios.get(
      "https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev/copilot/summary"
    );
    dispatch({ type: GET_SUMMARYDATA_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SUMMARYDATA_REQUEST_ERROR, payload: error });
    dispatch(setNotification("error", error.message))
  }
};

export const getAllCutomerData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CUSTOMERS_REQUEST });
    const { data } = await axios.get(
      "https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev/copilot/customers"
    );
    dispatch({ type: GET_ALL_CUSTOMERS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CUSTOMERS_REQUEST_ERROR, payload: error });
    dispatch(setNotification("error", error.message))

  }
};

export const getCustomerData = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CUSTOMER_REQUEST });
    const { data } = await axios.get(
      `https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev/copilot/customer/?id=${id}`
    );
    dispatch({ type: GET_CUSTOMER_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CUSTOMER_REQUEST_ERROR, payload: error });
    dispatch(setNotification("error", error.message))

  }
};

