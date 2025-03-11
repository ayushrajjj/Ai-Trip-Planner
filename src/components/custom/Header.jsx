// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '../ui/button';

const Header = () => {
   return (
<div className='p-3  shadow-sm  flex justify-between item-center'>
  <img src="/logo.svg"  />
  <div>
   <Button>Sign In</Button>
  </div>
</div>
    
  );
};

export { Header };