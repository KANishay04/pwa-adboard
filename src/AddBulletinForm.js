import React, { useState } from 'react';
import './App.css';

const AddBulletinForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content || !category) return;
    onAdd({ title, content, category });
    setTitle('');
    setContent('');
    setCategory('');
  }

  return (
    <form onSubmit={handleSubmit} className="add-bulletin-form">
      <div className="form-row">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="form-row">
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="form-row">
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Выберите категорию</option>
          <option value="Работа">Работа</option>
          <option value="Жилье">Жилье</option>
          <option value="Услуги">Услуги</option>
          <option value="Продажа">Продажа</option>
          
        </select>
      </div>
      <div className="form-row">
        <button>Добавить</button>
      </div>
    </form>
  );
}

export default AddBulletinForm;
