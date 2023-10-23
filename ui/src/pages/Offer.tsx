import {useNavigate} from "react-router-dom";
import productsData from "../components/model/Products";

function Offer() {
    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {productsData.map((product) =>
                    <div key={product.id} className="card m-1" style={{width: "27rem"}}>
                        <img className="card-img-top" src={product.image} alt={""}/>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{product.name}</h5>
                            <p className="card-text">{product.text}</p>
                            <h5 className="card-title">{product.price}</h5>
                            <button className="default-button" onClick={() => {
                                navigate(`${product.id}`)
                            }}>Sprawdź szczegóły
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Offer;
