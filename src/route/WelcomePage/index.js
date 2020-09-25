import React from 'react';
import { connect } from 'react-redux'
import WelcomeToChat from '../../containers/WelcomeToChat'
import PropTypes from 'prop-types';


const WelcomePageComponant = (props) => {
  console.log(props);
  return props.welcomePage && <WelcomeToChat/>
};

const mapStateToProps = state => ({
  welcomePage :  state.welcomePage,
})

WelcomePageComponant.propTypes = {
  welcomePage: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(WelcomePageComponant)



