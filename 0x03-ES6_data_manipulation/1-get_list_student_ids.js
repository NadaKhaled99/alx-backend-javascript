const getListStudentIds = (liststudents) => {
  let liststudentIds = [];
  if (!(liststudents instanceof Array)) {
    return liststudentIds;
  }
  liststudentIds = liststudents.map((student) => student.id);
  return liststudentIds;
};

export default getListStudentIds;
