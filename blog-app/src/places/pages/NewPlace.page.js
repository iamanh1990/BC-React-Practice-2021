import React from 'react';

import Input from '../../shared/FormElements/Input.component';
import './NewPlace.styles.scss';

const NewPlacesPage = () => {
  return (
    <form className='place-form'>
      <Input element='input' />
    </form>
  );
};

export default NewPlacesPage;
