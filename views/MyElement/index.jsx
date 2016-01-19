import React from 'react';

const MyElement = (props) => {
  return (
    <div key={props.key}>
      <div>
        Element
        {props.children}
      </div>
    </div>
  );
};

export default MyElement;
