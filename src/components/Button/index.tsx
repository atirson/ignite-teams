import { TouchableHighlightProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps } from "./style";

type Props = TouchableHighlightProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export const Button = ({ title, type = "PRIMARY", ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
