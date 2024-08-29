import { useState,useEffect  } from 'react';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';
import { z } from 'zod';

import '../App.css';
import useWindowWidth from '../helper/useWindowWidth';
import { useStore } from '../store';
import { LineChart } from 'lucide-react';

const BookingForm = () => {
  const width = useWindowWidth();
  const [startDate, setStartDate] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(false);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [errors, setErrors] = useState({});
  const User = z.object({
    name: z.string().min(6, 'At least 6 characters required').max(16, 'Name too long, max 16 characters'),
    email: z.string().min(1, 'Email is required').email("Invalid email address"),
    selectedDate: z.boolean().refine(value => value === true, { message: 'Date is required' }),
    selectedTime: z.boolean().refine(value => value === true, { message: 'Time is required' }),
  });

  const [success, setSuccess] = useState(false);


  // renew the errors object by useEffect
   useEffect(() => {
     if (submitPressed) {
        try {
          User.parse({ name, email, selectedDate, selectedTime });
          setErrors({});
        } catch (error) {
          const newErrors = {};
          error.errors.forEach(e => {
            newErrors[e.path[0]] = e.message;
          });
          setErrors(newErrors);
        }
      }
    }, [name, email, selectedDate, selectedTime]);


  async function submit() {
    try {
      User.parse({ name, email, selectedDate, selectedTime });
      setErrors({});
      console.log('submitted');

    setSuccess(true);

    } catch (error) {
      const newErrors = {};
      error.errors.forEach(e => {
        newErrors[e.path[0]] = e.message;
      });
      setErrors(newErrors);
    }
    setSubmitPressed(true);
  }

  if (success === true )  {
  return (
  <>
    <div {...stylex.props(styles.card)}>
      Thank you for the reservation
      <Link to="/">Back to Home</Link>
    </div>
  </>)}

  return (
    <>
      <div {...stylex.props(styles.card)}>
        <DatePicker
          minDate={new Date()}
          selected={selectedDate ? startDate : undefined}
          onChange={date => {
            console.log('date', date);
            if (date === null) {
              setSelectedDate(false);
            } else {
              setSelectedDate(true);
              setStartDate(date);
            }
          }}
          nextMonthButtonLabel="→"
          previousMonthButtonLabel="←"
          placeholderText="Select Date"
        />
        {errors.selectedDate && (
          <div {...stylex.props(styles.errorMessage)}>
            <span>{errors.selectedDate}</span>
          </div>
        )}
        <DatePicker
          selected={selectedTime ? startDate : null}
          onChange={date => {
            if (date === null) {
              setSelectedTime(false);
            } else {
              setSelectedTime(true);
              setStartDate(date);
            }
          }}
          showTimeSelect
          dateFormat="p"
          showTimeSelectOnly
          placeholderText="Select Time"
          timeIntervals={60}
          minTime={new Date().setHours(9, 0)}
          maxTime={new Date().setHours(20, 0)}
        />
        {errors.selectedTime && (
          <div {...stylex.props(styles.errorMessage)}>
            <span>{errors.selectedTime}</span>
          </div>
        )}

        <input
          type="text"
          placeholder="Name"
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
        />

        {errors.name && (
          <div {...stylex.props(styles.errorMessage)}>
            <span>{errors.name}</span>
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && (
          <div {...stylex.props(styles.errorMessage)}>
            <span>{errors.email}</span>
          </div>
        )}
        <button {...stylex.props(styles.btn)} onClick={submit}>
          Book
        </button>
      </div>
    </>
  );
};

export default BookingForm;

const styles = stylex.create({
  card: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '16px  ',
    width: '400px',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
  },
  btn: {
    backgroundColor: '#F4CD14',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
  },
  errorMessage: {
    color: 'red',
    padding: '0px',
  },
});
