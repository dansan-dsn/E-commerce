export default {
  // Default props for all TextFields
  defaultProps: {
    variant: "outlined",
    size: "small",
    fullWidth: true,
  },

  // Style overrides
  styleOverrides: {
    root: ({ theme }) => ({
      marginBottom: theme.spacing(2),
      "& .MuiFormLabel-asterisk": {
        color: theme.palette.error.main,
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: theme.shape.borderRadius,
      },
    }),
  },

  // Custom variants
  variants: [
    {
      props: { variant: "dashed" },
      style: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderStyle: "dashed",
          borderWidth: "2px",
        },
      },
    },
    {
      props: { size: "large" },
      style: {
        "& .MuiInputBase-input": {
          padding: "12px 14px",
          fontSize: "1rem",
        },
      },
    },
  ],
};
