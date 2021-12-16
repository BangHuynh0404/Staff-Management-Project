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
export default function DepartmentStaff({ staff, departments }) {
  let deptArr = departments.filter((dept) => dept.id === staff[0].departmentId);
  let deptName = deptArr[0].id;
  const deptReName = (id) => {
    switch (id) {
      case 'Dept04':
        return ' Phòng CNTT';
        break;
      case 'Dept02':
        return ' Phòng Nhân sự';
        break;
      case 'Dept05':
        return ' Phòng Tài chính';
        break;
      case 'Dept01':
        return ' Phòng Kinh Doanh';
        break;
      case 'Dept03':
        return ' Phòng Marketing';
        break;
      default:
    }
  };
  const staffList = staff.map((staff) => {
    return (
      <div
        className={`d-flex mb-3 word-wrap col-lg-3 col-md-4 col-sm-6 justify-content-center my-3`}
      >
        <Card
          className='border border-success word-wrap'
          key={staff.id}
          style={{ width: '100%' }}
        >
          <CardImg
            width='25%'
            src='/assets/images/alberto.png'
            alt={staff.name}
          />
          <CardBody>
            <CardTitle className='p-2 text-center text-success' width='25%'>
              {staff.name}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  });
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
        <BreadcrumbItem active>{deptReName(deptName)}</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className='row p-3'>
        <h4 className=' mb-3 text-success fw-bold'>
          {deptReName(deptName)} <br />
          <br />
          Số lượng: {staff.length}
        </h4>
        {staffList}
      </div>
    </div>
  );
}
