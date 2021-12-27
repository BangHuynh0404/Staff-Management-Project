import React, { useState, useEffect } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunk_fetchStaffs } from '../../redux/ActionCreator';
import { Count } from '../../redux/ActionCreator';
function Salary({ salaryStaff }) {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count);
  useEffect(() => {
    thunk_fetchStaffs();
  }, []);

  //Tạo trạng thái cho thanh Lọc
  const [value, setValue] = useState('idAscending');
  //Function gán giá trị thanh lọc cho biến Value
  const choice = (e) => {
    setValue(e.target.value);
  };

  if (value === 'salaryAscending') {
    salaryStaff.sort((a, b) => {
      return (
        a.salaryScale * 3000000 +
        a.overTime * 200000 -
        (b.salaryScale * 3000000 + b.overTime * 200000)
      );
    });
  }
  if (value === 'salaryDescending') {
    salaryStaff.sort((a, b) => {
      return (
        b.salaryScale * 3000000 +
        b.overTime * 200000 -
        (a.salaryScale * 3000000 + a.overTime * 200000)
      );
    });
  }
  if (value === 'idAscending') {
    salaryStaff.sort((a, b) => {
      return a.id - b.id;
    });
  }
  if (value === 'idDescending') {
    salaryStaff.sort((a, b) => {
      return b.id - a.id;
    });
  }
  //Loop qua array staff
  let renderStaff = salaryStaff.map((staff) => {
    //Tính toán Lương dựa trên lương cơ bản, số giờ làm thêm
    var overTimeSalary = staff.salaryScale * 3000000 + staff.overTime * 200000;
    //render layout của các index
    return (
      <div
        className='col-lg-4 col-md-6 col-sm-12 p-3 animate__animated animate__bounceIn'
        tooltipConta
      >
        <Card key={staff.id} className='border border-success py-2'>
          <CardBody>
            <CardTitle tag='h1' className='fw-bold text-center text-success'>
              {staff.name}
              <hr />
            </CardTitle>

            <CardText tag='h5'>
              Mã nhân viên: <span className='text-danger'>{staff.id}</span>
            </CardText>
            <CardText tag='h5'>
              Hệ số lương:{' '}
              <span className='text-danger'>{staff.salaryScale}</span>
            </CardText>
            <CardText tag='h5'>
              Số giờ Làm thêm:
              <span className='text-danger'> {staff.overTime}</span>
            </CardText>
            <CardText tag='h5' className='text-red'>
              Lương:{' '}
              <span className='text-danger px-2 border border-warning rounded'>
                {overTimeSalary.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </span>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className='container my-5'>
      {/* BREADCRUMB */}
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/staff'>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
      </Breadcrumb>
      <hr />
      {/* SẮP XẾP */}
      <div className='container'>
        <select
          className='my-3 py-1 fw-bold fs-6 mx-2 border border-success rounded'
          value={value}
          onChange={choice}
        >
          <option selected disabled value='idAscending'>
            Sắp xếp nhân viên
          </option>
          <option value='idAscending'>Mã nhân viên tăng dần</option>
          <option value='idDescending'>Mã nhân viên giảm dần</option>
          <option value='salaryAscending'>Lương tăng dần</option>
          <option value='salaryDescending'>Lương giảm dần</option>
        </select>
      </div>
      <div className='row'>{renderStaff}</div>
      <button onClick={() => dispatch(Count())}>cong</button>
    </div>
  );
}

export default Salary;
