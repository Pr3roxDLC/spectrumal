import React from 'react'
import { View, Text, Modal } from 'react-native'
import styles from './LobbyIsFullStyles'
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice'
import { useAppDispatch } from '../../store/hooks'
import Button from '../../Components/button/Button'
import GlassContainer from '../../Components/glassContainer/GlassContainer'
import { BlurView } from 'expo-blur'

const LobbyIsFull = ({ modalVisible, setModalVisible }: { modalVisible: boolean, setModalVisible: (val: boolean) => void }) => {

  const dispatch = useAppDispatch()

  const handleClose = () => {
    setModalVisible(false)
    dispatch(openTabOnTopAction({ type: TabType.PLAY }))
  }
  if (!modalVisible) return null;

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
            <Text style={styles.modalText}>Sorry, this lobby is full</Text>
            <Button label={"Join Another Lobby"} style={{width: "90%", marginTop: 20}}
              onPress={handleClose}>
            </Button>
          </GlassContainer>
        </View>
        </BlurView>
      </Modal>
    </>
  )
}



export default LobbyIsFull
