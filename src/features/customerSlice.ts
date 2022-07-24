import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customerState {
    value: customer[]
}

interface customer{
    id: string,
    name: string,
    food: string[]
}

interface customerFoodState {
    id: string,
    food: string
}

const initialState: customerState = {
    value: []
}

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<customer>) => {
            state.value.push(action.payload)
        },
        addCustomerFood: (state, action:PayloadAction<customerFoodState>) => {
                state.value.forEach(customer => {
                    if (customer.id === action.payload.id){
                        customer.food.push(action.payload.food)
                    }
                })
        }
    }
})

export const {addCustomer, addCustomerFood} = customerSlice.actions

export default customerSlice.reducer