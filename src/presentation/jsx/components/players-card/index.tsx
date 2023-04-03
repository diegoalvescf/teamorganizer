import React from 'react';
import { Container, Icon, Name, Section } from './styles';
import { PlayerCardComponentProps } from './props';
import { ButtonIconComponent } from '@components/button-icon';
import { ETypeButtonIcon } from '@components/button-icon/props';

export const PlayerCardComponent: React.FC<PlayerCardComponentProps> = ({
  name,
  onRemove,
}) => {
  return (
    <Container>
      <Section>
        <Icon name='person' />

        <Name>{name}</Name>
      </Section>

      {onRemove && (
        <ButtonIconComponent
          icon='close'
          type={ETypeButtonIcon.secondary}
          onPress={onRemove}
        />
      )}
    </Container>
  );
};
