import React from 'react';

const MyElement = (props) => {
  let elements = [];
  for (let i = 0; i < props.number; i++) {
    elements.push(
      <p key={i}>
        Element
      </p>
    );
  }

  return (
    <div>
      {elements}
    </div>
  );
};

export default MyElement;
