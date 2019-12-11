import React, {useState, useContext} from 'react';
import CartContext from '../../../context/cart-context';
import Layout from '../../../components/Layout';


const MenParka = () => {
    const { items, dispatch } = useContext(CartContext);

    const name = 'The Mount Parka';
    const cost = 149;
    const [colorSelected, setColorSelected] = useState('dark');
    const [imgSrc, setImgSrc] = useState('/men/jacket/men_mount_parka_dark.jpg');
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
                case 'dark':
                    setColorSelected('dark');
                    setImgSrc('/men/jacket/men_mount_parka_dark.jpg');
                    break;
                case 'blue':
                    setColorSelected('blue');
                    setImgSrc('/men/jacket/men_mount_parka_blue.jpg');
                    break;
                case 'brown':
                    setColorSelected('brown');
                    setImgSrc('/men/jacket/men_mount_parka_brown.jpg');
                    break;
                default:
                    break;
            }
        }
        
    }

    return (
        <div>
            <div className="product__row">
                <div className="product__image-area">
                    <img src={imgSrc} alt="main woman" className="product-image"/>
                </div>
                <div className="product__text-area">
                    <h3>The Mount Parka</h3>
                    <p className="product__cost">${cost}.00</p>
                    <p className="product__description">Uncompromised warmth, unparalleled technology. The latest in our pursuit of scientifically warmer insulation.
                    Meet the greatest thing in warmth since fire. The Orion Parka is our trademark product and the warmest jacket we make. 
                    Engineered with our patented Solarcore insulation, the Orion is waterproof, wind-blocking, and capable of neutralizing 
                    the coldest temperatures out there. Whatever the weather, Orion’s got your back.</p>
                
                <div className="color-size-container">
                    <div className="color-size-container--column">
                        <div>
                            <h3 className="options-title">COLOR</h3>
                        </div>
                        <div className="radio-toolbar">
                            <input type="radio" id="radioDark" name="radioColor" onClick={setColor} value="dark" defaultChecked/>
                            <label className="dark" htmlFor="radioDark"></label>

                            <input type="radio" id="radioBlue" name="radioColor" onClick={setColor} value="blue"/>
                            <label className="blue" htmlFor="radioBlue"></label>

                            <input type="radio" id="radioBrown" name="radioColor" onClick={setColor} value="brown"/>
                            <label className="brown" htmlFor="radioBrown"></label> 
                        </div>
                    </div>

                
                    <div className="color-size-container--column">
                        <div>
                            <h3 className="options-title">SIZE</h3>
                        </div>
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

export default MenParka;