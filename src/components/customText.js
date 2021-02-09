import { Text } from 'native-base';
import React from 'react';
import { FONTS } from '../constants';

const { small, p, h1, h2, h3, h4 } = FONTS;

export const Small = ({ style, ...rest }) => <Text style={{ ...small, ...style }} {...rest} />;
export const P = ({ style, ...rest }) => <Text style={{ ...p, ...style }} {...rest} />;
export const H1 = ({ style, ...rest }) => <Text style={{ ...h1, ...style }} {...rest} />;
export const H2 = ({ style, ...rest }) => <Text style={{ ...h2, ...style }} {...rest} />;
export const H3 = ({ style, ...rest }) => <Text style={{ ...h3, ...style }} {...rest} />;
export const H4 = ({ style, ...rest }) => <Text style={{ ...h4, ...style }} {...rest} />;
