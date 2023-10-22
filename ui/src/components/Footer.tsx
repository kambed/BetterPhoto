import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

function Footer() {
    return <>
        {/*Footer*/}
        <footer className="text-center text-white" style={{backgroundColor: "#643900"}}>
            {/*Grid container*/}
            <div className="container pt-4">

                {/*Section: Links*/}
                <section className="">
                    {/*Grid row*/}
                    <div className="row d-flex justify-content-center mb-2">
                        <h5 className="text-uppercase">Links</h5>
                        <div className="col-auto">
                            <Link to="/products" style={{color: '#FFFFFF'}}>Oferta</Link>
                        </div>
                        <div className="col-auto">
                            <Link to="/gallery" style={{color: '#FFFFFF'}}>Galeria</Link>
                        </div>
                        <div className="col-auto">
                            <Link to="/help" style={{color: '#FFFFFF'}}>Pomoc</Link>
                        </div>
                        <div className="col-auto">
                            <Link to="/contact" style={{color: '#FFFFFF'}}>Kontakt</Link>
                        </div>
                    </div>
                    {/*Grid row*/}
                </section>
                {/*Section: Links*/}

                {/*Section: Form*/}
                <section className="">
                    <form action="">
                        {/*Grid row*/}
                        <div className="row d-flex justify-content-center">
                            {/*Grid column*/}
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Zapisz się do newslettera</strong>
                                </p>
                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-md-5 col-12">
                                {/*Email input*/}
                                <div className="form-outline form-white">
                                    <input type="email" id="form5Example21" className="form-control" />
                                    <label className="form-label">Adres email</label>
                                </div>
                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-auto">
                                {/*Submit button*/}
                                <button type="submit" className="btn btn-outline-light">
                                    Zapisz się
                                </button>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </form>
                </section>
                {/*Section: Form*/}

                {/*Section: Social media*/}
                <section className="my-2">
                    {/*Facebook*/}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/kamil.bednarek.1466/" role="button">
                        <i className="fa fa-facebook-f"/>
                    </a>

                    {/*Twitter*/}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/kambed111" role="button">
                        <i className="fa fa-twitter"/>
                    </a>

                    {/*Google*/}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://kambed.github.io/" role="button">
                        <i className="fa fa-google"/>
                    </a>

                    {/*Instagram*/}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/kambed11/" role="button">
                        <i className="fa fa-instagram"/>
                    </a>

                    {/*Linkedin*/}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/kamil-bednarek2001/" role="button">
                        <i className="fa fa-linkedin"/>
                    </a>

                    {/*GitHub*/}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/kambed" role="button">
                        <i className="fa fa-github"/>
                    </a>
                </section>
                {/*Section: Social media*/}
            </div>
            {/*Grid container*/}

            {/*Copyright*/}
            <div className="text-center pb-3" style={{background: "rgba(0, 0, 0, 0.2);"}}>
                © 2023 Copyright: kambed
            </div>
            {/*Copyright*/}
        </footer>
        {/*Footer*/}
    </>
}

export default Footer;
