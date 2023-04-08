import { ERouteName } from '@infra/config/routes';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {
  Container,
  Content,
  CreateButton,
  Header,
  Input,
  NewGroupCard,
  UserIcon,
} from './styles';
import { setGroupInternal } from '@infra/database/storage/group/set/set-group';
import { Alert, KeyboardAvoidingView } from 'react-native';
import { IGroup } from '@domain/models/IGroup';
import { RandomIdGenerator } from '../../helpers/random-id-generator';
import { AppError } from '@utils/app-error';

export const NewGroupScreen: React.FC = () => {
  const [group, setGroup] = useState<IGroup>({} as IGroup);
  const { navigate } = useNavigation();
  const { goBack } = useNavigation();

  const handleTextChange = (text: string) => {
    setGroup({ ...group, id: RandomIdGenerator(), title: text });
  };

  const handleNewGroup = async (group: IGroup) => {
    try {
      if (!group.title.trim().length)
        return Alert.alert('Nome da turma não pode ser vazio.');

      await setGroupInternal(group);
      Alert.alert('Turma criada com sucesso');
      // navigate(ERouteName.PlayersScreen, { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Erro ao cadastrar novo grupo 🚨');
        console.log('👽 👉', error);
      }
    }
  };

  console.log('👽 👉', !!group.title);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      behavior='padding'
      enabled
    >
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

          <Input
            placeholder='Nome da turma'
            onChangeText={handleTextChange}
          />

          <CreateButton
            title='Criar'
            onPress={() => handleNewGroup(group)}
            disabled={!group.title}
          />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};
