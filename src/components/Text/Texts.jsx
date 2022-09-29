import {Text} from '@rneui/themed';

export function TextH1({style, children}) {
  return (
    <Text style={{fontFamily: 'Lexend-Bold', fontSize: 39, ...style}}>{children}</Text>
  );
}

export function TextH2({style, children}) {
  return (
    <Text style={{fontFamily: 'Lexend-Bold', fontSize: 33, ...style}}>{children}</Text>
  );
}

export function TextH3({style, children}) {
  return (
    <Text style={{fontFamily: 'Lexend-Bold', fontSize: 28, ...style}}>{children}</Text>
  );
}

export function TextH4({style, children}) {
  return (
    <Text style={{fontFamily: 'Lexend-Bold', fontSize: 23, ...style}}>{children}</Text>
  );
}

export function TextH5({style, children}) {
  return (
    <Text style={{fontFamily: 'Lexend-Bold', fontSize: 19, ...style}}>{children}</Text>
  );
}

export function TextH6({style, children}) {
  return (
    <Text style={{fontFamily: 'Lexend-Bold', fontSize: 16, ...style}}>{children}</Text>
  );
}

export function Para({style, children}) {
  return <Text style={{fontSize: 16, ...style}}>{children}</Text>;
}
