import './ButtonProfile.css'

function ButtonProfile({username, userImg}) {

  return (
    <>
      <button className="profile-button">
        <p>Hola, {username}</p>
        <img src="../../../../src/assets/Default_profile.jpg" alt="Profile image" width={"40px"}/>
      </button>
    </>
  );
}

export default ButtonProfile