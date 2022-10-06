import React, { useEffect, useState } from 'react';
import dateCountdown from 'date-countdown';
import CountDownTimer from '@inlightmedia/react-countdown-timer';

export default function Timer({ date }) {
  const time = new Date(date);
  console.log(time);
  //   console.log(date);
  // const year = +date?.slice(0, 4);
  // const month = +date?.slice(5, 7);
  // const day = +date?.slice(8, 10);
  // const daysLeft = dateCountdown(year, month, day);

  return (
    <CountDownTimer dateTime={date} />
    // <div>
    //   Дедлайн подарка через:
    //   {' '}
    //   {daysLeft}
    //   {' '}
    //   дней
    // </div>
  );
}
