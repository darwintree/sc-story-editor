import { Frame, CharacterSpine } from "./interfaces";

function createFrame(frameData: Frame): Frame {
  return {
    ...frameData,
    setSpine: function (spine: CharacterSpine) {
      // restrict scope
      this.charId = spine.charId
      this.charCategory = spine.charCategory
      this.charType = spine.charType
    }
  }
}

