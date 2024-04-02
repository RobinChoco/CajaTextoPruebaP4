import React, { useState } from 'react';

const GuardaTexto = () => {
  const [inputText, setInputText] = useState('');
  const [textStack, setTextStack] = useState([]);

  const CambiosIngresados = (e) => {
    setInputText(e.target.value);
  };

  const Guardar = () => {
    if (inputText.trim()) {
      const timestamp = new Date().toLocaleString();
      setTextStack([{ text: inputText, timestamp}, ...textStack]);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={CambiosIngresados}
        placeholder="Ingresa tu texto aquí"
      />
      <button onClick={Guardar}>Guardar</button>

      <ul>
        {textStack.map((item, index) => (
          <li key={index}>
            {item.text} -- {item.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuardaTexto;
