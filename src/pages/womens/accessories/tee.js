import React, {useState} from 'react';
import Layout from '../../../components/Layout';




const WomenTee = () => {

    const [colorSelected, setColorSelected] = useState('dark');
    const [imgSrc, setImgSrc] = useState('/tee.jpg');
    const [size, setProductSize] = useState('s');


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
                    setImgSrc('/tee.jpg');
                    break;
                default:
                    break;
            }
        }
        
    }

    return (
        <Layout>
            <div className="home__row">
                <div className="home__image-area">
                    <img src={imgSrc} alt="main woman" className="home-image"/>
                </div>
                <div className="home__text-area">
                    <h3>Women's Tee</h3>
                    <p>$25.00</p>
                    <p>Fully organic cotton tee, comfy, warm and looking your best.</p>
                
                <div className="color-size-container">
                    <div className="radio-toolbar">
                        <input type="radio" id="radioDark" name="radioColor" onClick={setColor} value="dark"/>
                        <label className="dark" htmlFor="radioDark"></label>

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
                        </div>
                    </div>
                </div>
                    <div className="btn-add-container">
                        <a className="btn-add">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default WomenTee;