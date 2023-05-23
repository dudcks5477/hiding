import { StyleSheet } from "react-native";

const AddScreenStyle =  StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
    marginHorizontal: '3%'
  },
  line: {
    marginTop: 15,
    marginBottom: 10
  },
  container: {
    width: '90%',
    marginHorizontal: '5%'
  },
  addPartyForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  partyNPC: {
    flex: 1,
    height: 39,
    borderColor: 'gray',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center'
  },

  // PartyDate는 테두리가 안나와서 일단 제외
  // partyDate: {
  //   height: 39,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   borderRadius: 6,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingLeft: 10,
  // }

  partyDescript: {
    height: 150, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6
  },
  camera: {
    borderColor: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    width: 80,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  camera2: {
    borderColor: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    width: 80,
    backgroundColor: '#ccc',
    marginRight: 3
  },
  handleModalClose: {
    flex: 1, 
    backgroundColor: 'black', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  handleCreate: {
    marginTop: 10, 
    justifyContent: 'center', 
    alignItems:'center'
  },
  addButton: {
    borderColor: 1,
    borderRadius: 10,
    backgroundColor: '#ccc',
    width: 147,
    height: 43,
    lineHeight: 43,
    textAlign: 'center',
  }
})

export default AddScreenStyle;