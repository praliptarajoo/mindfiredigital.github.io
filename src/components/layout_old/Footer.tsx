import React from "react";

const Footer = () => {
  return (
    <div className='pt-8 mt-8 border-t border-solid border-mindfire-footer-border-color'>
      <span className='text-mindfire-footer-text-color text-base'>
        © 2023{" "}
        <a
          className='text-mindfire-text-red font-semibold text-lg hover-underline'
          href='https://www.mindfiredigitalllp.com/'
        >
          Mindfire Digital LLP
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
