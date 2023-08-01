import { SET_NOTIFICATION, REMOVE_NOTIFICATION} from "../constant/notification";
import { v4 as uuidv4 } from "uuid";

export const setNotification = (type, msg) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_NOTIFICATION,
    payload: { msg, type, id },
  });
};

export const removeNotification = (id) => (dispatch) => {
    dispatch({ type: REMOVE_NOTIFICATION, payload: id})
};
