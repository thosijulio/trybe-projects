import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import deleteExpenseAction from '../actions/deleteExpenseAction';

class TableExpense extends React.Component {
  renderExpenses() {
    const { expenses, deleteExpense, changeForm } = this.props;
    return (
        <tbody className="tbody">
          { expenses.map((expense, key) => (
            <tr key={ key } className="tr">
              <td className="td">{ expense.description }</td>
              <td className="td">{ expense.tag }</td>
              <td className="td">{ expense.method }</td>
              <td className="td">{ expense.value }</td>
              <td className="td">{ (expense.exchangeRates[expense.currency].name).split('/', 1) }</td>
              <td className="td">
                {
                  parseFloat(expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)
                }
              </td>
              <td className="td">
                {
                  (expense
                    .exchangeRates[expense.currency]
                    .ask * parseFloat(expense.value))
                    .toFixed(2)
                }
              </td>
              <td className="td">Real</td>
              <td className="td" style={{alignItems:'center'}}>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteExpense(expense) }
                  className={`button is-link is-small is-rounded`}
                >
                  Excluir
                </button>
                <button
                  className={`button is-link is-small is-rounded`}
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => changeForm('edit', key) }
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
    );
  }

  render() {
    return (
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Descrição</th>
            <th className="th">Tag</th>
            <th className="th">Método de pagamento</th>
            <th className="th">Valor</th>
            <th className="th">Moeda</th>
            <th className="th">Câmbio utilizado</th>
            <th className="th">Valor convertido</th>
            <th className="th">Moeda de conversão</th>
            <th className="th">Editar/Excluir</th>
          </tr>
        </thead>
        { this.renderExpenses() }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteExpenseAction(expense)),
});

TableExpense.propTypes = {
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
  deleteExpense: PropTypes.func.isRequired,
  changeForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
