import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaProvider";
import { useContext } from "react";

const Menu = () => {
  const { carrito } = useContext(PizzaContext);
  const total = carrito.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.count,
    0
  );
  console.log(total);
  return (
    <>
      <nav className="navbar navbar-dark bg-light">
        <div className="container-fluid">
          <Link to="/">
            <h4>Salvatore´s Pizza</h4>
          </Link>
          <Link to="/carrito">
            <h4>Total: ${total}</h4>
          </Link>
        </div>
      </nav>
      <div className="container">
        <img src="src/assets/banner.jpeg" width="100%" height="50%" alt="" />
      </div>
    </>
  );
};

export default Menu;
