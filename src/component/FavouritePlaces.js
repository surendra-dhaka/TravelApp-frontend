// src/FavoritePlaces.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const FavoritePlaces = () => {
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/favorites');
                setFavorites(response.data);
            } catch (err) {
                setError('Error fetching favorite destinations');
            }
        };

        fetchFavorites();
    }, []);

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="favorite-places">
        <h1>Favorite Destinations</h1>
        <ul>
            {favorites.map(favorite => (
                <li key={favorite._id} className="favorite-item">
                    <h2>{favorite.city}</h2>
                    <ul className="destination-list">
                        {favorite.destinations.map((destination, index) => (
                            <li key={index} className="destination-item">{destination}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
);
};

export default FavoritePlaces;
