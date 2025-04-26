"use client";

import { useState } from "react";
import doctorsData from "../../../public/data/doctors.json";
import DoctorCard from "../../components/DoctorCard";
import Pagination from "../../components/Pagination";

const FindADoctor: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [selectedSpecialisation, setSelectedSpecialisation] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  const subSpecialisations = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Dermatology",
    "General Medicine",
  ];

  const handleSearch = () => {
    const filtered = doctorsData.filter((doctor) => {
      return (
        (!searchName ||
          doctor.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (!selectedSpecialisation ||
          doctor.subSpecialisation === selectedSpecialisation) &&
        (!location ||
          doctor.city.toLowerCase().includes(location.toLowerCase()) ||
          doctor.district.toLowerCase().includes(location.toLowerCase()) ||
          doctor.state.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setFilteredDoctors(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  const handleClearFilters = () => {
    setSearchName("");
    setSelectedSpecialisation("");
    setLocation("");
    setFilteredDoctors(doctorsData);
    setCurrentPage(1); // Reset to the first page
  };

  const doctorsPerPage = 6;
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * doctorsPerPage,
    currentPage * doctorsPerPage
  );

  return (
    <div className="container mx-auto px-4 pb-10 pt-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Find a Doctor
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Search our network of qualified healthcare professionals
        </p>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={selectedSpecialisation}
          onChange={(e) => setSelectedSpecialisation(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Specialisations</option>
          {subSpecialisations.map((specialisation, index) => (
            <option key={index} value={specialisation}>
              {specialisation}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Location (City/District/State)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
        <button
          onClick={handleClearFilters}
          className="bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Clear Filters
        </button>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default FindADoctor;

