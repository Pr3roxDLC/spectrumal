import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LottieView from 'lottie-react-native';
import { changeTabAction, TabType } from '../../store/features/navigation/navigationSlice';
import { useAppDispatch } from '../../store/hooks';


const SplashScreen = () => {
    const dispatch = useAppDispatch()

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../../assets/animations/splash.json')}
                autoPlay
                style={{ width: 200, height: 200 }}
                onAnimationFinish={() => {
                    dispatch(changeTabAction({ type: TabType.MAIN_MENU }));
                }}
            />
            <Text>Spectrumal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen
