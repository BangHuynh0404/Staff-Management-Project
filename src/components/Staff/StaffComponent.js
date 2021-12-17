/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import AddStaffModal from './Form/Staff_Form_Add';

import StaffList from './Staff_List';

class Staffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfCol: 2,
      selectStaff: null,
      staffDeparment: '1',
      staffName: '',
      isModalOpen: false,
      /* Add staff */
      newStaff: [],
      name: '',
      doB: '',
      salaryScale: '',
      startDate: '',
      department: '',
      annualLeave: '',
      overTime: '',
      salary: 0,
      image: '/assets/images/staff.jpg',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDe = this.handleChangeDe.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSearchName = this.handleSearchName.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(e) {
    this.setState({ numOfCol: e.target.value });
  }

  handleChangeDe(e) {
    this.setState({ staffDeparment: e.target.value });
  }
  handleChangeName(e) {
    this.setState({ staffName: e.target.value });
  }
  handleSearchName(event) {
    this.setState({ staffName: this.search.value });
    event.preventDefault();
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    var departmentFilter = [];

    //Trả về toàn bộ object
    if (this.state.staffDeparment === '1') {
      departmentFilter = this.props.staffs.staffs;
    } else {
      //Khác giá trị mặc định trả về giá trị có trong bộ lọc
      departmentFilter = this.props.staffs.staffs.filter(
        (staff) => staff.departmentId === this.state.staffDeparment
      );
    }
    //Nếu thanh tìm kiếm có ký tự
    if (this.state.staffName !== '' && this.state.staffDeparment === '1') {
      departmentFilter = this.props.staffs.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(this.state.staffName.toLowerCase())
      );
    } else if (this.state.staffName !== '') {
      departmentFilter = this.props.staffs.staffs.filter(
        (staff) =>
          //đổi tất cả str về Lower rồi so sánh
          staff.department === this.state.staffDeparment &&
          staff.name.toLowerCase().includes(this.state.staffName.toLowerCase())
      );
    }
    //đếm object có trong array -> số kết quả
    var departmentFilterLength = departmentFilter.length;

    return (
      <div className='my-5 px-5'>
        <div className='container-fluid'>
          <div className='row'>
            {/*?  CHẾ ĐỘ XEM  */}
            <div className='input-group p-0'>
              <div className='fw-bold col-lg-2 col-md-6 col-sm-12 col-12 p-2 '>
                <select
                  className='fw-bold w-100 h-100 border border-success rounded-3'
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Xem chế độ cột
                  </option>
                  <option value='3'>4 Cột</option>
                  <option value='2'>6 Cột</option>
                </select>
              </div>

              {/* LỌC THEO PHÒNG BAN  */}
              <div className='fw-bold col-lg-2 col-md-6 col-sm-12 col-12 p-2'>
                <select
                  className='fw-bold w-100 h-100 border border-success rounded-3'
                  value={this.state.value}
                  onChange={this.handleChangeDe}
                >
                  <option value='' selected disabled>
                    Phòng ban
                  </option>

                  <option value='1'>Tất cả</option>
                  <option value='Dept04'>Phòng CNTT</option>
                  <option value='Dept02'>Phòng Nhân sự</option>
                  <option value='Dept05'>Phòng Tài chính</option>
                  <option value='Dept01'>Phòng kinh doanh</option>
                  <option value='Dept03'>Phòng Marketing</option>
                </select>
              </div>

              {/*  TÌM KIẾM NHÂN VIÊN THEO TÊN  */}
              <div className=' d-flex align-items-center fw-bold col-lg-2 col-md-8 col-sm-12 col-12 p-1 '>
                <Input
                  className='w-100  border border-success'
                  type='text'
                  placeholder='Nhập tên cần tìm ..'
                  innerRef={(input) => (this.search = input)}
                />
              </div>
              <div className='d-flex align-items-center fw-bold col-lg-2 col-md-4 col-sm-12 col-12 p-2'>
                <Button
                  className='w-100 fw-bold '
                  onClick={this.handleSearchName}
                  value='submit'
                  color='success'
                >
                  Tìm Kiếm
                </Button>
              </div>

              {/*MODAL*/}

              <AddStaffModal postStaff={this.props.postStaff} />
            </div>
          </div>

          <hr />
          {/*HIỂN THỊ SỐ KẾT QUẢ */}
          <h4 className='mx-3 my-3'>Số kết quả : {departmentFilterLength}</h4>

          {/*  RENDER DANH SÁCH SAU LỌC  */}
          <div className='container-fluid p-3'>
            <div className='row '>
              <StaffList
                departmentFilter={departmentFilter}
                numOfCol={this.state.numOfCol}
                fetchDelStaffs={this.props.fetchDelStaffs}
                fetchUpdateStaff={this.props.fetchUpdateStaff}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Staffs;
