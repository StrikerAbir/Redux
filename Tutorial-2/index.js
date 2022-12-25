
//defining constant

const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'
const ADD_USER="ADD_USER"
//state
const initialCounterState = {
    count: 0,
};

const initialUsersState = {
    users:[{name: 'abir'}]
}


// action - object (type, payload)
const incrementCounterAction = () => {
    return {
      type: INCREMENT,
    };
}
const decrementCounterAction = () => {
    return {
      type: DECREMENT,
    };
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name:"shakil"}
    }
}
