import React, { useState } from 'react'
import Modal from './Modal'

const TransactionList = () => {
  const [transactions, setTransactions] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
    closeModal()
  }

  return (
    <div className="transaction-page">
      <h1 className="title">Transactions</h1>
      <button className="add-transaction-button" onClick={openModal}>Add Transaction</button>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className="transaction-item">
            {transaction.description}: ₦{transaction.amount}
          </li>
        ))}
      </ul>
      {isModalOpen && <Modal onClose={closeModal} onSave={addTransaction} />}
    </div>
  )
}

export default TransactionList