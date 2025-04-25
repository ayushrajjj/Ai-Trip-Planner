import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { auth } from '../../service/firebaseConfig'; // Import the firebaseConfig
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage on page load
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); // Set user from localStorage if available
    }
  }, []);

  // Simulating Firebase Google Sign-In
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Signed in user:', user); // Debugging: Log user object
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
      setUser(user); // Set the user state
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  // Handle sign out
  const signOutUser = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    setUser(null); // Clear user state
    signOut(auth); // Firebase sign out
  };

  // Debugging: log the user state
  useEffect(() => {
    console.log('Current user:', user); // Log user state to check for picture URL
  }, [user]);

  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <img src="/logo.svg" alt="Logo" className="h-10" />
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            {/* Button for My Trips */}
            <Button variant="outline" className="text-orange-200 rounded-full">
              My Trips
            </Button>
            {/* Display profile picture */}
            <img
              src={user?.photoURL || '/default-profile.jpeg'} // Corrected to 'picture'
              className="h-10 w-10 rounded-full ml-5"
              alt="user profile"
            />
            {/* Display user name */}
            <h2 className="text-sm text-gray-500">{user?.displayName}</h2>
            {/* Sign Out Button */}
            <Button onClick={signOutUser}>Sign Out</Button>
          </div>
        ) : (
          // Sign In Button when the user is not logged in
          <Button onClick={signIn}>Sign In</Button>
        )}
      </div>
    </div>
  );
};

export { Header };
