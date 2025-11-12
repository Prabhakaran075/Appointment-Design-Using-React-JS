import React from 'react';
import DoctorCard from '../components/DoctorCard';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  LocationMarkerIcon,
  HairCareIcon,
  ImmunityIcon,
  SkinCareIcon,
  WomensHealthIcon,
} from '../components/icons';

const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Prerna Narang',
    specialty: 'Male-Female Infertility',
    experienceYears: 7,
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    image: 'https://picsum.photos/id/1027/200/200',
    followers: '850',
    following: '18K',
    posts: '250',
    about:
      'Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medical College.',
    specializations: [
      { name: "Women's Health", icon: WomensHealthIcon },
      { name: 'Skin Care', icon: SkinCareIcon },
      { name: 'Immunity', icon: ImmunityIcon },
      { name: 'Hair Care', icon: HairCareIcon },
    ],
    concerns: [
      'Skin Treatment',
      'Pregnancy',
      'Period Doubts',
      'Endometriosis',
      'Pelvic Pain',
      'Ovarian Cysts',
    ],
    experience: [
      { role: 'Senior-doctor', clinic: 'Midtown Medical Clinic', period: '2015-PRESENT' },
      { role: 'Senior-doctor', clinic: 'Midtown Medical Clinic', period: '2010-2015' },
    ],
    reviews: [
      {
        author: 'Alicent Hightower',
        for: 'Consulted for Skin care',
        date: '20 January 2023',
        rating: 5,
        text: 'Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods',
        image: 'https://picsum.photos/id/1028/200/200',
      },
      {
        author: 'Alicent Hightower',
        for: 'Consulted for Pregnancy',
        date: '20 January 2023',
        rating: 4,
        text: 'Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods',
        image: 'https://picsum.photos/id/1029/200/200',
      },
    ],
    location: 'Surat',
  },
  {
    id: 2,
    name: 'Dr. Prerna Narang',
    specialty: 'Male-Female Infertility',
    experienceYears: 7,
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    image: 'https://picsum.photos/id/1027/200/200',
    followers: '850',
    following: '18K',
    posts: '250',
    about:
      'Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medical College.',
    specializations: [
      { name: "Women's Health", icon: WomensHealthIcon },
      { name: 'Skin Care', icon: SkinCareIcon },
      { name: 'Immunity', icon: ImmunityIcon },
      { name: 'Hair Care', icon: HairCareIcon },
    ],
    concerns: [
      'Skin Treatment',
      'Pregnancy',
      'Period Doubts',
      'Endometriosis',
      'Pelvic Pain',
      'Ovarian Cysts',
    ],
    experience: [
      { role: 'Senior-doctor', clinic: 'Midtown Medical Clinic', period: '2015-PRESENT' },
      { role: 'Senior-doctor', clinic: 'Midtown Medical Clinic', period: '2010-2015' },
    ],
    reviews: [],
    location: 'Surat',
  },
  {
    id: 3,
    name: 'Dr. Prerna Narang',
    specialty: 'Male-Female Infertility',
    experienceYears: 7,
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    image: 'https://picsum.photos/id/1027/200/200',
    followers: '850',
    following: '18K',
    posts: '250',
    about:
      'Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medical College.',
    specializations: [
      { name: "Women's Health", icon: WomensHealthIcon },
      { name: 'Skin Care', icon: SkinCareIcon },
      { name: 'Immunity', icon: ImmunityIcon },
      { name: 'Hair Care', icon: HairCareIcon },
    ],
    concerns: [
      'Skin Treatment',
      'Pregnancy',
      'Period Doubts',
      'Endometriosis',
      'Pelvic Pain',
      'Ovarian Cysts',
    ],
    experience: [
      { role: 'Senior-doctor', clinic: 'Midtown Medical Clinic', period: '2015-PRESENT' },
      { role: 'Senior-doctor', clinic: 'Midtown Medical Clinic', period: '2010-2015' },
    ],
    reviews: [],
    location: 'Surat',
  },
];

const FilterTag = ({ label }) => (
  <div className="flex items-center bg-[#E4EFE5] text-[#3A643B] px-3 py-1 rounded-md text-sm">
    <span>{label}</span>
    <CloseIcon className="w-4 h-4 ml-2 cursor-pointer" />
  </div>
);

const FilterDropdown = ({ label }) => (
  <div className="relative">
    <button className="bg-gray-100 px-4 py-2 rounded-lg flex items-center justify-between w-full md:w-auto">
      <span>{label}</span>
      <ChevronDownIcon className="w-4 h-4 ml-2" />
    </button>
  </div>
);

const FindDoctorsPage = ({ onViewProfile }) => {
  return (
    <div className="bg-[#FBFDFB]">
      {/* Hero Section */}
      <div
        className="py-12 px-4 text-center bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(to bottom, #FFF7E2, #FBFDFB)' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find Expert Doctors For An In-clinic Session Here
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="flex items-center w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 p-2">
            <LocationMarkerIcon className="w-6 h-6 text-gray-400 mr-2" />
            <select className="bg-transparent w-full focus:outline-none text-gray-700">
              <option>Select Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
            className="w-full md:w-2/3 p-2 focus:outline-none"
          />
          <button className="bg-[#3A643B] p-2 rounded-md">
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <FilterDropdown label="Expertise" />
          <FilterDropdown label="Gender" />
          <FilterDropdown label="Fees" />
          <FilterDropdown label="Languages" />
          <FilterDropdown label="All filters" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <FilterTag label="Hair care" />
          <FilterTag label="Female" />
          <FilterTag label="Rs.0-Rs.500" />
          <FilterTag label="Hindi" />
        </div>
      </div>

      {/* Doctors Grid */}
      <main className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onViewProfile={onViewProfile} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FindDoctorsPage;
