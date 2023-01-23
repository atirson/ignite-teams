import { Container, Message } from './style';

type Props = {
  message: string;
}

export const EmptyList = ({ message }: Props) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};