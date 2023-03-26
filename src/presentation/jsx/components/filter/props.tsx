import { TouchableOpacityProps } from 'react-native';

export interface FilterComponentProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export interface FilterComponentStyleProps {
  isActive?: boolean;
}
