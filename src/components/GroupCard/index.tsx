import { TouchableHighlightProps } from 'react-native';
import { Container, Icon, Title } from './style';


type Props = TouchableHighlightProps & {
  title: string;
}

export const GroupCard = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

