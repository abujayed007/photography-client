import React from 'react';

const Banner = () => {
    return (

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
                <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
            </a>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
                <p>Do you want to get notified when a new component is added to Flowbite?</p>

            </figcaption></figure>

    );
};

export default Banner;