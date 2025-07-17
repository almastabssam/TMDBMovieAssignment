import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { scaleModerate } from '../../utils/responsive';

export const useMovieDetailStyles = () => StyleSheet.create({
    posterWrapper: {
        position: 'relative',
        width: '100%',
        flex: 1,
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    myticketbtn: {
        position: 'absolute',
        paddingVertical: scaleModerate(12),
        borderRadius: scaleModerate(10),
        backgroundColor: Colors.SKYBLUE,
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    mytrailerbtn: {
        flexDirection: 'row',
        position: 'absolute',
        paddingVertical: scaleModerate(12),
        borderRadius: scaleModerate(10),
        backgroundColor: 'transparent',
        borderColor: Colors.SKYBLUE,
        borderWidth: scaleModerate(2),
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    ticketBtn: {
        bottom: 20,
    },
    trailerBtn: {
        bottom: 80,
    },
    btnText: {
        color: Colors.WHITEPRO,
        fontFamily: Fonts.PoppinsSemiBold,
        fontSize: scaleModerate(14),
    },
    overview: {
        fontSize: scaleModerate(12),
        marginLeft: scaleModerate(5),
        lineHeight: scaleModerate(20),
        fontFamily: Fonts.PoppinsRegular,
        color: Colors.GREY1,
    },
    closeIcon: {
        width: scaleModerate(34),
        height: scaleModerate(34),
        tintColor: Colors.BLACK,
        alignSelf: 'flex-end',

    },
    playIcon: {
        width: scaleModerate(8),
        height: scaleModerate(12),
        marginRight: scaleModerate(5),
        tintColor: Colors.WHITEPRO,
        justifyContent: 'center',
        alignItems: 'center',
    },
    genreContainer: {
        marginHorizontal: scaleModerate(20),
        marginTop: scaleModerate(10),
    },

    sectionTitle: {
        fontSize: scaleModerate(16),
        fontFamily: Fonts.PoppinsMedium,
        color: Colors.BLACK1,
        marginLeft: scaleModerate(5),
    },

    genreList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: scaleModerate(2),
        marginLeft: scaleModerate(5),
        marginVertical: scaleModerate(5),
    },

    genreBadge: {
        backgroundColor: Colors.SKYBLUE,
        borderRadius: scaleModerate(16),
        paddingVertical: scaleModerate(4),
        paddingHorizontal: scaleModerate(10),
        marginRight: scaleModerate(6),
        marginBottom: scaleModerate(6),
    },

    genreText: {
        fontSize: scaleModerate(12),
        color: Colors.WHITEPRO,
        fontFamily: Fonts.PoppinsSemiBold,
    },
    backBtn: {
        position: 'absolute',
        zIndex: 10,
    },

    backIcon: {
        width: scaleModerate(34),
        height: scaleModerate(54),
        tintColor: Colors.WHITEPRO,
    },
})