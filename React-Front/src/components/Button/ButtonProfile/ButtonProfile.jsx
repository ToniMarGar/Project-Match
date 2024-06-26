import './ButtonProfile.css'

function ButtonProfile({username, userImg}) {

  return (
    <>
      <button className="profile-button">
        <p>Hola, {username}</p>
        <img src={userImg} alt="Profile image" />
      </button>
    </>
  );
}

export default ButtonProfile