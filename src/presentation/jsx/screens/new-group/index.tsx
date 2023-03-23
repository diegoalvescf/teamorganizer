import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { NewGroupScreenProps } from './props';
import {
  Container,
  Content,
  CreateButton,
  Header,
  NewGroupCard,
  UserIcon,
} from './styles';

export const NewGroupScreen: React.FC<NewGroupScreenProps> = ({}) => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header
        showBackButton
        onPress={goBack}
      />

      <Content>
        <UserIcon />

        <NewGroupCard
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <CreateButton title='Criar' />
      </Content>
    </Container>
  );
};
