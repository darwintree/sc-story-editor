import {
  CharAnim1,
  CharAnim2,
  CharAnim3,
  CharAnim4,
  CharAnim5,
  CharLipAnim,
} from './enums'

interface CharPosition {
  x: number;
  y: number;
  order: number;
}

interface CharEffect {
  x?: number;
  y?: number;
  type: "from" | "to";
  alpha: 0 | 1;
  time: number;
  scale?: number;
}

// used to load spine
type CharacterSpine = {
  charId: string;
  charCategory:
    | "cb"
    | "cb_costume"
    | "cb_gasha"
    | "stand"
    | "stand_fix"
    | "stand_jersey"
    | "stand_costume"
    | "stand_silhouette"
    | "stand_costume_fix"
    | "stand_costume_flex";
  charType: "characters" | "idols" | "sub_characters";
};

// Character group
type Character = {
  // charSpine: string;
  charPosition: CharPosition;
  charAnim1: CharAnim1;
  charAnim2: CharAnim2;
  charAnim3: CharAnim3;
  charAnim4: CharAnim4;
  charAnim5: CharAnim5;
  charAnim1Loop: boolean;
  charAnim2Loop: boolean;
  charAnim3Loop: boolean;
  charAnim4Loop: boolean;
  charAnim5Loop: boolean;
  charLipAnim: CharLipAnim;
  lipAnimDuration: number;
  charEffect: CharEffect;
  lip: string;
} & CharacterSpine;

export type { CharacterSpine, Character };
