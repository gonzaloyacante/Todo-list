import { useState } from "react";
import {
  FaCalendarAlt,
  FaRegCalendarAlt,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaCheck,
  FaTimes,
  FaSort,
  FaCaretDown,
} from "react-icons/fa";

const options = [
  { id: "dateOld", label: "Más reciente", icon: <FaCalendarAlt /> },
  { id: "dateRecent", label: "Más antigua", icon: <FaRegCalendarAlt /> },
  {
    id: "alphabeticalAZ",
    label: "Alfabético (A-Z)",
    icon: <FaSortAlphaDown />,
  },
  { id: "alphabeticalZA", label: "Alfabético (Z-A)", icon: <FaSortAlphaUp /> },
  { id: "completedFirst", label: "Completados", icon: <FaCheck /> },
  { id: "completedLast", label: "No completados", icon: <FaTimes /> },
];

const TodoSortButton = ({ sortBy, setSortBy }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = (optionId) => {
    setSortBy(optionId);
    setIsActive(false);
  };

  const selectedOption = options.find((opt) => opt.id === sortBy);

  return (
    <div className="container">
      <div
        className={`dropdown ${isActive && "active"}`}
        onClick={() => setIsActive(!isActive)}>
        <div className="select">
          {selectedOption ? selectedOption.icon : <FaSort />}
          {selectedOption ? selectedOption.label : "Ordenar por"}
          <FaCaretDown />
        </div>
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option.id)}>
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { TodoSortButton };
