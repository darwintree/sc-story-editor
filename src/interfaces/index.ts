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
type FrameData = {
  id?: number;
  movie?: string;
  label?: string;
} & Optional<Character> &
  Optional<Bg> &
  Optional<Fg> &
  Optional<Effect> &
  Optional<Sound> &
  Optional<FrameText> &
  Optional<Select> &
  Optional<Still> &
  Optional<Wait>;

type FrameInstance = {
  setSpine(spine: CharacterSpine): void;
} & FrameData;

export type { CharacterSpine, FrameData, FrameInstance };
