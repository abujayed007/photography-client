import React from 'react';
import image1 from '../../../Others/Images/image1.jpg'
import image2 from '../../../Others/Images/image2.jpg'
import image3 from '../../../Others/Images/image3.jpg'
import Services from '../../Services/Services';
import BannerItems from './BannerItems';

const Banner = () => {
    const sliderdata = [
        {
            img:image1,
            id:1,
            prev:3,
            next:2
        },
        {
            img:image2,
            id:2,
            prev:1,
            next:3
        },
        {
            img:image3,
            id:3,
            prev:2,
            next:1
        }
    ]
    return (
        <div> 
        <div className="carousel w-11/12 mx-auto my-5 bg-black rounded-md">
            {
                sliderdata.map(banner =><BannerItems banner={banner} key={banner.id}></BannerItems>)
            }
            
        </div>
        </div>

    );
};

export default Banner;



   