export enum Rate {
  no = 'No rate',
  A = 'A',
  B = 'B',
  С = 'C',
  В = 'D'
}

export type Student = {
  id: string;
  name: string;
  birthDate: string;
  rate: Rate;
  editable: boolean
}

export type StateInterface = {
  students: Student[];
}

export const ADD_STUDENT = 'ADD_STUDENT'
export const REMOVE_STUDENT = 'REMOVE_STUDENT'
export const EDIT_NAME = 'EDIT_NAME'
export const EDIT_EDITABLE = 'EDIT_EDITABLE'
export const EDIT_BIRTHDATE = 'EDIT_BIRTHDATE'
export const EDIT_RATE = 'EDIT_RATE'

export type RemoveStudentAction = {
  type: typeof REMOVE_STUDENT,
  id: string
}

export type AddStudentAction = {
  type: typeof ADD_STUDENT,
  student: Student
}

export type EditNameAction = {
  type: typeof EDIT_NAME,
  id: string,
  name: string
}

export type EditEditableAction = {
  type: typeof EDIT_EDITABLE,
  id: string
}

export type EditBirthdateAction = {
  type: typeof EDIT_BIRTHDATE,
  id: string,
  birthDate: string
}

export type EditRateAction = {
  type: typeof EDIT_RATE,
  id: string,
  rate: Rate
}

export type StudentActionTypes = AddStudentAction | RemoveStudentAction | EditNameAction | EditEditableAction | EditBirthdateAction | EditRateAction;
