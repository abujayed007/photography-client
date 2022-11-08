import React from 'react';
import './BannerItems.css'

const BannerItems = ({ banner }) => {
    const { img, id, prev, next } = banner;
    return (
        <div id={`slider${id}`} className="carousel-item relative w-full">
        <img src={img} alt='' className="w-full" />
        <div className="absolute flex justify-between  transform -translate-y-1/2 left-60  top-1/3">
        <h2 className="text-3xl text-white">Hello</h2>
        </div>
        <div className="absolute flex justify-between  transform -translate-y-1/2 left-60  top-3/4">
        <h2 className="text-3xl text-white">Hello</h2>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-7">
          <a href={`#slider${prev}`} className="btn btn-circle mx-4">❮</a> 
          <a href={`#slider${next}`} className="btn btn-circle">❯</a>
        </div>
        </div>
    );
};

export default BannerItems;