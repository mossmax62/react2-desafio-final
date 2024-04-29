import { PizzaContext } from "../context/PizzaProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { pizzas, agregarProducto } = useContext(PizzaContext);
  
  const navigate = useNavigate()

  return (
    <div className="container border">
      <div className="row">
        {pizzas &&
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 rounded mt-6">
              <div className="card">
                <img src={pizza.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  Ingredientes:
                  <ul>
                  {pizza.ingredients && pizza.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>{ingredient}</li>
                    )
                  })}  
                    </ul>
                  <strong className="card-text">Precio : {pizza.price}</strong>
                  <br/>
                  <a onClick={()=> navigate(`/pizza/${pizza.id}`)} className="btn btn-primary">
                    Ver detalle
                  </a>
                  <button className="btn btn-success" onClick={()=>agregarProducto(pizza)}>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
