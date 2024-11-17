import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./redux/userAPICall";
import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

dayjs.extend(utc);
dayjs.extend(timezone);

const UserList = () => {
  const dispatch = useDispatch();

  // Get the state from the store
  const { users, error } = useSelector((state) => state.user);
  const { posts, isLoading, message } = useSelector((state) => state.posts);

  const [value, setValue] = useState(dayjs().utc()); // Store date in UTC
  const [currentTz, setCurrentTz] = useState('UTC');  // Track the current timezone

  // Function to handle timezone change
  const handleTimezoneChange = (tz) => {
    setCurrentTz(tz);
    // Convert the current value to the new timezone and update the state
    //setValue((prevValue) => dayjs(prevValue).tz(tz, true)); // 'true' keeps the time as is (no offset applied)
  };
useEffect(()=>{
  setValue((prevValue) => dayjs(prevValue).tz(currentTz, true));
},[currentTz])
  return (
    <div>
      <h2>User List</h2>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <DateTimePicker
            label="Controlled picker"
            value={dayjs(value)}  // Convert the UTC value to the current timezone for display
            onChange={(newValue) => {
              setValue(newValue ? dayjs(newValue).utc() : dayjs().utc()); 
            }}
          />
          <div>
            <button onClick={() => handleTimezoneChange('UTC')}>UST (UTC)</button>
            <button onClick={() => handleTimezoneChange('Asia/Kolkata')}>IST</button>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default UserList;
