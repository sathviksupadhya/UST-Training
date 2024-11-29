import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCohort() {
  const baseUrl = "http://localhost:3000/cohorts";
  let [fetchedCohort, setFetchedCohort] = useState({
    id: 0,
    cohortSize: 0,
    cohortVenueId: 0,
    cohortStack: "",
    cohortStartDate: "",
    cohortDurationWeeks: 0,
    cohortSPOC: "",
    cohortInstructor: "",
  });
  let { cid } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(baseUrl + "/" + cid)
      .then((res) => res.json())
      .then((data) => setFetchedCohort(data));
  }, [cid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFetchedCohort((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseUrl + "/" + cid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetchedCohort),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Cohort updated successfully!");
        navigate(-1); // Go back to the previous page
      })
      .catch((error) => {
        console.error("Error updating cohort:", error);
      });
  };

  return (
    <div className="container mx-5 px-5">
      <button onClick={() => navigate(-1)} className="btn btn-secondary">
        Back to Cohort List
      </button>
      <div className="card m-2">
        <div className="card-header bg-info text-light">
          <h3>Edit Cohort Details for ID: {cid}</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Cohort Stack</label>
              <input
                type="text"
                name="cohortStack"
                value={fetchedCohort.cohortStack}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Cohort Size</label>
              <input
                type="number"
                name="cohortSize"
                value={fetchedCohort.cohortSize}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Cohort Duration (Weeks)</label>
              <input
                type="number"
                name="cohortDurationWeeks"
                value={fetchedCohort.cohortDurationWeeks}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Cohort Start Date</label>
              <input
                type="date"
                name="cohortStartDate"
                value={fetchedCohort.cohortStartDate}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
