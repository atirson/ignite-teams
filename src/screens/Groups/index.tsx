import { useState } from 'react';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';


export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocketseat', 'Turma Ignite', 'Turma React Native']);

  const navigation = useNavigation()

  const handleNewGroup = () => { 
    navigation.navigate('new')
  }
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : {}}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup} 
      />

    </Container>
  );
}

