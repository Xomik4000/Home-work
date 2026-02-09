import React from "react";

export const Photos = ({slicedPhoto}) => (
    <div className='photos'>
      {slicedPhoto.map((photo) => (
        <div key={photo.id}>
          <div>{photo.id}</div>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
);
