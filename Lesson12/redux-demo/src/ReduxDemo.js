// const reducer = "Devmaster Academy";
// console.log(reducer);
// export default reducer;

//1.createStore
import { createStore } from 'redux';
//2. tạo reducer từ state, action
//input: old state, action
//output: new state
const initialState = {
    userName: "Chung Trinh",
    courseName: "Devmaster"
}

const reducer = (state = initialState, action) => {
    //dựa vào action, action.type để cập nhật state (thông qua dispatch - mục 4)
    switch (action.type) {
        case "CHANGE_USERNAME":
            state.userName = action.payload
            return state; // new state

        case "CHANGE_COURSENAME":
            state.courseName = action.payload
            return state;
        default:
            break;
    }
    return state;
}

//3. tạo store từ createStore
const store = createStore(reducer)

//lấy dữ liệu từ store
console.log(store);

//lấy state từ getState của đối tượng store
console.log("init", store.getState());

//4. phát sinh sự kiện Action => làm thay đổi dữ liệu trong store
//thay đổi dữ liệu với userName
const actChangeUserName = () => {
    return {
        type: "CHANGE_USERNAME",
        payload: "Devmaster Academy"
    }
}

//thay đổi dữ liệu vs courseName
const actChangeCourseName = (data) => {
    return {
        type: "CHANGE_COURSENAME",
        payload: data
    }
}

//dispatch act vào store -> để làm điều kiện thay đổi state
store.dispatch(actChangeUserName());
console.log("Change userName", store.getState());

store.dispatch(actChangeCourseName("Devmaster Reactjt - Redux"));
console.log("Change courseName", store.getState());

export default reducer;