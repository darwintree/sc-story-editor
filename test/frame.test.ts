import { FrameData, FrameInstance, CharacterSpine } from "../src/interfaces";
import { createFrame } from "../src/frame"; // Make sure to export the createFrame function in the original file

describe("createFrame", () => {
  test("should create a frame with given frameData", () => {
    const frameData: FrameData = {
      charId: "1",
      charCategory: "stand",
      charType: "idols",
    };

    const result = createFrame(frameData);
    expect(result).toMatchObject(frameData);
  });

  test("should set spine data using setSpine function", () => {
    const frameData: FrameData = {
      charId: "1",
      charCategory: "stand",
      charType: "idols",
    };

    const spine: CharacterSpine = {
      charId: "2",
      charCategory: "stand",
      charType: "idols",
    };

    const frame = createFrame(frameData);
    frame.setSpine(spine);

    expect(frame.charId).toEqual(spine.charId);
    expect(frame.charCategory).toEqual(spine.charCategory);
    expect(frame.charType).toEqual(spine.charType);
  });
});

