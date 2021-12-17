import React, { useState } from 'react';

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
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
export default function PopoverStaffInfo({ staff, id }) {
  if (id === undefined) {
    id = 1;
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        id={'button' + id}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='btn-success mx-1 flex-fill'
        title='Thông tin nhân viên'
      >
        <span className='fa fa-info text-white'></span>
      </Button>
      <Popover
        flip
        isOpen={isOpen}
        placement='bottom'
        target={'button' + id}
        toggle={() => setIsOpen(!isOpen)}
      >
        <PopoverHeader>ID: {id}</PopoverHeader>
        <PopoverBody>
          Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')} <hr />
          Ngày vào: {dateFormat(staff.startDate, 'dd/mm/yyyy')} <hr />
          Phòng ban: {deptName(staff.departmentId)} <hr />
          Số ngày nghỉ còn lại: {staff.annualLeave} <hr />
          Số giờ Làm thêm: {staff.overTime} <hr />
          Lương nhận: {staff.salary}
        </PopoverBody>
      </Popover>
    </React.Fragment>
  );
}
