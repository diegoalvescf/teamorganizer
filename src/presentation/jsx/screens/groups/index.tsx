import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import React from 'react';

import { Container, Header, Highlight } from './styles';

export const GroupsScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
    </Container>
  );
};
