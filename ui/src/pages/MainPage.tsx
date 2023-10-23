import React from "react";
// @ts-ignore
import ImageGallery from "react-image-gallery";
import "../sass/MainPage.scss"
import {useNavigate} from "react-router-dom";
import productsData from "../components/model/Products";

const images = [
    {
        original: "https://www.editorialite.com/wp-content/uploads/2022/12/Photography-101-How-To-Master-Your-Camera.png"
    },
    {
        original: "https://meetstheeyestudios.com/wp-content/uploads/2017/05/outdoor-photography.png"
    },
    {
        original: "https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe.jpg"
    },
    {
        original: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg"
    }
];

function MainPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="image-gallery-container">
                <div className="half-visible-stripe d-flex justify-content-center align-items-center">
                    <p className={"text-white text-center responsive-text"}>Witaj w BetterPhoto - Twoim przystanku w
                        świecie fotografii!</p>
                </div>
                <ImageGallery items={images}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              autoPlay={true}
                              showNav={false}
                              showBullets={true}
                              showThumbnails={false}
                />
            </div>
            <div className="scrollable-container">
                <div className="d-flex flex-row flex-nowrap justify-content-center">
                    {productsData.map((product) =>
                        <div key={product.id} className="card m-1" style={{width: "27rem"}}>
                            <img className="card-img-top" src={product.image} alt={""}/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{product.name}</h5>
                                <p className="card-text">{product.text}</p>
                                <h5 className="card-title">{product.price}</h5>
                                <button className="default-button" onClick={() => {
                                    navigate(`/products/${product.id}`)
                                }}>Sprawdź szczegóły
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default MainPage;
