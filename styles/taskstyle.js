import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.5,
        borderRadius: 4,
        marginRight: 15
    },

    itemText: {
        color: '#000',
        maxWidth: '80%',
    },
    itemRight: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 6,
    }

});

export default styles;
