import React from 'react';
import { PlayersScreenProps } from './props';
import {
  ButtonAdd,
  ClassFilter,
  ClassNameCard,
  Container,
  Header,
  Input,
  Section,
} from './styles';

export const PlayersScreen: React.FC<PlayersScreenProps> = ({}) => {
  return (
    <Container>
      <Header showBackButton />

      <ClassNameCard
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Section>
        <Input
          autoCorrect={false}
          placeholder='Nome da pessoa'
        />

        <ButtonAdd />
      </Section>
      <ClassFilter
        title='Turma A'
        isActive
      />
    </Container>
  );
};
