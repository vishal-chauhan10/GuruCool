import AsyncStorage from '@react-native-async-storage/async-storage';

async function setItem(key, value) {
  try {
    const data = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);

    console.log('Setting Item: ' + key + '(Key) -> ' + data);
  } catch (error) {
    console.log('Error while Setting item with Key -> ', key);
    console.error(error);
  }
}

async function getItem(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error Retriving the key (AsyncStorage): ', error);
  }
}

export {getItem, setItem};
