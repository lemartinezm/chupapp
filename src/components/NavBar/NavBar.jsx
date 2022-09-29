import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';

export default function NavBar({backgroundColor}) {
  return (
    <View
      style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        backgroundColor: backgroundColor,
        justifyContent: 'space-around',
        paddingVertical: 10,
      }}>
      <Icon name="home" type="font-awesome" iconStyle={{fontSize: 32}} />
      <Icon
        name="wine-bottle"
        type="font-awesome-5"
        iconStyle={{fontSize: 32}}
      />
      <Icon
        name="user-circle-o"
        type="font-awesome"
        iconStyle={{fontSize: 32}}
      />
    </View>
  );
}
