import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import React, { useState } from 'react';
import { _groupsData } from './data';
import { IGroup } from './props';

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
        onPress={() => console.log('🚀 => Criar turma')}
      />
    </Container>
  );
};
