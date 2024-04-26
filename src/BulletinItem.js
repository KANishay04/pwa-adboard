import React from 'react';
import './App.css'; // Импорт стилей

const BulletinItem = ({ bulletin, onDelete }) => {
  const handleDelete = () => {
    onDelete(bulletin.id);
  };

  return (
    <div className="bulletin-item-container"> {/* */}
      <div className="bulletin-item">
        <h3>{bulletin.title}</h3>
        <p>{bulletin.content}</p>
        <p>Категория: {bulletin.category}</p>
        <button onClick={handleDelete}>Удалить</button>
      </div>
    </div>
  );
}

export default BulletinItem;
