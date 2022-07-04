import  Authentic  from "../ItemsFolder/Shoes/Authentic.webp"




const Item = (props) => {
    return(
        //NO RENDERIZA LAS IMAGENES
        <div className="flex flex-col items-center m-4 border-solid border-2 border-transparente hover:border-solid hover:border-black hover:border-2 w-fit relative">
            <div>
                <img src={Authentic} className="max-w-full h-auto" alt="Authentic" />
            </div>
            <div className="flex flex-col items-center">
                <span className=" font-bold">{props.name}</span>
                <span className="text-red-600 font-bold">${props.price}</span>
            </div>
        </div>
    );
};

export default Item;