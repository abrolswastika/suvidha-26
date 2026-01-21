import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import axios from "../../../services/api";

const GasNewConnection = () => {
  const navigate = useNavigate();
  const { type } = useParams(); 
  // type = "new-lpg" or "new-png"

  const gasType = type === "new-png" ? "PNG" : "LPG";

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    gasType: gasType,
    idProofType: "",
    idProofNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/applications/gas/new-connection",
        formData
      );

      const applicationId = res.data.applicationId;

      alert("Gas Connection Application Submitted!");

      navigate(`/application-tracker/${applicationId}`);
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">
          Apply for {gasType} Gas Connection
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="input"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input"
          />

          <select
            name="idProofType"
            value={formData.idProofType}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select ID Proof</option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="Voter ID">Voter ID</option>
            <option value="Driving License">Driving License</option>
          </select>

          <input
            type="text"
            name="idProofNumber"
            placeholder="ID Proof Number"
            value={formData.idProofNumber}
            onChange={handleChange}
            required
            className="input"
          />

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-2 rounded"
          >
            Submit {gasType} Application
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default GasNewConnection;
