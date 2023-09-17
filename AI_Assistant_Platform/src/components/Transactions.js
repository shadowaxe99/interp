
import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../redux/actions/transactionActions';

class Transactions extends React.Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <h2>Transactions</h2>
        {transactions.map((transaction, index) => (
          <div key={index}>
            <p>Transaction ID: {transaction.id}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transaction.transactions
});

const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
