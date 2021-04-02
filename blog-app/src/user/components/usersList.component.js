import React from 'react';

import UserItem from './userItem.component';
import Card from '../../shared/UIElements/card.component';
import './usersList.styles.scss';

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No Users Found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {items.map(({ id, name, image, placeCount }) => (
        <UserItem
          key={id}
          id={id}
          name={name}
          image={image}
          placeCount={placeCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
