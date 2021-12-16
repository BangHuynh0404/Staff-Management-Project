import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const deptName = (id) => {
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
function Department({ departments }) {
  const departmentNum = departments.map((department) => {
    return (
      <div className=' col-lg-4 col-md-6 col-sm-12 my-3 animate__animated animate__jackInTheBox  '>
        <Link
          className='text-decoration-none'
          to={`/department/${department.id}`}
        >
          <Card className='p-3 m-3 border border-success text-success py-5'>
            <CardTitle tag='h2' className='fw-bold'>
              {deptName(department.id)}
            </CardTitle>
            <CardText tag='h5'>
              Số lượng nhân viên:{' '}
              <span className='text-danger fw-bold fs-4'>
                {department.numberOfStaff}
              </span>
            </CardText>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <div className='container p-2 my-5'>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/staff'>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className='row'> {departmentNum}</div>
    </div>
  );
}
export default Department;
