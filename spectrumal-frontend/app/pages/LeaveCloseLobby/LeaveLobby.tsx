import React from 'react'
import { View, Text, Modal } from 'react-native'
import styles from './LeaveLobbyStyles'
import { goBackToPreviousTabAction } from '../../store/features/navigation/navigationSlice'
import { useAppDispatch } from '../../store/hooks'
import Button from '../../Components/button/Button'
import GlassContainer from '../../Components/glassContainer/GlassContainer'
import { BlurView } from 'expo-blur'

const LeaveLobby = ({ modalVisible, setModalVisible }: { modalVisible: boolean, setModalVisible: (val: boolean) => void }) => {

  const dispatch = useAppDispatch()

  const handleLeaveLobby = () => {
    setModalVisible(false)
    dispatch(goBackToPreviousTabAction())
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <BlurView intensity={50} tint="dark" style={styles.blurBackground}>
        <View style={styles.centeredView}>
          <GlassContainer style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to leave this lobby?</Text>
            <Button label={"Yes"} style={{width: "90%", marginTop: 20}}
              onPress={handleLeaveLobby}>
            </Button>
            <Button label={"No"} style={{width: "90%", marginTop: 10}}
              onPress={() => setModalVisible(false)}>
            </Button>
          </GlassContainer>
        </View>
        </BlurView>
      </Modal>
    </>
  )
}



export default LeaveLobby
