import  Authentic  from "../ItemsFolder/Shoes/Authentic.webp"




const Item = (props) => {
    return(
        //NO RENDERIZA LAS IMAGENES
        <div className="flex flex-col items-center m-4 box-border border-white border-2 border-solid hover:border-solid hover:border-black  w-fit relative">
            <div className="relative">
                <img src={props.src} className="w-[24rem] h-[24rem] " alt="Authentic" />

            </div>
            <div className="flex flex-col items-center">
                <span className=" font-bold">{props.name}</span>
                <span className="text-red-600 font-bold">${props.price}</span>
            </div>
        </div>
    );
};

export default Item;