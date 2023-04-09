import {
  CharAnim1,
  CharAnim2,
  CharAnim3,
  CharAnim4,
  CharAnim5,
  CharLipAnim,
} from "./enums";

interface CharPosition {
  x: 568 | 796 | 310 | 936 | 200 | 686 | 420 | 150 | 986;
  y?: number;
  order?: number;
}

interface CharEffect {
  x?: number;
  y?: number;
  type?: "from" | "to"; // will defaults to "to"
  alpha: 0 | 1;
  time?: number; // defauts to 100
  scale?: number;
}

// used to load spine
type CharSpine = {
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

type CharAnim = {
  charAnim1?: CharAnim1;
  charAnim2?: CharAnim2;
  charAnim3?: CharAnim3;
  charAnim4?: CharAnim4;
  charAnim5?: CharAnim5;
  charAnim1Loop?: boolean; // always defaults to false
  charAnim2Loop?: boolean; // always defaults to false
  charAnim3Loop?: boolean; // always defaults to false
  // charAnim4Loop?: boolean;
  // charAnim5Loop?: boolean;
  charLipAnim?: CharLipAnim;
  lipAnimDuration?: number;
};

// Character group
type Character = {
  // charSpine: string;
  charLabel: string;
  charPosition: CharPosition;
  charEffect: CharEffect;
  // lip: string;
} & CharSpine &
  CharAnim;

export type { CharSpine, CharAnim, Character, CharPosition, CharEffect };
