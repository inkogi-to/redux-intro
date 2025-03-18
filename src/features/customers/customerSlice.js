import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    fullName: '',
    nationalID: '',
    createAt: '',

}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return {
                    payload: {
                        fullName,
                        nationalID,
                        createAt: new Date().toISOString()
                    }
                }
            },
            reducer(state, action) {
                state.fullName = action.payload.fullName
                state.nationalID = action.payload.nationalID
                state.createAt = action.payload.createAt
            }
        },
        updateCustomer(state, action) {
            state.fullName = action.payload
        }
    }
})

export const {createCustomer, updateCustomer} = customerSlice.actions

export default customerSlice.reducer

