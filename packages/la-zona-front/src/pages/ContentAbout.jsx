import React from 'react';
import { ContentContainer } from '../components/ContentContainer';

export function ContentAbout() {
  return (
    <ContentContainer title='About La Zona'>
      <h1>Hello!</h1>
      <p>La Zona App can notify you when you are in a congestion charging zone.</p>
      <div className='img-container'>
        <img src='/images/congestion-charging-penalty-charge-notice.png'
             alt='congestion charging penalty charge notice' />
      </div>
    </ContentContainer>
  );
}