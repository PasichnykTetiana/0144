import React, { type FC, type SVGProps } from "react";

import { ReactComponent as Like } from "./images/like.svg";
import { ReactComponent as Comment } from "./images/comment.svg";

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  like: Like,
  comment: Comment,
} as const;

type SvgIconProps = SVGProps<SVGSVGElement> & { type: string };

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null;
  return <Icon {...svgProps} />;
};

export { SvgIcon };
