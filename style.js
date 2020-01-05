import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    container:
    {
        flex: 1,
        backgroundColor: 'white' // Set your own custom Color
    },

    input: 
    {
        marginLeft: 15,
        marginRight: 15,
        // marginBottom: 10,
        height: 80,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 10,
        color: 'gray',
        fontSize: 18,
   },

    text:
    {
       fontSize: 32,
       textAlign: 'center', 
    },

    saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5,
        margin: 15,
        marginBottom: 150,
   },

   saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
   }

});