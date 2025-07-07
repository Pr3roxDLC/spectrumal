import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './HowToPlayStyles';
import HeaderBack from '../../Components/header/HeaderBack';
import GlassContainer from '../../Components/glassContainer/GlassContainer';

const HowToPlay = () => {
  return (
    <View style={styles.container}>
      <HeaderBack />
      <ScrollView contentContainerStyle={styles.howToPlayContainer} showsVerticalScrollIndicator={false}>

          <Text style={styles.mainTitle}>How To Play Spectrumal</Text>

        <Text style={styles.text}>
          Spectrumal is a creative guessing game where you use clues and intuition to place a blip on a two-dimensional spectrum. Here's how it works:
        </Text>

                <GlassContainer style={{marginBottom: 15,
    marginTop: 40, borderRadius: 10, alignItems: "flex-start"}}>
          <View style={styles.titleContainer}>
            <Text style={styles.icon}>🏁</Text>
            <Text style={styles.title}>Getting Started</Text>
          </View>
        </GlassContainer>

        <Text style={styles.subHeading}>1. Create or Join a Lobby</Text>
        <Text style={styles.bulletText}>• One player creates a lobby and receives a unique game code.</Text>
        <Text style={styles.bulletText}>• Others join using that code to enter the same game lobby.</Text>

        <Text style={styles.subHeading}>2. Waiting for Players</Text>
        <Text style={styles.bulletText}>• When everyone has joined, only the host can start the game.</Text>

        <GlassContainer style={{marginBottom: 15,
    marginTop: 40, borderRadius: 10, alignItems: "flex-start"}}>
          <View style={styles.titleContainer}>
            <Text style={styles.icon}>🧠</Text>
            <Text style={styles.title}>Game Flow</Text>
          </View>
        </GlassContainer>

        <Text style={styles.text}>
          Each game is played in rounds, and each round consists of two main phases:
        </Text>


        <View style={styles.titleContainer}>
          <Text style={[styles.icon, {marginVertical: 15 }]}>✏️</Text>
          <Text style={[styles.title, { marginVertical: 15 }]}>Phase 1: Give a Clue</Text>
        </View>

        <Text style={styles.bulletText}>• A random 2D spectrum (quadrant) appears for each player.</Text>
        <Text style={styles.bulletText}>For example:</Text>
        <Text style={styles.bulletText}>    ▪ Y-axis: Useful ↕ Useless</Text>
        <Text style={styles.bulletText}>    ▪ X-axis: Hot ↔ Ick</Text>
        <Text style={styles.bulletText}>• A blip appears at a random position on your spectrum.</Text>
        <Text style={styles.bulletText}>• You must type a clue that best represents the blip’s position based on the axes.</Text>
        <Text style={styles.bulletText}>• Everyone has different spectrums and blip positions.</Text>
        <Text style={styles.bulletText}>• Once all players submit clues and press Ready, the game moves on.</Text>

        <View style={styles.titleContainer}>
          <Text style={[styles.icon, {marginVertical: 15 }]}>✏️</Text>
          <Text style={[styles.title, { marginVertical: 15 }]}>Phase 2: Guess the Blip</Text>
        </View>

        <Text style={styles.bulletText}>• Players take turns guessing each other's clues.</Text>
        <Text style={styles.bulletText}>• You’ll see the original spectrum (without the blip) and try to place the blip where you think the clue was pointing.</Text>
        <Text style={styles.bulletText}>• The clue-giver skips their own clue and watches others guess.</Text>
        <Text style={styles.bulletText}>• After each guess, the actual blip location is revealed.</Text>

        <GlassContainer style={{marginBottom: 15,
    marginTop: 40, borderRadius: 10, alignItems: "flex-start"}}>
        <View style={styles.titleContainer}>
          <Text style={styles.icon}>🏆</Text>
          <Text style={styles.title}>Scoring & Leaderboard</Text>
        </View>
        </GlassContainer>

        <Text style={styles.bulletText}>• After each clue, a leaderboard appears.</Text>
        <Text style={styles.bulletText}>• Everyone earns points based on how close their guess was to the actual blip.</Text>
        <Text style={styles.bulletText}>• The closer you are, the more points you get!</Text>
        <Text style={styles.bulletText}>• The host can adjust the number of rounds in the game settings.</Text>

        <GlassContainer style={{marginBottom: 15,
    marginTop: 40, borderRadius: 10, alignItems: "flex-start"}}>
        <View style={styles.titleContainer}>
          <Text style={styles.icon}>💡</Text>
          <Text style={styles.title}>Tips for Better Play</Text>
        </View>
        </GlassContainer>

        <Text style={styles.bulletText}>• Think creatively but clearly - your clue should match both axes!</Text>
        <Text style={styles.bulletText}>• Try to read between the lines of vague or clever clues.</Text>
        <Text style={styles.bulletText}>• The goal isn’t just accuracy - it’s understanding how others think.</Text>


        <Text style={[styles.text, { marginTop: 30 }]}>
          Have fun playing Spectrumal - where precision meets perception!
        </Text>

      </ScrollView>
    </View>
  );
};

export default HowToPlay;

