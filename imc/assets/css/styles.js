import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // sections
    container: {
        flex:1,
        margin: 10
    },
    logo: {
        alignItems: 'center'
    },
    inputs: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttons: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    // END sections

    // components
    inputLabel: {
        textAlign: 'right',
        margin: 10,
        marginEnd: 0,
        padding: 2,
        height: 36,
        fontSize: 20
    },
    inputField: {
        borderWidth: 3,
        borderRadius: 4,
        margin: 10,
        padding: 6,
        height: 36
    },
    btn: {
        borderWidth: 3,
        borderRadius: 4,
        width: 220,
        height: 36,
        backgroundColor: '#009247',
        borderColor: '#015A2C'
    },
    btnLabel: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
    },
    // END components

    h1:{
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    h3: {
        fontSize: 36,
        textAlign: 'center'
    }
})


export default styles
