import React, { useState } from 'react';

const SubscriptionForm = ({ tournament, onFormSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit({ username });
        setUsername('');
    };

    return (
        <div>
            <h2>S'inscrire à {tournament.name}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Pseudo
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <br />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default SubscriptionForm;