import React, { useEffect, useContext, useState } from 'react';
// import { ChatWidgetContext } from '../../contexts/chatWidgetContext';
import { AppContext } from '../../store';
import './style.css';
import Operators from '../../components/Operators';
import OptionsMenu from '../../components/OptionsMenu';

const Header = () => {
  // const chatContext = useContext(ChatWidgetContext);
  const [state, dispatch] = useContext(AppContext);
  const [menuState, setMenuState] = useState(false);

  // const [dashboardBack, setDashboardBack] = useState(true);

  useEffect(() => {
    // this.state = INITIAL;
    console.log('Reducer AppContext');
    console.log(state);
    console.log(state.operators);
    // console.log(dashboardBack);
  }, []);

  useEffect(() => {
    // this.state = INITIAL;
    console.log('StoreContext');
    console.log(state);
  }, [state]);

  // Back to Dashboard
  const onDashboardBack = () => {
    dispatch({
      type: 'SET_ROUTE',
      payload: 'chatDashboard',
    });
  };

  // Close Chat Widget
  const onCloseWidget = () => {
    dispatch({
      type: 'ON_OFF',
      payload: 'chatWidget',
    });
  };

  return (
    <div className="wpcwv-chatHeader">
      <div className="wpcwv-chatEvents">
        <div className="wpcwv-chatEventsLeft">
          {state.showWidget && <button onClick={onDashboardBack}>Back</button>}
        </div>
        <div className="wpcwv-chatEventsRight">
          <div className="wpcwv-chatEventsMenu" onClick={()=>setMenuState(!menuState)}>Menu</div>
          <div className="wpcwv-chatWidgetClose" onClick={()=>onCloseWidget()}>close</div>
        </div>
        {menuState && <OptionsMenu />}
      </div>
      {state.operators.length > 0 && <Operators operators={state.operators} />}

    </div>
  );
};

export default Header;
