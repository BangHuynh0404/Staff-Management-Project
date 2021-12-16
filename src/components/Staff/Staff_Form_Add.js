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

export default function AddStaffModal({ postStaff }) {
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
    postStaff(
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
      <div className='fw-bold ms-auto col-lg-2 col-md-12 col-sm-12 col-12 p-2'>
        <Button
          className='w-100 p-2 text-white fw-bold '
          color='success'
          onClick={() => setIsModalOpen(!isModalOpen)}
          title='Thêm nhân viên'
        >
          <span className='fa fa-user-plus fa-lg text-white'></span> Thêm nhân
          viên
        </Button>
      </div>

      {/*MODAL */}
      <Modal
        isOpen={isModalOpen}
        size='lg'
        toggle={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Thêm nhân viên
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
                  required
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Nhập tên đầy đủ'
                  className='form-control border border-success'
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
                    required: 'Tênn không được để trống, ',
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
                  className='form-control border border-success'
                  validators={{
                    required,
                  }}
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
                  className='form-control border border-success'
                  validators={{
                    required,
                  }}
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
                  className='form-control border border-success'
                >
                  <option value='' disabled selected>
                    Chọn phòng ban
                  </option>
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
                  placeholder='1.0 -> 3.0'
                  id='salaryScale'
                  name='salaryScale'
                  rows='12'
                  className='form-control border border-success'
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
                    required: 'Không được để trống, ',
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
                  className='form-control border border-success'
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
                  className='form-control border border-success'
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
                <Button type='submit' color='success'>
                  Thêm nhân viên
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  );
}
