import { FrameData, FrameInstance } from "./interfaces";
import fs from "fs";

class StoryScript {
  frames: FrameData[] = [];
  addFrame(frame: FrameInstance) {
    // uses deep copy
    this.frames.push(frame.normalize());
  }
  output(dest: string) {
    if (!this.frames.length || this.frames[this.frames.length-1].label !== "end") {
      this.frames.push({
        label: "end"
      })
    }
    fs.writeFileSync(dest, JSON.stringify(this.frames, null, 2));
  }
}

export { StoryScript };
