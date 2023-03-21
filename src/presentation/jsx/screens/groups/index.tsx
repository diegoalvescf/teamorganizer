import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import React from 'react';

import { Container, GroupCard, Header, Highlight } from './styles';

export const GroupsScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <GroupCard
        title='Time do Tonhão'
        onPress={() => console.log('💩 -> Xaaama o tonhão')}
      />
    </Container>
  );
};
