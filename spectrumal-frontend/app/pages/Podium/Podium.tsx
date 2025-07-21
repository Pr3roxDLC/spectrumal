import React from 'react'
import { View, Text } from 'react-native'
import styles from './PodiumStyles'
import PodiumComponent from './PodiumComponent'
import Leaderboard from '../LeaderboardPageTest/Leaderboard'
import Button from '../../Components/button/Button'
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice'
import { useAppDispatch } from '../../store/hooks'

const Podium = () => {
const dispatch = useAppDispatch()

      const handleReturnToMainMenuClick = () => {
        dispatch(openTabOnTopAction({ type: TabType.MAIN_MENU }))
      }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Game Over</Text>
            <PodiumComponent></PodiumComponent>
            <Leaderboard />
            <Button style={{width: "80%", marginTop: "auto"}} label={"Play Again"} />
            <Button onPress={handleReturnToMainMenuClick} style={{width: "80%"}} label={"Return to Main Menu"} />
        </View>
    )
}

export default Podium
