import { EDIT_EXPENSE } from '.';

const editExpenseAction = (form, expenseID) => ({
  type: EDIT_EXPENSE,
  payload: {
    ...form,
    expenseID,
  },
});

export default editExpenseAction;
