import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const scaleHorizontal = (size: number) => {
    return scale(size);
};
export const scaleVertical = (size: number) => {
    return verticalScale(size);
};
export const scaleModerate = (size: number, factor?: number) => {
    return moderateScale(size, factor);
};
