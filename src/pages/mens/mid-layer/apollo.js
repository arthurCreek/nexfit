import React, {useState, useContext} from 'react';
import CartContext from '../../../context/cart-context';
import Layout from '../../../components/Layout';


const MenAppoloVest = () => {
    const { items, dispatch } = useContext(CartContext);

    const name = 'The Apollo Vest';
    const cost = 119;
    const [colorSelected, setColorSelected] = useState('brown');
    const [imgSrc, setImgSrc] = useState('/men/mid_layer/apollo_vest.jpg');
    const [size, setProductSize] = useState('s');

    function addItemToCart() {
        dispatch({
            type: 'ADD_ITEM',
            data: {
                name,
                imgSrc,
                colorSelected,
                size,
                cost,
                amount: 1
            }
        })
    }

    function editCartItem(amount) {
        dispatch({
            type: 'EDIT_ITEM',
            data: {
                name,
                imgSrc,
                colorSelected,
                size,
                cost,
                amount: amount
            }
        })
    }

    function inList() {
        if(items.length > 0){
            let found = false;
            items.forEach(item => {
                if(item.name === name && item.imgSrc === imgSrc && item.size === size) {
                    editCartItem(1);
                    found = true
                    return;
                }
            });
            if (!found) {
                addItemToCart();
            }
        } else {
            addItemToCart();
        }
    }

    function setSize(e) {
        if(e.target.value != size) {
            switch (e.target.value) {
                case 's':
                    setProductSize('s');
                    break;
                case 'm':
                    setProductSize('m');
                    break;
                case 'l':
                    setProductSize('l');
                    break;
                case 'xl':
                    setProductSize('xl');
                    break;
                case '2xl':
                    setProductSize('2xl');
                    break;
                case '3xl':
                    setProductSize('3xl');
                    break;
                default:
                    break;
            }
        }
    }

    function setColor(e) {
        if (e.target.value != colorSelected) {
            switch (e.target.value) {
                case 'brown':
                    setColorSelected('brown');
                    setImgSrc('/men/mid_layer/apollo_vest.jpg');
                    break;
                default:
                    break;
            }
        }
        
    }

    return (
        <div>
            <div className="home__row">
                <div className="home__image-area">
                    <img src={imgSrc} alt="main woman" className="home-image"/>
                </div>
                <div className="home__text-area">
                    <h3>The Apollo Vest</h3>
                    <p>${cost}.00</p>
                    <p>Protect your core without overheating; our updated take on the performance vest.</p>
                
                <div className="color-size-container">
                    <div className="radio-toolbar">
                        <input type="radio" id="radioBrown" name="radioColor" onClick={setColor} value="brown" defaultChecked/>
                        <label className="brown" htmlFor="radioBrown"></label>
                    </div>

                
                    <div className="sizes-container">
                        <div className="size-toolbar">
                            <input id="option-s" className="product__size" type="radio" onClick={setSize} name="product-option" value="s" defaultChecked />
                            <label className="product__size-label" htmlFor="option-s">S</label>


                            <input id="option-m" className="product__size" type="radio" onClick={setSize} name="product-option" value="m" />
                            <label htmlFor="option-m">M</label>

                            <input id="option-l" className="product__size" type="radio" onClick={setSize} name="product-option" value="l" />
                            <label htmlFor="option-l">L</label>

                            <input id="option-xl" className="product__size" type="radio" onClick={setSize} name="product-option" value="xl" />
                            <label htmlFor="option-xl">XL</label>

                            <input id="option-2xl" className="product__size" type="radio" onClick={setSize} name="product-option" value="2xl" />
                            <label htmlFor="option-2xl">2XL</label>

                            <input id="option-3xl" className="product__size" type="radio" onClick={setSize} name="product-option" value="3xl" />
                            <label htmlFor="option-3xl">3XL</label>
                        </div>
                    </div>
                </div>
                    <div className="btn-add-container">
                        <a className="btn-add" onClick={inList}>ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MenAppoloVest;