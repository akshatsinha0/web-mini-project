// src/pages/Photos.jsx
import React, { useEffect, useState } from 'react';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch 9 random photos related to "coding" every time the component mounts
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&query=coding&count=30`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data); // data is an array of random photos
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">View Photos</h1>
      {loading ? (
        <p>Loading photos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map(photo => (
            <div key={photo.id} className="border p-2">
              <img 
                src={photo.urls.small} 
                alt={photo.alt_description || 'Coding Photo'} 
                className="w-full h-auto" 
              />
              <p className="mt-2 text-sm">
                {photo.description || photo.alt_description || 'Untitled'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Photos;
