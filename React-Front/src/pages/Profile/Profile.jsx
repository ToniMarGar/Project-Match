import * as React from "react";
import './Profile.css'

// Los Tags, si se puede, van a ser componentes a parte
const TagButton = ({ text }) => (
  <button className="tag-button">{text}</button>
);

// Las DestinationCard ya son componentes creados, pero tengo que qveriguar como parasles info siendo componentes 
const DestinationCard = ({ image, title, subtitle, tags }) => (
  <article className="destination-card">
    <img src={image} alt={`${title} destination`} className="destination-image" />
    <div className="destination-content">
      <h3 className="destination-title">{title}</h3>
      <p className="destination-subtitle">{subtitle}</p>
    </div>
    <div className="tag-container">
      {tags.map((tag, index) => (
        <TagButton key={index} text={tag} />
      ))}
    </div>
  </article>
);

// La estructura de Profile viene directa de la IA, pero no sé como verla sin ser admin
function Profile() {
  return (
    <main className="profile-container">
        <aside className="profile-card">
        {/* ProfileCard component, esto va a desaparecer */}
          <div className="profile-card">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a735eb5b0bd101b39d17228cb94286b4acede094a638373f1333c4df7d3fe4c?apiKey=d0e5275347df4fb3abc0d1041ed2568c&" alt="Profile picture" className="profile-image" />
            <div className="profile-info">
              <h2 className="profile-name">Falete Rebooter</h2>
              <p className="profile-username">@falete_rebooter</p>
            </div>
            <p className="profile-plan">PLAN GRATUITO</p>
          </div>
          <hr className="profile-divider" />
          <section className="profile-details">
            <p className="profile-detail"><strong>Nombre:</strong> Falete</p>
            <p className="profile-detail"><strong>Apellido:</strong> Rebooter</p>
            <p className="profile-detail"><strong>Correo electrónico:</strong><br />falete@rebootacademy.com</p>
          </section>
          <section className="password-section">
            <h3 className="password-title">Contraseña</h3>
            <div className="password-actions">
              <button className="action-button primary">Cambiar</button>
              <button className="action-button secondary">Revisar</button>
            </div>
          </section>
        </aside>

        <section className="main-content">
          <section className="preferences-section">
            <h2 className="section-title">Mis preferencias</h2>
            <div className="tag-container">
              <TagButton text="GRUPOS" />
              <TagButton text="FIESTA" />
              <TagButton text="PLAYA" />
              <TagButton text="SOLEADO" />
              <TagButton text="EUROPA" />
            </div>
          </section>
          <section className="questionnaires-section">
            <h2 className="section-title">Mis últimos cuestionarios</h2>
            <div className="destinations-grid">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} />
              ))}
            </div>
          </section>
        </section>
      </main>
  )
}

export default Profile