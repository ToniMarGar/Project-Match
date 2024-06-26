import * as React from "react";
import './DestinationCard.css'

import CardTag from '../../Tags/CardTag/CardTag'


const TagGroup = ({ tags }) => (
  <div className="tag-group">
    {tags.map((tag, index) => (
      <CardTag key={index} text={tag} />
    ))}
  </div>
);

function DestinacionCard({name, img}) {
  return (
    <article className="travel-card">
        <img loading="lazy" 
          src={img}
          className="background-image" 
          alt={name}
        />

        <h2>{name}</h2>

        <footer className="card-footer">
          <TagGroup tags={tags}/>
        </footer>
    </article>
  );
}

export default DestinacionCard;