import React from 'react';
import {Image, View} from 'react-native';
import StatusBar from '../StatusBar/StatusBar';
import {Para, TextH3, TextH4, TextH6} from '../Text/Texts';

export default function Profile({
  userName,
  image,
  drunkType,
  drunkLevel,
  colab,
  vomitingTendency,
  fightTendency,
  anittaTendency,
}) {
  return (
    <View>
      <TextH3 style={{marginBottom: 32, color: '#296EB4' }}>{userName}</TextH3>

      <Image
        source={image}
        style={{
          marginBottom: 32,
          width: 160,
          height: 160,
          borderRadius: 160,
          alignSelf: 'center',
        }}
      />

      <TextH4 style={{marginBottom: 24}}>Estadísticas de {userName}:</TextH4>

      <TextH6 style={{marginBottom: 16}}>Tipo de borracho:</TextH6>
      <Para style={{marginBottom: 16, alignSelf: 'center'}}>{drunkType}</Para>

      <TextH6 style={{marginBottom: 16}}>Nivel de borracho:</TextH6>
      <View style={{marginBottom: 16}}>
        <StatusBar value={drunkLevel} />
      </View>

      <TextH6 style={{marginBottom: 16}}>Colabora:</TextH6>
      <View style={{marginBottom: 16}}>
        <StatusBar value={colab} />
      </View>

      <TextH6 style={{marginBottom: 16}}>Tendencia al vómito:</TextH6>
      <View style={{marginBottom: 16}}>
        <StatusBar value={vomitingTendency} />
      </View>

      <TextH6 style={{marginBottom: 10}}>Tendencia a pelear:</TextH6>
      <View style={{marginBottom: 16}}>
        <StatusBar value={fightTendency} />
      </View>

      <TextH6 style={{marginBottom: 10}}>
        Tendencia a hacer el paso de Anitta:
      </TextH6>
      <View style={{marginBottom: 16}}>
        <StatusBar value={anittaTendency} />
      </View>
    </View>
  );
}
