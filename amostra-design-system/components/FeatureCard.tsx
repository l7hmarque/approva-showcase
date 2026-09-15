import type { ReactNode } from "react";
import { Card, type CardProps } from "./Card";

export interface FeatureCardProps extends Omit<CardProps, "title"> {
  /** Glyph or short symbol shown in the tinted square. */
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

/** Marketing feature block: icon, title and supporting copy. */
export function FeatureCard({ icon, title, description, ...rest }: FeatureCardProps) {
  return (
    <Card interactive {...rest}>
      {icon ? (
        <div className="ap-feature__icon" aria-hidden="true">
          {icon}
        </div>
      ) : null}
      <h3 className="ap-card__title">{title}</h3>
      <p className="ap-card__body">{description}</p>
    </Card>
  );
}
