// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DateRangePicker = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//   };

//   return (
//     <div>
//       <DatePicker
//         selected={startDate}
//         onChange={handleStartDateChange}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//         placeholderText="Select start date"
//       />
//       <DatePicker
//         selected={endDate}
//         onChange={handleEndDateChange}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         minDate={startDate}
//         placeholderText="Select end date"
//       />
//     </div>
//   );
// };

// export default DateRangePicker;
