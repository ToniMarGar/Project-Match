import * as React from "react";
import './Profile.css'

import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard'

function Profile() {
  return (
    <main>
        <aside>
          <ProfileCard/>
        </aside>

        <main>
          <section>
            <h2>Mis preferencias</h2>
            // resultados ultimo quizz
          </section>

          <section>
            <h2>Mis últimos cuestionarios</h2>
            // llamar a results
          </section>
        </main>
      </main>
  )
}

export default Profile