import { FrameData, FrameInstance, CharAnim, CharSpine } from "./interfaces";
import { CharEffect, CharPosition } from "./interfaces/character";
import { FrameText } from "./interfaces/optional-types";

function createFrame(frameData: FrameData): FrameInstance {
  return {
    ...frameData,
    copy: function () {
      return createFrame(JSON.parse(JSON.stringify(this)));
    },
    setSpine: function ({ charId, charCategory, charType }: CharSpine) {
      // restrict scope
      Object.assign(this, { charId, charCategory, charType });
      return this;
    },

    setAnim: function ({
      charAnim1 = "wait3",
      charAnim2 = "blank",
      charAnim3,
      charAnim4,
      charAnim5,
      charAnim1Loop,
      charAnim2Loop,
      charAnim3Loop,
      charLipAnim = "lip_smile",
      lipAnimDuration,
    }: CharAnim) {
      Object.assign(this, {
        charAnim1,
        charAnim2,
        charAnim3,
        charAnim4,
        charAnim5,
        charAnim1Loop,
        charAnim2Loop,
        charAnim3Loop,
        charLipAnim,
        lipAnimDuration,
      });
      return this;
    },
    setCharLabel: function (charLabel: string) {
      this.charLabel = charLabel
      return this
    },
    setPosition: function ({ x, y = 640, order = 0 }: CharPosition) {
      this.charPosition = {
        x,
        y,
        order,
      };
      return this;
    },
    /**
     * character appear/disappear
     * @param param0 alpha=1 appear(not transparent) alpha=0 disappear(transparent)
     * @returns
     */
    setCharEffect: function ({
      x,
      y,
      type = "to",
      time = 100,
      alpha,
      scale,
    }: CharEffect) {
      this.charEffect = {
        x,
        y,
        type,
        time,
        alpha,
        scale,
      };
      return this;
    },
    setFrameText: function ({
      speaker,
      text,
      textCtrl = "p",
      textWait,
      textFrame = "001",
    }: FrameText) {
      Object.assign(this, { speaker, text, textCtrl, textWait, textFrame });
      return this;
    },
    clearText: function() {
      this.speaker = undefined
      this.text = undefined
      this.textCtrl = undefined
      this.textWait = undefined
      this.textFrame = "off"
      return this
    },
    setVoice: function(voice: string) {
      this.voice = voice
      return this
    },
    set: function(item: string, data: string) {
      // @ts-ignore
      this[item] = data
      return this
    },
    // TODO: check validity here
    normalize: function () {
      return JSON.parse(JSON.stringify(this));
    },
  };
}

export { createFrame };
