import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'itemManager',
    initialState: {
        allItems:[
            {
                ID: 0,
                itemName: '香帥芋泥蛋糕',
                itemPrice: 100,
                itemUnit: '條',
                itemEndDate: '2025/03/14',
            },
            {
                ID: 1,
                itemName: '蛋糕測試二',
                itemPrice: 400,
                itemUnit: '條',
                itemEndDate: '2025/03/14',
            },
        ],
    },

    reducers:{
        setAllItems:(state,action)=>{
            state.allItems = action.payload;
        }
    }
})

export const { setAllItems } = itemSlice.actions;
export default itemSlice.reducer;
