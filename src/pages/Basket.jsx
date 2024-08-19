import React, { useContext, useState } from 'react';
import { BasketContext } from '../context/basketContext';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { BsBoxArrowRight } from 'react-icons/bs';

const Basket = () => {
  const { basket } = useContext(BasketContext);

  console.log(basket);
  return (
    <div className="page">
      {basket.length === 0 && (
        <div className="flex flex-col gap-5 justify-center items-center mt-10">
          <span className="text-2xl font-medium ">
            {' '}
            <IoCartOutline className="m-auto text-5xl" /> Your basket is empty.
          </span>
          <div className="flex bg-blue-500 text-white p-2 px-5 rounded-md hover:bg-blue-700  cursor-pointer items-center justify-center gap-3">
            <Link to="/" className=" ">
              Continue shopping
            </Link>
            <BsBoxArrowRight className="text-2xl" />
          </div>
        </div>
      )}

      {basket?.map((product) => (
        <div
          key={product.id}
          className="flex my-5 w-full md:w-[70vw]   m-auto border border-gray-200 rounded-md p-6"
        >
          <div className="h-36 w-36  overflow-hidden rounded-md border border-gray-200">
            <img
              alt={product.imageAlt}
              src={product.thumbnail}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h2 className="line-clamp-1 text-[20px]">{product.title}</h2>
                <p className="ml-4 text-nowrap text-[16px]">{product.price}$</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-gray-500">Amount: {product.amount}</p>
              <div className="flex space-x-1">
                <button className="px-3 py-1 w-8 h-8 text-white bg-blue-500 rounded hover:bg-blue-600">
                  +
                </button>
                <button className="px-3 py-1 w-8 h-8 text-white bg-red-500 rounded hover:bg-red-600">
                  -
                </button>
              </div>
            </div>

            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 text-end"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
