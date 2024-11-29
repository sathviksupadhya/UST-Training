import React, { useState, useEffect } from 'react';

export default function VenueEdit({ venue, onEdit }) {
    const [editedVenue, setEditedVenue] = useState(venue);

    useEffect(() => {
        setEditedVenue(venue);
    }, [venue]);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setEditedVenue({ ...editedVenue, [name]: type === 'checkbox' ? checked : value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEdit(editedVenue);
    }

    return (
        <div className="container">
            <h3>Edit Venue</h3>
            <form onSubmit={handleSubmit}>
                {/* Similar fields as VenueAdd but pre-filled */}
                <input type="text" name="venueId" value={editedVenue.venueId} readOnly />
                <input type="text" name="venueName" value={editedVenue.venueName} onChange={handleChange} />
                <input type="number" name="venueSeater" value={editedVenue.venueSeater} onChange={handleChange} />
                <label>
                    AC:
                    <input type="checkbox" name="isVenueAc" checked={editedVenue.isVenueAc} onChange={handleChange} />
                </label>
                <input type="text" name="venueCity" value={editedVenue.venueCity} onChange={handleChange} />
                <input type="text" name="venueState" value={editedVenue.venueState} onChange={handleChange} />
                <button type="submit" className="btn btn-success">Save Changes</button>
            </form>
        </div>
    );
}
