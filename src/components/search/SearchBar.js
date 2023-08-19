import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const axiosPrivate = useAxiosPrivate();

    
    const handleSearch = async (e) =>{
        e.preventDefault(); // default behavior reloads the page
        try {
            //Handle Login API Integration here
            const response = await axiosPrivate.post("/search", JSON.stringify({ search: searchQuery }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            
            if (response.status === 200) {
                const message = response?.data?.message;
                console.log(message)
            }

        }
        catch (error){
            console.error(error);
        }
        
    }


    return (
        <div className="relative items-center space-x-3 mr-24">
            <div className="relative">
            <input
                type="text"
                placeholder="Search Files"
                className="bg-gray-200 rounded-full px-4 py-1 text-xs pr-8" // Add padding to the right to create space for the search icon
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <button 
                className="absolute inset-y-0 right-0 rounded-full mr-2"
                onClick={handleSearch}
            > {/* Position the button absolutely within the input */}
                <FontAwesomeIcon icon={faSearch} />
            </button>
            </div>
        </div>
    );
};

export default SearchBar;