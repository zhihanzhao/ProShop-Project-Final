function ProductItem({
    item,
    addCart
}){
    return(
        <>
        <div>
            <img src={item.image} alt="product_picture"/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>type:{item.product_type}</p>
            <button
            className="add_button"
            data-id={item.id}
            onClick={ (e) => {
                const id = e.target.dataset.id;
                addCart(id);
              }}
            >Add to Cart</button>
        </div>
        </>
    );
}

export default ProductItem;