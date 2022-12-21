import React from 'react';

const AboutMe = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src="https://images.squarespace-cdn.com/content/v1/56457d9be4b0ed8bf45381d2/1449362076547-XBTIMNCN3FBAUL4T8XDS/shutterstock_150468989.jpg?format=2500w" className=" lg:h-80 md:h-80 sm:h-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl text-left font-bold text-white">Educational Qualification</h1>
                    <p className="py-6 text-white text-left">
                        <li>Master of Photography</li>
                        <li>PPA Certification</li>
                        <li>Silver Medalist Photographer of the Year</li>
                        <li>Certified Professional Photographer Competition Award</li>
                        <li>Loan Prints in permanent traveling collection</li>
                        <li>Merited prints accepted for display at international print exhibition</li>
                        <li>Gold Corner</li>
                        <li>Service Merit</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;