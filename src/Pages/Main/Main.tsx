import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>this is main page</h1>
      <h1
        onClick={() => {
          navigate("item");
        }}
      >
        Click to go to single product page
      </h1>
      <h1
        onClick={() => {
          navigate("cart");
        }}
      >
        Click to go to cart
      </h1>

      <div>
        <Spinner />
      </div>
    </>
  );
};

export default Main;
