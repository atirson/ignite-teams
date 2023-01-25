import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Button } from "@components/Button";

export const Players = () => {
  const [team, setTeam] = useState<string>('Time A')
  const [players, setPlayers] = useState<string[]>(['Atirson', 'Fabiano'])

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

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
      
      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 20 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}