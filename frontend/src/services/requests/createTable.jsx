import api from "../api";
const createTable = async ({ name, award, maxPoint, descriptionPoint }) => {
  const responseCreateTable = await api.post("/tables", {
    name,
    award,
    maxPoint,
    descriptionPoint,
  });
  return responseCreateTable.data;
};
export default createTable;
