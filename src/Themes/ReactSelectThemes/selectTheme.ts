import { StylesConfig } from "react-select";

// constants
const FONT = "Raleway";
const TRANSITION_TIME = "150ms";
const HOVER_COLOUR = "rgba(0, 179, 104, 0.25)";
const SELECT_COLOUR = "rgba(0, 179, 104, 0.6)";
const BORDER_COLOUR = "rgba(0, 179, 104)";

export const customStyles: StylesConfig = {
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
      height: "50px",
      borderRadius: "3px",
      textAlign: "left",
      paddingLeft: 10,
      ":hover": {
        borderColor: BORDER_COLOUR,
      },
      boxShadow: "none", // remove blue outline
      fontFamily: FONT, // use Raleway font from google fonts
      transition: TRANSITION_TIME, // transitions should be 150ms long
    };
  },
  option: (provided, { isSelected }) => {
    return {
      ...provided,
      textAlign: "left",
      paddingLeft: 10,
      ":hover": {
        // Do not change the background colour if selected
        backgroundColor: isSelected ? SELECT_COLOUR : HOVER_COLOUR,
        // Do not change the text color if selected
        color: isSelected ? "white" : "black",
      },
      // make the background color of the selected item rgba(0, 179, 104, 0.6)
      backgroundColor: isSelected ? SELECT_COLOUR : "white",
      fontFamily: FONT, // use Raleway font from google fonts
      transition: TRANSITION_TIME, // transitions should be 150ms long
    };
  },
};
