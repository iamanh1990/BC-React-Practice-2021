import React, { useState } from 'react';

import Map from './../../shared/UIElements/mapbox';
import Card from '../../shared/UIElements/card.component';
import CustomButton from '../../shared/FormElements/Button.component';
import './place-item.styles.scss';
import Modal from '../../shared/UIElements/modal.component';

const PlaceItem = ({ id, image, title, address, description, coordinates }) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<CustomButton onClick={closeMapHandler}>Close</CustomButton>}
      >
        <div className='map-container'>
          <Map coordinates={coordinates} zoom={9} />
        </div>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={image} alt={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <CustomButton inverse onClick={openMapHandler}>
              VIEW ON MAP
            </CustomButton>
            <CustomButton to={`/places/${id}`}>EDIT</CustomButton>
            <CustomButton danger>DELETE</CustomButton>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
