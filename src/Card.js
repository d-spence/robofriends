import React from 'react';

const Card = ({ id, name, email }) => {
  // Using destructuring method instead of props parameter
  // const { id, name, email } = props;
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`http://robohash.org/${name}?size=300x300`} alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;