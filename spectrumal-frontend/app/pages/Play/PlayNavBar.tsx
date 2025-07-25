import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./PlayStyles";
import StartGame from "./StartGame";
import JoinGame from "./JoinGame";


const navBarItems = ["Join Lobby", "Start Lobby"];

const PlayNavBar = () => {
  const [activeTab, setActiveTab] = useState("Join Lobby"); // default tab

  return (
    <View style={styles.navOuterContainer}>
      <View style={styles.navBarContainer}>
        <View style={styles.navBar}>
          {navBarItems.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.navItem,
                activeTab === tab && styles.activeNavItem,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.navText,
                  activeTab === tab && styles.activeNavText,
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {activeTab === "Join Lobby" ? (
        <View style={styles.joinAndStartOuterContainer}>
          <JoinGame />
        </View>
      ) : (
        <View style={styles.joinAndStartOuterContainer}>
          <StartGame />
        </View>
      )}
    </View>
  );
};

export default PlayNavBar;