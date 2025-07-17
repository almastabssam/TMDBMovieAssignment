import { StyleSheet } from "react-native";
import {
    scaleHorizontal,
    scaleModerate,
    scaleVertical,
} from '../../utils/responsive';
import { Colors } from "../../utils/colors";
import { Fonts } from "../../utils/fonts";
export const useDashboadStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: scaleModerate(22),
        fontWeight: 'bold',
        padding: scaleModerate(16),
        color: Colors.BLACK,
        fontFamily: Fonts.PoppinsSemiBold,
    },
    list: {
        paddingHorizontal: scaleHorizontal(16),
    },
    input: {
        height: 50, 
        marginBottom: 10,
        marginHorizontal: scaleHorizontal(16),
        borderRadius: 30,
        backgroundColor: '#F2F2F6',
        paddingHorizontal: 20,
    },
    movieItem: {
        marginBottom: scaleVertical(20),
        borderRadius: scaleModerate(12),
        overflow: 'hidden',
        backgroundColor: Colors.GREY,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: scaleVertical(200),
        borderRadius: scaleModerate(12),
    },
    poster: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: scaleModerate(12),
    },
    titleOverlay: {
        position: 'absolute',
        bottom: scaleVertical(10),
        left: scaleHorizontal(10),
        color: Colors.WHITEPRO,
        paddingHorizontal: scaleHorizontal(10),
        paddingVertical: scaleVertical(4),
        fontSize: scaleModerate(16),
        fontFamily: Fonts.PoppinsMedium,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: scaleModerate(6),
        overflow: 'hidden',
    },

})