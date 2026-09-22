import { Editorial } from "./Editorial";
import lineworkBackground from "./pink-linework-background.svg";

/**
 * Ink-and-Blush Linework
 *
 * A quiet architectural paper study for the editorial hero. The image keeps
 * the content area calm while its measured linework gives the page a product
 * systems / design practice character at the edges.
 */
export function PinkLinework() {
  return <Editorial backgroundImage={lineworkBackground} />;
}