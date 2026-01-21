import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import axios from "../../../services/api";

const SolarApplication = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    rooftopArea: "",
    monthlyUnits: "",
    capacity: "",
    incomeGroup: "",
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
      const res = await axios.post("/applications/solar", formData);

      const applicationId = res.data.applicationId;

      alert("Solar Application Submitted Successfully!");

      navigate(`/application-tracker/${applicationId}`);
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">
          Solar Rooftop Installation Application
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

          <input
            type="number"
            name="rooftopArea"
            placeholder="Rooftop Area (sq ft)"
            value={formData.rooftopArea}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="number"
            name="monthlyUnits"
            placeholder="Monthly Electricity Units"
            value={formData.monthlyUnits}
            onChange={handleChange}
            required
            className="input"
          />

          <select
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select Recommended Capacity</option>
            <option value="1kw">1 kW</option>
            <option value="2kw">2 kW</option>
            <option value="3kw">3 kW</option>
          </select>

          <select
            name="incomeGroup"
            value={formData.incomeGroup}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Income Group</option>
            <option value="BPL">Below Poverty Line</option>
            <option value="LIG">Low Income Group</option>
            <option value="MIG">Middle Income Group</option>
          </select>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-2 rounded"
          >
            Submit Solar Application
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default SolarApplication;
