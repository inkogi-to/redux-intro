import {combineReducers, createStore} from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createAt: '',

}

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "accounts/deposit":
            return {...state, balance: state.balance + action.payload};

        case "accounts/withdraw":
            return {...state, balance: state.balance - action.payload};
        case "accounts/requestLoan":
            if (state.loan > 0) return state
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            };
        case "accounts/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan
            }


        default:
            return state

    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createAt: action.payload.createAt
            }
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer)


function deposit(amount) {
    return {
        type: 'accounts/deposit', payload: amount
    }
}

function withdraw(amount) {
    return {
        type: 'accounts/withdraw', payload: amount
    }
}

function requestLoan(amount, purpose) {
    return {
        type: 'accounts/requestLoan', payload: {amount, purpose}
    }
}

function payLoan(amount) {
    return {
        type: 'accounts/payLoan'
    }
}


function createCustomer(fullName, nationalID) {
    return {
        type: 'customer/createCustomer',
        payload: {fullName, nationalID, createAt: new Date().toISOString()}
    }
}

function updateName(fullName) {
    return {
        type: 'accounts/updateName', payload: fullName
    }
}