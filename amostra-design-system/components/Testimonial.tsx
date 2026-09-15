import { Avatar } from "./Avatar";
import { Card, type CardProps } from "./Card";

export interface TestimonialProps extends Omit<CardProps, "children"> {
  quote: string;
  author: string;
  role: string;
  /** Star rating, 1–5. */
  rating?: number;
}

export function Testimonial({ quote, author, role, rating = 5, ...rest }: TestimonialProps) {
  return (
    <Card {...rest}>
      <div className="ap-testimonial__stars" aria-label={`${rating} de 5 estrelas`}>
        {"★".repeat(rating)}
      </div>
      <p style={{ marginBlock: "var(--ap-space-3)" }}>{quote}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--ap-space-3)" }}>
        <Avatar name={author} size="sm" />
        <div>
          <div style={{ fontWeight: "var(--ap-weight-semibold)", fontSize: "var(--ap-text-sm)" }}>
            {author}
          </div>
          <div className="ap-hint">{role}</div>
        </div>
      </div>
    </Card>
  );
}
