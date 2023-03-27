export const CatalogItem = ({
    title,
    imageUrl,
    category,
}) => {
    return (
        <div className="allLogs">
            <div className="allLogs-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <a href="#" className="details-button">
                    Details
                </a>
            </div>
        </div>
    );
}