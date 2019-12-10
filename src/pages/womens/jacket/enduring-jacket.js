import React, {useState, useContext} from 'react';
import CartContext from '../../../context/cart-context';
import Layout from '../../../components/Layout';

const WomenEnduringJacket = () => {
    const { items, dispatch } = useContext(CartContext);

    const name = 'The Enduring Jacket';
    const [colorSelected, setColorSelected] = useState('dark');
    const [imgSrc, setImgSrc] = useState('/women/jacket/women_enduring_jacket_dark.jpg');
    const [size, setProductSize] = useState('xs');



    function addItemToCart() {
        dispatch({
            type: 'ADD_ITEM',
            data: {
                name,
                imgSrc,
                colorSelected,
                size,
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
                case 'xs':
                    setProductSize('xs');
                    break;
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
                    setImgSrc('/women/jacket/women_enduring_jacket_dark.jpg');
                    break;
                case 'blue':
                    setColorSelected('blue');
                    setImgSrc('/women/jacket/women_enduring_jacket_blue.jpg');
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
                    <h3>The Enduring Jacket</h3>
                    <p>$189.00</p>
                    <p>Easily meets your needs in any environment with mobility and warmth.</p>
                
                <div className="color-size-container">
                    <div className="radio-toolbar">
                        <input type="radio" id="radioDark" name="radioColor" onClick={setColor} value="dark" defaultChecked/>
                        <label className="dark" htmlFor="radioDark"></label>

                        <input type="radio" id="radioBlue" name="radioColor" onClick={setColor} value="blue"/>
                        <label className="blue" htmlFor="radioBlue"></label>

                    </div>

                
                    <div className="sizes-container">
                        <div className="size-toolbar">
                            <input id="option-xs" className="product__size" type="radio" onClick={setSize} name="product-option" value="xs" defaultChecked />
                            <label className="product__size-label" htmlFor="option-xs">XS</label>

                            <input id="option-s" className="product__size" type="radio" onClick={setSize} name="product-option" value="s" />
                            <label className="product__size-label" htmlFor="option-s">S</label>

                            <input id="option-m" className="product__size" type="radio" onClick={setSize} name="product-option" value="m" />
                            <label htmlFor="option-m">M</label>

                            <input id="option-l" className="product__size" type="radio" onClick={setSize} name="product-option" value="l" />
                            <label htmlFor="option-l">L</label>

                            <input id="option-xl" className="product__size" type="radio" onClick={setSize} name="product-option" value="xl" />
                            <label htmlFor="option-xl">XL</label>

                            <input id="option-2xl" className="product__size" type="radio" onClick={setSize} name="product-option" value="2xl" />
                            <label htmlFor="option-2xl">2XL</label>

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

export default WomenEnduringJacket;