import React, {useState} from 'react';
import Layout from '../../../components/Layout';




const MenEnduringPant = () => {

    const [colorSelected, setColorSelected] = useState('dark');
    const [imgSrc, setImgSrc] = useState('/men/bottoms/men_enduring_dark.jpg');
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
                    setImgSrc('/men/bottoms/men_enduring_dark.jpg');
                    break;
                case 'brown':
                    setColorSelected('brown');
                    setImgSrc('/men/bottoms/men_enduring_brown.jpg');
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
                    <h3>The Enduring Pant</h3>
                    <p>$179.00</p>
                    <p>Show your legs some love - our best insulation tech into pants to keep you dry.</p>
                
                <div className="color-size-container">
                    <div className="radio-toolbar">
                        <input type="radio" id="radioDark" name="radioColor" onClick={setColor} value="dark"/>
                        <label className="dark" htmlFor="radioDark"></label>
                    </div>
                    <div className="radio-toolbar">
                        <input type="radio" id="radioBrown" name="radioColor" onClick={setColor} value="brown"/>
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
                        <a className="btn-add">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default MenEnduringPant;