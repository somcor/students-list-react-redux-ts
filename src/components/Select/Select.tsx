import React, { ChangeEventHandler } from 'react';

interface Props{
  value?: string;
  options: {[key: string]: string};
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

const Select: React.FC<Props> = (props) => {
  return(
    <select defaultValue={props.value} onBlur={props.onSelectChange}>
      {Object.keys(props.options).map((key, index) => {
        return <option key={index} value={props.options[key]}>{props.options[key]}</option>
      })}
    </select>
  )
}

export default Select;