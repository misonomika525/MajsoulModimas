requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 3) {
        const changeMap = {
          "获得语音": {
            "words": 'ふーん、アンタが私のプロデューサー？まぁ、悪くないかな…。私は渋谷凛。アイドルなんて全然興味なかったけど、何かをみつけられるんだったら…やってみるよ。だから、よろしく',
          },
          "登录语音普通": {
            "words": 'おはよう。もっとシャキっとした顔したら。ふふっ'
          },
          "登录语音满羁绊": {
            "words": 'なに、ぼーっとしてるの？ま、プロデューサーらしいけど'
          },
          "大厅交互语音1": {
            "words": 'この通り、いつも混んでるよね。みんな、急いでどこ行くんだろう…'
          },
          "大厅交互语音2": {
            "words": '待った？…なんて、待ち合わせなんて、したことないけどね'
          },
          "大厅交互语音3": {
            "words": '手なんてつながないって…！子供じゃないんだから…つながないよ'
          },
          "大厅交互语音4": {
            "words": 'おまわりさーん、この人…！なんて、冗談だよ。また捕まってみる？'
          },
          "大厅交互语音5": {
            "words": 'ん？あぁ、あの花は…ガーベラかな。キレイだよね。気に入った？'
          },
          "大厅交互语音6": {
            "words": '私は、走り抜けたい。妥協なんかしなかったって、自分で胸を張れる…… 私の全てを懸けた先、足が動かなくなる、その場所まで。'
          },
          "大厅交互语音7": {
            "words": '制作人……是改变了我的，非常重要的人哦。'
          },
          "大厅交互语音8": {
            "words": 'いい機会だから言わせて…プロデューサー、いつも…ありがと'
          },
          "送礼物语音普通": {
            "words": 'たまにはプロデューサーが受け取る側ね'
          },
          "送礼物语音喜好": {
            "words": 'ふふ、プロデューサー、きっと喜ぶよね'
          },
          "好感度升级语音1": {
            "words": '私、なんで、プロデューサーと出会ったんだろうね'
          },
          "好感度升级语音2": {
            "words": '私はリハも本番も本気でやってるって知ってるでしょ？だから、いまのも本気だよ。本気の、私の気持ち。……その笑顔、ちゃんと届いたんだなって気がするよ。ありがと。'
          },
          "好感度升级语音3": {
            "words": 'プロデューサーに連れてきてもらった、賑やかなパーティー。華やかで、楽しくて、とってもいいところだけど…そろそろお開きの時間かな。次は自分の足で、あの星空へ、駆けていくよ'
          },
          "好感度升级语音4": {
            "words": '私たちの背中には、翼なんかないけど……走り方は教わったよ。行こう、プロデューサー。新しい場所に続く道は、いつだって、私たちの目の前にある！'
          },
          "好感度升级语音5": {
            "words": '変わっていくこと、変わらないこと、いろいろあるけど。全部の私を、ちゃんと見守っててよ。だから改めて……この先もずっとよろしく、プロデューサー。'
          },
          "契约语音": {
            "words": 'お色直しをするなら、こんなブルーのドレスがいいと思ってたんだ。悪くないチョイスだね。…似合う？って聞くのはずるいかな。だって、プロデューサーが着せてくれたんだもんね'
          },
          "终局一位语音": {
            "words": 'ありがとう、任せてくれて、信じてくれて。'
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
        case 200003:
          chr.name = '渋谷凛';
          chr.name_chs = '渋谷凛';
          chr.name_en = 'Rin Shibuya';
          chr.name_jp = '渋谷凛';
          helper('desc_cv', '福原凛香');
          helper('desc', '15岁的高中一年生，拥有一头秀丽的长发和一双修长的腿。有着「しぶりん」的爱称。\n如其名一般凛然的外表以及不使用敬语的谈吐，都不自觉地给人一种傲慢的距离感。但是一旦敞开心扉的话其实是一个好孩子，偶尔会向周围人展示可爱的一面。\n为人冷静，对待工作很认真，一本正经的样子。认为既然做了就要做到最好，凡事都要全力以赴，被称为「完美主义」。');
          helper('desc_age', '15');
          helper('desc_birth', '8月10日');
          helper('desc_bloodtype', 'B');
          helper('desc_hobby', '携犬散步');
          helper('desc_stature', '165厘米');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
