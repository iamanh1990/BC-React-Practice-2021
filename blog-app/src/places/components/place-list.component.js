import React from 'react';

import Card from '../../shared/UIElements/card.component';
import PlaceItem from './place-item.component';
import './place-list.styles.scss';

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {items.map(
        ({
          id,
          imageUrl,
          title,
          description,
          address,
          creatorId,
          location,
        }) => (
          <PlaceItem
            key={id}
            image={imageUrl}
            title={title}
            description={description}
            address={address}
            creatorId={creatorId}
            coordinates={location}
          />
        )
      )}
    </ul>
  );
};

export default PlaceList;
