import React, { useState, useEffect } from 'react';

const Header = () => {
  let newTimer = new Date();
  let currentTimer = `Year: ${newTimer.getFullYear()}, Month: ${
    newTimer.getMonth() + 1
  }, Day: ${newTimer.getDate()}, Hours: ${newTimer.getHours()}, Minutes: ${newTimer.getMinutes()}, Seconds: ${newTimer.getSeconds()}`;

  const [timer, setTimer] = useState(currentTimer);

  const onTimer = () => {
    const newTimer = new Date();
    const currentTimer = `Year: ${newTimer.getFullYear()}, Month: ${
      newTimer.getMonth() + 1
    }, Day: ${newTimer.getDate()}, Hours: ${newTimer.getHours()}, Minutes: ${newTimer.getMinutes()}, Seconds: ${newTimer.getSeconds()}`;
    setTimer(currentTimer);
    setTimeout(() => {
      onTimer();
    }, 1000);
  };

  useEffect(() => {
    onTimer();
  }, []);

  return (
    <header className='header'>
      <h1>Counter task for today at {timer}</h1>
    </header>
  );
};

export default Header;
