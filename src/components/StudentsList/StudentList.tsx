import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/reducers';
import Student from '../Student/Student';
import { removeStudent, editName, editEditable, editBirthdate, editRate } from '../../store/actions';

const StudentList: React.FC = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: State) => state.students);

  const deleteStudentHandler = (id: string) => {
    dispatch(removeStudent(id));
  }

  const changeNameHandler = (e: any, id: string) => {
    const name = e.target.value;
    dispatch(editName(id, name));
  }

  const editStudentHandler = (id: string) => {
    dispatch(editEditable(id));
  }

  const changeBirthdateHandler = (e:any, id: string) => {
    const birthDate = e.target.value;
    dispatch(editBirthdate(id, birthDate));
  }

  const changeRateHandler = (e:any, id: string) => {
    const rate = e.target.value;
    dispatch(editRate(id, rate));
  }

  return (
    <div className="list">
      {Object.keys(students).map((item, index) => {
        return <Student 
          key={students[index].id} 
          id={students[index].id}
          name={students[index].name} 
          birthDate={students[index].birthDate} 
          rate={students[index].rate}
          editable={students[index].editable}  
          onClickDeleteBtn={() => deleteStudentHandler(students[index].id)} 
          onChangeName={(e) => changeNameHandler(e, students[index].id)}
          onChangeBirthdate={(e) => changeBirthdateHandler(e, students[index].id)}
          onChangeRate={(e) => changeRateHandler(e, students[index].id)}
          onClickEditBtn={() => editStudentHandler(students[index].id)} 
        />
        ;
      })}
    </div>
  )
}

export default StudentList;