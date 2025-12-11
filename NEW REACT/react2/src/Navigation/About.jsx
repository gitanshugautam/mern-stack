import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <>
      <h1>About Page</h1>
      <p>{location.state?.message}</p>
    </>
  );
};

export default About;