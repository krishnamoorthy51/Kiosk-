
import React, { useEffect, useState } from 'react';
import Keypad from './Keypad';
const StaffList = () => {
    const [staffList, setStaffList] = useState([
            {
                "staff_name":"Arun kumar",
                "pin_number":"7747",
                "company_id":0,
                "user_id":6974,
                "start_time":null,
                "end_time":null,
                "start_time_formated":null,
                "end_time_formated":null,
                "clockIn_time":null,
                "clockOut_time":null,
                "staff_clock_id":null,
                "in_time_flag":null,
                "staff_schedule_occurrence_id":0,
                "uuid":null
            },
            {
                "staff_name":"aswini S",
                "pin_number":"0000",
                "company_id":0,
                "user_id":3773,
                "start_time":null,
                "end_time":null,
                "start_time_formated":null,
                "end_time_formated":null,
                "clockIn_time":null,
                "clockOut_time":null,
                "staff_clock_id":null,
                "in_time_flag":null,
                "staff_schedule_occurrence_id":0,
                "uuid":null
            },
            {
                "staff_name":"Sona devi",
                "pin_number":"No clock_pin",
                "company_id":0,
                "user_id":5307,
                "start_time":null,
                "end_time":null,
                "start_time_formated":null,
                "end_time_formated":null,
                "clockIn_time":null,
                "clockOut_time":null,
                "staff_clock_id":null,
                "in_time_flag":null,
                "staff_schedule_occurrence_id":0,
                "uuid":null
            },
            {
                "staff_name":"Reuban d",
                "pin_number":"0000",
                "company_id":0,
                "user_id":5114,
                "start_time":null,
                "end_time":null,
                "start_time_formated":null,
                "end_time_formated":null,
                "clockIn_time":null,
                "clockOut_time":null,
                "staff_clock_id":null,
                "in_time_flag":null,
                "staff_schedule_occurrence_id":0,
                "uuid":null
            }]); 
    const [selectedStaffDetails, setSelectedStaffDetails] = useState();
    const [staffSelected, setStaffSelected] = useState(false);
    const handleOnClick = (val, evt) => {
        setStaffSelected(true);
        setSelectedStaffDetails(val)
    };
    if(staffSelected)
    {
        return <div className="h-full w75">
            <div className="list-container">
                <div className="back-btn">
                    <div onClick={() => {setStaffSelected(!staffSelected);}}> &#60; Back</div>
                </div>
                <div className="staff-cont">
                    Hi, {selectedStaffDetails.staff_name} Enter your pin
                </div>
                <div className='key-pad-row'>
                    <Keypad value="1" />
                    <Keypad value="2" />
                    <Keypad value="3" />
                </div>
                <div className='key-pad-row'>
                    <Keypad value="4" />
                    <Keypad value="5" />
                    <Keypad value="6" />
                </div>
                <div className='key-pad-row'>
                    <Keypad value="7" />
                    <Keypad value="8" />
                    <Keypad value="9" />
                </div>
            </div>
        </div>;
    }
    else{
        console.log(staffSelected);
        return <div className="h-full w75">
            <div className="list-container">
                <div className="search-bar">
                    <input className="search-bar-input" placeholder="Search for a staff member" />
                </div>
                <div className="staff-list-cont">{staffList.map((item,i) => {
                    return(
                        <div className="staff-name"  onClick={(evt) => {handleOnClick(item, evt);}}> {item.staff_name}</div>
                    )})} 
                </div>
            </div>
        </div>;
    }
    
};

export default StaffList;