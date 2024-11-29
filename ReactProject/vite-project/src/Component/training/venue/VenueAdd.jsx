import React, { useState } from 'react';

export default function VenueAdd({ onAdd }) {
    const [newVenue, setNewVenue] = useState({
        venueId: '',
        venueName: '',
        venueSeater: '',
        isVenueAc: false,
        venueCity: '',
        venueState: ''
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setNewVenue({ ...newVenue, [name]: type === 'checkbox' ? checked : value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(newVenue);
        setNewVenue({
            venueId: '',
            venueName: '',
            venueSeater: '',
            isVenueAc: false,
            venueCity: '',
            venueState: ''
        });
    }

    return (
        <div className="container">
            <h3>Add Venue</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="venueId" placeholder="Venue ID" value={newVenue.venueId} onChange={handleChange} required />
                <input type="text" name="venueName" placeholder="Venue Name" value={newVenue.venueName} onChange={handleChange} required />
                <input type="number" name="venueSeater" placeholder="Seater Capacity" value={newVenue.venueSeater} onChange={handleChange} required />
                <label>
                    AC:
                    <input type="checkbox" name="isVenueAc" checked={newVenue.isVenueAc} onChange={handleChange} />
                </label>
                <input type="text" name="venueCity" placeholder="City" value={newVenue.venueCity} onChange={handleChange} required />
                <input type="text" name="venueState" placeholder="State" value={newVenue.venueState} onChange={handleChange} required />
                <button type="submit" className="btn btn-success">Add Venue</button>
            </form>
        </div>
    );
}
