import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import deptName from '../Staff/Staff_Detail/DepartmentName';
import StaffList from '../Staff/Staff_List';
export default function DepartmentStaff({
  staff,
  departments,
  fetchDelStaffs,
  fetchUpdateStaff,
}) {
  console.log(staff[0]);
  let deptArr = departments.filter((dept) => dept.id === staff[0].departmentId);
  let deptReName = deptArr[0].id;
  return (
    <div className='container my-5 '>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link className='text-decoration-none' to='/staff'>
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link className='text-decoration-none' to='/department'>
            Phòng Ban
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{deptName(deptName)}</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className='row p-3'>
        <h4 className=' mb-3 text-success fw-bold'>
          {deptName(deptReName)} <br />
          <br />
          Số lượng: {staff.length}
        </h4>
        <StaffList
          departmentFilter={staff}
          fetchDelStaffs={fetchDelStaffs}
          fetchUpdateStaff={fetchUpdateStaff}
        />
      </div>
    </div>
  );
}
