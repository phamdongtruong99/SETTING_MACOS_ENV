import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const isPortrait = () => {
    const dimensions = Dimensions.get('screen');
    return dimensions.height > dimensions.width
};

export const isLandScape = () => {
    const dimensions = Dimensions.get('screen');
    return dimensions.width > dimensions.height
};

export const msp = (dim: any, limit: any) => {
    return (dim.scale * dim.width) >= limit || (dim.scale * dim.height) >= limit
};

export const isTablet = () => {
    const dim = Dimensions.get("screen");
    return ((dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900)))
};

export const isPhone = () => {
    return !isTablet()
};

