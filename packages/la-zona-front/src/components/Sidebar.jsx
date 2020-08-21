import React from 'react';
import { Link } from 'react-router-dom';

export function Sidebar(props) {
  const { className, onClose } = props;
  return (
    <div className={className}>
      <a href='#' className="sidebarCloseButton" onClick={onClose}>&times;</a>
      <Link to='/about' onClick={onClose}>About</Link>
      <Link to="/privacy" onClick={onClose}>Privacy</Link>
      <Link to="/terms" onClick={onClose}>Terms</Link>
    </div>
  );
}