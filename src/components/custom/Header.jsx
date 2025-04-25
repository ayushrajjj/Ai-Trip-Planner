// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Button } from '../ui/button';

const Header = () => {
  const users = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className='p-3 shadow-sm flex justify-between items-center'>
      <img src="/logo.svg" alt="Logo" />
      <div>
        {users ? (
          <div className='flex items-center gap-5'>
            <Button variant={"outline"} className='text-orange-200 rounded-full'>My Trips</Button>
            <img src={users?.picture } className='h-10 w-10 rounded-full ml-5' alt="user" />
            <h2 className='text-sm text-gray-500'>{users?.displayName}</h2>
          </div>
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
    </div>
  );
};

export { Header };
