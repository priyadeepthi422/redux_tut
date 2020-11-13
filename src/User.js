import React from "react";

const User = (props) => {
  const { data } = props;
  //u can also wrtie props.data
  return (
    <div>
      <h1>User Component is {data.name}</h1>
    </div>
  );
};

export default User;
