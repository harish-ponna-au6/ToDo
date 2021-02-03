import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  green1: '#09B44D', // greenish
  green2: '#D0F1DD', // greenish
  red1: '#E72D2D', // greenish
  white1: '#F6F6F6', // whitish
  black1: '#262626',
};

export const SHADOWS = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
};

export const SIZES = {
  // global sizes
  radius1: 8,
  radius2: 4,
  padding1: 20,
  padding2: 10,
  padding3: 5,
  margin1: 20,
  margin2: 15,
  margin3: 10,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  p: 16,
  small: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
    color: COLORS.black1,
    fontWeight: '700',
  },
  h1: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h1, lineHeight: 36, color: COLORS.black1, fontWeight: '700' },
  h2: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h2, lineHeight: 30, color: COLORS.black1, fontWeight: '600' },
  h3: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22, color: COLORS.black1, fontWeight: '500' },
  h4: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h4, lineHeight: 22, color: COLORS.black1, fontWeight: '400' },
  p: { fontFamily: 'Poppins-Medium', fontSize: SIZES.p, lineHeight: 20, color: COLORS.black1, fontWeight: '300' },
  small: { fontFamily: 'Poppins-Medium', fontSize: SIZES.small, color: COLORS.black1, fontWeight: '300' },
};
