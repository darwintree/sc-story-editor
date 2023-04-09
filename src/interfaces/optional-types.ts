import { BgEffect, FgEffect, TextCtrl } from "./enums";

type Bg = {
  bg: string;
  bgEffect: BgEffect;
  bgEffectTime: number;
}

type Fg = {
  fg: string;
  fgEffect: FgEffect;
  fgEffectTime: number;
}

type FrameText = {
  speaker: string;
  text: string;
  textCtrl?: TextCtrl;
  textWait?: number;
  textFrame?: string;
}

interface EffectValue {
  type: 'from' | 'to',
  x: number,
  alpha: number,
  time: number,
  easing: 'easeInQuart',
}

interface EffectTarget {
  type: 'rect',
  width: number, // 1136
  height: number, // 640
  color: string, // '000000', 'ffffff'
}

type Effect = {
  effectLabel: string;
  effectTarget: EffectTarget;
  effectValue: EffectValue;
}

type Select = {
  select: string;
  nextLabel: string;
}

type Sound = {
  bgm?: string;
  se?: string;
  voice?: string;
  voiceKeep?: boolean;
}

type Wait = {
  waitType: "time" | "effect";
  waitTime: number; // ms
}

type Still = {
  stillId: string;
  stillCtrl: string;
  still: string;
  stillType: string;
}

export {
  Bg,
  Fg,
  FrameText,
  Effect,
  Select,
  Sound,
  Wait,
  Still,
}
