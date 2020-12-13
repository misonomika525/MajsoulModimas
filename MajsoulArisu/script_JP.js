// 修改一姬语音台词以及人物简介
requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 1) {
        const changeMap = {
          "获得语音": {
            "words": '今日からお世話になります。橘ありすです。橘と呼んでください。アイドルになったら、プロとしてのお仕事はちゃんとするつもりですので。これからよろしくお願いします。',
          },
          "终局一位语音": {
            "words": 'たくさん笑って、怒って、泣いて…アイドルは、とっても楽しいです！'
          },
          "登录语音普通": {
            "words": 'おはようございます。朝から頑張るのは、大事だと思います'
          },
          "登录语音满羁绊": {
            "words": 'あの、ずっと黙っていられると、ちょっと…。どうしたんですか？'
          },
          "大厅交互语音1": {
            "words": '…あ、すみません。本を読んでいて気が付きませんでした'
          },
          "大厅交互语音2": {
            "words": 'か、過去は振り返りませんよ。恥ずかしい言動のひとつやふたつ！'
          },
          "大厅交互语音3": {
            "words": 'いえ、あの…橘って呼ばれても、どの橘かわからないし、その…'
          },
          "大厅交互语音4": {
            "words": 'プロデューサーさんは、どうして私をスカウトしたんだろう…'
          },
          "大厅交互语音5": {
            "words": '…5年後を見ていてくださいね。気絶させるほどの美人になる予定です'
          },
          "大厅交互语音6": {
            "words": '私も、なれるでしょうか。みんなを照らして、心を動かすような光に…'
          },
          "大厅交互语音7": {
            "words": 'はい。タブレットは、電子書籍とか…ゲームとかに使っています'
          },
          "大厅交互语音8": {
            "words": '新しいことが始まる予感がする…。ううん、きっと予感だけじゃないです'
          },
          "送礼物语音普通": {
            "words": 'プロデューサーさんは信用できそうって思います'
          },
          "送礼物语音喜好": {
            "words": 'プロデューサーさんのお仕事、私全部受けるつもりです'
          },
          "好感度升级语音1": {
            "words": 'はい論破って…そういう仲、卒業しませんか、プロデューサーさん'
          },
          "好感度升级语音2": {
            "words": '泣いてません。まだ泣いてないってことにしてくれませんか、プロデューサーさん。最後まで、やりきらないといけないから。'
          },
          "好感度升级语音3": {
            "words": 'でも、私……今は…一番、信頼しています。うまく子供扱いしたり、大人扱いしたりして、ここまで連れてきてくれたから。'
          },
          "好感度升级语音4": {
            "words": 'それから最後に。私…本音なんて言う気ありませんでした。でも胸がいっぱいで隠せなくて。ホントの感動って、こわいですね。以上です。'
          },
          "好感度升级语音5": {
            "words": '……泣き虫じゃありません。もう、立派なアイドルなんですから。ただ……。ただきっと……あなたが、特別なだけです。'
          },
          "契约语音": {
            "words": '見えますか、不思議の国の童話を着こなす、私の姿が。聞こえますか、私を呼んでくれる、たくさんの声が。他の誰でもありません、このお伽噺はもう私…橘ありすのものです'
          },
          "特殊语音 - 连续打出多张相同牌": {
            "words": 'Why...? I am sorry...'
          },
          "特殊语音 - 打出宝牌": {
            "words": 'Letting up, I... I am sorry.'
          },
          "特殊语音 - 余牌少于10": {
            "words": '私、間違ってますか？論破するくらいなら、簡単です'
          },
          "特殊语音 - 役满听牌": {
            "words": 'That was perfect, was not it? Please leave it to me!'
          },
          "特殊语音 - 倍满/三倍满听牌": {
            "words": 'How was that? I did it right, right?'
          }
        };
        soundGroup.forEach(soundObject => {
          soundObject.level_limit = 0;
          if (changeMap.hasOwnProperty(soundObject.name_chs)) {
            for (let [key, val] of Object.entries(changeMap[soundObject.name_chs])) {
              ['_chs', '_en', '_jp'].forEach(suffix => soundObject[key + suffix] = val)
            }
          }
        });
      }
    });
    console.log('Hacked简介文本');
    cfg.item_definition.character.rows_.forEach(chr => {
      const helper = (key, val) => {
        ['', '_chs', '_en', '_jp'].forEach(suffix => chr[key + suffix] = val)
      };
      switch (chr.id) {
        case 200001:
          chr.name = '橘ありす';
          chr.name_chs = '橘爱丽丝';
          chr.name_en = 'Arisu Tachibana';
          chr.name_jp = '橘ありす';
          helper('desc_cv', '佐藤亜美菜');
          helper('desc', '凛々しい瞳に長い睫毛、腰まで届きそうな長い髪、そしてそれを結う青いリボンがそのまま仕掛けられたかのように童話の世界に住む少女を連想させてしまう。\nゲームや読書を嗜み、自負する程度に勉強が得意なところから、同年代と比較しても論理的現実的な思考を持っていると考えられる。いわく、「論破なら簡単なんですけど」。\n…こうした冷めた発言をする反面、音楽には力があると信じており、音楽関係の仕事に就けるなら言われた仕事も厭わないと言い切ってしまうほど情熱的な一面が内在している。\nありすという個性的な名前から生まれる複雑な気持ちは自分だけに留まらず、それを傍観する大人たちの的にでもなってしまったのか、辛い現実を知ったその影響として、知識で壁を作りながら自分らしさを見失っている。\nしかし、プロデューサーから「自分らしさ」について教わることでこうした悩みから少しずつ解放され、やがて本来あるべき彼女の姿を取り戻していく。');
          helper('desc_age', '12');
          helper('desc_birth', '7月31日');
          helper('desc_bloodtype', 'A');
          helper('desc_hobby', 'ゲーム・読書(ミステリー)');
          helper('desc_stature', '141cm');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
