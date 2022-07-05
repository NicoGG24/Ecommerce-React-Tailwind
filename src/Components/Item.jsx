import  Authentic  from "../ItemsFolder/Shoes/Authentic.webp"




const Item = (props) => {
    return(
        //NO RENDERIZA LAS IMAGENES
        <div className="flex flex-col items-center m-4 box-border border-white border-2 border-solid hover:border-solid hover:border-black  w-fit relative">
            <div className="relative">
                <img src={props.src} className="w-[490] h-[490] " alt="Authentic" />
                <a className=" cursor-pointer text-center hover:bg-black duration-500 absolute bottom-3 translate-x-2/4 w-3/6 bg-red-600 text-white font-bold text-base p-2">MORE DETAILS</a>
            </div>
            <div className="flex flex-col items-center">
                <span className=" font-bold">{props.name}</span>
                <span className="text-red-600 font-bold">${props.price}</span>
            </div>
        </div>
    );
};

export default Item;