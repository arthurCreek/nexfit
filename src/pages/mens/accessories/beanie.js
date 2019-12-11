import React, {useState, useContext} from 'react';
import CartContext from '../../../context/cart-context';
import Layout from '../../../components/Layout';

const MenBeanie = () => {
    const { items, dispatch } = useContext(CartContext);

    const name = 'The Beanie';
    const cost = 35;
    const [colorSelected, setColorSelected] = useState('gray');
    const [imgSrc, setImgSrc] = useState('/beanie_gray.jpg');
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
                    setImgSrc('/beanie_gray.jpg');
                    break;
                case 'blue':
                    setColorSelected('blue');
                    setImgSrc('/beanie_blue.jpg');
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
                    <h3>The Beanie</h3>
                    <p>${cost}.00</p>
                    <p>Designed to keep your head toasty and your outing on track.</p>
                
                <div className="color-size-container">
                    <div className="radio-toolbar">
                        <input type="radio" id="radioGray" name="radioColor" onClick={setColor} value="gray" defaultChecked/>
                        <label className="gray" htmlFor="radioGray"></label>
                    </div>
                    <div className="radio-toolbar">
                        <input type="radio" id="radioBlue" name="radioColor" onClick={setColor} value="blue"/>
                        <label className="blue" htmlFor="radioBlue"></label>
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

export default MenBeanie;