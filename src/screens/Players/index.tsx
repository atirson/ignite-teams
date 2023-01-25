import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form } from "./styles";

export const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input 
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>
      
    </Container>
  )
}