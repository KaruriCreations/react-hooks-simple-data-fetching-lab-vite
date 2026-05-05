// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDog = () => {
        setIsLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDogImage(data.message);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchDog();
    }, []);

    return(
        <div>
            <h1>My App</h1>
            {isLoading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
            <button onClick={fetchDog}>New Dog</button>
        </div>
    )
}

export default App;
