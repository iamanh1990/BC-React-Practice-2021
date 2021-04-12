import React from 'react';
import { connect } from 'react-redux';

import './score.styles.scss';

const Score = (props) => {
  return <div className='score'>Your Score Is: {props.score}</div>;
};

const mapStateToProps = (state) => ({
  score: state.score,
});

export default connect(mapStateToProps, null)(Score);
