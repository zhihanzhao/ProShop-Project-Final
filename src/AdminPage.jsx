import { useState } from "react";
import { SHOW_PAGE } from "./constants";

function AdminPage({showMain, addProduct}){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('')
    const [type, setType] = useState('')

    function onNameChange(e) {
      setName(e.target.value);
    }

    
    function onPriceChange(e) {
        setPrice(e.target.value);
      }
  

    function onImageChange(e) {
        setImage(e.target.value);
    }
    
    function onTypeChange(e) {
        setType(e.target.value);
    }

    function onSubmit(e) {
      e.preventDefault();
      if(name && price && image && type) {
        addProduct(name, price, image, type);
        setName('')
        setPrice('')
        setImage('')
        setType('')
        window.alert("You add item successfully")
      }
    }

    return(
        <div className="adminPage">
            <button className="admin_back" onClick={showMain}>Back</button>
            <form className="admin__form" action="#/admin" onSubmit={onSubmit}>
              <div>
                <label>
                <span>Product Name:</span>
                <input className="admin_name"  onChange={onNameChange}/>
                </label>
              </div>
              <div>
                <label>
                <span>Price:</span>
                <input className="admin_price"  onChange={onPriceChange}/>
                </label>
              </div>
              <div>
                <label>
                <span>Image link:</span>
                <input className="admin_image"  onChange={onImageChange}/>
                </label>
              </div>
              <div>
                <label>
                <span>Product type:</span>
                <input className="admin_type"  onChange={onTypeChange}/>
                </label>
              </div>
                <button className="admin__button" type="submit">Add product</button>
          </form>

        </div>
    )

}

export default AdminPage;