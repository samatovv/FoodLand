import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat Alternates",
    lineHeight: 1,

    h1: {
      fontSize: 72,
      "@media (max-width:768px)": {
        fontSize: 30,
      },
    },

    h2: {
      fontSize: 56,
      "@media (max-width:768px)": {
        fontSize: 28,
      },
    },

    h3: {
      fontSize: 48,
      "@media (max-width:768px)": {
        fontSize: 28,
      },
    },

    h4: {
      fontSize: 28,
      "@media (max-width:768px)": {
        fontSize: 20,
      },
    },

    h5: {
      fontSize: 20,
    },

    h6: {
      fontSize: 18,
      lineHeight: 1,
      "@media (max-width:768px)": {
        fontSize: 16,
      },
    },

    subtitle1: {
      fontSize: 16,
    },

    subtitle2: {
      fontSize: 14,
      lineHeight: 1,
    },

    body1: {
      fontSize: 13,
    },

    body2: {
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: "#6e8435",
    },
    secondary: {
      main: "#FFF",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "46px",
          boxShadow: "none",
          textTransform: "none",
          "&.MuiButton-sizeLarge": {
            padding: "13px 35px",
          },

          "&.MuiButton-sizeMedium": {
            padding: "12px 35px",
          },

          "&.MuiButton-sizeSmall": {
            padding: "11px 35px",
          },
        },
      },
      variants: [
        {
          props: { variant: "more" },
          style: {
            backgroundColor: "#FFF",
            padding: "4px 4px 4px 16px",
            borderRadius: "100px",
            color: "#000",
            fontSize: 14,
          },
        },
      ],
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiFormControl-root": {
            borderRadius: "100px",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderRadius: "100px",
          },

          "& .MuiOutlinedInput-input": {
            padding: "14.66px 18px",
          },

          "& input": {
            backgroundColor: "#FFFFFF",
            borderRadius: "100px",
            fontFamily: "Open Sans",

            // "&::placeholder": {
            //   fontWeight: "400",
            //   fontSize: "14px",
            //   lineHeight: 1,
            //   color: "#6D6D6D",
            // },
          },
        },
      },
    },
  },
});
