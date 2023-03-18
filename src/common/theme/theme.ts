import { PixelRatio } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    white: '#ffffff',

    green_700: '#00875f',
    green_500: '#00b37e',

    red: '#f75a68',
    red_dark: '#aa2834',

    gray_700: '#121214',
    gray_600: '#202024',
    gray_500: '#29292e',
    gray_400: '#323238',
    gray_300: '#7c7c8a',
    gray_200: '#c4c4cc',
    gray_100: '#e1e1e6',
  },

  fonts: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold',
  },

  typography: {
    fontSize: {
      xxl: {
        absolute: PixelRatio.getFontScale() * 36,
        responsive: RFValue(PixelRatio.getFontScale() * 36),
      },
      xl: {
        absolute: PixelRatio.getFontScale() * 28,
        responsive: RFValue(PixelRatio.getFontScale() * 28),
      },
      lg: {
        absolute: PixelRatio.getFontScale() * 24,
        responsive: RFValue(PixelRatio.getFontScale() * 24),
      },
      xxm: {
        absolute: PixelRatio.getFontScale() * 18,
        responsive: RFValue(PixelRatio.getFontScale() * 18),
      },
      xm: {
        absolute: PixelRatio.getFontScale() * 16,
        responsive: RFValue(PixelRatio.getFontScale() * 16),
      },
      md: {
        absolute: PixelRatio.getFontScale() * 14,
        responsive: RFValue(PixelRatio.getFontScale() * 14),
      },
      sm: {
        absolute: PixelRatio.getFontScale() * 12,
        responsive: RFValue(PixelRatio.getFontScale() * 12),
      },
      xs: {
        absolute: PixelRatio.getFontScale() * 10,
        responsive: RFValue(PixelRatio.getFontScale() * 10),
      },
      xxs: {
        absolute: PixelRatio.getFontScale() * 8,
        responsive: RFValue(PixelRatio.getFontScale() * 8),
      },
    },
    lineHeight: {
      xxl: {
        absolute: PixelRatio.getFontScale() * 46,
        responsive: RFValue(PixelRatio.getFontScale() * 46),
      },
      xl: {
        absolute: PixelRatio.getFontScale() * 38,
        responsive: RFValue(PixelRatio.getFontScale() * 38),
      },
      lg: {
        absolute: PixelRatio.getFontScale() * 34,
        responsive: RFValue(PixelRatio.getFontScale() * 34),
      },
      xxm: {
        absolute: PixelRatio.getFontScale() * 28,
        responsive: RFValue(PixelRatio.getFontScale() * 28),
      },
      xm: {
        absolute: PixelRatio.getFontScale() * 26,
        responsive: RFValue(PixelRatio.getFontScale() * 26),
      },
      md: {
        absolute: PixelRatio.getFontScale() * 24,
        responsive: RFValue(PixelRatio.getFontScale() * 24),
      },
      sm: {
        absolute: PixelRatio.getFontScale() * 22,
        responsive: RFValue(PixelRatio.getFontScale() * 22),
      },
      xs: {
        absolute: PixelRatio.getFontScale() * 20,
        responsive: RFValue(PixelRatio.getFontScale() * 20),
      },
      xxs: {
        absolute: PixelRatio.getFontScale() * 16,
        responsive: RFValue(PixelRatio.getFontScale() * 16),
      },
    },
  },
  spacing: {
    xxl: {
      absolute: 36,
      responsive: RFValue(36),
    },
    xl: {
      absolute: 32,
      responsive: RFValue(32),
    },

    lg: {
      absolute: 24,
      responsive: RFValue(24),
    },
    xxm: {
      absolute: 20,
      responsive: RFValue(20),
    },
    xm: {
      absolute: 16,
      responsive: RFValue(16),
    },
    md: {
      absolute: 12,
      responsive: RFValue(12),
    },
    sm: {
      absolute: 8,
      responsive: RFValue(8),
    },
    xs: {
      absolute: 4,
      responsive: RFValue(4),
    },
    xxs: {
      absolute: 2,
      responsive: RFValue(2),
    },
  },
};
