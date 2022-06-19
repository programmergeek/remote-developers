import { StylesConfig } from "react-select";
import { Type } from "typescript";

export const customStyles: StylesConfig<Type> = {
  container: (provided) => {
    return {
      ...provided,
      width: "98%",
    };
  },

  control: (provided) => {
    return {
      ...provided,
      border: "2px solid #c5c5c5",
      borderRadius: "3px",
      textAlign: "left",
      paddingLeft: 10,
      ":hover": {
        borderColor: "#00b368",
      },
      boxShadow: "none",
      fontFamily: "Raleway",
      transition: "150ms",
    };
  },
  option: (provided, { isSelected }) => {
    return {
      ...provided,
      textAlign: "left",
      paddingLeft: 10,
      ":hover": {
        backgroundColor: isSelected
          ? "rgba(0, 179, 104, 0.6)"
          : "rgba(0, 179, 104, 0.25)",
        color: isSelected ? "white" : "black",
      },
      backgroundColor: isSelected ? "rgba(0, 179, 104, 0.6)" : "white",
      fontFamily: "Raleway",
      transition: "150ms",
    };
  },
};
