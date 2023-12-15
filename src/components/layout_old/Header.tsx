import React from "react";

const Header = () => {
  return (
    <header
      className="py-20 px-24 text-center bg-[url('https://www.mindfiresolutions.com/home-assets/images/bg-home.webp')] bg-cover bg-no-repeat"
      role='banner'
    >
      <h1 className='text-5.5xl font-bold mb-[1.6px]'>
        <p className='m-5 text-mindfire-text-black'>
          Mindfire | <span className='text-mindfire-text-red'>FOSS</span>
        </p>
      </h1>
      <h2 className='text-xl font-bold max-w-[1076px] tracking-[-0.72px] mx-auto text-mindfire-text-black/70'>
        Official GitHub Page for Mindfire Digital LLP. Explore our projects,
        contributions, and insights in technology, software development, and
        more. Join us in our journey to push the boundaries of innovation.
      </h2>
    </header>
  );
};

export default Header;
