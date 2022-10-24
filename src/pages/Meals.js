import React, { useContext, useEffect } from 'react';
import context from '../context/Context';

function Meals() {
  const { setPageName, setShowHeader } = useContext(context);
  useEffect(() => {
    setShowHeader({
      showSearch: true,
      showName: true,
      showProfile: true,
    });
    setPageName('Meals');
  }, []);
  return (
    <header>
      <h1>Meals</h1>
    </header>
  );
}

export default Meals;
