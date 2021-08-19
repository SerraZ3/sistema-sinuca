import api from "../api";
const addPoint = async ({ indexTable, indexTeam, pointValue }) => {
  const responseAddPoint = await api.put("/tables/insert-point", {
    indexTable,
    indexTeam,
    pointValue,
  });
  return responseAddPoint.data;
};
export default addPoint;
