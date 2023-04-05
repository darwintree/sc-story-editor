import { FrameData, FrameInstance, CharacterSpine } from "./interfaces";

function createFrame(frameData: FrameData): FrameInstance {
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

export { createFrame }
