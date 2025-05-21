
"use client";
// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import type { NextPage } from 'next';
import { Doctor } from "./types/doctor"

const ProfileOfDoctor= ({ params }: { params: { slugid: number } }) => {
  // const router = useRouter();
  const { slugid } = params;
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch('/data/doctors.json');
        const data = await response.json();
        const foundDoctor = data.find((d: Doctor) => d.id === Number(slugid));
        setDoctor(foundDoctor || null);
        setLoading(false);
      } catch (error) {
        console.error('Error loading doctor data:', error);
        setLoading(false);
      }
    };

    if (slugid) {
      fetchDoctor();
    }
  }, [slugid]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold">Loading doctor profile...</div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold">Doctor not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Results
        </button>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="sm:flex">
            <Image
                className="w-full h-auto rounded-lg"
                src={doctor.photo}
                alt={`${doctor.name}'s profile`}
              width={300}
              height={300}
            />

            </div>
            <div className="sm:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
              <p className="text-xl text-blue-600 mb-6">{doctor.subSpecialization}</p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
                  <p className="text-gray-600">{doctor.email}</p>
                  <p className="text-gray-600">{doctor.phone}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Address</h2>
                  <p className="text-gray-600">{doctor.address}</p>
                  <p className="text-gray-600">
                    {doctor.city}, {doctor.district}, {doctor.state}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">About</h2>
                  <p className="text-gray-600">
                    Dr. {doctor.name.split(' ')[1]} is a board-certified {doctor.subSpecialization.toLowerCase()} specialist with years of experience in patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOfDoctor;