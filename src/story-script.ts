import { Frame } from "./interfaces";
import fs from "fs";

class StoryScript {
  frames: Frame[] = [];
  addFrame(frame: Frame) {
    // uses deep copy
    this.frames.push(JSON.parse(JSON.stringify(frame)));
  }
  output(dest: string) {
    fs.writeFileSync(dest, JSON.stringify(this.frames, null, 2));
  }
}

export { StoryScript };
