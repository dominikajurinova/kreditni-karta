import React, { useRef, useEffect } from 'react';

const CreditCard = () => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Funkce pro přesunutí focusu na další pole
  const focusNextInput = index => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Funkce pro přesunutí focusu na předchozí pole
  const focusPrevInput = index => {
    if (index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  // Event listener pro kontrolu délky vstupu
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 4) {
      focusNextInput(index);
    }
  };

  // Event listener pro kontrolu směru pohybu vstupu
  const handleInputKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '') {
      focusPrevInput(index);
    }
  };

  return (
    <div>
      {inputRefs.map((inputRef, index) => (
        <input
          key={index}
          ref={inputRef}
          type="text"
          maxLength="4"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleInputKeyDown(e, index)}
          style={{ marginRight: '8px' }}
        />
      ))}
    </div>
  );
};

export default CreditCard;