import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface Props {
  text: string,
  highlight: string,
  style?: React.CSSProperties;
}

const HighLightSearchText: FC<Props> = ({ text, highlight, style }) => {
  highlight=highlight??'';
  if (!highlight.trim()) {
    return (<span style={ style }>{text}</span>);
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text ? text.split(new RegExp(`(${highlight})`, 'gi')): [];
  return (
    <span style={ style }>
      {parts.filter(part => part).map((part, i) => (
        regex.test(part) ? <mark key={ i }>{part}</mark> : <span key={ i }>{part}</span>
      ))}
    </span>
  );
};

HighLightSearchText.propTypes = {
  
};

export default HighLightSearchText;
