import { FC } from "react";

interface Props {
  src: string;
}

const Iframe: FC<Props> = ({ src }) => {
  return <div dangerouslySetInnerHTML={{ __html: `<iframe src=${src} />`}} />;
}

export default Iframe;
