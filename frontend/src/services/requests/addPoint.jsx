import api from "../api";
const addPoint = async ({ indexTable, indexTeam, pointValue }) => {
  const responseAddPoint = await api.post("/tables/insert-point", {
    indexTable,
    indexTeam,
    pointValue,
  });
  return responseAddPoint.data;
};
export default addPoint;
