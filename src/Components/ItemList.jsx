import Item from "./Item"



const ItemList = (props) => {
    return(
        //NO RENDERIZA LAS IMAGENES
            <Item src={props.src} name={props.name} price={props.price} id={props.id}/>
    )
}


export default ItemList;