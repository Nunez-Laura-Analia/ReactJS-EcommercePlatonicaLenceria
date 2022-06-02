import ItemDetail from "../ItemDetail/ItemDetail"
import  productos  from '../ItemListContainer/ItemListContainer'
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product , setProduct] = useState ({})
    // const getItem = () => {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve(producto);
    //       }, 2000);
    //     });
    // };

    useEffect(() => {
        // getItem()
        // .then( (res) => {
        //     console.log("item : ", res)
        //     setProduct(res)
        // })

        setProduct(productFilter)
    }, [])

    const productFilter = productos.find ( (product) => {
        return product.id == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer 