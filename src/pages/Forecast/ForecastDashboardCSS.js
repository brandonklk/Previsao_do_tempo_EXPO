import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,        
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    containerCard: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerProperty:{
        flexDirection: 'row',
    },
    resume: {
        paddingRight: 50,
    },
    titleCard:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        paddingRight: 5,
        fontSize: 20,
    },
    itemBold:{
        fontWeight: 'bold'
    },
    itemTempMax: {
        color: '#FF7F50',
    },
    itemTempMin : {
        color: '#00BFFF'
    },
    buttonHeader: {
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72b2cc',
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderRadius: 8,
        width: '100%',
        borderColor: "#000000"
    },
    textButtonHeader: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center', 
    }
});