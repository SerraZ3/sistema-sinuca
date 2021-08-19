import api from "../api";
const createTeam = async ({ name, namePlayer1, namePlayer2 }) => {
  const responseCreateTeam = await api.post("/teams", {
    name,
    namePlayer1,
    namePlayer2,
  });
  return responseCreateTeam.data;
};
export default createTeam;
