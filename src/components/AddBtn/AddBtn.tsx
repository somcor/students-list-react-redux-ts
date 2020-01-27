import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/reducers';
import { addStudent } from '../../store/actions';
import { Student, Rate } from '../../store/types';

const AddBtn: React.FC = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: State) => state.students);

  const addNewStudentHandler = () => {
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
    }

    const uniqueId = uuidv4();

    const newStudent: Student = {
      id: uniqueId,
      name: '',
      birthDate: '',
      rate: Rate.no,
      editable: true
    }

    dispatch(addStudent(newStudent));
  }

  return(
    <div className="btn" onClick={() => addNewStudentHandler()}>Add new</div>
  )
}

export default AddBtn;