import { StyleSheet } from "react-native";

import { scaleModerate } from '../../utils/responsive';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';

export const useBookTicketStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    backIcon: {
        width: 34,
        height: 44,
    },
    textColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    dateItem: {
        padding: 10,
        marginHorizontal: 6,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 70,
    },
    selectedDateItem: {
        backgroundColor: Colors.SKYBLUE,
    },
    dateLabel: {
        fontSize: 14,
        color: '#333',
    },
    dateDisplay: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    selectedDateLabel: {
        color: '#fff',
    },
    myticketbtn: {
        marginBottom: 20,
        paddingVertical: scaleModerate(12),
        borderRadius: scaleModerate(10),
        backgroundColor: Colors.SKYBLUE,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: Colors.WHITEPRO,
        fontFamily: Fonts.PoppinsSemiBold,
        fontSize: scaleModerate(14),
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 10,
        color: '#000',
    },

    hallCard: {
        width: 350,
        height: 250,
        padding: 12,
        marginHorizontal: 6,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    hallIcon: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },

    hallTime: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

    hallSubtitle: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },

    hallValue: {
        fontSize: 13,
        color: '#007bff',
        textAlign: 'center',
    },
    selectedHallCard: {
        borderWidth: 2,
        borderColor: Colors.SKYBLUE,
    },
})