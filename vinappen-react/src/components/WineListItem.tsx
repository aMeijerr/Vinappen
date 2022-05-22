import {Link} from 'react-router-dom';
import '../styles/WineListItem.css'

const WineListItem = ({wine}: any) => {
    return (
        <div className="list-item">
            <Link to={`/wines/${wine._id}`}>
                <li>{wine.vintage} {wine.title}, {wine.wineMaker}, {wine.category && wine.category[0]}</li>
                <div className="wine-price">{wine.price}:-</div>
            </Link>
        </div>
    )
}

export default WineListItem;