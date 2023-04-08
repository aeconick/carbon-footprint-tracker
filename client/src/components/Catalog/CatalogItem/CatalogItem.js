import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    title,
    imageUrl,
    category,
}) => {
    return (
        <div className="allLogs">
            <div className="allLogs-info">
                <img src={imageUrl} />
                <h6>Category: {category}</h6>
                <h2>Title: {title}</h2>
                <Link to={`/catalog/${_id}`} href="#" className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
}