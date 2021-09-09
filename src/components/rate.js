import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';
import '../index.css';

function Rate({ review }) {

  function rate(r) {
    let stars = [];
    for (let i = 0; i < r; i++) {
      stars.push(
        <span>
          <Star key = {i} className = 'icon'/>
        </span>);
    }
    return stars;
}

  return (
    <div>
      <p>{rate(review)}</p>
    </div>
  );
}

export default Rate