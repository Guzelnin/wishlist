import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QrCode() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="contsiner mx-auto w-2/4">
      <h4 className="py-4">Содержимое QR-кода</h4>
      <input 
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Введите ссылку для Qr кода"
        className="border border-gray-300 w-full h-8 p-4 font-light text-sm focus:outline-none focus:border-gray-600" 
      />

      <QRCode
        className="mx-auto mt-20"
        value={inputValue}
      />
    </div>
  );
}

export default QrCode;
