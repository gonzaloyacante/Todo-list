const CustomDatePicker = ({ endDate, setEndDate }) => {
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setEndDate(selectedDate);
  };

  return (
    <div className="datepicker-container">
      <label className="datepicker-label">Fecha de finalización:</label>
      <div className="datepicker-wrapper">
        <input
          type="datetime-local"
          value={endDate ? endDate.toISOString().slice(0, 16) : ""}
          onChange={handleDateChange}
          className="datepicker-input"
          placeholder="Selecciona una fecha"
        />
      </div>
    </div>
  );
};

export { CustomDatePicker };
