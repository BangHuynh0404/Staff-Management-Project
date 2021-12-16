import * as ActionTypes from './ActionTypes';

import { baseUrl } from './baseUrl';

// ! RENDER STAFF
export const fetchStaffs = () => (dispatch) => {
  return fetch(baseUrl + 'staffs')
    .then((response) => response.json())
    .then((staffs) => dispatch(renderStaffs(staffs)));
};
export const renderStaffs = (staffs) => ({
  type: ActionTypes.RENDER_STAFF,
  payload: staffs,
});

//! STAFF ACTION
//* POST
export const postStaff =
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
      .then((response) => dispatch(addStaffs(response)));
  };
export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staffs,
});
//DELETE
export const fetchDelStaffs = (id) => (dispatch) => {
  return fetch(baseUrl + 'staffs/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((staffs) => dispatch(delStaffs(staffs)));
};

export const delStaffs = (staffs) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: staffs,
});

//PATCH

export const fetchUpdateStaff =
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
      .then((response) => dispatch(updateStaff(response)));
  };

export const updateStaff = (staff) => ({
  type: ActionTypes.UPDATE_STAFF,
  payload: staff,
});
// ! DEPARTMENT

export const fetchDepartment = () => (dispatch) => {
  return fetch(baseUrl + 'departments')
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)));
};
export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENT,
  payload: departments,
});

//! SALARY
export const fetchSalary = () => (dispatch) => {
  return fetch(baseUrl + 'staffsSalary')
    .then((res) => res.json())
    .then((salaryStaff) => dispatch(getSalaryStaff(salaryStaff)));
};
export const getSalaryStaff = (salaryStaff) => ({
  type: ActionTypes.GET_SALARY,
  payload: salaryStaff,
});
