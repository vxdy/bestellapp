import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },

    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C3C3C',
        marginBottom: 20,
    },

    writeTaskWrapper: {
        color: '#000',
        marginHorizontal: 20,
        position: 'absolute',
        bottom: 20,
        width: '90%',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',

    },

    input: {
        paddingVertical: 15,
        color: '#000',
        paddingHorizontal: 15,
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },

    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },

    addText: {
        color: '#000',
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btcprice: {
        flexDirection: 'row',
        fontSize: 12,
        justifyContent: 'center',
        color: "#000",
        alignItems: 'center',

    }, scrollContainer: {
        height: "82%",
    }


});

export default styles;
