import React,{useEffect, useState} from 'react';
import SearchBar from './SearcBar';
import Destination from './Destination'
import Navbar from './Navbar';

const Content = () => {

    const [searched, setSearched] = useState(false);
    const [destinations, setDestinations] = useState({});
    const[city, setCity]=useState('')
    const handleSearch = (data) => {
        setDestinations(data.destinations);
        setCity(data.city)
        setSearched(true);
    };

    
    
  return (<>
    
    {searched?(< Destination destinations={destinations} city ={city}/>):(
    <div className='home'>
    <div className="content">
      <h1>
        Plan a <span className="highlight">Hassle-free</span> holiday
      </h1>
      <SearchBar onSearch={handleSearch} />
    </div> 
    </div>)}
    </>
  );
};

export default Content;
