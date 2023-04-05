import { FrameData } from "./interfaces";
import fs from "fs";

class StoryScript {
  frames: FrameData[] = [];
  addFrame(frame: FrameData) {
    // uses deep copy
    this.frames.push(JSON.parse(JSON.stringify(frame)));
  }
  output(dest: string) {
    fs.writeFileSync(dest, JSON.stringify(this.frames, null, 2));
  }
}

export { StoryScript };
