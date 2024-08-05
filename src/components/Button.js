import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#B33951',
        borderRadius: 6,
        paddingVertical: 12,
        marginVertical: 34,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 15 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
