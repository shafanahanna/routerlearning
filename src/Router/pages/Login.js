import React from 'react';
import { mycontext } from '../../App';
import { useContext } from 'react';

function Login() {
  const x=useContext(mycontext)
  return (
    <div>
        <button>login</button>
        <button>sign in</button>
        <h2>{x}</h2>
    </div>
  )
}

export default Login