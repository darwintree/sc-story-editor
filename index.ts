import { createFrame } from "./src/frame";
import { StoryScript } from "./src/story-script";

// let f: FrameInterface
async function main() {
  const story = new StoryScript();
  const meguru = "めぐる";
  const mano = "真乃";
  const hiori = "灯織";

  const meguruDisappear = createFrame({
    charLabel: meguru,
  }).setCharEffect({
    alpha: 0,
  });
  const meguruAppear = createFrame({
    charLabel: meguru,
  })
    .setCharEffect({
      alpha: 1,
    })
    .setAnim({});
  const manoDisappear = createFrame({
    charLabel: mano,
  }).setCharEffect({
    alpha: 0,
  });
  const manoAppear = createFrame({
    charLabel: mano,
  })
    .setCharEffect({
      alpha: 1,
    })
    .setAnim({});
  const hioriDisappear = createFrame({
    charLabel: hiori,
  }).setCharEffect({
    alpha: 0,
  });
  const hioriAppear = createFrame({
    charLabel: hiori,
  })
    .setCharEffect({
      alpha: 1,
    })
    .setAnim({});
  story.addFrame(
    createFrame({
      textFrame: "off",
      bg: "00007",
    })
  );
  story.addFrame(
    createFrame({
      charLabel: meguru,
      voice: "custom/900101/drama_01",
    })
      .setSpine({
        charCategory: "stand_costume",
        charType: "idols",
        charId: "1040030060",
      })
      .setAnim({
        charAnim1: "wait3",
        charAnim2: "blank",
        charLipAnim: "lip_smile",
      })
      .setCharEffect({
        alpha: 1,
      })
      .setFrameText({
        speaker: meguru,
        text: "ねえ",
      })
      .setPosition({
        x: 568,
      })
  );
  story.addFrame(
    createFrame({
      charLabel: meguru,
      voice: "custom/900101/drama_02",
    })
      .setAnim({
        charAnim1: "shy2",
        charAnim2: "face_wait",
        charLipAnim: "lip_smile",
      })
      .setFrameText({
        speaker: meguru,
        text: "真乃、灯織?",
      })
  );
  story.addFrame(meguruDisappear);
  story.addFrame(
    createFrame({
      charLabel: mano,
      voice: "custom/900101/drama_03",
    })
      .setSpine({
        charCategory: "stand_costume_flex",
        charType: "idols",
        charId: "1040010060",
      })
      .setAnim({
        charAnim1: "wait3",
        charAnim2: "blank",
        charLipAnim: "lip_smile",
        // lipAnimDuration: 100
      })
      .setPosition({
        x: 796,
      })
      .setFrameText({
        speaker: mano,
        text: "めぐるちゃん?",
      })
      .setCharEffect({
        alpha: 1,
      })
  );
  story.addFrame(
    createFrame({
      charLabel: hiori,
      voice: "custom/900101/drama_04",
    })
      .setSpine({
        charCategory: "stand_costume_flex",
        charType: "idols",
        charId: "1040020060",
      })
      .setAnim({
        // lipAnimDuration: 100
      })
      .setPosition({
        x: 310,
      })
      .setFrameText({
        speaker: hiori,
        text: "どうしたの?",
      })
      .setCharEffect({
        alpha: 1,
      })
  );
  story.addFrame(manoDisappear);
  story.addFrame(hioriDisappear);
  story.addFrame(
    createFrame({
      charLabel: meguru,
    })
      .setCharEffect({
        alpha: 1,
      })
      .setFrameText({
        speaker: meguru,
        text: "————\r\nにへへ",
      })
      .setAnim({})
      .setVoice("custom/900101/drama_05")
  );
  story.addFrame(
    createFrame({
      charLabel: meguru,
    })
      .setFrameText({
        speaker: meguru,
        text: "私たち、何だか遠くまで歩いてきたなぁと思って",
      })
      .setAnim({})
      .setVoice("custom/900101/drama_06")
  );
  story.addFrame(
    createFrame({
      charLabel: meguru,
    })
      .setCharEffect({
        alpha: 1,
      })
      .setFrameText({
        speaker: meguru,
        text: "覚えてる?\r\nここまでにあったいろんなこと、いろんな思い出",
      })
      .setAnim({})
      .setVoice("custom/900101/drama_07")
  );
  story.addFrame(meguruDisappear);
  story.addFrame(
    createFrame({
      charLabel: hiori,
      voice: "custom/900101/drama_08",
    })
      .setAnim({})
      .setFrameText({
        speaker: hiori,
        text: "覚えてるよ\r\n一緒にお仕事してレッスンして",
      })
      .setPosition({ x: 568 })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(hioriDisappear);
  story.addFrame(
    createFrame({
      charLabel: mano,
      voice: "custom/900101/drama_09",
    })
      .setAnim({})
      .setFrameText({
        speaker: mano,
        text: "うん、一緒に遊んでお喋りして",
      })
      .setPosition({ x: 568 })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(manoDisappear);
  story.addFrame(
    createFrame({
      charLabel: meguru,
      voice: "custom/900101/drama_10",
    })
      .setAnim({})
      .setFrameText({
        speaker: meguru,
        text: "たくさん笑って泣いたよね",
      })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(meguruDisappear);
  story.addFrame(
    createFrame({
      charLabel: mano,
      voice: "custom/900101/drama_11",
    })
      .setAnim({})
      .setFrameText({
        speaker: mano,
        text: "ね、初めてステージに立った日のことも覚えてる?",
      })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(manoDisappear);
  story.addFrame(
    createFrame({
      charLabel: meguru,
      voice: "custom/900101/drama_12",
    })
      .setAnim({})
      .setFrameText({
        speaker: meguru,
        text: "もちろん、みんな緊張で震えちゃって",
      })
      .setCharEffect({ alpha: 1 })
  );
  // story.addFrame(meguruDisappear)
  story.addFrame(
    createFrame({
      charLabel: meguru,
    }).setPosition({
      x: 796,
    })
  );
  story.addFrame(
    createFrame({
      charLabel: hiori,
      voice: "custom/900101/drama_13",
    })
      .setAnim({})
      .setFrameText({
        speaker: hiori,
        text: "でも、めぐるが抱きしめてくれた",
      })
      .setPosition({ x: 310 })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(
    meguruAppear.copy().setVoice("custom/900101/drama_14").setFrameText({
      speaker: meguru,
      text: "へへ、ちょっと強引だったかもだけど",
    })
  );
  story.addFrame(hioriDisappear);
  story.addFrame(meguruDisappear);
  story.addFrame(
    manoAppear
      .copy()
      .setPosition({
        x: 568,
      })
      .setVoice("custom/900101/drama_15")
      .setFrameText({
        speaker: mano,
        text: "ううん\r\nぎゅってしてくれて、とっても安心したんだよ",
      })
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_16").setFrameText({
      speaker: mano,
      text: "一人じゃないんだって",
    })
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_17").setFrameText({
      speaker: mano,
      text: "灯織ちゃん、めぐるちゃん",
    })
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_18").setFrameText({
      speaker: mano,
      text: "ここまで一緒にいてくれて、ありがとう",
    })
  );
  story.addFrame(manoDisappear);
  // story.addFrame(
  //   manoAppear.copy().setPosition({
  //     x: 310
  //   })
  // )
  // story.addFrame(hioriAppear.)
  story.addFrame(
    meguruAppear
      .copy()
      .setVoice("custom/900101/drama_19")
      .setPosition({
        x: 568,
      })
      .setFrameText({
        speaker: meguru,
        text: "うん、私も",
      })
  );
  story.addFrame(
    meguruAppear.copy().setVoice("custom/900101/drama_20").setFrameText({
      speaker: meguru,
      text: "真乃、灯織\r\nありがとう",
    })
  );
  story.addFrame(
    meguruAppear.copy().setVoice("custom/900101/drama_21").setFrameText({
      speaker: meguru,
      text: "私、二人のことが大好き",
    })
  );
  story.addFrame(meguruDisappear);
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_22")
      .setFrameText({
        speaker: hiori,
        text: "私からも、ありがとう",
      })
      .setPosition({
        x: 568,
      })
  );
  story.addFrame(
    hioriAppear.copy().setVoice("custom/900101/drama_23").setFrameText({
      speaker: hiori,
      text: "二人とユニットを組めてよかった",
    })
  );
  story.addFrame(
    hioriAppear.copy().setVoice("custom/900101/drama_24").setFrameText({
      speaker: hiori,
      text: "三人一緒だから、ここまで来れた",
    })
  );
  // story.addFrame(
  //   manoAppear.copy().setPosition({
  //     x: 568,
  //   })
  // );
  story.addFrame(
    meguruAppear
      .copy()
      .setPosition({
        x: 936,
      })
      .setAnim({
        charLipAnim: "blank",
      })
  );
  story.addFrame(
    createFrame({ charLabel: mano })
      .setAnim({
        charLipAnim: "blank",
      })
      .setCharEffect({
        alpha: 1,
      })
      .setPosition({
        x: 568,
      })
  );
  story.addFrame(
    hioriAppear
      .copy()
      .setPosition({
        x: 200,
      })
      .setVoice("custom/900101/drama_25")
      .setFrameText({
        speaker: hiori,
        text: "それから",
      })
  );
  story.addFrame(
    meguruAppear.copy().setVoice("custom/900101/drama_26").setFrameText({
      speaker: meguru,
      text: "プロデューサー",
    })
  );
  story.addFrame(
    hioriAppear.copy().setVoice("custom/900101/drama_27").setFrameText({
      speaker: hiori,
      text: "ね、プロデューサー",
    })
  );
  story.addFrame(
    hioriAppear.copy().setVoice("custom/900101/drama_28").setFrameText({
      speaker: hiori,
      text: "あなたが一緒にいてくれたから\r\n私たち、ここまで来ることができました",
    })
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_29").setFrameText({
      speaker: mano,
      text: "私たちの前には、いろんな道があって",
    })
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_30").setFrameText({
      speaker: mano,
      text: "その中には\r\nマイクを下ろす道もあったと思うんです",
    })
  );
  story.addFrame(
    hioriAppear.copy().setVoice("custom/900101/drama_31").setFrameText({
      speaker: hiori,
      text: "でも、まだその道は選びません",
    })
  );
  story.addFrame(
    meguruAppear.copy().setVoice("custom/900101/drama_32").setFrameText({
      speaker: meguru,
      text: "ねえ、行こう\r\n光の先、あの日の先に",
    })
  );
  story.addFrame(manoDisappear);
  story.addFrame(hioriDisappear);
  story.addFrame(meguruDisappear);
  story.addFrame(
    createFrame({
      charAnim1: "wait",
      charLabel: "hiori",
      charCategory: "stand_fix",
      charType: "characters",
      charId: "002",
      charPosition: {
        x: 200,
        y: 640,
        order: 1,
      },
      bg: "00006",
      charEffect: {
        type: "from",
        alpha: 0,
        time: 100,
      },
    })
  );
  story.addFrame(
    createFrame({
      charAnim1: "wait",
      charLabel: "meguru",
      charCategory: "stand_fix",
      charType: "characters",
      charId: "003",
      charPosition: {
        x: 936,
        y: 640,
        order: 2,
      },
      charEffect: {
        type: "from",
        alpha: 0,
        time: 100,
      },
    })
  );
  story.addFrame(
    createFrame({
      charAnim1: "wait",
      charLabel: "mano",
      charCategory: "stand_fix",
      charType: "characters",
      charId: "001",
      charPosition: {
        x: 568,
        y: 640,
        order: 0,
      },
      charEffect: {
        type: "from",
        alpha: 0,
        time: 100,
      },
    })
  );
  story.addFrame(
    createFrame({
      speaker: "めぐる",
      text: "自己紹介からしなきゃだよね！\r\nわたし、八宮めぐる！　ふたりは？",
      charAnim1: "shy1",
      charAnim2: "face_smile",
      charLipAnim: "lip_smile",
      charLabel: "meguru",
      textCtrl: "p",
      textFrame: "001",
      voice: "custom/900101/drama_33",
    })
  );
  story.addFrame(
    createFrame({
      speaker: "真乃",
      text: "さ、櫻木真乃です\r\nよろしくお願いします",
      charAnim1: "hello",
      charLipAnim: "lip_trouble",
      charLabel: "mano",
      textCtrl: "p",
      textFrame: "001",
      voice: "custom/900101/drama_34",
    })
  );
  story.addFrame(
    createFrame({
      speaker: "灯織",
      text: "……風野灯織です\r\nよろしくお願いします",
      charAnim1: "wait3",
      charLipAnim: "lip_wait",
      charLabel: "hiori",
      textCtrl: "p",
      textFrame: "001",
      voice: "custom/900101/drama_35",
    })
  );
  story.addFrame(manoDisappear.copy().setCharLabel("mano"));
  story.addFrame(hioriDisappear.copy().setCharLabel("hiori"));
  story.addFrame(meguruDisappear.copy().setCharLabel("meguru"));
  story.addFrame(
    createFrame({
      bg: "custom-cg1",
      voice: "custom/900101/drama_36",
    }).setFrameText({
      speaker: mano,
      text: "これからもずっと一緒に",
    })
  );
  story.addFrame(
    createFrame({ voice: "custom/900101/drama_37" }).setFrameText({
      speaker: mano,
      text: "輝きをみんなに届けよう",
    })
  );
  story.addFrame(
    createFrame({ voice: "custom/900101/drama_38" }).setFrameText({
      speaker: "一同",
      text: "イルミネーションスターズ!",
    })
  );
  story.output("F:\\Projects\\shiny-proxy\\assets\\json\\custom\\story.json");
}

main();
