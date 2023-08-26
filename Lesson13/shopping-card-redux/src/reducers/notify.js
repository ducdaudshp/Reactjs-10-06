import * as mess from '../constants/messages'
import { CHANGE_NOTIFY } from '../constants/actionType'

//initial state
const innitialState = mess.MSG_READY

//reducer
const notify = (state = innitialState, action) => {
    switch (action.type) {
        case CHANGE_NOTIFY:
            state = action.content
            return state;
        default:
            return state;
    }
}

//export
export default notify;