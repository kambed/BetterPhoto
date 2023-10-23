const images = [
    "https://zurich.swissphotoclub.com/wp-content/uploads/2019/06/Matterhorn-Stellisee-I-1.jpg",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp",
    "https://zurich.swissphotoclub.com/wp-content/uploads/2019/06/Matterhorn-Stellisee-I-1.jpg",
    "https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?cs=srgb&dl=pexels-jack-redgate-3014019.jpg&fm=jpg",
    "https://images.squarespace-cdn.com/content/v1/5119a9d2e4b0110f1ec82f37/1621039303660-F5GIR8Q0MYINJYHE74SA/Portage-Michigan-Senior-Photos-Teen-Photographer-MiCity082720-166-Edit.jpg?format=1500w",
    "https://i0.wp.com/www.alexanderwhitephotography.co.uk/wp-content/uploads/2022/02/Crawley-family-and-maternity-photos-by-Horsham-photographer-3.jpg?fit=1200%2C800&ssl=1",
    "https://static1.squarespace.com/static/5683aff9a12f443fdcd7b3a0/59b6514bcd0f685d6d47d371/602e541589858a5348fd394a/1615873738836/how+to+do+creative+photography+at+home+header.jpg?format=1500w",
    "https://1x.com/assets/img/pro08.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tomC0kE0Xx7ooDeV2zd5L0SzXo_PdPa1Uw&usqp=CAU",
    "https://images.squarespace-cdn.com/content/v1/54cb6b08e4b0c436386e3f3c/1474242590883-JJMZ2VA1TPGMKCW0MPUM/KCP_8689.jpg?format=2500w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_hT1cBiPqRT2XhQT-ge06Q7xyap4kW68_g&usqp=CAU",
    "https://i1.adis.ws/i/canon/pro-fine-art-photography-tips-1_a956e5554f9143789db8e529c097e410"
]


function Gallery() {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                {images.slice(0, 5).map((image) =>
                    <img
                        key={image}
                        src={image}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                )}
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                {images.slice(5, 10).map((image) =>
                    <img
                        key={image}
                        src={image}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                )}
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                {images.slice(10, 16).map((image) =>
                    <img
                        key={image}
                        src={image}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery;
