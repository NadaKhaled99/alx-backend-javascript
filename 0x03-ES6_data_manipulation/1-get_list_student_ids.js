const getListStudentIds = (liststudents) => {
  let listStudentIds = [];
  if (!(liststudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = liststudents.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
