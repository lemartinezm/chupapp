import { ScrollView, View } from 'react-native';
import Profile from '../components/Profile/Profile';
import Camacho from '../assets/cara.png';

export default function ProfileScreen() {
  const userExample = {
    userName: 'Robin',
    image: Camacho,
    drunkType: 'Llora por su ex',
    drunkLevel: 77,
    colab: 16,
    vomitingTendency: 95,
    fightTendency: 50,
    anittaTendency: 100,
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          padding: 32,
        }}>
        <Profile {...userExample} />
      </View>
    </ScrollView>
  );
}
