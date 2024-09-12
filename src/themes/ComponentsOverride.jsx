export default function ComponentsOverride(theme){
    const { primary, secondary, common, grey, success, error } = theme.palette;
    return{
        MuiButton: {
            defaultProps: {
            //   disableRipple: true,
              disableElevation: true,
            },
            styleOverrides: {
              root: {
                borderRadius: "6px",
                // padding: "3px 15px",
                "&.MuiButton-contained": {
                  backgroundColor:primary.main,
                  "&:hover": {
                    backgroundColor: primary.dark,
                  },
                },
                "&.MuiButton-outlined": {
                  backgroundColor:"#fff",
                  color:primary.ContrastText,
                  border: `0.4px solid ${grey[500]}`,
                  "&:hover": {
                    backgroundColor:common.white,
                    border:`2px solid ${primary.main}`,
                    color: primary.main,
                  },
                },
              },
            },
          },
    }
}