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
  story.addFrame(createFrame({
    waitType: "time",
    waitTime: 7000,
    se: "se-custom-000",
  }))
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
        charAnim1: "wait1",
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
        charAnim1: "smile1",
        // charAnim1Loop: false
        charAnim2: "blank",
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
      .setAnim({
        charAnim1: "wait2",
        charAnim2: "face_shy",
        charLipAnim: "lip_wait",
      })
      .setVoice("custom/900101/drama_05")
  );
  story.addFrame(
    createFrame({
      charLabel: meguru,
    })
      .setFrameText({
        speaker: meguru,
        text: "私たち\r\n何だか遠くまで歩いてきたなぁと思って",
      })
      .setAnim({
        charAnim1: "wait1",
        charAnim2: "face_shy",
      })
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
      .setAnim({
        charAnim1: "shy2",
        charAnim2: "face_shy",
        charLipAnim: "lip_wait",
      })
      .setVoice("custom/900101/drama_07")
  );
  story.addFrame(meguruDisappear);
  story.addFrame(hioriAppear.copy().setPosition({ x: 568 }));
  story.addFrame(
    createFrame({
      charLabel: hiori,
      voice: "custom/900101/drama_08",
    })
      .setAnim({
        charAnim1: "surp1",
        charAnim2: "face_smile",
        charLipAnim: "lip_smile",
      })
      .setFrameText({
        speaker: hiori,
        text: "覚えてるよ\r\n一緒にお仕事して、レッスンして",
      })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(hioriDisappear);
  story.addFrame(
    createFrame({
      charLabel: mano,
      voice: "custom/900101/drama_09",
    })
      .setAnim({
        charAnim1: "smile2",
        charLipAnim: "lip_smile2",
      })
      .setFrameText({
        speaker: mano,
        text: "うん\r\n一緒に遊んで、お喋りして",
      })
      .setPosition({ x: 568 })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(manoDisappear);
  story.addFrame(meguruAppear.copy());
  story.addFrame(
    createFrame({
      charLabel: meguru,
      voice: "custom/900101/drama_10",
    })
      .setAnim({
        charAnim1: "wait1",
        charAnim2: "face_shy",
        charLipAnim: "lip_smile",
      })
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
      .setAnim({
        charAnim1: "shy1",
        charAnim2: "face_wait",
        charLipAnim: "lip_smile",
      })
      .setFrameText({
        speaker: mano,
        text: "ね、初めてステージに立った日のことも覚えてる?",
      })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(manoDisappear);
  story.addFrame(meguruAppear);
  story.addFrame(
    createFrame({
      charLabel: meguru,
      voice: "custom/900101/drama_12",
    })
      .setAnim({
        charAnim1: "smile2",
        charLipAnim: "lip_smile",
      })
      .setFrameText({
        speaker: meguru,
        text: "もちろん\r\nみんな緊張で震えちゃって",
      })
      .setCharEffect({ alpha: 1 })
  );
  // story.addFrame(meguruDisappear)
  story.addFrame(
    createFrame({
      charLabel: meguru,
    })
      .setPosition({
        x: 796,
      })
      .setAnim({
        charLipAnim: "lip_smile_s",
      })
  );
  story.addFrame(hioriAppear);
  story.addFrame(
    createFrame({
      charLabel: hiori,
      voice: "custom/900101/drama_13",
    })
      .setAnim({
        charAnim1: "smile2",
        charLipAnim: "lip_smile",
      })
      .setFrameText({
        speaker: hiori,
        text: "でも\r\nめぐるが抱きしめてくれた",
      })
      .setPosition({ x: 310 })
      .setCharEffect({ alpha: 1 })
  );
  story.addFrame(
    meguruAppear
      .copy()
      .setVoice("custom/900101/drama_14")
      .setFrameText({
        speaker: meguru,
        text: "へへ\r\nちょっと強引だったかもだけど",
      })
      .setAnim({
        charAnim1: "think",
        charLipAnim: "lip_smile",
      })
  );
  story.addFrame(hioriDisappear);
  story.addFrame(meguruDisappear);
  story.addFrame(manoAppear);
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
      .setAnim({
        charAnim1: "no2",
        charAnim1Loop: false,
        charAnim2: "blank",
        charLipAnim: "lip_smile2",
      })
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_16").setFrameText({
      speaker: mano,
      text: "一人じゃないんだって",
    })
  );
  story.addFrame(
    hioriAppear.copy().setPosition({
      x: 200,
    })
  );
  story.addFrame(
    meguruAppear.copy().setPosition({
      x: 936,
    })
  );
  story.addFrame(
    hioriAppear.copy().setAnim({
      charAnim1: "smile2",
      charLipAnim: "lip_smile_s",
    })
  );
  story.addFrame(
    meguruAppear.copy().setAnim({
      charAnim1: "wait4",
      charLipAnim: "lip_smile_s",
    })
  );
  story.addFrame(
    createFrame({
      textFrame: "off",
      waitType: "time",
      waitTime: 2000,
    }).set("se", "se-custom-001")
  );
  story.addFrame(
    manoAppear.copy().setVoice("custom/900101/drama_17").setFrameText({
      speaker: mano,
      text: "灯織ちゃん、めぐるちゃん",
    })
  );
  story.addFrame(
    manoAppear
      .copy()
      .setVoice("custom/900101/drama_18")
      .setFrameText({
        speaker: mano,
        text: "ここまで一緒にいてくれて、ありがとう",
      })
      .setAnim({
        charAnim1: "smile2",
      })
  );
  story.addFrame(
    manoAppear.copy().setAnim({
      charAnim1: "wait",
    })
  );
  // story.addFrame(manoDisappear);
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
      .setFrameText({
        speaker: meguru,
        text: "うん、私も",
      })
      .setAnim({
        charAnim1: "smile2",
      })
  );
  story.addFrame(
    meguruAppear.copy().setVoice("custom/900101/drama_20").setFrameText({
      speaker: meguru,
      text: "真乃、灯織\r\nありがとう",
    })
  );
  story.addFrame(
    meguruAppear
      .copy()
      .setVoice("custom/900101/drama_21")
      .setFrameText({
        speaker: meguru,
        text: "私、二人のことが大好き",
      })
      .setAnim({
        charAnim1: "think",
        charAnim2: "face_close",
        charLipAnim: "lip_smile",
      })
  );
  story.addFrame(
    meguruAppear.copy().setAnim({
      charAnim1: "wait",
    })
  );
  // story.addFrame(meguruDisappear);
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_22")
      .setFrameText({
        speaker: hiori,
        text: "私からも、ありがとう",
      })
      .setAnim({
        charAnim1: "smile1",
        charAnim2: "eye_left",
      })
  );
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_23")
      .setFrameText({
        speaker: hiori,
        text: "二人とユニットを組めてよかった",
      })
      .setAnim({
        charAnim1: "wait1",
        charAnim2: "eye_left",
      })
  );
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_24")
      .setFrameText({
        speaker: hiori,
        text: "三人一緒だから、ここまで来れた",
      })
      .setAnim({
        charAnim1: "wait",
        charAnim2: "eye_left",
      })
  );
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_25")
      .setFrameText({
        speaker: hiori,
        text: "それから",
      })
      .setAnim({
        charAnim1: "wait3",
        charAnim3: "eye_front",
      })
  );
  story.addFrame(
    manoAppear.copy().setAnim({
      charAnim1: "wait2",
      charLipAnim: "lip_smile_s",
    })
  );
  story.addFrame(
    meguruAppear
      .copy()
      .setVoice("custom/900101/drama_26")
      .setFrameText({
        speaker: meguru,
        text: "プロデューサー",
      })
      .setAnim({
        charAnim1: "smile1",
      })
  );
  story.addFrame(createFrame(meguruAppear.copy().setAnim({
    charAnim1: "wait",
  })))
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_27")
      .setFrameText({
        speaker: hiori,
        text: "ね、プロデューサー",
      })
      .setAnim({
        charAnim1: "wait1",
        charAnim2: "face_serious",
      })
  );
  story.addFrame(
    createFrame({
      textFrame: "off",
      waitType: "time",
      waitTime: 2000,
    }).set("se", "se-custom-002")
  );
  story.addFrame(
    createFrame({}).setFrameText({
      speaker: "プロデューサー",
      text: "はは…",
      textCtrl: "p",
      textFrame: "002",
    })
  );
  story.addFrame(
    createFrame({
      textFrame: "off",
      waitType: "time",
      waitTime: 1000,
    })
  );
  story.addFrame(
    hioriAppear
      .copy()
      .setVoice("custom/900101/drama_28")
      .setFrameText({
        speaker: hiori,
        text: "あなたが一緒にいてくれたから\r\n私たち、ここまで来ることができました",
      })
      .setAnim({
        charAnim1: "blank",
      })
  );
  story.addFrame(
    manoAppear
      .copy()
      .setVoice("custom/900101/drama_29")
      .setFrameText({
        speaker: mano,
        text: "私たちの前には、いろんな道があって",
      })
      .setAnim({
        charAnim1: "wait2",
        charLipAnim: "lip_smile2"
      })
  );
  story.addFrame(
    manoAppear
      .copy()
      .setVoice("custom/900101/drama_30")
      .setFrameText({
        speaker: mano,
        text: "その中には\r\nマイクを下ろす道もあったと思うんです",
      })
      .setAnim({
        charAnim1: "sad1",
        charAnim2: "face_surp",
        charLipAnim: "lip_sad"
      })
  );
  story.addFrame(
    createFrame({}).setFrameText({
      speaker: "プロデューサー",
      text: "…………",
      textCtrl: "p",
      textFrame: "002",
    })
  );
  story.addFrame(
    createFrame({
      waitType: "time",
      waitTime: 1500,
    })
  );
  story.addFrame(manoDisappear);
  story.addFrame(hioriDisappear);
  story.addFrame(meguruDisappear);
  story.addFrame(
    createFrame({})
      .setVoice("custom/900101/drama_31")
      .setFrameText({
        speaker: hiori,
        text: "でも、まだその道は選びません",
      })
      .set("bg", "custom-001")
  );
  story.addFrame(
    createFrame({}).copy().setVoice("custom/900101/drama_32").setFrameText({
      speaker: meguru,
      text: "ねえ、行こう",
    })
  );
  story.addFrame(
    createFrame({
      waitType: "time",
      waitTime: 1000,
    })
  );
  story.addFrame(
    createFrame({}).copy().setVoice("custom/900101/drama_32_1").setFrameText({
      speaker: meguru,
      text: "光の先、あの日の先に",
    })
  );
  story.addFrame(manoDisappear);
  story.addFrame(hioriDisappear);
  story.addFrame(meguruDisappear);
  story.addFrame(
    createFrame({
      textFrame: "off",
      waitType: "time",
      waitTime: 2000,
      bg: "00000",
    })
  );
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
      textFrame: "off",
      waitType: "time",
      waitTime: 1000,
      bg: "00000",
    })
  );
  story.addFrame(
    createFrame({
      voice: "custom/900101/drama_36",
    }).setFrameText({
      speaker: mano,
      text: "これからも、ずっと一緒に",
    })
  );
  story.addFrame(
    createFrame({
      voice: "custom/900101/drama_37",
      bg: "custom-003",
    }).setFrameText({
      speaker: mano,
      text: "輝きをみんなに届けよう",
    })
  );
  story.addFrame(
    createFrame({
      voice: "custom/900101/drama_38",
      bg: "custom-002",
    }).setFrameText({
      speaker: "一同",
      text: "イルミネーション————",
    })
  );
  story.addFrame(
    createFrame({
      waitType: "time",
      waitTime: 500,
    })
  );
  story.addFrame(
    createFrame({
      voice: "custom/900101/drama_39",
      bg: "custom-004",
    }).setFrameText({
      speaker: "一同",
      text: "スターズ!",
    })
  );
  story.output("F:\\Projects\\shiny-proxy\\assets\\json\\custom\\story.json");
}

main();
