import './UserCard.css'


const UserCard = ({ user }) => {



  return (
    <div className="user-infos">
      <div className="user-card">
        {/* style={{ backgroundImage: `url(${user?.image})` }} */}

      </div>
      <div>
        <p className="user-name" >{user?.name}</p>
      </div>

    </div>
  )
}

export default UserCard