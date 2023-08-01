import {
  GET_SUMMARYDATA_REQUEST,
  GET_SUMMARYDATA_REQUEST_ERROR,
  GET_SUMMARYDATA_REQUEST_SUCCESS,
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_REQUEST_ERROR,
  GET_ALL_CUSTOMERS_REQUEST_SUCCESS,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_REQUEST_ERROR,
  GET_CUSTOMER_REQUEST_SUCCESS,
} from "../constant/co-pilot";

const initialState = {
  summaryData: [],
  customers: [],
  customer: {},
  loadingSummaryData: false,
  loadingCustomers: false,
  loadingCustomer: false
};

export default function CoPilot(state = initialState, action) {
  switch (action.type) {
    case GET_SUMMARYDATA_REQUEST:
      return {
        ...state,
        loadingSummaryData: true,
      };
    case GET_SUMMARYDATA_REQUEST_SUCCESS:
      return {
        ...state,
        summaryData: action.payload,
        loadingSummaryData: false,
      };
    case GET_SUMMARYDATA_REQUEST_ERROR:
      return {
        ...state,
        loadingSummaryData: false,
      };
    case GET_ALL_CUSTOMERS_REQUEST:
      return {
        ...state,
        loadingCustomers: true,
      };
    case GET_ALL_CUSTOMERS_REQUEST_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        loadingCustomers: false,
      };
    case GET_ALL_CUSTOMERS_REQUEST_ERROR:
      return {
        ...state,
        loadingCustomers: false,
      };
    case GET_CUSTOMER_REQUEST:
      return {
        ...state,
        loadingCustomer: true,
      };
    case GET_CUSTOMER_REQUEST_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        loadingCustomer: false,
      };
    case GET_CUSTOMER_REQUEST_ERROR:
      return {
        ...state,
        loadingCustomer: false,
      };
    default:
      return state;
  }
}
