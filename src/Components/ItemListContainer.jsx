import { elementTypeAcceptingRef } from "@mui/utils";
import { useState, useEffect } from "react";
import Item from "./Item";
import ItemDivContainer from "./ItemDivContainer";
import ItemList from "./ItemList";

const productsShoes = [
    {name: "Authentic", img: "https://images.vans.com/is/image/Vans/VN000EE3W00-HERO?$PLP-IMAGE$", price: 60.00, description:"First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable canvas and synthetic uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.", id: "s1"},
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

    const getItem = (id) => {

        const product = items.find((item) => {
        return item.id === id
        });

        return <ItemDivContainer src={product.img} name={product.name} price={product.price} description={product.description}/>
    };
    

    


    return(
        <>
            <div className="flex m-24 ml-32">
                <h1 className="font-bold text-4xl text-gray-700 ">{props.greeting}</h1>
            </div>
            <div className="  ml-32 mr-32 mb-12 flex flex-wrap justify-center">
                {items.map((it) => <ItemList src={it.img} name={it.name} price={it.price.toFixed(2)} key={it.id}/>)}
            </div>
            <div>
                {getItem("s1")}
            </div>
        </>
    );
};

                // {items.map((it) => {
                //     if(it.id === "s1"){
                //     return <ItemDivContainer src={it.img} name={it.name} price={it.price.toFixed(2)} key={it.id} description={it.description}/>
                //     }
                // })}
export default ItemListContainer;