export default function IconButton(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        colorInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        colorPrimary: {
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
        colorSecondary: {
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        },
        edgeStart: {
          marginLeft: -theme.spacing(1),
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        edgeEnd: {
          marginRight: -theme.spacing(1),
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
