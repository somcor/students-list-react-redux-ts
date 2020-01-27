import {
  StateInterface,
  StudentActionTypes,
  ADD_STUDENT,
  REMOVE_STUDENT,
  EDIT_NAME,
  EDIT_EDITABLE,
  EDIT_BIRTHDATE,
  EDIT_RATE,
  Rate
} from './types'

const initialState: StateInterface = {
    students: [
      {
        id: '1',
        name: 'John Doe',
        birthDate: '18.04.1987',
        rate: Rate.A,
        editable: false
      },
      {
        id: '2',
        name: 'Jane Doe',
        birthDate: '12.06.1985',
        rate: Rate.A,
        editable: false
      },
      {
        id: '3',  
        name: 'John Doe',
        birthDate: '18.04.1983',
        rate: Rate.no,
        editable: false
      },
      {
        id: '4',  
        name: 'Jane Doe',
        birthDate: '12.06.1981',
        rate: Rate.A,
        editable: false
      }
    ]
  }

export function studentsReducer(
  state = initialState,
  action: StudentActionTypes
): StateInterface {
  switch (action.type) {
    case REMOVE_STUDENT: {
      const id = action.id;
      const studentsArr = [...state.students];
      const result = studentsArr.filter(item => item.id !== id);
      return {
        ...state, 
        students: result
      }
    }
    case ADD_STUDENT: {
      return {
        ...state, 
        students: [...state.students, action.student]
      } 
    }
    case EDIT_NAME: {
      const studentsArr = [...state.students];
      const studentIndex = studentsArr.findIndex(item => item.id === action.id);
      studentsArr[studentIndex].name = action.name; 
      return {
        ...state, 
        students: studentsArr
      }
    }
    case EDIT_EDITABLE: {
      const studentsArr = [...state.students];
      const studentIndex = studentsArr.findIndex(item => item.id === action.id);
      studentsArr[studentIndex].editable = !studentsArr[studentIndex].editable; 
      return {
        ...state, 
        students: studentsArr
      }
    }
    case EDIT_BIRTHDATE: {
      const studentsArr = [...state.students];
      const studentIndex = studentsArr.findIndex(item => item.id === action.id);
      studentsArr[studentIndex].birthDate = action.birthDate; 
      return {
        ...state, 
        students: studentsArr
      }
    }
    case EDIT_RATE: {
      const studentsArr = [...state.students];
      const studentIndex = studentsArr.findIndex(item => item.id === action.id);
      studentsArr[studentIndex].rate = action.rate; 
      return {
        ...state, 
        students: studentsArr
      }
    }
    default:
      return state
  }
}

export type State = StateInterface;