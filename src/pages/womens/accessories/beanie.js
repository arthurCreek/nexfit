import React, {useState, useContext} from 'react';
import CartContext from '../../../context/cart-context';
import Layout from '../../../components/Layout';

const WomanBeanie = () => {
    const { items, dispatch } = useContext(CartContext);

    const name = 'The Beanie';
    const cost = 35;
    const [colorSelected, setColorSelected] = useState('gray');
    const [imgSrc, setImgSrc] = useState('/beanie_gray_min.jpg');
    const [size, setProductSize] = useState('none');

    function addItemToCart() {
        dispatch({
            type: 'ADD_ITEM',
            data: {
                name,
                imgSrc,
                colorSelected,
                size: 'none',
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
                size: 'none',
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

    function setColor(e) {
        if (e.target.value != colorSelected) {
            switch (e.target.value) {
                case 'gray':
                    setColorSelected('gray');
                    setImgSrc('/beanie_gray_min.jpg');
                    break;
                case 'blue':
                    setColorSelected('blue');
                    setImgSrc('/beanie_blue_min.jpg');
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
                    <h3>The Beanie</h3>
                    <p className="product__cost">$ {cost}.00</p>
                    <p className="product__description">Designed and tested to keep your dome toasty and your outing on track.
                    Cold and stinging ears will end any outdoor adventure with the quickness. Our beanie utilizes a band of 
                    patented insulation to boost warmth and protect your ears. Like a Saturn-esque ring of warmth, 
                    the Beanie will keep you out and about all winter long.</p>
                
                <div className="color-size-container">
                    <div className="color-size-container--column">
                        <div>
                            <h3 className="options-title">COLOR</h3>
                        </div>
                        <div className="radio-toolbar">
                            <input type="radio" id="radioGray" name="radioColor" onClick={setColor} value="gray" defaultChecked/>
                            <label className="gray" htmlFor="radioGray"></label>
                            
                            <input type="radio" id="radioBlue" name="radioColor" onClick={setColor} value="blue"/>
                            <label className="blue" htmlFor="radioBlue"></label>
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

export default WomanBeanie;