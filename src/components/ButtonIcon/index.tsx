import { TouchableOpacityProps } from "react-native";

import { Container, Icon, ButtonIconTypeStyleProps } from "./style";
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon 
        name={icon}
        type={type} 
      />
    </Container>
  );
};