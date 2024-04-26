import React from 'react';
import BulletinItem from './BulletinItem';

const BulletinBoard = ({ bulletins, onDelete }) => {
  return (
    <ul className="bulletin-board">
      {bulletins.map(bulletin => (
        <BulletinItem key={bulletin.id} bulletin={bulletin} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default BulletinBoard;