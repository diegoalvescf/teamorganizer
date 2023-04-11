import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { teamData } from './data';

import { IPlayer } from '@domain/models/IPayers';
import { ITeam } from '@domain/models/ITeam';
import { setPlayerInternal } from '@infra/database/storage/player/set/set-player';
import { AppError } from '@utils/app-error';
import { Alert, TextInput } from 'react-native';
import { RandomIdGenerator } from '../../helpers/random-id-generator';
import { getPlayersByGroupAndTeamInternal } from './helpers/get-players-by-group-and-team';
import { IRoutePlayersScreenParams } from './props';
import {
  AmountOfPlayersText,
  ButtonAdd,
  ClassFilter,
  ClassFilterContainer,
  ClassFilterList,
  ClassNameCard,
  Container,
  DeleteButton,
  Header,
  HighlightFeedback,
  Input,
  PlayerItem,
  PlayersList,
  Section,
} from './styles';
import { delPlayerByGroupInternal } from '@infra/database/storage/player/del/del-player-by-group';
import { delGroupByNameInternal } from '@infra/database/storage/group/del/del-group-by-name';
import { ERouteName } from '@infra/config/routes';

export const PlayersScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { group } = useRoute().params as IRoutePlayersScreenParams;
  const [team, setTeam] = useState<ITeam>(teamData[0]);
  const [newPlayer, setNewPlayer] = useState<IPlayer>({} as IPlayer);
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const { navigate } = useNavigation();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleSelectTeam = (id: ITeam) => {
    setTeam(id);
  };

  const handleTextChange = (name: string) => {
    if (!team) return Alert.alert('Escolha um time para adicionar');

    setNewPlayer({
      ...newPlayer,
      id: RandomIdGenerator(),
      name: name,
      team: team.id,
    });
  };

  const handleAddPlayer = async () => {
    if (!group) return;

    if (!newPlayer.name.trim().length)
      return Alert.alert('Nome da turma não pode ser vazio.');

    try {
      await setPlayerInternal(newPlayer, group['title']);

      newPlayerNameInputRef.current?.clear();

      getPlayersByTeam();

      setTimeout(() => {
        newPlayerNameInputRef.current?.blur();
      }, 50);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo(a) jogador(a)', error.message);
      } else {
        Alert.alert(
          'Novo(a) jogador(a)',
          'Erro ao cadastrar novo(a) jogador(a) 🚨'
        );
        console.log('👽 👉', error);
      }
    }
  };

  const getPlayersByTeam = async () => {
    try {
      if (!team?.id) return;

      const _players = await getPlayersByGroupAndTeamInternal(
        group['title'],
        team.id
      );

      setPlayers(_players);
    } catch (error) {
      throw error;
    }
  };

  const handleRemovePlayer = async (playerId: IPlayer['id']) => {
    try {
      await delPlayerByGroupInternal(playerId, group['title']);

      getPlayersByTeam();
    } catch (error) {
      console.log('👽 👉', error);
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
    }
  };

  const removeGroup = async () => {
    try {
      await delGroupByNameInternal(group);

      navigate(ERouteName.GroupsScreen);
    } catch (error) {
      console.log('👽 👉', error);
      Alert.alert('Remover grupo', 'Não foi possível remover esse grupo.');
    }
  };

  const handleRemoveGroup = () => {
    Alert.alert('Remover', 'Deseja remover essa pessoa?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeGroup() },
    ]);
  };

  useEffect(() => {
    getPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header
        showBackButton
        onPress={goBack}
      />

      <ClassNameCard
        title={group.title}
        subtitle='adicione a galera e separe os times'
      />

      <Section>
        <Input
          inputRef={newPlayerNameInputRef}
          autoCorrect={false}
          placeholder='Nome da pessoa'
          value={newPlayer.name}
          onChangeText={handleTextChange}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />

        <ButtonAdd
          disabled={!newPlayer?.name?.length || undefined}
          onPress={() => handleAddPlayer()}
        />
      </Section>

      <ClassFilterContainer>
        <ClassFilterList
          data={teamData}
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
            onRemove={() => handleRemovePlayer(item.id)}
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

      <DeleteButton
        title='Remover turma'
        onPress={handleRemoveGroup}
      />
    </Container>
  );
};
