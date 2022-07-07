

const ItemDivContainer = (props) => {


    return(
        <div className="flex m-24 ml-32 justify-around flex-wrap">
            <div className="flex gap-8">
                <figure className="table">
                    <img src={props.src} alt="" className="max-w-none" />
                </figure>
                <div className="flex flex-col gap-8">

                    <h2 className="text-lg font-bold">{props.name}</h2>



                    <div className="flex items-end gap-4">
                        <h3 className="font-bold mt-10">Select a Color</h3>
                        <button className="w-7 h-7 border-solid border-grey border-2 bg-black"></button>
                        <button className="w-7 h-7 border-black border-solid border-grey border-2 bg-white"></button>
                    </div>

                    <div className="flex items-end gap-10">
                        <h3 className="font-bold mt-10 text-center">Select your Size</h3>
                        <select>
                                    <option value="">Select the Size</option>
                                    <option value="">3.5 Boys = 5.0 Women</option>
                                    <option value="">4.0 Boys = 5.5 Women</option>
                                    <option value="">4.5 Boys = 6.0 Women</option>
                                    <option value="">5.0 Boys = 6.5 Women</option>
                                    <option value="">5.5 Boys = 7.0 Women</option>
                                    <option value="">6.0 Boys = 7.5 Women</option>
                                    <option value="">6.5 Boys = 8.0 Women</option>
                                    <option value="">7.0 Boys = 8.5 Women</option>
                                    <option value="">7.5 Boys = 9.0 Women</option>
                                    <option value="">8.0 Boys = 9.5 Women</option>
                                    <option value="">8.5 Boys = 10.0 Women</option>
                                    <option value="">9.0 Boys = 10.5 Women</option>
                                    <option value="">9.5 Boys = 11.0 Women</option>
                                    <option value="">10.0 Boys = 11.5 Women</option>
                                    <option value="">10.5 Boys = 12.0 Women</option>
                                    <option value="">11.0 Boys = 12.5 Women</option>
                                    <option value="">11.5 Boys = 13.0 Women</option>
                                    <option value="">12.0 Boys = 13.5 Women</option>
                                    <option value="">12.5 Boys = 14.0 Women</option>
                        </select>                                
                    </div>
                    <div className="gap-8">
                        <h3 className="font-bold mt-10">DESCRIPTION</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <span className="text-red-600 font-bold">${props.price}</span>
                    
                        <a href="#" className="cursor-pointer text-center hover:bg-black duration-500 bg-red-600 text-white font-bold text-base p-3 justify-self-end w-80">ADD TO CART</a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default ItemDivContainer;