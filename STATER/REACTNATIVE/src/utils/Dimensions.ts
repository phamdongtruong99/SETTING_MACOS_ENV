import { Dimensions, Platform, PixelRatio } from 'react-native';

export const IPHONE_SE_HEIGHT = 667;
export const IPHONE_11_HEIGHT = 812;


export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const isSmallScreen = Dimensions.get("screen").height < IPHONE_SE_HEIGHT;
export const isBigScreen = Dimensions.get("screen").height >= IPHONE_11_HEIGHT;

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


export function isIphoneX() {
  const dim = Dimensions.get('window');
  
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}
    
export const normalizeText = (size: number) => {
  const { height, width } = Dimensions.get("screen");
  const pixelRatio = PixelRatio.get();

  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iPhone SE and smaller Android devices
    if (width < 667) {
      return size * 0.95;
    }

    // iPhone SE
    if (width < 667) {
      return size;
    }

    // iPhone 6 / iPhone 7 / iPhone 8
    if (height >= IPHONE_SE_HEIGHT && height <= 735) {
      return size * 1.15;
    }

    // Tablets
    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // Android font scaling
    if (width <= 360) {
      return size;
    }

    // Various Android width
    if (height < 667) {
      return size * 1.15;
    }

    if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    // iPhone 6s Plus / 7 Plus
    return size * 1.27;
  }

  // Android font scaling
  if (pixelRatio >= 3.5) {
    if (width <= 360) {
      return SVGPathSegLinetoHorizontalRel;
    }

    if (height < 667) {
      return size * 1.2;
    }

    if (height >= 667 && height <= 735) {
      return size * 1.25;
    }

    return size * 1.4;
  }

  return size;
};
