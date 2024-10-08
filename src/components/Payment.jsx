import React, { useContext } from 'react';
import { FaCcVisa } from 'react-icons/fa6';
import { FaCcMastercard } from 'react-icons/fa6';
import { FaCcPaypal } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { FaBitcoin } from 'react-icons/fa';
import { BasketContext } from '../context/basketContext.jsx';
import { useNavigate } from 'react-router';
const Payment = () => {
  const { basket, confirmOrder, fullRemoveBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const totalBasketPrice = basket
    .reduce((a, b) => a + b.amount * b.price, 0)
    .toFixed(2);

  const handlePayment = () => {
    navigate('/');
    confirmOrder();
  };

  return (
    <div className="mt-5 md:max-w-[90%] gap-6 flex flex-col lg:flex-row justify-center items-center min-h-[70vh] payment-container m-auto rounded-md p-2 md:p-6">
      <div className="flex flex-col gap-2 border p-3 border-gray-400  rounded-md ">
        <h4 className="font-semibold text-amber-600">Delivery Address</h4>

        <div>
          <label className="block px-2" htmlFor="adres1">
            Address
          </label>
          <input
            className="w-full  py-1 px-3 rounded-md border border-gray-400"
            type="text"
            placeholder="neighborhood, street"
            id="adres1"
          />
        </div>

        <div>
          <label className="block px-2" htmlFor="adres2">
            Address
          </label>
          <input
            className="w-full  py-1 px-3 rounded-md border border-gray-400"
            type="text"
            placeholder="Apt. block, no"
            id="adres2"
          />
        </div>

        <div className="flex w-full gap-4">
          <div className="flex-grow-1 basis-1/2">
            <label className="block px-2" htmlFor="city">
              City
            </label>
            <input
              className="w-full  py-1 px-3 rounded-md border border-gray-400"
              type="text"
              placeholder="Ankara"
              id="city"
            />
          </div>

          <div className="flex-grow-1 basis-1/2">
            <label className="block  px-2 " htmlFor="state">
              State
            </label>
            <input
              className="w-full  py-1 px-3 rounded-md border border-gray-400"
              type="text"
              maxLength="3"
              pattern="\d{3}"
              placeholder="Cankaya"
              id="state"
            />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="flex-grow-1 basis-1/3">
            <label className="block px-2" htmlFor="zipCode">
              Zip Code
            </label>
            <input
              className="w-full  py-1 px-3 rounded-md border border-gray-400"
              type="text"
              placeholder="420236"
              id="zipCode"
            />
          </div>

          <div className="flex-grow-2 basis-2/3">
            <label className="block  px-2 " htmlFor="country">
              Country
            </label>
            <input
              className="w-full  py-1 px-3 rounded-md border border-gray-400"
              type="text"
              maxLength="3"
              pattern="\d{3}"
              placeholder="Turkey"
              id="country"
            />
          </div>
        </div>
      </div>

      <div className="border p-3 border-gray-400  rounded-md ">
        <form className="flex flex-col gap-4 ">
          <div>
            <label className="block px-2" htmlFor="name">
              Name on card
            </label>
            <input
              className="w-full py-1 px-3 rounded-md border border-gray-400"
              type="text"
              placeholder="Name"
              id="name"
            />
            <div className="flex justify-between items-center pe-2">
              <div className="flex items-center gap-2 text-3xl px-1 pt-3">
                <FaCcVisa className="text-blue-600" />
                <FaCcMastercard className="text-red-400" />
                <FaCcPaypal className="text-blue-700" />
              </div>
              <div className="text-3xl ">
                <RiSecurePaymentLine className="text-green-600" />
              </div>
            </div>
          </div>

          <div>
            <label className="block px-2" htmlFor="cardNo">
              Credit Card Number
            </label>
            <input
              className="w-full  py-1 px-3 rounded-md border border-gray-400"
              type="text"
              placeholder="1234 5678 9012 3456"
              id="cardNo"
            />
          </div>

          <div className="flex w-full gap-4">
            <div className="flex-grow-2 basis-2/3">
              <label className="block px-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                className="w-full  py-1 px-3 rounded-md border border-gray-400"
                type="text"
                placeholder="08 / 27"
                id="expiryDate"
              />
            </div>

            <div className="flex-grow-1 basis-1/3">
              <label className="block  px-2 " htmlFor="cvv">
                CVV
              </label>
              <input
                className="w-full  py-1 px-3 rounded-md border border-gray-400"
                type="text"
                maxLength="3"
                pattern="\d{3}"
                placeholder="123"
                id="cvv"
              />
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full py-1 bg-cyan-500 rounded-md"
          >
            Odeme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
