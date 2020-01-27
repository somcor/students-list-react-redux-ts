import React from 'react';

interface Props{
  value?: string,
  placeholder: string,
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<Props> = (props) => {
  return(
    <input 
    type="text" 
    value={props.value}
    placeholder={props.placeholder} 
    onChange={props.onChangeInput}
    />
  )
}

export default Input;