import React from 'react';

const SignOut = (props) => {

  return(
    <div className="page-key" onClick={props.signOut}>
      <p>SignOut</p>
    </div>
  )
}
export default SignOut;
