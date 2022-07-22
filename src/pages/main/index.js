import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Loader from '../../component/modal/loading';
import styles from './styles';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import SplashScreen from 'react-native-splash-screen'

const main = ({ navigation }) => {
  const camera = useRef()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  const [select, setSelect] = useState(null)
  const [selectImage, setSelectImage] = useState('')
  const [selectedId, setSelectedId] = useState(null);
  const [flash, setFlash] = useState(false && true ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off)
  const [fotocamera, setFotocamera] = useState(false)
  const [avatarSource, setAvatarSource] = useState(null)
  const [path, setPath] = useState(null)
  const [title, setTitle] = useState(null)
  const [chamada, setChamada] = useState(null)

  async function getUser() {
    setLoading(true)
    try {
      const response = await axios.get('https://www.am4cms.com.br/Api/ConteudosAppId/selfie-ribeirao-shopping/1');
      setData(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }

  const takePicture = async () => {
    const options = { quality: 1.0, base64: true, mirrorImage: true, fixOrientation: true, width: 1200 };
    const data = await camera.current.takePictureAsync(options);
    console.log(data, 'foto tirada')
    navigation.navigate('PosFoto', { CamposFotos: data.uri, MascaraFoto: selectImage, Title: title, Chamada: chamada })
  }


  const options = {
    quality: 1,
    // title: 'Com Tiago',
    // chooseFromLibraryButtonTitle: 'Escolha uma foto da sua galeria',
    base64: true,
  };

  const AbrirGaleria = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        setFotocamera(false)

      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }

      else {
        console.log(response, 'response')
        let source = { uri: response.uri };
        setFotocamera(true)
        setAvatarSource(source)
        setPath(response.uri)
      }
    });
  }


  useEffect(() => {
    SplashScreen.hide()
    getUser()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Loader
        loading={loading} />
      <View style={styles.header}>
        <Image source={require("../../assets/logoNatal.png")} style={styles.logo} />
      </View>
      {
        fotocamera ? (
          <View style={styles.preview}>
            <View style={styles.subview}>
              <Image
                source={avatarSource}
                style={styles.ImagemGrande}
              />
              <Image
                source={{ uri: selectImage }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover'
                }}
              />
            </View>
          </View>
        ) : (
            <RNCamera
              ref={camera}
              style={styles.preview}
              type={RNCamera.Constants.Type.front}
              flashMode={flash}
              // mirrorImage={true}
              // fixOrientation={true}
              autoFocus={RNCamera.Constants.AutoFocus.off}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
  //             androidRecordAudioPermissionOptions={{
  //               title: 'Permission to use audio recording',
  //               message: 'We need your permission to use your audio',
  //               buttonPositive: 'Ok',
  //               buttonNegative: 'Cancel',
  //             }}
  //             <key>NSMicrophoneUsageDescription</key>
	// <string>Permitir que o app Com Tiago use o microfone do seu dispositivo?</string>
            >
              {select && (
                <View style={styles.subview}>
                  <Image
                    source={{ uri: selectImage }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover'
                    }}
                  />
                </View>
              )}
            </RNCamera>
          )
      }


      <View style={styles.footer}>
        <FlatList
          contentContainerStyle={styles.carrouselImages}
          data={data}
          horizontal
          extraData={select}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 101,
                  borderRadius: 10,
                  borderWidth: 5,
                  borderColor: index === selectedId ? '#fff' : '#f0f0f0',
                  marginLeft: 5,
                  marginRight: 0,
                  overflow: 'hidden',
                  backgroundColor: item.BgColor
                }}
                onPress={() => {
                  setSelectedId(index)
                  setSelect(true)
                  setSelectImage(item.Imagem)
                  setTitle(item.Chamada)
                  setChamada(item.Texto)
                }}>
                <Image
                  source={{ uri: item.Imagem, }}
                  style={{ width: '100%', height: '100%', }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => AbrirGaleria()}
          >
            <Image
              style={styles.buttonChange}
              source={require('../../assets/uploadPhoto.png')}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (selectImage) {
                if (avatarSource) {
                  navigation.navigate('PosFoto', { CamposFotos: path, MascaraFoto: selectImage, Title: title, Chamada: chamada })
                } else {
                  takePicture();

                }
              } else {
                Alert.alert('Selecione a foto do tiago para continuar.');
              }
            }}
            style={styles.capture2}>
            <Image
              style={styles.buttonImg}
              source={require('../../assets/buttonFoto.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFlash(!flash)}
          >
            <Image
              style={styles.buttonChange}
              source={flash ? require('../../assets/flash.png') : require('../../assets/flashInativo.png')}
            />

          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default main;