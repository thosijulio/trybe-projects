import {
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  REQUEST_CURRENCY_API_SUCCESS,
  SEND_EXPENSE_SUCCESS,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  form: {
    typeForm: 'add',
  },
};

function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case REQUEST_CURRENCY_API_SUCCESS:
    return {
      ...state,
      currencies: (payload.currencys).filter((currency) => currency !== 'USDT'),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.expenseID) {
          return {
            ...expense,
            value: payload.value,
            description: payload.description,
            currency: payload.currency,
            method: payload.method,
            tag: payload.tag,
          };
        } return expense;
      }),
      form: { typeForm: 'add' },
    };
  case SEND_EXPENSE_SUCCESS:
    return {
      ...state,
      expenses: state.expenses.concat({
        id: state.expenses.length,
        ...payload.form,
        exchangeRates: payload.currency,
      }),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== payload.expense.id),
    };
  default:
    return state;
  }
}

export default walletReducer;
