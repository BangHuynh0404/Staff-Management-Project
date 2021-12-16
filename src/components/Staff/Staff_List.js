import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardImg, Button } from 'reactstrap';
import UpdateStaffModal from './Staff_form_update';

export default function StaffList({
  departmentFilter,
  numOfCol,
  fetchDelStaffs,
  fetchUpdateStaff,
}) {
  const [isModalOpen, setModal] = useState(false);

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

              {/* NÚT XÓA */}

              <Button
                className='btn-danger ms-auto flex-fill'
                onClick={() => {
                  fetchDelStaffs(staff.id);
                  setModal(!isModalOpen);
                }}
              >
                Xóa
              </Button>
            </div>
          </CardBody>
        </Card>

        {/*</Link>*/}
      </div>
    );
  });
  return staffList;
}
