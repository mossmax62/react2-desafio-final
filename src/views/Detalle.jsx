import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaProvider";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, agregarProducto } = useContext(PizzaContext);
  const [pizzaDetail, setPizzaDetail] = useState({});

  const getData = async () => {
    const informacion =await pizzas.find((pizza) => pizza.id == id);
    setPizzaDetail(informacion);
  };

  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      {pizzaDetail && (
        <div className="container">
          <div className="card">
            <div className="row">
                <div className="col-md-6">
                    <img src={pizzaDetail.img} alt="" />
                </div>
                <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{pizzaDetail.name}</h5>
                  
                  <p className="card-text">{pizzaDetail.desc}</p>
                  Ingredientes:
                  <ul>
                  {pizzaDetail.ingredients && pizzaDetail.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>{ingredient}</li>
                    )
                  })}  
                    </ul>
                  
                  <div className="d-flex justify-content-around">
                  <strong className="card-text">Precio : {pizzaDetail.price}</strong>
                  <button className="btn btn-success" onClick={()=>agregarProducto(pizzaDetail)}>
                    Agregar
                  </button>

                  </div>
  
                </div>
                </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Detalle;
