function CartItem({
    item,
    addCart,
    onDeleteCartItem
}){
    return(
        <>
        <div>
            <img src={item.image} alt="product_picture"/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>type:{item.product_type}</p>
            <p>count: {item.count} </p>
            <button
            className="cartItemCount"
            data-id={item.id}
            onClick={ (e) => {
                const id = e.target.dataset.id;
                onDeleteCartItem(id);
              }}
            >-</button>
            <button
            className="cartItemCount"
            data-id={item.id}
            onClick={ (e) => {
                const id = e.target.dataset.id;
                addCart(id);
              }}
            >+</button>
        </div>
        </>
    );
}

export default CartItem;