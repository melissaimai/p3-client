import './UserCard.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {

  return (
    <div>
      <Link className="user-infos text-decoration-none" to={`/profile/${user?._id}`} >
        <div className='img-name'>
          <div className="user-card mr-2" style={{ backgroundImage: `url(${user?.img})` }}>
          </div>
          <p className="user-name text-muted" >{user?.name} </p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} className="pr-4" style={{ color: 'black' }} size="xs" />
      </Link>
    </div >
  )
}

export default UserCard