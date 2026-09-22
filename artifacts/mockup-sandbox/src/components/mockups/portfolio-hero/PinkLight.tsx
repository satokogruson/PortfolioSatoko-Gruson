import { Editorial } from "./Editorial";
import roseLightField from "./pink-light-field.png";

/**
 * Rose Light Field
 *
 * A quiet, daylight-led material study for the shared editorial hero.
 * Editorial owns the copy, layout, navigation, motion, and responsive
 * behavior; this variation only supplies its atmospheric artwork.
 */
export function PinkLight() {
  return <Editorial backgroundImage={roseLightField} />;
}