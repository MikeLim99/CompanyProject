import React from "react";

export default function Map() {
    return (
        <div className="map-container d-flex flex-column align-items-center justify-content-center text-center py-5">
            <h3>LOCATION</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2726931706193!2d-115.95782812453045!3d36.18424937242909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1745566158544!5m2!1sen!2sph"
                width="75%"
                height="450"
                style={{ border: "2px solid #A5A5A5" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}