import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f0f0f0"
  },
  header: {
    backgroundColor: '#efefef',
    height: 65,
    width: '100%',
    justifyContent: 'center',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0,

  },
  logo: {
    width: 160,
    height: 41,
    resizeMode: 'contain'
  },
  backButton: {
    width: 35,
    height: 35,
    color: '#1473c2',
    position: 'absolute',
    left: 0,
  },
  preview: {
    zIndex: 0,
    flex: 1,
    position: 'relative',
    justifyContent: "flex-end",
    alignItems: "center"
  },
  footer: {
    height: '35%',
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    height: '40%',
    width: '50%',
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginHorizontal: 20,
  },

  capturenews: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  buttonShared: {
    borderRadius: 100,
    backgroundColor: '#efd001',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14
  },
  carrouselImages: {
    paddingLeft: 0,
  },
  subview: {
    zIndex: 2,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  ViewImg: {
    width: '100%',
    height: '65%',
    position: 'relative',
    justifyContent: "flex-end",
    alignItems: "center",
    position: 'relative',
  },
  ImagemBackground: {
    width: '100%',
    height: '100%',
    position: "relative",
    zIndex: -10
  },
  Mascara: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    zIndex: 2,
    resizeMode: 'cover'
  },
  Marcadaagua: {
    position: 'absolute',
    bottom: '3%',
    left: 0,
    backgroundColor: 'transparent',
    width: 160,
    height: 57,
    resizeMode: 'contain',
    zIndex: 2,
  },
  txtGostou: {
    width: '55%',
    height: '35%',
    justifyContent: 'center',
    resizeMode: 'contain',
    alignItems: 'center'
  },
  txtCompartilhar: {
    width: '65%',
    height: '45%',
    justifyContent: 'center',
    resizeMode: 'contain',
    alignItems: 'center'
  },
  smiles: {
    width: 60,
    height: 60,
  },
  arrowBack: {
    position: 'absolute',
    left: 15,
    top: Platform.OS === 'ios' ? 22 : 22,
  }

});

export default styles;