import React from 'react';
import { Link } from 'react-router-dom';

export class ContentContainer extends React.Component {

  render() {
    const { title, children } = this.props;
    return (
      <div className='content-container'>
        <div className='content-title'>
          <label>
            {title}
          </label>
          <span>
            <Link to='/' />
          </span>
        </div>
        <div className='content-children'>
          {children}
        </div>
      </div>
    );
  }

}