import React, { useState } from 'react';

import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import dateFormat from 'dateformat';
import deptName from './DepartmentName';

export default function ModalStaffInfo({ staff, id }) {
  if (id === undefined) {
    id = '';
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        id={'button' + id}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='btn-success mx-1 flex-fill'
      >
        <span className='fa fa-info text-white'></span>
      </Button>
      <Modal
        flip
        isOpen={isOpen}
        target={'button' + id}
        toggle={() => setIsOpen(!isOpen)}
        placement='bottom'
        className='text-dark'
      >
        <ModalHeader>ID: {id} </ModalHeader>
        <ModalBody>
          Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')} <hr />
          Ngày vào: {dateFormat(staff.startDate, 'dd/mm/yyyy')} <hr />
          Phòng ban: {deptName(staff.departmentId)} <hr />
          Số ngày nghỉ còn lại: {staff.annualLeave} <hr />
          Số giờ Làm thêm: {staff.overTime} <hr />
          Lương nhận: {staff.salary}
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}
