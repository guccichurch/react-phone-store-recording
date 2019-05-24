import React from 'react'

export default function CartItem({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        /* my-2 margin 2 gesen ug*/
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style = {{ width:'5rem', height:"5rem" }} className="img-fluid" alt="productl"></img>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {/* d-lg-none gedeg n herwee tsonh maani fullscreen tom bolson uyed yuch haruulahgui gesen ug */}
                <span className="d-flex justify-content-center"> product: {title}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {/* d-lg-none gedeg n herwee tsonh maani fullscreen tom bolson uyed yuch haruulahgui gesen ug */}
                <span className="d-flex justify-content-center"> price: {price}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>

                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>

                        </span>                        
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>            
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : ${total}</strong>
            </div>

        </div>
    )
}
