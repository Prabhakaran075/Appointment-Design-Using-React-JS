import React, { useState } from 'react';
import FindDoctorsPage from './pages/FindDoctorsPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import Header from './components/Header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('find');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentPage('profile');
    window.scrollTo(0, 0);
  };

  const handleGoToFindDoctors = () => {
    setSelectedDoctor(null);
    setCurrentPage('find');
    window.scrollTo(0, 0);
  };

  const sampleDoctor = {
    id: 1,
    name: 'Dr. Bruce Willis',
    specialty: 'Gynaecologist',
    rating: 4.5,
    image: 'https://picsum.photos/id/1027/200/200',
    followers: '850',
    following: '18K',
    posts: '250',
    about:
      'Hello I am Dr. Bruce Willis, a Gynaecologist in Sanjivni Hospital Surat. Love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medical College.',
    languages: ['English', 'Hindi', 'Telugu'],
    specializations: [
      { name: "Women's Health" },
      { name: 'Skin Care' },
      { name: 'Immunity' },
      { name: 'Hair Care' },
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
      {
        role: 'Senior Doctor',
        clinic: 'Midtown Medical Clinic',
        period: '2015-PRESENT',
      },
      {
        role: 'Senior Doctor',
        clinic: 'Midtown Medical Clinic',
        period: '2010-2015',
      },
    ],
    reviews: [
      {
        author: 'Alicent Hightower',
        for: 'Consulted for Skin Care',
        date: '20 January 2023',
        rating: 5,
        text: 'Might be bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.',
        image: 'https://picsum.photos/id/1028/200/200',
      },
      {
        author: 'Alicent Hightower',
        for: 'Consulted for Pregnancy',
        date: '20 January 2023',
        rating: 4,
        text: 'Might be bit early to confirm but yes I can see noticeable difference. Will write again after using it for longer periods.',
        image: 'https://picsum.photos/id/1029/200/200',
      },
    ],
    experienceYears: 7,
    location: 'Surat',
  };

  return (
    <div className="min-h-screen bg-[#FBFDFB]">
      <Header onFindDoctorsClick={handleGoToFindDoctors} />
      {currentPage === 'find' && <FindDoctorsPage path="/" onViewProfile={handleViewProfile} />}
      {currentPage === 'profile' && (
        <DoctorProfilePage paht="/d" doctor={selectedDoctor || sampleDoctor} />
      )}
    </div>
  );
};

export default App;
