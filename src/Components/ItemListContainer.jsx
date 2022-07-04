import { useState, useEffect } from "react";
import ItemList from "./ItemList";



const productsShoes = [
    {name: "Authentic", img: "../ItemsFolder/Shoes/Authentic.webp", price: 60.00, id: "s1"},
    {name: "Canvas Old Skool", img: "../ItemsFolder/Shoes/CanvasOldSkool.webp", price: 70.00, id: "s2"},
    {name: "Checkerboard Slip-On", img: "../ItemsFolder/Shoes/CheckerboardSlipOn.webp", price: 65.00, id: "s3"},
    {name: "Era 59", img: "../ItemsFolder/Shoes/Era59.webp", price: 65.00, id: "s4"},
    {name: "Era", img: "../ItemsFolder/Shoes/Era.webp", price: 70.00, id: "s5"},
    {name: "Old Skool", img: "../ItemsFolder/Shoes/OldSkool.webp", price: 70.00, id: "s6"},
    {name: "Sk8-Hi", img: "../ItemsFolder/Shoes/Sk8/Hi.webp", price: 65.00, id: "s7"},
    {name: "UltraRange EXO", img: "../ItemsFolder/Shoes/UltraRangeEXO.webp", price: 100.00, id: "s8"}
]

const ItemListContainer = (props) => {


    const [items, setItems] = useState([]) 

    async function getProducts() {
        const response = await productsShoes;
        const d = await response;
        setItems(d);
    }

    useEffect(() => {

    getProducts();

    }, []);




    return(
        <>
            <div className="flex m-32">
                <h1 className="font-bold text-4xl text-gray-700 ">{props.greeting}</h1>
            </div>
            <div className=" mt-12 ml-32 mr-32 mb-12 flex flex-wrap">
                {items.map((it) => <ItemList src={it.img} name={it.name} price={it.price.toFixed(2)} id={props.id} key={it.id}/>)}
            </div>
        </>
    );
};
// NO RENDERIZA LAS IMAGENES


export default ItemListContainer;