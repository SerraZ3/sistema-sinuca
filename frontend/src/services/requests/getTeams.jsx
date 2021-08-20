import api from "../api";
const getTeams = async () => {
  const responseGetTable = await api.get(`/teams`);
  return responseGetTable.data;
};
export default getTeams;
