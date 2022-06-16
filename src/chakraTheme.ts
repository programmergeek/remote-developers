import { extendTheme, ComponentStyleConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const styledButton: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "Raleway",
    borderRadius: "3",
    px: 28,
  },
  sizes: {},
  variants: {
    solid: (props: StyleFunctionProps) => ({
      bg: "brand.600",

      color: "white",

      _hover: {
        bg: "brand.600",
      },

      _active: {
        bg: "brand.700",
      },
    }),
  },
  defaultProps: {},
};

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#dbfff2",
      100: "#aeffde",
      200: "#7effca",
      300: "#4dffb4",
      400: "#22ffa0",
      500: "#0fe686",
      600: "#00b368",
      700: "#008049",
      800: "#004e2a",
      900: "#001c0c",
    },
  },
  components: {
    Button: styledButton,
  },
});
