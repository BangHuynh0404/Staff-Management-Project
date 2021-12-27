import * as ActionTypes from './ActionTypes';

import { baseUrl } from './baseUrl';

// ! RENDER STAFF
export const thunk_fetchStaffs = () => (dispatch) => {
  return fetch(baseUrl + 'staffs')
    .then((response) => response.json())
    .then((staffs) => dispatch(action_renderStaffs(staffs)));
};
export const action_renderStaffs = (staffs) => ({
  type: ActionTypes.RENDER_STAFF,
  payload: staffs,
});

//! STAFF ACTION
//* POST
export const thunk_postStaff =
  (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) =>
  (dispatch) => {
    const newStaff = {
      name: name,
      doB: new Date(doB),
      salaryScale: parseFloat(salaryScale),
      startDate: new Date(startDate),
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: parseFloat(overTime),
    };
    return fetch(baseUrl + 'staffs', {
      method: 'POST',
      body: JSON.stringify(newStaff),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then((response) => response.json())
      .then((response) => dispatch(action_addStaffs(response)));
  };
export const action_addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staffs,
});
//DELETE
export const thunk_fetchDelStaffs = (id) => (dispatch) => {
  return fetch(baseUrl + 'staffs/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((staffs) => dispatch(action_delStaffs(staffs)));
};

export const action_delStaffs = (staffs) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: staffs,
});

//PATCH

export const thunk_fetchUpdateStaff =
  (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime
  ) =>
  (dispatch) => {
    const updateDataStaff = {
      id: id,
      name: name,
      doB: new Date(doB),
      salaryScale: parseFloat(salaryScale),
      startDate: new Date(startDate),
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: parseFloat(overTime),
    };
    return fetch(baseUrl + 'staffs', {
      method: 'PATCH',
      body: JSON.stringify(updateDataStaff),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then((response) => response.json())
      .then((response) => dispatch(action_updateStaff(response)));
  };

export const action_updateStaff = (staff) => ({
  type: ActionTypes.UPDATE_STAFF,
  payload: staff,
});
// ! DEPARTMENT

export const thunk_fetchDepartment = () => (dispatch) => {
  return fetch(baseUrl + 'departments')
    .then((response) => response.json())
    .then((departments) => dispatch(action_addDepartments(departments)));
};
export const action_addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENT,
  payload: departments,
});

//! SALARY
export const thunk_fetchSalary = () => (dispatch) => {
  return fetch(baseUrl + 'staffsSalary')
    .then((res) => res.json())
    .then((salaryStaff) => dispatch(action_getSalaryStaff(salaryStaff)));
};
export const action_getSalaryStaff = (salaryStaff) => ({
  type: ActionTypes.GET_SALARY,
  payload: salaryStaff,
});

export const Count = () => ({
  type: 'COUNT',
});
