import { TouchableOpacityProps } from 'react-native';

export enum ModeButton {
  create = 'create',
  delete = 'delete',
}
export interface ButtonProps extends TouchableOpacityProps {
  type?: ModeButton;
  title: string;
}

export interface ButtonStyleProps {
  type?: ModeButton;
}
