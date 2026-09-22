import { Editorial } from "./Editorial";
import paperPlanes from "./pink-paper-planes.svg";

/**
 * Blush Paper Planes
 *
 * A quiet, architectural vellum study for the editorial hero. Keeping the
 * composition in Editorial means the copy, hierarchy, responsive behavior, and
 * reduced-motion treatment stay exactly shared with the source variant.
 */
export function PinkPaper() {
  return <Editorial backgroundImage={paperPlanes} />;
}