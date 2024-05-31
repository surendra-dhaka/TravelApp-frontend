import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Import your CSS file for additional styling

const Destination = ({ city, destinations }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = async (destination) => {
        try {
            const response = await axios.post('http://localhost:5000/api/favorites', { city, destinations: [destination] });
            setFavorites([...favorites, destination]);
            console.log(response.data);
        } catch (error) {
            console.error('Error adding favorite destination:', error);
        }
    };

    const removeFavorite = async (destination) => {
        try {
            const response = await axios.delete('http://localhost:5000/api/favorites', { data: { city, destination } });
            setFavorites(favorites.filter(favorite => favorite !== destination));
            console.log(response.data);
        } catch (error) {
            console.error('Error removing favorite destination:', error);
        }
    };

    const toggleFavorite = (destination) => {
        if (favorites.includes(destination)) {
            removeFavorite(destination);
        } else {
            addFavorite(destination);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Popular Travel Destinations in {city}</h2>
            <div className="row">
                {destinations.map((destination, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card">
                            <img src="../public/Background.jpg" className="card-img-top" alt={destination} />
                            <div className="card-body">
                                <h5 className="card-title">{destination}</h5>
                                <p className="card-text">Rajasthan , India</p>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className={`heart-icon ${favorites.includes(destination) ? 'favorite' : 'not-favorite'}`}
                                    onClick={() => toggleFavorite(destination)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;
