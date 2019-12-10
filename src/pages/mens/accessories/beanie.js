import React, {useState} from 'react';
import Layout from '../../../components/Layout';




const MenBeanie = () => {

    const [colorSelected, setColorSelected] = useState('gray');
    const [imgSrc, setImgSrc] = useState('/beanie_gray.jpg');

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
        <Layout>
            <div className="home__row">
                <div className="home__image-area">
                    <img src={imgSrc} alt="main woman" className="home-image"/>
                </div>
                <div className="home__text-area">
                    <h3>The Beanie</h3>
                    <p>$35.00</p>
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
                        <a className="btn-add">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default MenBeanie;