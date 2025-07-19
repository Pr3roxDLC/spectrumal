import React from 'react';
import { View } from 'react-native';
import SelectorBlip from '../SelectorBlip';
import GlassContainer from '../../glassContainer/GlassContainer';
import SelectorAxis from '../interactable/SelectorAxis';
import styles from './ReadOnlySelectorStyles';
import SpectrumHeader from '../SpectrumHeader';
import { Point } from '../../../api';
import { useAppSelector } from '../../../store/hooks';

type ReadOnlySelectorProps = {
    target: Point,
    showUserGuesses: boolean
};


const ReadOnlySelector: React.FC<ReadOnlySelectorProps> = ({ target, showUserGuesses }) => {

    
const userGuesses = useAppSelector(state => state.game.guesses)

    return (
        <>
        <SpectrumHeader></SpectrumHeader>
        <View style={{ width: 300, height: 300 }}>
            <SelectorAxis></SelectorAxis>
            <GlassContainer width={300} height={300}>
                <View style={styles.touchableView}>
                     <View
                            style={{
                                position: 'absolute',
                                left: ((target.dim1 ??0)*150) + 150 - 15,
                                top: ((target.dim2 ?? 0)*-150) + 150 - 15,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                pointerEvents: 'none',
                            }}
                        >
                            <SelectorBlip />
                        </View>
                    
{showUserGuesses && userGuesses.map((guess, index) => (
     <View key={index}
                            style={{
                                position: 'absolute',
                                left: ((guess.dim1 ??0)*150) + 150 - 15,
                                top: ((guess.dim2 ?? 0)*-150) + 150 - 15,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                pointerEvents: 'none',
                            }}
                        >
                            <SelectorBlip />
                        </View>
))}
                    


                </View>
            </GlassContainer>
        </View>
        </>
    );
};


export default ReadOnlySelector;
