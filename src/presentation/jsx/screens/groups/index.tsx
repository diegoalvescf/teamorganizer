import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

import { IGroup } from '@domain/models/IGroup';
import { ERouteName } from '@infra/config/routes';
import { getAllGroupsInternal } from '@infra/database/storage/group/get/get-all-groups';
import {
  Container,
  CreateButton,
  GroupCard,
  GroupsList,
  Header,
  HighlightFeedback,
  HighlightGroups,
} from './styles';

export const GroupsScreen: React.FC = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const { navigate } = useNavigation();

  const handleCreateNewGroup = () => {
    navigate(ERouteName.NewGroupScreen);
  };

  const getAllGroups = async () => {
    try {
      const _groups = await getAllGroupsInternal();

      setGroups(_groups);
    } catch (error) {
      console.log('👽 👉', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllGroups();
    }, [groups])
  );

  return (
    <Container>
      <Header />
      <HighlightGroups
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <GroupsList
        data={groups}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <GroupCard
            key={item.id}
            title={item.title}
            onPress={() => console.log('💩 -> Xaaama o ', item.id)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <HighlightFeedback title='Que tal cadastrar a primeira turma ? 🤩' />
        )}
      />

      <CreateButton
        title='Criar turma'
        onPress={handleCreateNewGroup}
      />
    </Container>
  );
};
