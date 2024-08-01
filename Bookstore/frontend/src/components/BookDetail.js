import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    API.get(`books/${id}/`).then(res => {
      setBook(res.data);
    });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
      <p>Description: {book.description}</p>
      <img src={`http://localhost:8000${book.cover_image}`} alt={book.title} />
    </div>
  );
};

export default BookDetail;
