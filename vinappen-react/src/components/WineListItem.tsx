import {Link} from 'react-router-dom';
import './WineListItem.css'

const WineListItem = ({wine}: any) => {
    return (
        <div className="list-item">
            <Link to={`/wines/${wine._id}`}>
                <li>{wine.vintage}, {wine.description}, {wine.title}</li>
            </Link>
        </div>
    )
}

export default WineListItem;