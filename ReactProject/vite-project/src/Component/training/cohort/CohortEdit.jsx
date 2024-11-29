import React, { useState, useEffect } from 'react';

export default function CohortEdit({ cohort, onEdit }) {
    const [editedCohort, setEditedCohort] = useState(cohort);

    useEffect(() => {
        setEditedCohort(cohort);
    }, [cohort]);

    function handleChange(e) {
        setEditedCohort({ ...editedCohort, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEdit(editedCohort);
    }

    return (
        <div className="container">
            <h3>Edit Cohort</h3>
            <form onSubmit={handleSubmit}>
                {/* Similar fields as CohortAdd but pre-filled */}
                <input type="text" name="cohortId" value={editedCohort.cohortId} readOnly />
                <input type="text" name="cohortSize" value={editedCohort.cohortSize} onChange={handleChange} />
                <input type="text" name="cohortStack" value={editedCohort.cohortStack} onChange={handleChange} />
                <input type="date" name="cohortStartDate" value={editedCohort.cohortStartDate} onChange={handleChange} />
                <input type="text" name="cohortDurationWeeks" value={editedCohort.cohortDurationWeeks} onChange={handleChange} />
                <input type="text" name="cohortSPOC" value={editedCohort.cohortSPOC} onChange={handleChange} />
                <input type="text" name="cohortInstructor" value={editedCohort.cohortInstructor} onChange={handleChange} />
                <button type="submit" className="btn btn-success">Save Changes</button>
            </form>
        </div>
    );
}
