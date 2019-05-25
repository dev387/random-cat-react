import React from 'react';

function Cat({ imgSrc, getRandomCatImage, loading }) {
  return (
    <div className="cat">
      <div>
          <button className="cat-btn" onClick={getRandomCatImage}>{loading ? 'Loading...' : 'Get random cat image'}</button>
      </div>
      {imgSrc && <img className="cat-img" src={imgSrc} alt="Random cat" />}
    </div>
  );
}

export default Cat;
