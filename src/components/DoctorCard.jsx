import React from 'react';
import { BriefcaseIcon, LanguageIcon, StarIcon } from './icons';

const DoctorCard = ({ doctor, onViewProfile }) => {
  return (
    <div className="bg-[#FFF7E2] rounded-2xl p-6 shadow-md border border-gray-200 flex flex-col items-center text-center">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-28 h-28 rounded-full object-cover mx-auto"
        />
        <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-full text-xs flex items-center">
          {doctor.rating}
          <StarIcon className="w-3 h-3 ml-1 text-yellow-400" />
        </div>
      </div>

      <h3 className="text-xl font-bold mt-4">{doctor.name}</h3>

      <div className="text-gray-600 mt-2 space-y-1 text-sm">
        <p className="flex items-center justify-center">
          <BriefcaseIcon className="w-4 h-4 mr-2" /> {doctor.specialty}
        </p>
        <p>{doctor.experienceYears} years of Experience</p>
        <p className="flex items-center justify-center">
          <LanguageIcon className="w-4 h-4 mr-2" /> Speaks:{' '}
          {doctor.languages.join(', ')}
        </p>
      </div>

      <div className="flex justify-around w-full mt-4 text-sm">
        <div className="text-center">
          <p className="font-semibold">Video Consultation</p>
          <p className="text-green-700 font-bold">₹800</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Chat Consultation</p>
          <p className="text-green-700 font-bold">Free</p>
        </div>
      </div>

      <div className="w-full mt-4 space-y-2">
        <button
          onClick={() => onViewProfile(doctor)}
          className="w-full py-2 border border-[#3A643B] text-[#3A643B] rounded-lg hover:bg-[#3A643B] hover:text-white transition-colors"
        >
          View Profile
        </button>
        <button className="w-full py-2 bg-[#3A643B] text-white rounded-lg hover:bg-opacity-90 transition-opacity">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
