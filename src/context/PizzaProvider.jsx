import { createContext, useEffect,useState } from "react";

// Creación del context o contexto
export const PizzaContext = createContext()


const PizzaProvider = ({ children }) => {
 
    const [pizzas, setPizzas] = useState([])
    const [carrito, setCarrito] = useState([])
    // Obtener data
 

    const getPizzas = async()=>{
        const response = await fetch("/pizzas.json")
        const pizzas = await response.json()
        setPizzas(pizzas)
    }

    const agregarProducto =({id,price,name,img,desc})=>{
        const product_existe = carrito.find(product => product.id === id)
        const product = {id,price,name,img,desc, count: 1}
        if(product_existe !== undefined){
            // Sumar uno mas
            carrito[carrito.findIndex(producto => producto.id === product.id)].count++;
            setCarrito([...carrito])
        }else{
            // agregar
            setCarrito([...carrito,product])
        }

    }
    const incrementar =(index)=>{
        carrito[index].count++
        setCarrito([...carrito])
    }
    
    const decrementar =(index)=>{
        // Si el producto tiene 1 lo elimino
        // Si el producto tiene mas de 1 decremento
        const {count} = carrito[index]
        if(count > 1){
            carrito[index].count--
            setCarrito([...carrito])
        }else{//Si el producto es igual a 1
            carrito.splice(index,1)
            setCarrito([...carrito])
        }
    }
    useEffect(()=>{
        getPizzas()
    },[])

    return(
        <PizzaContext.Provider value={{pizzas, agregarProducto,carrito,incrementar,decrementar}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider