import { Container } from './styles';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useState } from 'react';

export function PasswordInput({ icon: Icon, ...rest }) {
  const [passwordType, setPasswordType] = useState("password");

  function handleInputType() {
    if(passwordType === "password") {
      
      setPasswordType("text");
      return;
    } 
    
    setPasswordType("password");
  }

  return(
    <Container>
      {Icon && <Icon size={20} />}

      <input 
        type={passwordType}
        {...rest} 
      />

      <button
        type="button"
        onClick={handleInputType}
      >
        { passwordType === "password" ? <FiEye size={25} /> : <FiEyeOff size={25} /> }  
      </button>
    </Container>
  )
}