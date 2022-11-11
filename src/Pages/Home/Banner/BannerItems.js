import React from 'react';
import './BannerItems.css'

const BannerItems = ({ banner }) => {
    const { img, id, prev, next } = banner;
    return (
        <div id={`slider${id}`} className="carousel-item relative w-full">
        <img src={img} alt='' className="w-full" />
        <div className="absolute  justify-between  transform -translate-y-1/2  right-80 -mx-64 top-2/4">
          <h1 className="text-cyan-500 text-3xl my-4 font-mono"> <strong className='text-4xl text-orange-600'>Hire Me</strong> <br /><strong className='underline decoration-4 text-purple-400'>For Event</strong> <br /> <strong className='text-4xl text-orange-600 '>Photography</strong></h1>
        <img className='h- w-72 rounded ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0HEXRNxJiysIICKEoESvGLGNuGGm5Hzah21vLgHKgg_w5uQAV0AYz_zuUtdV4Y9qsJ4&usqp=CAU" alt="" />
        <img className='h- w-72 rounded my-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EQc-b0iB8QAvB-P9PS6lmosmjLxWZQYATw&usqp=CAU" alt="" />
        <img className='h- w-72 rounded my-5' src="https://s.studiobinder.com/wp-content/uploads/2021/04/Event-Photography-Tips-and-Tricks-for-All-Photographers-StudioBinder.jpg" alt="" />
        
        </div>
    
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-7">
          <a href={`#slider${prev}`} className="btn btn-circle mx-4">❮</a> 
          <a href={`#slider${next}`} className="btn btn-circle">❯</a>
        </div>
        </div>
    );
};

export default BannerItems;