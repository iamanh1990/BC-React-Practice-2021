import React from 'react';
import UserList from './../components/usersList.component';

const UserPage = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Iamanh',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      placeCount: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default UserPage;
