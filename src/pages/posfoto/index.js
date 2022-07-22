import React, { Component, PureComponent } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, SafeAreaView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { captureRef } from "react-native-view-shot";
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob'

class PosFoto extends React.Component {

  constructor(props) {
    super(props)
    console.log(props, 'props')
    this.state = {
      foto: props.route.params.CamposFotos,
      mascara: props.route.params.MascaraFoto,
      title: props.route.params.Title,
      chamada: props.route.params.Chamada,
      segundaparte: false,
      image64: '',
      imagemMontada: '',
    };
  }

  onImageLoad = () => {
    captureRef(this.fotopronta, {
      format: "jpg",
      quality: 1.0,
      result: Platform.OS === 'ios' ? 'base64' : 'base64',
    })
      .then(
        uri => {
          this.setState({
            imagemMontada: uri,
            segundaparte: true,
          })
          console.log(uri, 'viewshow')
        },
        error => console.error("Oops, snapshot failed", error)
      );
  };

  _renderLike = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', }}>
        <View style={styles.ViewImg} >
          <ImageBackground
            source={{ uri: this.state.foto }}
            style={[styles.ImagemBackground]}
            ref={img => (this.fotopronta = img)}>
            <Image
              source={{ uri: this.state.mascara }}
              style={
                styles.Mascara
              }
            />
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Image
            source={require('../../assets/txtGostou.png')}
            style={styles.txtGostou} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.capture} onPress={() => { this.props.navigation.goBack() }}>
              <Image
                source={require('../../assets/unsmile.png')}
                style={styles.smiles} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.capture} onPress={this.onImageLoad}>
              <Image
                source={require('../../assets/smile.png')}
                style={styles.smiles} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  //Função para compartilhar no IOS


  shareIos = async (fileUrl, type) => {
    let options = {
      // title: "#ComTiago #EstouComTiago",
      // message: 'data:image/png;base64,' + fileUrl,
      url: 'data:image/png;base64,' + fileUrl,
    };
    await Share.open(options);
    ;
  }




  _renderImagemMontada = () => {
    //Função para compartilhar no android
    const URL = 'data:image/png;base64,' + this.state.imagemMontada;
    let shareImageBase64 = {
      // title: this.state.title,
      message: this.state.title,
      url: URL,
    };
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <View style={styles.ViewImg}>
          {/* Imagem Ios */}

          <Image source={{ uri: 'data:image/jpg;base64,' + this.state.imagemMontada }} style={styles.ImagemBackground} />


          {/* Imagem Android */}
        </View>

        <View style={styles.footer}>
          <Image
            source={require('../../assets/txtCompartilhe.png')}
            style={styles.txtCompartilhar} />

          <View style={styles.buttonContainer}>


            {/* Button android */}
            <TouchableOpacity style={styles.buttonShared} onPress={() => {
              Platform.OS === 'ios' ?
                this.shareIos(this.state.imagemMontada, 'jpg')
                :
                Share.open(shareImageBase64)
            }}>

              <Image
                source={require('../../assets/imgCompartilha.png')}
                style={styles.smiles} />

            </TouchableOpacity>
          </View>
        </View>

      </View >
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBack} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={{ width: 60, height: 20, resizeMode: 'contain' }} source={require('../../assets/voltar.png')} />
          </TouchableOpacity>
          <Image source={require("../../assets/logoNatal.png")} style={styles.logo} />
        </View>
        {
          this.state.segundaparte
            ? this._renderImagemMontada()
            : this._renderLike()
        }
      </SafeAreaView>
    );
  }
}

export default PosFoto;