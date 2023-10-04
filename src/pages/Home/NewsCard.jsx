import { Link } from "react-router-dom";


const NewsCard = ({aNews}) => {
    console.log(aNews);
    const {title, image_url, details, _id } = aNews;
    return (
        <div className="card bg-base-100 shadow-xl mb-5">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? 
                    <p>{details.slice(0, 200) } <Link to={`/aNews/${_id}`} className="text-blue-600 font-bold">Read More....</Link></p>  : <p>{details}</p>

                }
                
            </div>
        </div>
    );
};

export default NewsCard;