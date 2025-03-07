import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useBoxes } from '../context/ShippingBoxContext';

const shippingRates = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

const AddBoxForm = () => {
  const { addBox } = useBoxes();

  const formik = useFormik({
    initialValues: {
      receiver: '',
      weight: '',
      color: '#ffffff',
      destination: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Receiver name is required'),
      weight: Yup.number()
        .min(0, 'Weight cannot be negative')
        .required('Weight is required'),
      destination: Yup.string().required('Destination is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addBox(values);
      resetForm();
    },
  });

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        onSubmit={formik.handleSubmit}
        className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'
      >
        <h2 className='text-xl font-semibold mb-4'>Add Box</h2>

        <label className='block mb-1'>Receiver Name:</label>
        <input
          type='text'
          name='receiver'
          placeholder='Receiver Name'
          onChange={formik.handleChange}
          value={formik.values.receiver}
          className='w-full p-2 border rounded mb-1'
        />
        {formik.errors.receiver && (
          <div className='text-red-500 text-sm mb-1'>
            {formik.errors.receiver}
          </div>
        )}

        <label className='block mb-1'>Weight:</label>
        <input
          type='number'
          name='weight'
          placeholder='Weight (kg)'
          onChange={formik.handleChange}
          value={formik.values.weight}
          className='w-full p-2 border rounded mb-2'
        />
        {formik.errors.weight && (
          <div className='text-red-500 text-sm mb-1'>
            {formik.errors.weight}
          </div>
        )}

        <label className='block mb-1'>Box Color:</label>
        <input
          type='color'
          name='color'
          onChange={formik.handleChange}
          value={formik.values.color}
          className='w-full h-10 mb-2'
        />
        <label className='block mb-1'>Select Destination:</label>
        <select
          name='destination'
          onChange={formik.handleChange}
          value={formik.values.destination}
          className='w-full p-2 border rounded mb-2'
        >
          <option value=''>Select Destination</option>
          {Object.keys(shippingRates).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {formik.errors.destination && (
          <div className='text-red-500 text-sm mb-1'>
            {formik.errors.destination}
          </div>
        )}

        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddBoxForm;
