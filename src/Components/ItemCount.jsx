import { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircle } from "react-icons/md"

const ItemCount = (props) => {
    const [ammount, setAmmount] = useState(1);

    const addBtn = () =>{
        if(ammount < props.stock){
            setAmmount(ammount + 1);
            console.log(ammount);
        }else{
            alert("Cantidad Invalida")
        }
    }

    const removeBtn = () =>{
        if(ammount > 0){
            setAmmount(ammount - 1);
            console.log(ammount);
        }else{
            alert("Cantidad Invalida")
        }
    }


    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center border-solid border-black border-2 pl-10 pr-10 pt-5 pb-5">
                <p>Ammount</p>
                <MdAddCircleOutline className="cursor-pointer" onClick={addBtn} />
                <div>{ammount}</div>
                <MdRemoveCircle className="cursor-pointer" onClick={removeBtn} />
            </div>
        </div>
    );
};

export default ItemCount;