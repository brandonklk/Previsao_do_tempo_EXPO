import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,        
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    containerCard: {
        width: "100%",
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72b2cc',
        borderColor: "#000000",
        width: "50%",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    nameButton: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    nameCity: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 17
    }
});