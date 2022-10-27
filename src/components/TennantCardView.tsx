import { Link } from "react-router-dom"

export const TennantCardView = () => {
    const imgUrl = "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg";

    return (
        <>
            <div className="card-deck mb-3">
                <div className="tennant-card card">
                    <img src={imgUrl} alt="Card image cap" className="card-img-top" />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381.5485483767966!2d21.35078225828469!3d46.16872285230885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474599761dc594fd%3A0xb204ef3489c80fe5!2sMic%C4%83laca%2C%20Arad%20317405!5e0!3m2!1sro!2sro!4v1666867505978!5m2!1sro!2sro" width="100%" height="250" style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some text for the card...</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to="" className="card-link">Link 1</Link></li>
                        <li className="list-group-item">elem 2</li>
                        <li className="list-group-item">elem 3</li>
                    </ul>
                    <div className="card-body">
                        <Link to="" className="card-link">Link 1</Link>
                        <Link to="" className="card-link">Link 2</Link>
                    </div>
                </div>
            </div>
        </>
    )
}