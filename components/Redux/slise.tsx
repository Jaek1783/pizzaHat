import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CartType {
    cartItems: StateType[];
    totalPriceSum: number;
    totalValSum: number;
}

export interface StateType {
    val : number,
    size: string,
    title:  string,
    index:number,
    price:number
}
const initialState:CartType = {
    cartItems : [],
    totalPriceSum: 0,
    totalValSum: 0,
}
export const CartSlide = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart: (state, action: PayloadAction<StateType>) => {
            // Use the spread operator to create a new array
            state.cartItems = [...state.cartItems, action.payload];
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price* item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
        },
        plusVal: (state, action: PayloadAction<StateType>) => {
            const { index, val, size, title } = action.payload;
            console.log(index, val, size, title)
            // // cartItems 배열 내 해당 아이템의 속성을 업데이트
            state.cartItems[index].val = val+1;
            state.cartItems[index].size = size;
            state.cartItems[index].title = title;
            // // 업데이트 후 totalValSum 재계산
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price * item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
        },
        minusVal: (state, action: PayloadAction<StateType>) => {
            const { index, val, size, title } = action.payload;
            // // cartItems 배열 내 해당 아이템의 속성을 업데이트
            state.cartItems[index].val = val-1;
            state.cartItems[index].size = size;
            state.cartItems[index].title = title;
            // // 업데이트 후 totalValSum 재계산
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price * item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
        }
    }
});

export const { addCart,plusVal,minusVal } = CartSlide.actions;
export default CartSlide.reducer;