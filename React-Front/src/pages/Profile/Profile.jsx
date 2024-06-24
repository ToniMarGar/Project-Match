import * as React from "react";
import './Profile.css'

import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard'
import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'
import Tag from '../../components/Tags/Tag/Tag'

const TagGroup = ({ tags }) => (
  <div className="tag-group">
    {tags.map((tag, index) => (
      <Tag key={index} text={tag} />
    ))}
  </div>
);

function Profile() {
  return (
    <main className="profile-container">
        <aside>
          <ProfileCard/>
        </aside>

        <main className='preferences'>
          <section className="preferences-section">
            <h2>Mis preferencias</h2>
            <TagGroup/>
          </section>

          <section className="result-section">
            <h2>Mis últimos cuestionarios</h2>
            <div className="destinations-cards">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} />
              ))}
            </div>
          </section>
        </main>
      </main>
  )
}

export default Profile