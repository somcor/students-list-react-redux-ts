import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { Rate, Student as StudentInterface } from '../../store/types';

interface Props extends StudentInterface {
  id: string,
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onChangeBirthdate: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onChangeRate: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
  onClickEditBtn: (e: React.MouseEvent<HTMLElement>) => void;
  onClickDeleteBtn: (e: React.MouseEvent<HTMLElement>) => void;
}

const Student: React.FC<Props> = (props) => {

  return(
    <div className="list-item">
      {props.editable ? (
        <div className="list-item__name"><Input value={props.name} placeholder="Name" onChangeInput={props.onChangeName} /></div>
      ) : (
        <div className="list-item__name">{props.name}</div>
      )}
      {props.editable ? (
        <div className="list-item__birth-date"><Input value={props.birthDate} placeholder="Birth Date" onChangeInput={props.onChangeBirthdate} /></div>
      ) : (
        <div className="list-item__birth-date">{props.birthDate}</div>
      )}
      {props.editable ? (
        <div className="list-item__rate">
         <Select value={props.rate} options={Rate} onSelectChange={props.onChangeRate} />
        </div>
      ) : (
        <div className="list-item__rate">{props.rate}</div>
      )}
      {props.editable ? (
        <div className="list-item-edit"><div className="btn" onClick={props.onClickEditBtn}>Save</div></div>
      ) : (
        <div className="list-item-edit"><div className="btn" onClick={props.onClickEditBtn}>Edit</div></div>
      )}
      <div className="list-item-delete"><div onClick={props.onClickDeleteBtn} className="btn">Delete</div></div>  
    </div>
  )
}

export default Student;