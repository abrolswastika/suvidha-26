import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/api"; // your axios instance

const NewConnection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    connectionType: "",
    idProofType: "",
    idProofNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "/applications/electricity/new-connection",
        formData
      );

      const applicationId = res.data.applicationId;

      alert("Application Submitted Successfully!");

      // Navigate to tracker page
      navigate(`/application-tracker/${applicationId}`);
    } catch (error) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>New Electricity Connection</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <select
          name="connectionType"
          value={formData.connectionType}
          onChange={handleChange}
          required
        >
          <option value="">Select Connection Type</option>
          <option value="Domestic">Domestic</option>
          <option value="Commercial">Commercial</option>
        </select>

        <select
          name="idProofType"
          value={formData.idProofType}
          onChange={handleChange}
          required
        >
          <option value="">Select ID Proof</option>
          <option value="Aadhaar">Aadhaar</option>
          <option value="Voter ID">Voter ID</option>
        </select>

        <input
          type="text"
          name="idProofNumber"
          placeholder="ID Proof Number"
          value={formData.idProofNumber}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default NewConnection;

