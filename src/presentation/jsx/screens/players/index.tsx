import React from 'react';
import { PlayersScreenProps } from './props';
import { ClassNameCard, Container, Header } from './styles';

export const PlayersScreen: React.FC<PlayersScreenProps> = ({}) => {
  return (
    <Container>
      <Header showBackButton />

      <ClassNameCard
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />
    </Container>
  );
};
