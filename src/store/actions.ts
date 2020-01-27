import { 
  Student, 
  ADD_STUDENT, 
  REMOVE_STUDENT, 
  EDIT_NAME,
  EDIT_EDITABLE, 
  EDIT_BIRTHDATE,
  EDIT_RATE,
  StudentActionTypes,
  Rate, 
} from './types'

export function removeStudent(id: string): StudentActionTypes{
  return {
    type: REMOVE_STUDENT,
    id
  }
}

export const addStudent = (student: Student): StudentActionTypes => {
  return {
    type: ADD_STUDENT,
    student
  }
}

export const editName = (id: string, name: string): StudentActionTypes => {
  return {
      type: EDIT_NAME,
      id,
      name
  }
}

export const editEditable = (id: string): StudentActionTypes => {
  return {
      type: EDIT_EDITABLE,
      id
  }
}

export const editBirthdate = (id: string, birthDate: string): StudentActionTypes => {
  return {
      type: EDIT_BIRTHDATE,
      id,
      birthDate
  }
}

export const editRate = (id: string, rate: Rate ) => {
  return {
      type: EDIT_RATE,
      id,
      rate
  }
}

