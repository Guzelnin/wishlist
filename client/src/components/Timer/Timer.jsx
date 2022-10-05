import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Timer({ date }) {
  const year = +date.slice(0, 4);
  const month = +date.slice(5, 7);
  const day = +date.slice(8, 10);
  const [yearLeft, setYearLeft] = useState(year);
  const [monthLeft, setMonthLeft] = useState(month);
  const [dayLeft, setDayLeft] = useState(day);

  const deadline = new Date(year, month, day);
  const today = new Date();
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth();
  let todayDay = today.getFullYear();
  const diff = deadline 
  //   console.log(deadline);
  - console.log(diff);
  const [leftDiff, setLeftDiff] = useState(diff);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftDiff((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  //   const [timeLeft, setTimeLeft] = useState(10);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setTimeLeft((t) => t - 1);
  //     }, 1000);
  //     return () => clearInterval(intervalId);
  //   }, []);
  //   const [counter, setCounter] = useState(10);
  //   useEffect(() => {
  //     if (counter === 0) {
  //       return;
  //     }
  //     setTimeout(() => {
  //       setCounter(counter - 1);
  //     }, 1000);
  //   }, [counter]);

  return (
    <div>
      <h4>{leftDiff}</h4>
      hi
    </div>
  );
}
