export const ComponentOverride = (theme) => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "small",
      },
      styleOverrides: {
        root: {
          "&.MuiButton-root": {
            transitionDuration: "150ms",
            transitionDelay: "150ms",
            textTransform: "capitalize",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1);",
          },
          "&.MuiButton-contained": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            "&:active": {},
            "&:hover": {},
          },
          "&.MuiButton-outlined": {
            border: "1px solid #1089FF",
            color: "#1089FF",
            "&:active": {},
          },
          "&.MuiButton-text": {
            color: "#525CEB",
            "&:active": {},
          },
          fontSize: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-root": {
            "&:hover": {},
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&.Mui-focused": {},
          "&::placeholder": {
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiTextField-root": {
            [theme.breakpoints.up("768")]: {
              size: "medium",
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.palette.grey[300],
              borderWidth: "1.4px",
            },
            "&:hover fieldset": {
              borderColor: theme.palette.grey[800],
              borderWidth: "1.4px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#9400FF",
              borderWidth: "1.4px",
            },
          },
          "& .MuiInputBase-input": {
            color: theme.palette.grey[800],
          },
          "& .MuiInputLabel-root": {
            color: theme.palette.grey[800],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: theme.shape.borderRadius.main,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.MuiFormLabel-root": {
            color: theme.palette.grey[800],
            "&.Mui-focused": {
              color: theme.palette.common.black,
            },
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          position: "relative",

          "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
          "& .MuiDataGrid-main": {
            width: "100%",
            height: "calc(100dvh - 280px)",
          },
          "& .MuiDataGrid-cell": {
            textAlign: "center",
            borderRight: "1px solid #ccc",
          },
          "& .MuiDataGrid-root .MuiDataGrid-header": {
            position: "sticky",
            top: 0,
            zIndex: 1,
          },
          "& .MuiDataGrid-menuIcon": {
            display: "none",
          },
          "& .MuiDataGrid-sortIcon": {
            display: "none",
            color: "white",
          },
        },
        row: {
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.common.white,
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          maxHeight: "60px",
          minHeight: "40px",
          height: "100%",
          "& .MuiTabs-flexContainer ": {
            maxHeight: "60px",
            minHeight: "40px",
            height: "100%",
            paddingBlock: "2px",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.secondary.main,
          },
          "& .MuiTab-root": {
            padding: 0,
            color: theme.palette.grey[200],
            textTransform: "capitalize",
            fontFamily: "roboto-medium",
            "&.MuiButtonBase-root.MuiTab-root": {
              padding: "8px",
              minHeight: "10px",
              marginBlock: "10px",
              // borderInlineEnd: "0.4px solid rgba(189, 189, 189, 0.5);",
              "&:first-of-type": {
                // borderInlineStart: "0.4px solid rgba(189, 189, 189, 0.6);",
              },
            },
            "&.Mui-selected": {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 25,
              // fontWeight:600,
            },
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        textTransform : 'capitalize'
      },
      styleOverrides: {
        root: {},
      },
    },
  };
};
