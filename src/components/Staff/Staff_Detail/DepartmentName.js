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
export default deptName;
