import store from "../store";
import {mobileNumberReducer} from "../reducer/mobileNumberReducer"

const {dispatch} = store

export function mobileNumberAction(data) {
    //console.log('mobileNumberAction Action Data',data);
    dispatch(mobileNumberReducer(data))
}