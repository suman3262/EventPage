import React from 'react';
import { data } from './api';
import EventComponent from './EventComponent';

const EventPage = () => {
  return (
    <>
      <EventComponent data={data}/>  
    </>
  )
}

export default EventPage