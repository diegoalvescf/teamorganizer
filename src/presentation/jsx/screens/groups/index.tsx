import React, { useState } from 'react';

import { IGroup } from './props';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  CreateButton,
  GroupCard,
  GroupsList,
  Header,
  HighlightFeedback,
  HighlightGroups,
} from './styles';
import { ERouteName } from '@infra/config/routes';

export const GroupsScreen: React.FC = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const { navigate } = useNavigation();

  const handleCreateNewGroup = () => {
    navigate(ERouteName.NewGroupScreen as never);
  };

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
            onPress={() => console.log('💩 -> Xaaama o ', item.title)}
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
