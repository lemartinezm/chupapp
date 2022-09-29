import React from "react";
import { Text, View } from "react-native";

export default function StatusBar({ value }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: 'center'
      }}
    >
      <View
        style={{
          borderColor: "#C2C3C3",
          borderWidth: 1,
          overflow: "hidden",
          borderRadius: 32,
          flex: 1,
          height: 8
        }}
      >
        <View
          style={{
            backgroundColor: "#FDB833",
            borderRadius: 32,
            width: `${value}%`,
          }}
        >
          <Text />
        </View>
      </View>

      <View style={{marginLeft: 16}}>
        <Text>{value}%</Text>
      </View>
    </View>
  );
}
