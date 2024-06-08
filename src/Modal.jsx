import React, { useState } from 'react'

const Modal = ({ onClose, onSave }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSave = () => {
    if (!description) {
        setErrorMessage('Description cannot be empty')
        return
      }
  
      const amountValue = parseFloat(amount)
      if (isNaN(amountValue) || amountValue < 1) {
        setErrorMessage('Amount must be a number greater than or equal to 1')
        return;
      }
  
      onSave({ description, amount: amountValue })
      setErrorMessage('')
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Transaction</h2>
        <div className="modal-content">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal