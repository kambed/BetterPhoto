import {useParams} from "react-router-dom";
import React, {useState} from "react";
import productsData from "../components/model/Products";
import reviewsData from "../components/model/Reviews";

function OfferDetails() {
    const {id} = useParams();
    const product = productsData.find(product => parseInt(id as string) === product.id)!!;
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        setAuthor('');
        setText('');
    };
    return (
        <>
            <div className="offer-details">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.image} alt={product.name} className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h1>{product.name}</h1>
                            <p>{product.text}</p>
                            <h5>Cena: {product.price}</h5>
                            <button className="btn default-button text-white">Kup teraz</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-section">
                <hr className="divider" />
                <h2 className="m-4">Opinie klientów</h2>
                <hr className="divider" />
                <div className="row">
                    {reviewsData.map((review, index) => (
                        <div key={review.text} className="review card m-2" style={{backgroundColor: "#ffecdc"}}>
                            <div className="card-body">
                                <h3 className="card-title">{review.author}</h3>
                                <p className="card-text">{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="divider" />
                <div className="add-review m-4">
                    <h3>Dodaj nową opinię</h3>
                    <div className="form-group m-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Imię autora"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="form-group m-1">
                        <textarea
                            className="form-control"
                            placeholder="Treść opinii"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <button className="btn default-button text-white" onClick={handleSubmit}>
                        Dodaj opinię
                    </button>
                </div>
            </div>
        </>

    );
}

export default OfferDetails;
