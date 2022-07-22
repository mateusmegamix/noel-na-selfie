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
    position: 'relative',
    zIndex: 11,

  },
  logo: {
    width: 160,
    height: 41,
    resizeMode: 'contain'
  },
  preview: {
    zIndex: 0,
    flex: 1,
    height: "60%",
    position: 'relative',
    justifyContent: "flex-end",
    alignItems: "center"
  },
  footer: {
    height: '35%',
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    flex: 0,
    flexDirection: "column",
    justifyContent: "center"
  },
  buttonContainer: {
    width: '100%',
    height: '40%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  capture2: {
    flex: 0,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  capture3: {
    flex: 0,
    borderRadius: 5,
    marginRight: 10,
    resizeMode: 'contain'
  },
  buttonChange: {
    width: 38,
    height: 33,
    resizeMode: 'contain',
  },
  buttonImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 14
  },
  carrouselImages: {
    paddingLeft: 20,
    paddingRight: 140,
  },
  subview: {
    zIndex: 2,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  ImagemGrande: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  bottaoFotomini: {
    width: 87,
    height: 87,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
  },
  ImagemMini: {
    width: '100%',
    height: '100%',
  },
});

export default styles;