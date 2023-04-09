import watch from "node-watch";
const { exec } = require("child_process");

watch("./index.ts", async (event, filename) => {
  if (filename) console.log(`begin updating...`);
  // console.log(event)

  exec("yarn start", (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`update finished`);
  });
  // console.log(result)
});
