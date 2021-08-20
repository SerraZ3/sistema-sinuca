import api from "../api";
const showTable = async ({ indexTable }) => {
  const responseGetTable = await api.get(`/tables/${indexTable}`);
  return responseGetTable.data;
};
export default showTable;
