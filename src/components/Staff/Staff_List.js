import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardImg, Button } from 'reactstrap';
import UpdateStaffModal from './Form/Staff_form_update';
import PopoverStaffInfo from './Staff_Detail/Staff_Detail_PopOver';
import TooltipStaffInfo from './Staff_Detail/Staff_Detail_Tooltip';
import ModalStaffInfo from './Staff_Detail/Staff_Detail_Modal';
import PopoverStaffDelete from './Staff_Detail/Staff_Delete_ConFirm_Popover';
//HIỂN THỊ CARD CỦA NHÂN VIÊN
export default function StaffList({
  departmentFilter,
  numOfCol,
  fetchDelStaffs,
  fetchUpdateStaff,
}) {
  const staffList = departmentFilter.map((staff) => {
    return (
      <div
        className={`d-flex mb-3 word-wrap col-lg-${numOfCol} col-md-4 col-sm-6 justify-content-center my-3 animate__animated animate__backInUp `}
      >
        {/* <Link className='text-decoration-none' to={`/staffs/${staff.id}`}> */}

        <Card
          className='border border-success word-wrap'
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
            <div className='d-flex justify-content-around '>
              {/* NÚT CHỈNH SỬA */}
              <UpdateStaffModal
                staff={staff}
                fetchUpdateStaff={fetchUpdateStaff}
                id={staff.id}
              />

              {/* THÔNG TIN NHÂN VIÊN */}

              {/* CHỌN KIỂU XEM INFO */}
              {/* <TooltipStaffInfo staff={staff} id={staff.id} />*/}
              {/* <ModalStaffInfo staff={staff} id={staff.id} />*/}
              <PopoverStaffInfo staff={staff} id={staff.id} />

              {/* NÚT XÓA */}
              <PopoverStaffDelete
                staff={staff}
                id={staff.id}
                fetchDelStaffs={fetchDelStaffs}
              />
            </div>
          </CardBody>
        </Card>

        {/*</Link>*/}
      </div>
    );
  });
  return staffList;
}
