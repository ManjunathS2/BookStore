import React from 'react'
import { useAuth } from '../context/authProvider';

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser(null);
            
            localStorage.removeItem("user"); 
            alert("Logout Successful");
            
        
        } catch (error) {
            alert("Error during logout. Please try again.");
        }
    }

    return (
        <div>
            <button 
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700 duration-300"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Logout;