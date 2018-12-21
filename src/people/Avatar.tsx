import * as React from "react";
import ProgressiveImage from "react-progressive-image";
import { styled } from "../theme/styled";
import { StyledProps } from "../theme/styled-props";

import placeholder from "./avatar-placeholder.svg";

const Image = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  :hover {
    transform: rotate(360deg);
  }

  transition: all 0.66s;
`;

export const Avatar: React.FunctionComponent<{ url: string } & StyledProps> = ({
  url,
  className
}) => (
  <ProgressiveImage delay={3000} src={url} placeholder={placeholder}>
    {(src: string) => <Image className={className} src={src} />}
  </ProgressiveImage>
);
