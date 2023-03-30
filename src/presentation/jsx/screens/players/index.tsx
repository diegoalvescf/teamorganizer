import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { classData } from './classData';
import { IClassName, PlayersScreenProps } from './props';
import {
  ButtonAdd,
  ClassFilter,
  ClassFilterContainer,
  ClassFilterList,
  AmountOfPlayersText,
  ClassNameCard,
  Container,
  Header,
  Input,
  Section,
} from './styles';

export const PlayersScreen: React.FC<PlayersScreenProps> = ({}) => {
  const { goBack } = useNavigation();
  const [team, setTeam] = useState<IClassName>();
  const [players, setPlayers] = useState([]);

  const handleSelectTeam = (id: IClassName) => {
    setTeam(id);
  };

  console.log('👽 👉', team);
  return (
    <Container>
      <Header
        showBackButton
        onPress={goBack}
      />

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

      <ClassFilterContainer>
        <ClassFilterList
          data={classData}
          showsHorizontalScrollIndicator
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ClassFilter
              title={item.name}
              isActive={item.id === team?.id}
              onPress={() => handleSelectTeam(item)}
            />
          )}
        />

        <AmountOfPlayersText>{players.length}</AmountOfPlayersText>
      </ClassFilterContainer>
    </Container>
  );
};
