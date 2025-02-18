import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 

const DeleteStudent = () => {
  const { _id } = useParams()
  const navigate = useNavigate()

  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/student/${_id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting the user.');
    }
  };

  return (
    <div className='flex justify-center mt-20'>
      <div>
        <h1 className='text-4xl'>Are You Sure?</h1>
        <p>Do you want to delete this Student?</p>
        <div className='mt-4 flex justify-evenly'>
          <button
            className='p-2 rounded bg-red-500 cursor-pointer'
            onClick={handleDelete} 
          >
            Yes
          </button>
          <button
            className='p-2 rounded bg-green-500 cursor-pointer'
            onClick={() => navigate('/')} 
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
