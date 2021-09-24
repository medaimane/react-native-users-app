import {ViewStyle} from 'react-native';
import {Colors} from './Colors';

export const Styles = {
  Shadow: (color: string = Colors.PrimarySoft): ViewStyle => ({
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  }),
};
