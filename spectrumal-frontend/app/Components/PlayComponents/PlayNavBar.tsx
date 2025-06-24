import React, { Dispatch, SetStateAction, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../Styles/PlayStyles";
import StartGame from "./StartGame";
import JoinGame from "./JoinGame";

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}
const navBarItems = ["Join Game", "Start Game"];

const PlayNavBar = (props: Props) => {
  const [activeTab, setActiveTab] = useState("Join Game"); // default tab

  return (
    <View>
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

      {activeTab === "Join Game" && (
        <View>
          <JoinGame setPage={props.setPage} />
        </View>
      )}

      {activeTab === "Start Game" && (
        <View>
          <StartGame setPage={props.setPage} />
        </View>
      )}
    </View>
  );
};

export default PlayNavBar;