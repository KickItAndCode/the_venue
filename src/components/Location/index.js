import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1298678759867!2d-122.24672368532885!3d37.810426979753046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f874196c09f8f%3A0x8b7075fd691af7b8!2sPeet&#39;s+Coffee!5e0!3m2!1sen!2sus!4v1553655570025" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>
                </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;