import React, { useEffect, useState } from 'react';
import dateCountdown from 'date-countdown';

export default function Timer({ date }) {
  const year = +date?.slice(0, 4);
  const month = +date?.slice(5, 7);
  const day = +date?.slice(8, 10);
  const daysLeft = dateCountdown(year, month, day);

  return (
    <div style={{ display: 'flex', placeItems: 'center', marginLeft: '20px' }}>
      Дедлайн подарка через:
      {' '}
      {daysLeft}
      {' '}
      дней
    </div>
  );
}
