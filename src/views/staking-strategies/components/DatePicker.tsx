import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import {inputCss} from "./Input";

const StyledDatePicker = styled(DatePicker)`
  ${inputCss};
  padding: 0 10px 0 15px;
`;

type PickerDate = Date | null;
interface Props {
  dateFrom: PickerDate;
  dateTo: PickerDate;
  onCalendarClose: (s: PickerDate , e: PickerDate) => void;
}

const DatePickerContainer: React.FC<Props> = ({onCalendarClose, dateFrom, dateTo}) => {
  const [startDate, setStartDate] = useState(dateFrom);
  const [endDate, setEndDate] = useState(dateTo);

  const onChange = (dates: [PickerDate, PickerDate]): void => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <StyledDatePicker
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onCalendarClose={(): void => onCalendarClose(startDate, endDate)}
      onChange={onChange}
      calendarClassName="rasta-stripes"
      selectsRange
    />
  )
}

export default DatePickerContainer;