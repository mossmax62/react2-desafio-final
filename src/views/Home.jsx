import { PizzaContext } from "../context/PizzaProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  const navigate = useNavigate()

  return (
    <div className="container border">
      <div className="row">
        {pizzas &&
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 rounded p-6">
              <div className="card p-6 m-6">
                <img src={pizza.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">{pizza.price}</p>
                  <a onClick={()=> navigate(`/pizza/${pizza.id}`)} className="btn btn-primary">
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
