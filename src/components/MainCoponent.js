import React, { Component } from 'react';
import NavbarCom from './Layout/NavbarComponent';
import Staffs from './Staff/StaffComponent';
import Footer from './Layout/FooterComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Department from './Department/DepartmentComponent';
import DepartmentStaff from './Department/Department_Staff';
import Salary from './Salary/SalaryComponent';
import { connect } from 'react-redux';
import {
  thunk_fetchDelStaffs,
  thunk_fetchDepartment,
  thunk_fetchStaffs,
  thunk_postStaff,
  thunk_fetchSalary,
  thunk_fetchUpdateStaff,
} from '../redux/ActionCreator';
import { withRouter } from '../ReactWRfix';

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUpdateStaff: (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime
  ) =>
    dispatch(
      thunk_fetchUpdateStaff(
        id,
        name,
        doB,
        salaryScale,
        startDate,
        department,
        annualLeave,
        overTime
      )
    ),
  postStaff: (
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime
  ) =>
    dispatch(
      thunk_postStaff(
        name,
        doB,
        salaryScale,
        startDate,
        department,
        annualLeave,
        overTime
      )
    ),
  fetchStaffs: () => {
    dispatch(thunk_fetchStaffs());
  },
  fetchDepartment: () => {
    dispatch(thunk_fetchDepartment());
  },
  fetchDelStaffs: (id) => {
    dispatch(thunk_fetchDelStaffs(id));
  },
  fetchSalary: () => dispatch(thunk_fetchSalary()),
});
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartment();
    this.props.fetchSalary();
  }

  render() {
    // GÁN STATE = BIẾN
    let staffVar = this.props.staffs.staffs;
    let departmentVar = this.props.departments.departments;
    let salaryVar = this.props.salary.salary;
    const arr = salaryVar.map((staff) => staff);

    let postStaff = this.props.postStaff;
    let fetchDelStaffs = this.props.fetchDelStaffs;
    let fetchUpdateStaff = this.props.fetchUpdateStaff;
    // function StaffhWithId() {
    //   const { staffid } = useParams();
    //   return (
    //     <div className='container my-5'>
    //       <Staffs
    //         staff={
    //           //Nếu gọi trực tiếp this.state.staffs sẽ lỗi 'state' chưa delare
    //           //(cũng không biết tại sao, Nhờ mentor giải thích giúp )
    //           staffVar.filter((staff) => staff.id === parseInt(staffid, 10))[0]
    //         }
    //       />
    //     </div>
    //   );
    // }
    function DepartmentAndStaff() {
      const { dept } = useParams();
      if (dept !== null)
        return (
          <DepartmentStaff
            staffVar={staffVar}
            staff={staffVar.filter((staff) => staff.departmentId === dept)}
            departments={departmentVar}
            fetchDelStaffs={fetchDelStaffs}
            postStaff={postStaff}
            fetchUpdateStaff={fetchUpdateStaff}
          />
        );
      return (
        <Staffs
          staffs={this.props.staffs}
          department={this.props.departments}
          postStaff={this.props.postStaff}
          fetchDelStaffs={this.props.fetchDelStaffs}
          fetchUpdateStaff={this.props.fetchUpdateStaff}
        />
      );
    }

    return (
      <div>
        <div className='body'>
          <NavbarCom />

          <Routes>
            <Route
              path='/staffs'
              element={
                <Staffs
                  staffs={this.props.staffs}
                  department={this.props.departments}
                  postStaff={this.props.postStaff}
                  fetchDelStaffs={this.props.fetchDelStaffs}
                  fetchUpdateStaff={this.props.fetchUpdateStaff}
                />
              }
            />

            {/*<Route path='/staffs/:staffid' element={<StaffhWithId />} /> */}

            <Route path='/staffs/*' element={<Navigate to='/staffs' />} />
            <Route
              path='/department'
              element={
                <Department departments={this.props.departments.departments} />
              }
            />
            <Route
              path='/department/:dept'
              element={
                <DepartmentAndStaff
                  departments={this.props.departments.departments}
                />
              }
            />

            <Route path='/salary' element={<Salary salaryStaff={arr} />} />
            <Route path='*' element={<Navigate to='/staffs' />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
