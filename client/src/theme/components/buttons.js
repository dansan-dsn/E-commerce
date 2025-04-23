export default {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '8px 16px',
        fontWeight: 500,
      },
    },
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          border: '2px dashed',
        },
      },
    ],
  };