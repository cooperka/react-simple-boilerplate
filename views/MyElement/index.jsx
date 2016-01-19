import React from 'react';

const MyElement = (props) => {
  return (
    // Add a second nested div so the total number of items is equal for both item types.
    <div key={props.key}>
      <div>
        Element
        {props.children}
      </div>
    </div>
  );
};

export default MyElement;
