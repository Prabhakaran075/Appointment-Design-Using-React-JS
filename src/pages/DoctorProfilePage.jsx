import React from 'react';
import {
  BriefcaseIcon,
  StarIcon,
  VerifiedIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../components/icons';
import AppointmentWidget from '../components/AppointmentWidget';
import ReviewCard from '../components/ReviewCard';

const DoctorProfilePage = ({ doctor }) => {
  return (
    <div className="bg-[#FBFDFB]">
      {/* Profile Header */}
      <div className="relative bg-[#FFF7E2] py-8 px-4 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-green-100 opacity-20 -z-0"></div>
        <div className="container mx-auto relative flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="text-2xl font-bold">{doctor.name}</h2>
              <VerifiedIcon className="w-6 h-6 ml-2 text-blue-500" />
            </div>
            <p className="text-gray-600">{doctor.specialty}</p>
            <div className="flex items-center justify-center md:justify-start space-x-1 mt-1 text-yellow-500">
              {[...Array(Math.floor(doctor.rating))].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
              {[...Array(5 - Math.floor(doctor.rating))].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-gray-300" />
              ))}
            </div>
          </div>

          <div className="flex space-x-6 text-center">
            <div>
              <p className="text-gray-600">Followers</p>
              <p className="font-bold text-lg">{doctor.followers}</p>
            </div>
            <div>
              <p className="text-gray-600">Following</p>
              <p className="font-bold text-lg">{doctor.following}</p>
            </div>
            <div>
              <p className="text-gray-600">Posts</p>
              <p className="font-bold text-lg">{doctor.posts}</p>
            </div>
          </div>

          <button className="px-6 py-2 bg-[#3A643B] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-opacity">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-16 lg:px-24 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About me */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">A Little About Me</h3>
              <button className="px-4 py-2 border border-gray-400 rounded-lg flex items-center hover:bg-gray-100 transition-colors">
                Follow +
              </button>
            </div>
            <p className="text-gray-600">
              {doctor.about}
              <button className="text-[#3A643B] font-semibold ml-2">
                Read More
              </button>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-4 border-t gap-4">
  {/* Title */}
  <p className="font-bold text-center sm:text-left">Language Spoken</p>

  {/* Languages */}
  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
    {doctor.languages.map((lang) => (
      <span
        key={lang}
        className="bg-gray-100 px-3 py-1 rounded-md text-gray-700 text-sm"
      >
        {lang}
      </span>
    ))}
  </div>

  {/* Social Icons */}
  <div className="flex justify-center sm:justify-end space-x-4 text-gray-500">
    <FacebookIcon className="w-6 h-6 cursor-pointer hover:text-[#3A643B] transition-colors duration-200" />
    <InstagramIcon className="w-6 h-6 cursor-pointer hover:text-[#3A643B] transition-colors duration-200" />
    <YoutubeIcon className="w-6 h-6 cursor-pointer hover:text-[#3A643B] transition-colors duration-200" />
    <TwitterIcon className="w-6 h-6 cursor-pointer hover:text-[#3A643B] transition-colors duration-200" />
  </div>
</div>

          </div>

          {/* Specializations */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">I Specialize In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {doctor.specializations.map((spec) => (
                <div key={spec.name} className="flex flex-col items-center">
                  <div className="bg-[#EDF5F0] p-4 rounded-full">
                    <spec.icon className="w-10 h-10 text-[#3A643B]" />
                  </div>
                  <p className="mt-2 font-semibold text-sm">{spec.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Concerns I Treat */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">The Concerns I Treat</h3>
            <div className="flex flex-wrap gap-3">
              {doctor.concerns.map((concern) => (
                <span
                  key={concern}
                  className="bg-[#F2F5F0] text-[#3A643B] font-medium px-4 py-2 rounded-full text-sm"
                >
                  {concern}
                </span>
              ))}
              <span className="bg-[#E4EFE5] text-[#3A643B] font-bold px-4 py-2 rounded-full text-sm">
                + 5 More
              </span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">My Work Experience</h3>
            <p className="text-[#3A643B] font-bold mb-4">
              I HAVE BEEN IN PRACTICE FOR : {doctor.experienceYears}+ YEARS
            </p>
            <div className="space-y-4">
              {doctor.experience.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-[#F7F7F7] rounded-lg"
                >
                  <div className="p-2 bg-[#D8E6DA] rounded-full mr-4">
                    <BriefcaseIcon className="w-6 h-6 text-[#3A643B]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{exp.clinic}</p>
                    <p className="text-sm text-gray-500">{exp.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Reviews */}
         <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
  <h3 className="text-2xl font-semibold mb-6 text-gray-800">
    Featured Reviews ({doctor.reviews.length})
  </h3>
  <div className="space-y-5">
    {doctor.reviews.map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
  </div>
</div>

        </div>

        {/* Right Column (Appointment Widget) */}
        <div className="lg:col-span-1">
          <AppointmentWidget />
        </div>
      </main>
    </div>
  );
};

export default DoctorProfilePage;
