import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full flex items-center bg-[#1F2937] min-h-24 footer">
      <div className=" flex gap-3 justify-between w-full max-w-[1280px] m-auto p-4 md:p-0 items-center  ">
        <div className="w-22 flex justify-center  h-auto">
          <img src="src/assets/img/logo.png" className="w-auto h-20" alt="" />
        </div>
        <div className="shrink gap-3 flex flex-col sm:flex-row w-full flex-wrap justify-between">
          <div className="rounded flex-[1] h-full justify-center text-gray-200 flex-wrap text-center items-center">
            &copy;{' '}
            <Link
              to="https://github.com/beyzaaakeser/ReactEcommerce.git"
              target="blank"
              className="text-blue-400 font-semibold italic text-xl"
            >
              Beyza Keser
            </Link>{' '}
            All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
