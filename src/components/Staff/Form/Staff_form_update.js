/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

export default function UpdateStaffModal({ staff, id, fetchUpdateStaff }) {
  //Điều kiện để kiểm tra hợp lệ của form
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));
  const minValue = (min) => (val) => val && val >= min;
  const maxValue = (max) => (val) => !val || val <= max;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submitHandler = (values) => {
    console.log(values);

    fetchUpdateStaff(
      parseInt(id),
      values.name,
      values.doB,
      parseFloat(values.salaryScale),
      values.startDate,
      values.department,
      values.annualLeave,
      parseFloat(values.overTime)
    );
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Button
        className='btn-warning flex-fill'
        color='warning'
        onClick={() => setIsModalOpen(!isModalOpen)}
        title='Thêm nhân viên'
      >
        <span className='fa fa-cogs text-dark'></span>
      </Button>

      {/*MODAL */}
      <Modal
        isOpen={isModalOpen}
        size='lg'
        toggle={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Sửa lại thông tin
        </ModalHeader>
        <ModalBody>
          {/* FORM */}
          <LocalForm onSubmit={(values) => submitHandler(values)}>
            {/*TÊN HỌ */}
            <Row className='form-group mb-2'>
              <Label htmlFor='name' md={4}>
                Tên
              </Label>
              <Col md={8}>
                <Control.text
                  model='.name'
                  type='text'
                  id='name'
                  name='name'
                  placeholder={staff.name}
                  className='form-control border border-warning'
                  validators={{
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(30),
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.name'
                  show='touched'
                  messages={{
                    minLength: 'Phải dài trên 6 ký tự',
                    maxLength: 'Phải ít hơn 30 ký tự',
                  }}
                />
              </Col>
            </Row>

            {/* NGÀY SINH */}
            <Row className='form-group mb-2'>
              <Label htmlFor='doB' md={4}>
                Ngày sinh
              </Label>
              <Col md={8}>
                <Control.input
                  model='.doB'
                  id='doB'
                  name='doB'
                  type='date'
                  className='form-control border border-warning'
                  placeholder={staff.doB}
                  validators={{ required }}
                />
                <Errors
                  className='text-danger'
                  model='.doB'
                  show='touched'
                  messages={{
                    required: 'Không được trống',
                  }}
                />
              </Col>
            </Row>

            {/* NGÀY VÀO CÔNG TY */}
            <Row className='form-group mb-2'>
              <Label htmlFor='startDate' md={4}>
                Ngày vào công ty
              </Label>
              <Col md={8}>
                <Control
                  model='.startDate'
                  type='date'
                  id='startDate'
                  name='startDate'
                  className='form-control border border-warning'
                  placeholder={staff.startDate}
                  validators={{ required }}
                />
                <Errors
                  className='text-danger'
                  model='.startDate'
                  show='touched'
                  messages={{
                    required: 'Không được trống',
                  }}
                />
              </Col>
            </Row>

            {/* PHÒNG BAN */}
            <Row className='form-group mb-2'>
              <Label htmlFor='deparment' md={4}>
                Phòng ban
              </Label>
              <Col md={{ size: 8, offset: 0 }}>
                <Control.select
                  model='.department'
                  id='department'
                  name='department'
                  className='form-control border border-warning'
                  defaultValue={staff.departmentId}
                >
                  <option value='Dept04'>CNTT</option>
                  <option value='Dept02'>Nhân sự</option>
                  <option value='Dept03'>Tài chính</option>
                  <option value='Dept01'>Kinh doanh</option>
                  <option value='Dept05'>Marketing</option>
                </Control.select>
              </Col>
            </Row>

            {/* HỆ SỐ LƯƠNG */}
            <Row className='form-group mb-2'>
              <Label htmlFor='salaryScale' md={4}>
                Hệ số lương
              </Label>
              <Col md={8}>
                <Control
                  model='.salaryScale'
                  type='number'
                  id='salaryScale'
                  name='salaryScale'
                  rows='12'
                  className='form-control border border-warning'
                  placeholder={parseFloat(staff.salaryScale)}
                  validators={{
                    required,
                    minValue: minValue(1),
                    maxValue: maxValue(3),
                    isNumber,
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.salaryScale'
                  show='touched'
                  messages={{
                    minValue: 'Không được nhỏ hơn 1',
                    maxValue: 'Không được lớn hơn 3',
                  }}
                />
              </Col>
            </Row>

            {/* SỐ NGÀY NGHỈ CÒN LẠI */}
            <Row className='form-group mb-2'>
              <Label htmlFor='annualLeave' md={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col md={8}>
                <Control
                  model='.annualLeave'
                  type='number'
                  id='annualLeave'
                  name='annualLeave'
                  rows='12'
                  className='form-control border border-warning'
                  placeholder={staff.annualLeave}
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.annualLeave'
                  show='touched'
                  messages={{
                    required: 'Không được để trống ',
                  }}
                />
              </Col>
            </Row>

            {/* SỐ NGÀY ĐI LÀM THÊM */}
            <Row className='form-group mb-2'>
              <Label htmlFor='overTime' md={4}>
                Số ngày đi làm thêm
              </Label>
              <Col md={8}>
                <Control
                  model='.overTime'
                  type='number'
                  id='overTime'
                  name='overTime'
                  rows='12'
                  className='form-control border border-warning'
                  placeholder={staff.overTime}
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.annualLeave'
                  show='touched'
                  messages={{
                    required: 'Không được để trống ',
                  }}
                />
              </Col>
            </Row>

            {/* SUBMIT */}
            <Row className='form-group mb-2'>
              <Col md={{ size: 4, offset: 8 }}>
                <Button type='submit' color='warning'>
                  Lưu chỉnh sửa
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  );
}
