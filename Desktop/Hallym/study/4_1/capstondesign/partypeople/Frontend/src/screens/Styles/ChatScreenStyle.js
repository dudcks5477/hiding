import { StyleSheet } from "react-native";

const ChatScreenStyle =  StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: 'gray',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 30,
  },
  containerChat: {
    marginTop: 20, 
    width: '90%',
    marginHorizontal: '5%',
  },
  chatStyle: {
    flexDirection: 'row', 
    marginBottom:13
  },
  chatRoomStyle: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  messageCount: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  messageCountNum: {
    color: 'white',
    fontSize: 12,
  }
})

export default ChatScreenStyle;