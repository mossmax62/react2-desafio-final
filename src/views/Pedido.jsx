import { PizzaContext } from "../context/PizzaProvider"
import { useContext } from "react"
const Pedido =()=>{
    const {carrito,incrementar,decrementar} = useContext(PizzaContext)
    const total = carrito.reduce(
        (acumulador, valorActual) =>
          acumulador + valorActual.price * valorActual.count,
        0
      );

    return(
        <>
        <div className="container">
            <h5>Detalle Pedido:</h5>
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                {
                    carrito.map((product,index) =>(
                        <>
                        <div key={product.id} className="d-flex justify-content-around">
                            <div className="d-flex">
                                <img src={product.img} alt="" width={50}/>
                                <p>{product.name}</p>
                            </div>
                            <div className="d-flex justify-content-around">
                                <p>{product.price}</p>&nbsp;
                                <button className="btn btn-success" onClick={()=>incrementar(index)}>+</button>
                                &nbsp;
                                <p>{product.count}</p>&nbsp;
                                <button className="btn btn-warning" onClick={()=>decrementar(index)}>-</button>
                                &nbsp;
                            </div>
                        </div>
                        <br/>
                        </>

                    ))
                }

            </div>
            <h2>Total: {total}</h2>

        </div>
        
        </>
    )

}

export default Pedido