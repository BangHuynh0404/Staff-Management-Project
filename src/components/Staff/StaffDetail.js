import React from 'react';

import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import dateFormat from 'dateformat';
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

const StaffDetail = ({ staff }) => {
  console.log(staff.id);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/staff'>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className='row'>
        <div className='col-lg-4 col-md-3 col-sm-12'>
          <CardImg
            width='25%'
            src='/assets/images/alberto.png'
            alt={staff.name}
          />
        </div>
        <div className='col-lg-8 col-md-9 col-sm-12' key={staff.id}>
          <CardBody>
            <CardTitle tag='h1'>{staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
            </CardText>
            <CardText>Phòng ban: {deptName(staff.departmentId)}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số giờ Làm thêm: {staff.overTime}</CardText>
          </CardBody>
        </div>
      </div>
    </div>
  );
};
export default StaffDetail;
