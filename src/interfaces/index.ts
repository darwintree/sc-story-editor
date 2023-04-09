import {
  Character,
  CharSpine,
  CharAnim,
  CharPosition,
  CharEffect,
} from "./character";
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

// checkValidity
type FrameInstance = {
  copy(): FrameInstance;
  setSpine(spine: CharSpine): FrameInstance;
  setAnim(charAnim: CharAnim): FrameInstance;
  setCharLabel(charLabel: string): FrameInstance;
  /**
   *
   * @param charPositon. recommended x: 568/796/310/936/200/686/420/150/986
   * @returns
   */
  setPosition(charPosition: CharPosition): FrameInstance;
  setCharEffect(charEffect: CharEffect): FrameInstance;
  setFrameText(frameText: FrameText): FrameInstance;
  clearText(): FrameInstance;
  setVoice(voice: string): FrameInstance;
  normalize(): FrameData;
} & FrameData;

export type { CharSpine, CharAnim, FrameData, FrameInstance };
