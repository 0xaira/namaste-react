/*

^Redux Toolkit^
Restaurant Menu 
Redux Store: 
It is a single source of truth for the entire application. It is a plain object that contains the entire state of the application.  

Redux Store has different Slices. 
Componenets can't access the store directly.
Componenets will dispatch an action.
Action will call a function. (These function are called reducers)
The function will update the slice of the store. 

Selector is used to read the updated slice and update the UI(componenet)
Selector is a Hook. 




*/

/*
& Configure Store - To create the store
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice, // cart is the name of the slice
    },
});

export default store;

& Provider- To provide the store to the entire application
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

& createSlice - To create a slice of the store
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({  // cartSlice is the name of the slice 
    name: 'cart',  // name of the slice
    initialState:{  // initial state of the slice
        items:[],
        totalQuantity:0,
    },
    reducers: {       // reducers are the functions that will update the slice
        addItem:(state,action) => {   // addItem is the name of the reducer 
            state.items.push(action.payload);
        },
        removeItem:(state,action) => {   // removeItem is the name of the reducer 
            state.items.pop(action.payload);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;  // exporting the reducers
export default cartSlice.reducer;  // exporting the slice

&useSelector - To read the updated slice
import { useSelector } from 'react-redux';

const cart = useSelector((state) => state.cart); // cart is the name of the slice

& useDispatch - To dispatch an action
import { useDispatch } from 'react-redux';
import { addItem } from './store/cart-slice';

const dispatch = useDispatch();

handleAddToCart = () => {
    dispatch(addItem({id:1, name:'Pizza', price:12.99}));  // dispatching the action
}

onClick={handleAddToCart}  // calling the function on click
*/