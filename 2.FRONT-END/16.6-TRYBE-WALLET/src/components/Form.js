import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requestCurrencyAction from '../actions/requestCurrencysAction';
import sendExpenseAction from '../actions/sendExpenseAction';
import editExpenseAction from '../actions/editExpenseAction';

window.onstorage = () => {
  console.log(localStorage);
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {
    const { requestCurrencys } = this.props;
    requestCurrencys();
  }

  handleForm({ target: { id, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      [id]: value,
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesOptions, sendForm, typeForm, editForm, expenseID, changeState } = this.props;
    const form = this.state;
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const methodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <form className="is-flex-direction-row" style={{backgroundColor:'rgb(190, 190, 196)'}}>
        <label htmlFor="value" className="label">
          Valor:
          <input id="value" className="input" value={ value } data-testid="value-input" onChange={ this.handleForm }/>
        </label>
        <label htmlFor="description" className="label">
          Descrição:
          <input id="description" className="input" data-testid="description-input" value={ description } onChange={ this.handleForm } />
        </label>
        <label htmlFor="currency" className="label" style={{width:'100px'}}>
          Moeda:
          <div className="select">
            <select id="currency" value={ currency } data-testid="currency-input" onChange={ this.handleForm }>
              { currenciesOptions.map((currencyAPI, key) => (
                <option key={ key }>{ currencyAPI }</option>
              ))}
            </select>
          </div>
        </label >
        <label htmlFor="method" data-testid="method-input" className="label" style={{width:'183px'}}>
          Método de pagamento:
          <div className="select">
            <select id="method" value={ method } onChange={ this.handleForm }>
              { methodOptions.map((methods, i) => <option key={ i }>{methods}</option>)}
            </select>
          </div>
        </label>
        <label htmlFor="tag" data-testid="tag-input" className="label" style={{width:'150px'}}>
          Tag:
          <div className="select">
            <select id="tag" value={ tag } onChange={ this.handleForm }>
              {tagOptions.map((option, index) => (
                <option key={ index }>{option}</option>
              ))}
            </select>
          </div>
        </label>
        { typeForm === 'edit'
          ? (
            <button className={`button is-primary is-rounded`} type="button" onClick={ () => { editForm(form, expenseID); changeState('add', 0); } } style={{margin: '15px 0 0'}}>
              Editar despesa
            </button>)
          : (
            <button className={`button is-link is-rounded`} type="button" onClick={ () => sendForm(form) } style={{margin: '15px 0 0'}}>
              Adicionar despesa
            </button>) }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesOptions: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencys: () => dispatch(requestCurrencyAction()),
  sendForm: (form) => dispatch(sendExpenseAction(form)),
  editForm: (form, id) => dispatch(editExpenseAction(form, id)),
});

Form.propTypes = {
  currenciesOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  requestCurrencys: PropTypes.func.isRequired,
  sendForm: PropTypes.func.isRequired,
  editForm: PropTypes.func.isRequired,
  typeForm: PropTypes.string.isRequired,
  expenseID: PropTypes.number.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
