import React from 'react';
import { useBoxes } from '../context/ShippingBoxContext';

const shippingRates = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

const BoxList = () => {
  const { boxes } = useBoxes();

  return (
    <div className='p-4'>
      <table className='hidden md:table w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border p-2'>Receiver</th>
            <th className='border p-2'>Weight (kg)</th>
            <th className='border p-2'>Box Color</th>
            <th className='border p-2'>Destination</th>
            <th className='border p-2'>Shipping Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {boxes.map((box, index) => (
            <tr key={index} className='text-center'>
              <td className='border p-2'>{box.receiver}</td>
              <td className='border p-2'>{box.weight}</td>
              <td className='border p-2'>
                <div
                  className='w-6 h-6 mx-auto'
                  style={{ backgroundColor: box.color }}
                ></div>
              </td>
              <td className='border p-2'>{box.destination}</td>
              <td className='border p-2'>
                {(box.weight * shippingRates[box.destination]).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='md:hidden'>
        {boxes.map((box, index) => (
          <div key={index} className='bg-white shadow-md p-4 mb-4 rounded-lg'>
            <p>
              <strong>Receiver:</strong> {box.receiver}
            </p>
            <p>
              <strong>Weight:</strong> {box.weight} kg
            </p>
            <p>
              <strong>Destination:</strong> {box.destination}
            </p>
            <p>
              <strong>Shipping Cost:</strong> ₹
              {(box.weight * shippingRates[box.destination]).toFixed(2)}
            </p>
            <div
              className='w-10 h-10 mt-2'
              style={{ backgroundColor: box.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxList;
