import api from "../api";
const getTables = async () => {
  const responseGetTable = await api.get(`/tables`);
  return responseGetTable.data;
};
export default getTables;
