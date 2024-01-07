import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../../components/BackButton/BackButton';

const Design = ({navigation}) => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const handleButton1Click = () => {
    console.log('Button 1 clicked');
    closeDialog();
  };
  const handleButton2Click = () => {
    console.log('Button 2 clicked');
    closeDialog();
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton/>
      <View stylr>

      <View style={styles.content}>
        <Text style={styles.heading}>Design</Text>
        <Image
          source={require('../../../assets/InterView/Design-vector.png')}
          style={styles.image}
          />
        <Text style={styles.description}>
          Revolutionize your design role interviews with our avant-garde AI
          interview app! Merge insightful general questions, creative projects,
          and design-focused inquiries to thoroughly assess candidates'
          abilities. Redefine your hiring process for a visually innovative
          future.
        </Text>
        <Button title="DialogBox" onPress={openDialog} />
      </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isDialogVisible}
          onRequestClose={closeDialog}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Dialog Box</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={handleButton1Click}>
                <Text>Button 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleButton2Click}>
                <Text>Button 2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    alignItems: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  image: {
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(225, 225, 225, 0.7)', // Semi-transparent background
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor:'rgba(225, 58, 58, 0.87)',
    },
      button: {
    marginTop: 10,
    padding: 30,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Design;
