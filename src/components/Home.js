import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p>I AM HOME.</p>
      <button className="ui button" onClick={handleLogOut}>
        LOGOUT
      </button>
    </>
  );
};

export default Home;
