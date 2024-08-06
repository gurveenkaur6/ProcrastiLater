// Footer.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  // Array of motivational quotes
  const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "You are never too old to set another goal or to dream a new dream."
  ];

  // Select a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <View style={styles.footer}>
      <Text style={styles.quote}>{randomQuote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
      borderRadius: 10,
      padding: 16,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      zIndex: -1, // Ensures it stays behind other components
    },
    quote: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#333',
      textAlign: 'center',
    },
  });
  
  

export default Footer;
