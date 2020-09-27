import React, { useState, useEffect, useContext } from 'react';
// import { ChatWidgetContext } from '../../contexts/chatWidgetContext';
import { AppContext } from '../../store';
import './style.css';



const Header = () => {
  // const chatContext = useContext(ChatWidgetContext);
  const [state, dispatch] = useContext(AppContext);

  const [dashboardBack, setDashboardBack] = useState(true);

  useEffect(() => {
    // this.state = INITIAL;
    console.log('Reducer AppContext');
    console.log(state);
    console.log(dashboardBack);
  }, []);

  useEffect(() => {
    // this.state = INITIAL;
    console.log('StoreContext');
    console.log(state);
  }, [state]);

  const onDashboardBack = () => {
    // console.log('call of duty', ownState);
    //setDashboardBack(!dashboardBack);
    dispatch({
      type: 'ON_OFF',
      payload: 'showWidget',
    });
    // setDashboardBack2({ type: 'one' });
  };

  return (
    <div className="wpcwv-chatHeader">
      {state.showWidget && (
        <button onClick={onDashboardBack}>Back</button>
      )}
      <h2 onClick={onDashboardBack}>Chat Header</h2>
    </div>
  );
};

export default Header;
