import React, {useState, useContext} from 'react';
import CartContext from '../../../context/cart-context';
import Layout from '../../../components/Layout';



const WomenMittens = () => {
    const { items, dispatch } = useContext(CartContext);

    const name = 'The Mitten';
    const cost = 79;
    const [colorSelected, setColorSelected] = useState('dark');
    const [imgSrc, setImgSrc] = useState('/women/accessories/women_mittens_min.jpg');
    const [size, setProductSize] = useState('m');

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
                case 'm':
                    setProductSize('m');
                    break;
                case 'l':
                    setProductSize('l');
                    break;
                case 'xl':
                    setProductSize('xl');
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
                    setImgSrc('/women/accessories/women_mittens_min.jpg');
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
                    <h3>The Mitten</h3>
                    <p className="product__cost">$ {cost}.00</p>
                    <p className="product__description">Our mittens are a complete weather seal for days when cold digits are not an option.
                    The Mittens are ridiculously warm. Like little solar cocoons for your hands, they absolutely shut down the cold. 
                    When we experiment with liquid nitrogen (it’s kind of a thing), we always reach for a pair.</p>
                
                <div className="color-size-container">
                    <div className="color-size-container--column">
                        <div>
                            <h3 className="options-title">COLOR</h3>
                        </div>
                        <div className="radio-toolbar">
                            <input type="radio" id="radioDark" name="radioColor" onClick={setColor} value="dark"/>
                            <label className="dark" htmlFor="radioDark"></label>
                        </div>
                    </div>

                
                    <div className="color-size-container--column">
                        <div>
                            <h3 className="options-title">SIZE</h3>
                        </div>
                        <div className="size-toolbar">
                            <input id="option-m" className="product__size" type="radio" onClick={setSize} name="product-option" value="m" defaultChecked/>
                            <label htmlFor="option-m">M</label>

                            <input id="option-l" className="product__size" type="radio" onClick={setSize} name="product-option" value="l" />
                            <label htmlFor="option-l">L</label>

                            <input id="option-xl" className="product__size" type="radio" onClick={setSize} name="product-option" value="xl" />
                            <label htmlFor="option-xl">XL</label>

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

export default WomenMittens;