import React, { useState } from 'react';
import { CalendarIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

const AppointmentWidget = () => {
  const [sessionMode, setSessionMode] = useState('video');
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const dates = [
    { day: 'Mon', date: 10, slots: 10 },
    { day: 'Tue', date: 11, slots: 2 },
    { day: 'Wed', date: 12, slots: 15 },
  ];

  const morningSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:15 AM',
    '10:45 AM',
    '11:00 AM',
    '12:00 AM',
  ];
  const eveningSlots = ['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'];

  return (
    <div className="border border-gray-300 rounded-2xl p-6 w-full max-w-md mx-auto">
      {/* Appointment Fee */}
      <div className="flex justify-between items-center pb-4 border-b">
        <span className="font-semibold">Appointment Fee</span>
        <span className="font-bold text-[#3A643B]">₹699.00</span>
      </div>

      {/* Session Mode */}
      <div className="py-4">
        <p className="font-bold text-center mb-3">Select your mode of session</p>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <button
            onClick={() => setSessionMode('in-clinic')}
            className={`py-2 border-b-2 transition-all ${
              sessionMode === 'in-clinic'
                ? 'border-[#3A643B] font-bold'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            In-Clinic <span className="block text-xs">45 Mins</span>
          </button>

          <button
            onClick={() => setSessionMode('video')}
            className={`py-2 border-b-2 transition-all relative ${
              sessionMode === 'video'
                ? 'border-[#3A643B] font-bold'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            Video
            <CheckCircleIcon
              className={`w-5 h-5 absolute top-1 right-1 ${
                sessionMode === 'video' ? 'text-green-500' : 'text-gray-300'
              }`}
            />
            <span className="block text-xs">45 Mins</span>
          </button>

          <button
            onClick={() => setSessionMode('chat')}
            className={`py-2 border-b-2 transition-all ${
              sessionMode === 'chat'
                ? 'border-[#3A643B] font-bold'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            Chat <span className="block text-xs">10 Mins</span>
          </button>
        </div>
      </div>

      {/* Date Picker */}
      <div className="py-4">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold">Pick a time slot</p>
          <CalendarIcon className="w-6 h-6 text-gray-500" />
        </div>

        <div className="border rounded-xl p-2">
          <div className="flex items-center justify-between mb-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            <span className="font-semibold">Mon, 10 Oct</span>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            {dates.map((d, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`p-2 rounded-lg ${
                  selectedDate === index
                    ? 'bg-[#F2FBF2] border border-green-300'
                    : 'bg-transparent'
                }`}
              >
                <p
                  className={`font-semibold ${
                    selectedDate === index ? 'text-[#3A643B]' : 'text-gray-700'
                  }`}
                >
                  {d.day}, {d.date} Oct
                </p>
                <p className="text-xs text-gray-500">{d.slots} slots</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time Slots */}
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Morning</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {morningSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-1 rounded-lg border ${
                  selectedTime === time
                    ? 'bg-[#3A643B] text-white'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Evening</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {eveningSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-1 rounded-lg border ${
                  selectedTime === time
                    ? 'bg-[#3A643B] text-white'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full mt-6 py-3 bg-[#3A643B] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-opacity">
        Make An Appointment
      </button>
    </div>
  );
};

export default AppointmentWidget;
