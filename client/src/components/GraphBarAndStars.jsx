import React from 'react';

import GraphBar from './GraphBar.jsx';
import set from '../helperFunctions.jsx';

const GraphBarAndStars = props => (
  <div className='studentFeedbackGraphRow' style={{ opacity: set.opacity(props.selectedStar, props.currentStar) }} onClick={props.ratingFilter}>
    <GraphBar percent={ props.percent * 100 }/>
    <span>
      <img className='summaryStars' src={`https://s3.us-east-2.amazonaws.com/udemy-demo-tarik/${props.currentStar}+stars+white.png`}></img>
    </span>
    <div className='starButtonHolder'>
      <button className='starButton'>{Math.round(props.percent * 100)}%</button>
    </div>
  </div>
);

export default GraphBarAndStars;