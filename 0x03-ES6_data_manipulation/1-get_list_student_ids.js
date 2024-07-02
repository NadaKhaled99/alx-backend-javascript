const getListStudentIds = (listStudent) => {
  let listStudentIds = [];
  if (!(listStudent instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listStudent.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
