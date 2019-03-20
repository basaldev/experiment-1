import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { gutters } from './variables';
import { grey } from '@material-ui/core/colors';
const gradientBackground = 'linear-gradient(180deg, rgba(10,42,119,1) 0%, rgba(4,31,95,1) 100%)';

export const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    light: 'rgba(85, 193, 226)',
    main: '#0700f6',
    dark: 'rgb(85, 193, 226)',
    contrastText: '#fff',
  },
  secondary: {
    light: '#55C1E2',
    main: 'rgb(233, 102, 57)',
    dark: '#c51162',
    contrastText: '#fff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
    disabled: '#ffffff',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    default: '#fafafa',
    paper: '#000'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
};

export const themeOptions: ThemeOptions = {
  palette: palette,
  typography: {
    useNextVariants: true,
    fontFamily: 'Noto Sans JP, sans-serif',
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        borderRadius: '0',
        boxShadow: 'none',
        border: '1px solid #e3e5e5',
        marginBottom: gutters.md,
        '&:before': {
          display: 'none',
        },
      },
    },
    MuiCard: {
      root: {
        border: 'none',
        marginBottom: '30px',
        marginTop: '10px',
        color: '#fff',
        background: '#000000',
        width: '100%',
        boxShadow: 'none',
        position: 'relative',
        display: 'flex',
        zIndex: 10,
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        fontSize: '.875rem',
        transition: 'all 300ms linear',
        overflow: 'inherit',
      },
    },
    MuiCardHeader: {
      action: {
        padding: gutters.sm,
      },
      root: {
        paddingTop: `${gutters.lg}`,
        paddingBottom: `${gutters.lg}`,
        paddingLeft: `${gutters.xl}`,
        paddingRight: `${gutters.xl}`,
      },
      title: {
        fontSize: '1.2em',
        fontWeight: 700,
        color: '#3265b0',
      },
      subheader: {
        fontSize: '1em',
        color: '#87a6d5',
      },
    },
    MuiCardContent: {
      root: {
        padding: `${gutters.xs} !important`
      },
    },
    MuiListItemText: {
      primary: {
        color: '#fff',
        fontWeight: 300,
        opacity: 0.7,
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#fff',
        opacity: 0.7,
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 0,
      },
    },
    MuiDialogActions: {
      root: {
        margin: '0 24px 24px',
      },
    },
    MuiDialogTitle: {
      root: {
        '& h6': {
          fontSize: '1em',
        },
      },
    },
    MuiDialogContentText: {
      root: {
        margin: gutters.xxl,
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: `${gutters.sm}`,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '4em',
      },
      notchedOutline: {
        borderRadius: '4em',
      },
    },
    MuiAppBar: {
      root: {
        background: gradientBackground,
        boxShadow: 'none',
      },
      colorPrimary: {
        backgroundColor: 'transparent !important',
        background: 'transparent !important',
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: grey[600],
      },
    },
    MuiStepper: {
      root: {
        background: palette.background.default,
      },
    },
    MuiIconButton: {
      colorPrimary: {
        color: palette.primary.main,
      },
    },
    MuiButton: {
      contained: {
        borderRadius: '0',
        boxShadow: 'none',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#66c7e5',
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: 'rgba(233, 102, 57, 0.9);',
        },
      },
      text: {
        padding: '6px 16px;',
        minWidth: '64px',
        borderRadius: 0,
      },
    },
    MuiSnackbarContent: {
      root: {
        borderRadius: '0 !important',
      },
    },
  },
};


export const theme = createMuiTheme(themeOptions);