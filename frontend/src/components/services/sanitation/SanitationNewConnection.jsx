import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import axios from "../../../services/api";

const ToiletConstruction = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    householdMembers: "",
    hasToilet: "",
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
      const res = await axios.post(
        "/applications/sanitation/toilet-construction",
        formData
      );

      const applicationId = res.data.applicationId;

      alert("Toilet Construction Application Submitted!");

      navigate(`/application-tracker/${applicationId}`);
    } catch (err) {
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">
          Toilet Construction Application (SBM)
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
            name="householdMembers"
            placeholder="Number of Household Members"
            value={formData.householdMembers}
            onChange={handleChange}
            required
            className="input"
          />

          <select
            name="hasToilet"
            value={formData.hasToilet}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Do you already have a toilet?</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
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
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Submit Application
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ToiletConstruction;
