import React from "react";
import faqData from "../components/model/FAQ";
import guide from "../components/model/Guide";

function Help() {
    return <>
        <div className={"m-2"}>
            <hr className="divider" />
            <h2 className={"text-center"}>Poradniki</h2>
            <hr className="divider" />
            <div className="d-flex flex-wrap justify-content-center">
                {guide.map((product) =>
                    <div key={product.guide} className="card m-1" style={{width: "27rem"}}>
                        <img className="card-img-top" src={product.photo} alt={""}/>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{product.guide}</h5>
                            <p className="card-text">{product.answear}</p>
                        </div>
                    </div>
                )}
            </div>
            <hr className="divider" />
            <h2 className={"text-center"}>FAQ</h2>
            <hr className="divider" />
            <ul>
                {faqData.map((item, index) => (
                    <li key={item.question}>
                        <strong>{item.question}</strong>
                        <p>{item.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default Help;
