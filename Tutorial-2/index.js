


//defining constant

const { createStore } = require("redux");

const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'
const ADD_USER = "ADD_USER"
const RESET = "RESET"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
//state
const initialCounterState = {
    count: 0,
    users: ['tishu']
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

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const reset = () => {
    return {
        type: RESET,
    }
}

const addUser = (value) => {
    return {
        type: ADD_USER,
        // payload: {name:"Jahanara"}
        payload: value
    }
}

// reducer for counter
const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };

      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
            };
        
      case RESET:
        return {
          ...state,
          count: 0,
            };
        
      case INCREMENT_BY_VALUE:
        return {
          ...state,
          count: state.count + action.payload,
        };

      default:
        state;
    }
}

const userReducer = (state=initialCounterState,action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count+1
            }
        default:
            state;
    }
}


// create store

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

//dispatch acton
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(reset());
store.dispatch(incrementCounterByValue(5));

const store2 = createStore(userReducer);
store2.subscribe(() => {
  console.log(store2.getState());
});

store2.dispatch(addUser('Jahanara'))