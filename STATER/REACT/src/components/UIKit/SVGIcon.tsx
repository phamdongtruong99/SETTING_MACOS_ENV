import Icon from '@ant-design/icons';
import { FC } from 'react';
import close from '@/public/svg/close.svg';
import ticker from '@/public/svg/Ticker.svg';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

const SVGS = {
  close,
  ticker,
};

export type IconSvgName = keyof typeof SVGS;

type SvgProps = {
  name: IconSvgName;
  color?: string;
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const SVGIcon: FC<SvgProps> = ({ onClick, name, style, size, color }) => {
  return (
    <Icon
      onClick={onClick}
      component={SVGS[name] as React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>}
      style={{ fontSize: size, color: color, ...style }}
    />
  );
};

export default SVGIcon;
