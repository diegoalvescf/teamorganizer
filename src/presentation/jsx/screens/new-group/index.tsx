import { ERouteName } from '@infra/config/routes';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Content,
  CreateButton,
  Header,
  Input,
  NewGroupCard,
  UserIcon,
} from './styles';

export const NewGroupScreen: React.FC = () => {
  const { navigate } = useNavigation();
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

        <Input placeholder='Nome da turma' />

        <CreateButton
          title='Criar'
          onPress={() => navigate(ERouteName.PlayersScreen as never)}
        />
      </Content>
    </Container>
  );
};
