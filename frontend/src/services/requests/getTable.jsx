import api from "../api";
const getTable = async ({ indexTable }) => {
  const responseGetTable = await api.get(`/tables/${indexTable}`);
  return responseGetTable.data;
};
export default getTable;
