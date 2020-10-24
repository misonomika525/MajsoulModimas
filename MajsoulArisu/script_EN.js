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
          "登录语音普通": {
            "words": 'Good morning. It is important to give your best effort starting in the morning.'
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
            "words": '泣いてません。まだ泣いてないってことに してくれませんか、プロデューサーさん。最後まで、やりきらないといけないから。'
          },
          "好感度升级语音3": {
            "words": 'でも、私……今は…一番、信頼しています。うまく子供扱いしたり、大人扱いしたりして、 ここまで連れてきてくれたから。'
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
          "终局一位语音": {
            "words": 'たくさん笑って、怒って、泣いて…アイドルは、とっても楽しいです！'
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
          chr.name = '橘爱丽丝';
          chr.name_chs = '橘爱丽丝';
          chr.name_en = 'Arisu Tachibana';
          chr.name_jp = '橘ありす';
          helper('desc_cv', 'Amina Satou');
          helper('desc', 'Arisu is a studious, responsible young girl. She loves to play games and frequently becomes engrossed in reading mystery novels. Arisu hates her name and prefers to be referred to by her surname because she deems it childish. She says that it sounds like a name out of a fairy-tale, which could be in reference to "Alice in Wonderland", a story that her parents often read aloud to her. ');
          helper('desc_age', '12');
          helper('desc_birth', 'July 31st');
          helper('desc_bloodtype', 'A');
          helper('desc_hobby', 'Games, reading (mystery)');
          helper('desc_stature', '141cm');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
