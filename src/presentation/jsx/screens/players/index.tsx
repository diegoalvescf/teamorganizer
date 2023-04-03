import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { classData, playersData } from './data';

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
  PlayersList,
  PlayerItem,
  HighlightFeedback,
  DeleteButton,
} from './styles';
import { IClassName } from '@domain/models/IClassName';
import { IPlayer } from '@domain/models/IPayers';

export const PlayersScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const [team, setTeam] = useState<IClassName>();
  const [players, setPlayers] = useState<IPlayer[]>(playersData);

  const handleSelectTeam = (id: IClassName) => {
    setTeam(id);
  };

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

      <PlayersList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlayerItem
            key={item.id}
            name={item.name}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <HighlightFeedback title='Não há pessoas nesse time.' />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && {
            flex: 1,
          },
        ]}
      />

      <DeleteButton title='Remover turma' />
    </Container>
  );
};
