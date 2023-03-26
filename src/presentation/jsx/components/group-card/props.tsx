import { TextProps, TouchableOpacityProps } from 'react-native';

export interface GroupCardProps extends TouchableOpacityProps {
  title: string;
  elements?: {
    titleProps?: TextProps;
  };
}
