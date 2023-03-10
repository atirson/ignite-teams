import { useState } from 'react'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './styles'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState<string>('')
  const navigation = useNavigation()

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) return Alert.alert('Novo Grupo', 'O nome da turma não pode ser vazio')

      await groupCreate(group)
      navigation.navigate('players', {  group })
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Novo Grupo', error.message)
      } else {
        console.log(error)
        return Alert.alert('Novo Grupo', 'Ocorreu um erro inesperado')
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />  
        <Button 
          title="Criar" 
          style={{ marginTop: 20 }} 
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
