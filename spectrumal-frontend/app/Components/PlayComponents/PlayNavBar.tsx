import React, { Dispatch, SetStateAction, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../Styles/PlayStyles";
import StartGame from "./StartGame";
import JoinGame from "./JoinGame";

export interface Props {
  setPage: Dispatch<SetStateAction<string>>;
  setPreviousPage: Dispatch<SetStateAction<string | null>>
}
const navBarItems = ["Join Game", "Start Game"];

const PlayNavBar = (props: Props) => {
  const [activeTab, setActiveTab] = useState("Join Game"); // default tab

  return (
    <View style={{ flex: 1 }}>
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

      {activeTab === "Join Game" ? (
        <View style={{ flex: 1 }}>
          <JoinGame setPreviousPage={props.setPreviousPage} setPage={props.setPage} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <StartGame setPage={props.setPage} />
        </View>
      )}
    </View>
  );
};

export default PlayNavBar;