import React from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps, TextStyle } from 'react-native';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
  testID?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  fontSize = 16,
  fontWeight = 'normal',
  color = '#000000',
  textAlign = 'left',
  style,
  testID,
  ...rest
}) => {
  const textStyle: TextStyle = {
    fontSize,
    fontWeight,
    color,
    textAlign,
  };

  return (
    <RNText style={[styles.baseText, textStyle, style]} testID={testID} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  baseText: {
    // You can add any global default text styles here if needed
    // For example, default font family
    // fontFamily: 'YourAppDefaultFontFamily',
  },
});

export default Text;
