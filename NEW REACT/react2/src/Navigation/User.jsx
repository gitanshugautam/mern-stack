import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile/101");
  };

  return (
    <>
      <h1>User Page</h1>
      <button onClick={goToProfile}>Go To Profile</button>
    </>
  );
};

export default User;