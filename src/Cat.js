import React from 'react';

function Cat({ imgSrc, getRandomCatImage }) {
  return (
    <div className="cat">
      <div>
          <button className="cat-btn" onClick={getRandomCatImage}>Get random cat image</button>
      </div>
      {imgSrc && <img className="cat-img" src={imgSrc} alt="Random cat" />}
    </div>
  );
}

export default Cat;
