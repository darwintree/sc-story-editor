import { Character, CharacterSpine } from "./character";
import {
  Bg,
  Fg,
  FrameText,
  Effect,
  Select,
  Sound,
  Wait,
  Still,
} from "./optional-types";

// Frame interface
type Frame = {
  id?: number;
  movie?: string;
  label?: string;
  setSpine(spine: CharacterSpine): void;
} & Optional<Character> &
  Optional<Bg> &
  Optional<Fg> &
  Optional<Effect> &
  Optional<Sound> &
  Optional<FrameText> &
  Optional<Select> &
  Optional<Still> &
  Optional<Wait>;

export type { CharacterSpine, Frame };
