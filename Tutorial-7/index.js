const { createStore, combineReducers } = require("redux");
// product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//cart constant

const GET_CARD_ITEMS = "GET_CARD_ITEMS";
const ADD_CARD_ITEMS = "ADD_CARD_ITEMS";

// product states
const initialProductsState = {
  products: ["suger", "salt"],
  numberofProducts: 2,
};

// cart states
const initialCartState = {
  cart: ['suger'],
  numberofProducts:1
}

//products action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

// cart action
const getCart = () => {
  return {
    type: GET_CARD_ITEMS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CARD_ITEMS,
    payload: product,
  };
};

// product reducer
const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};
// cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARD_ITEMS:
      return {
        ...state,
      };
    case ADD_CARD_ITEMS:
      return {
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
     return state;
  }
};

// combining reducers
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
store.dispatch(getCart())
store.dispatch(addCart('khata'))