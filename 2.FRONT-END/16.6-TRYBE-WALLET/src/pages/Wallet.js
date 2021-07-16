import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      typeForm: 'add',
      expenseID: 0,
    };
    this.changeForm = this.changeForm.bind(this);
  }

  totalExpense() {
    const { expenses } = this.props;
    if (!expenses) return 0;
    return expenses.reduce((acc, expense) => {
      const expenseValue = expense
        .exchangeRates[expense.currency]
        .ask * parseFloat(expense.value);

      acc += expenseValue;
      return acc;
    }, 0);
  }

  changeForm(typeForm, expenseID) {
    this.setState({ typeForm, expenseID });
  }

  render() {
    const { emailLogin } = this.props;
    const { typeForm, expenseID } = this.state;
    return (
      <>
        <header>
          <p data-testid="email-field">{ `Email: ${emailLogin}` }</p>
          <p data-testid="total-field">
            { `Despesa Total: R$${this.totalExpense().toFixed(2)} `}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form
          typeForm={ typeForm }
          expenseID={ expenseID }
          changeState={ this.changeForm }
        />
        <TableExpense changeForm={ this.changeForm } />
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  emailLogin: user.email,
  expenses: wallet.expenses,
});

Wallet.propTypes = {
  emailLogin: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Wallet);
