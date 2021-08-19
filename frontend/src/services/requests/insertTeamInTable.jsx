import api from "../api";
const insertTeamInTable = async ({ indexTeam, indexTable }) => {
  const responseInsertTeamInTable = await api.put("/tables/insert-team", {
    indexTeam,
    indexTable,
  });
  return responseInsertTeamInTable.data;
};
export default insertTeamInTable;
