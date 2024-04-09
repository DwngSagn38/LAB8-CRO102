import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebaseConfig';
import { firebaseConfig } from '../firebaseConfig';
// Assuming FIREBASE_APP has already been initialized

const App71 = () => {
  const [text, setText] = useState('');

  const handleAddData = async () => {
    try {
      const docRef = await addDoc(collection(FIRESTORE_DB, 'items'), {
        text: text
      });
      console.log('Document written with ID: ', docRef.id);
      setText('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={{alignItems:'center', justifyContent: 'center', flex:1}}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        style={{padding: 10, borderWidth: 1, marginBottom: 10}}
      />
      <Button
        title="Add Data"
        onPress={handleAddData}
      />
    </View>
  );
};

export default App71;
