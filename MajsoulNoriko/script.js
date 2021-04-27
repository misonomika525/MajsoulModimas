requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 2) {
        const changeMap = {
          "获得语音": {
            "words": 'もぐもぐ…♪あ、あたし、椎名法子。ドーナツ好きなだけの女の子だけど、こんなあたしでもアイドルになれたりするかな？あ、でもあんまり食べ過ぎると…やっぱりダメなのかな？',
          },
          "登录语音普通": {
            "words": 'おはようございまーす。朝はまるーいシリアルに、ミルクたっぷり♪'
          },
          "登录语音满羁绊": {
            "words": '遅くまでがんばってるプロデューサーに、夜食山盛りで持ってきたよっ'
          },
          "大厅交互语音1": {
            "words": 'プロデューサーとわけて食べるドーナツは、いつもより美味しいの！'
          },
          "大厅交互语音2": {
            "words": 'ドーナツ以外のデート？んー、ショッピングかなー。手をつなぐのっ'
          },
          "大厅交互语音3": {
            "words": 'わーい、プロデューサーに天使の輪っか、のせてもらっちゃった♪'
          },
          "大厅交互语音4": {
            "words": 'まわしてまわしてっ、プロデューサー。くるくる～'
          },
          "大厅交互语音5": {
            "words": 'コーヒーに紅茶、ミルク…ドーナツを美味しく食べる方法も、研究中～'
          },
          "大厅交互语音6": {
            "words": 'えへへへ、やっぱり大切な人と食べてると、いつもより美味しく感じるみたい♪この前、ゆかゆかとお出かけしたときも、すーーーーーーっごく美味しかったんだ～♪'
          },
          "大厅交互语音7": {
            "words": 'ここで、ちょっと休憩？じゃあドーナツ ！は、おいといてー。練習するから、聞いてて、プロデューサー。おやつは、全部終わってから、一緒にねっ♪'
          },
          "大厅交互语音8": {
            "words": '見た目や味も大事だけど、一番はやっぱり愛情かなっ♪気持ちがいっぱいこもったおかしを食べるとね、その人の心が伝わってきてぽかぽかするの。'
          },
          "送礼物语音普通": {
            "words": 'つ、つまみ食いしてないよ～。ホントだよ？'
          },
          "送礼物语音喜好": {
            "words": 'わぁ……！最近頑張ってるご褒美？ドーナツ、たくさん食べていいの？ありがとね、プロデューサー！'
          },
          "好感度升级语音1": {
            "words": 'ちゅ♪って、どうだった？あたし、うまくできてた？……どうしたの、プロデューサー？ほっぺた、ちょっと赤い……？'
          },
          "好感度升级语音2": {
            "words": 'あー楽しかったー♪美味しいものを食べる時間だけじゃなくて、みんなと一緒に作る時間も、とっても美味しかったよ♪'
          },
          "好感度升级语音3": {
            "words": 'せめて5種類、ううん、10種類くらいできるようになりたいなっ。プロデューサー、手伝って～♪'
          },
          "好感度升级语音4": {
            "words": 'その気持ち、あたしもわかるなー。誰かの幸せそうな顔って、見てて嬉しくなるよねっ。だから……はい、あーん♪'
          },
          "好感度升级语音5": {
            "words": 'プロデューサーも、おそろいポーズ♪ぴったり合わせよっ ！一緒にっ、せーのっ……みゃんっ♪'
          },
          "契约语音": {
            "words": 'ふたりなら半分こできるから、たくさん食べられるねっ♪えへへ、あのね、あなたに食べてほしいドーナツがいーっぱいあるの！ふわふわで甘くて幸せになれるから、はい、あーん♪'
          },
          "终局一位语音": {
            "words": 'ドナドナドーナードーナーッツ♪'
          },
          "特殊语音 - 连续打出多张相同牌": {
            "words": '（待补）'
          },
          "特殊语音 - 打出宝牌": {
            "words": '（待补）'
          },
          "特殊语音 - 余牌少于10": {
            "words": '（待补）'
          },
          "特殊语音 - 役满听牌": {
            "words": '（待补）'
          },
          "特殊语音 - 倍满/三倍满听牌": {
            "words": '（待补）'
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
        case 200002:
          chr.name = '椎名法子';
          chr.name_chs = '椎名法子';
          chr.name_en = 'Shiina Noriko';
          chr.name_jp = '椎名法子';
          helper('desc_cv', '都丸千代');
          helper('desc', '非常喜欢甜甜圈的吃货少女，已经到了成瘾的地步。据说其爱好诞生于幼儿园时代。\经常会去了解新品甜甜圈；如果有人未经同意拿了她的甜甜圈，她还会很伤心。\n出生于甜点家族，可能就是因为这样所以才这么喜欢甜甜圈。而除去甜甜圈外，其实也是个正统派元气少女。');
          helper('desc_age', '13');
          helper('desc_birth', '10月10日');
          helper('desc_bloodtype', 'O');
          helper('desc_hobby', '新口味甜甜圈試吃');
          helper('desc_stature', '147厘米');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
