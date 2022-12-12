import ProductItem from "./ProductItem";

function Products({
    productList,
    addCart,
}) {
    return(
        <div className="mainProductList">
            <ul className="products">
                { Object.values(productList).map( item => (
                    <li className="productItem" key={item.id}>
                        <ProductItem
                        item = {item}
                        addCart = {addCart}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;