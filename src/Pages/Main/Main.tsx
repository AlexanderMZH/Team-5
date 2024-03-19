import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import CategoryAnim from "../../Components/CategoryAnim";
import CardSlick from "../../Components/card-slick";

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
      <div className="container">
        <CategoryAnim/>
        {/* <CardSlick/> */}
      </div>
    </>
  );
};

export default Main;
