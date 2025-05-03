'use client';
import React from 'react';
import Image from 'next/image';

interface Doctor {
  id:string;
  name: string;
  subSpecialisation: string;
  city: string;
  district: string;
  state: string;
  email: string;
  phone: string;
  photo: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="rounded-2xl border-2 shadow-gray-400 border-gray-500 p-4 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className='flex items-center gap-6'>
        <Image
          src={`/images/image${Math.floor(Math.random() * 8)}.jpg`}
          alt={doctor.name}
          width={80}
          height={80}
          className="rounded-full object-cover w-20 h-20"
        />

        <div>
          <h2 className="text-lg font-semibold">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.subSpecialisation}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p>{doctor.city}, {doctor.district}, {doctor.state}</p>
        <p>{doctor.email}</p>
        <p>{doctor.phone}</p>
      </div>

      <div className="mt-auto pt-2">
        <a href={`/finddoctor/${doctor.id}`} className="text-purple-500 hover:underline text-2xl text-sm font-bold">Go to Profile</a>
      </div>
    </div>

  );
};

export default DoctorCard;