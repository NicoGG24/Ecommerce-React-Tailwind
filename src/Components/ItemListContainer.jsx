import { useState, useEffect } from "react";
import ItemList from "./ItemList";



const productsShoes = [
    {name: "Authentic", img: "https://images.vans.com/is/image/Vans/VN000EE3W00-HERO?$PLP-IMAGE$", price: 60.00, id: "s1"},
    {name: "Canvas Old Skool", img: "https://images.vans.com/is/image/Vans/VN000D3HBKA-HERO?hei=494&wid=492&qlt=85", price: 70.00, id: "s2"},
    {name: "Checkerboard Slip-On", img: "https://images.vans.com/is/image/Vans/VN000EYEBWW-HERO?$PLP-IMAGE$", price: 65.00, id: "s3"},
    {name: "Era 59", img: "	https://images.vans.com/is/image/Vans/VN0A34589ME-HERO?hei=494&wid=492&qlt=85", price: 65.00, id: "s4"},
    {name: "Era", img: "https://images.vans.com/is/image/Vans/VN000EWZNVY-HERO?hei=494&wid=492&qlt=85", price: 70.00, id: "s5"},
    {name: "Old Skool", img: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$PLP-IMAGE$", price: 70.00, id: "s6"},
    {name: "Sk8-Hi", img: "https://images.vans.com/is/image/Vans/VN0A7Q5NUUS-HERO?hei=494&wid=492&qlt=85", price: 65.00, id: "s7"},
    {name: "UltraRange EXO", img: "https://images.vans.com/is/image/Vans/VN0A4U1KBLK-HERO?$PLP-IMAGE$", price: 100.00, id: "s8"},
    {name: "Customs Monoboard Slip-On", img: "https://images.vans.com/is/image/Vans/VN0A3VC1068-ALT1?hei=494&wid=492&qlt=85", price: 75.00, id: "s9"}
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
            <div className="flex m-24 ml-32">
                <h1 className="font-bold text-4xl text-gray-700 ">{props.greeting}</h1>
            </div>
            <div className="  ml-32 mr-32 mb-12 flex flex-wrap">
                {items.map((it) => <ItemList src={it.img} name={it.name} price={it.price.toFixed(2)} key={it.id}/>)}
            </div>
        </>
    );
};
// NO RENDERIZA LAS IMAGENES


export default ItemListContainer;