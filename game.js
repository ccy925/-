/**
 * 《小食神大富翁：六大類食物大作戰》 - 遊戲核心邏輯 (game.js)
 * 中華小廚神故事背景、五大試煉關卡、30道營養題目、多頁情境對話框、見聞奇遇事件
 */

// === 1. 純網頁合成音效引擎 (Web Audio API) ===
class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch (e) {
      console.warn('Audio init error', e);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  playPop() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.1);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.05;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.18);
      });
    } catch (e) {}
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {}
  }

  playCardFlip() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  playDiceRoll() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      for (let i = 0; i < 5; i++) {
        const startTime = this.ctx.currentTime + i * 0.06;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450 + Math.random() * 200, startTime);
        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.04);
      }
    } catch (e) {}
  }

  playSizzle() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.3;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1600;
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + 0.3);
    } catch (e) {}
  }

  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [
        { f: 523.25, t: 0, d: 0.12 },
        { f: 659.25, t: 0.12, d: 0.12 },
        { f: 783.99, t: 0.24, d: 0.12 },
        { f: 1046.5, t: 0.36, d: 0.35 }
      ];
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + n.t;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.f, startTime);
        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + n.d);
      });
    } catch (e) {}
  }

  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [
        { f: 523.25, t: 0, d: 0.1 },
        { f: 659.25, t: 0.1, d: 0.1 },
        { f: 783.99, t: 0.2, d: 0.1 },
        { f: 1046.5, t: 0.3, d: 0.15 },
        { f: 880.0, t: 0.45, d: 0.12 },
        { f: 1046.5, t: 0.58, d: 0.4 }
      ];
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + n.t;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, startTime);
        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + n.d);
      });
    } catch (e) {}
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  playChomp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [0, 0.08, 0.16].forEach((t, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320 - i * 35, now + t);
        osc.frequency.exponentialRampToValueAtTime(110, now + t + 0.07);
        gain.gain.setValueAtTime(0.28, now + t);
        gain.gain.exponentialRampToValueAtTime(0.01, now + t + 0.07);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + t);
        osc.stop(now + t + 0.07);
      });
    } catch (e) {}
  }
}

const sounds = new SoundManager();

// === 2. 中華小廚神 30 大完整題庫 (包含原 20 題 + 補齊各關食譜所需食材之題目) ===
const NutritionQuestions = [
  // ---------------- Stage 1: 小暖身 全穀是非題 (精選 3 大核心是非題：玉米、糙米、蔬菜) ----------------
  {
    id: 1,
    stage: 1,
    stageName: '小暖身 全穀是非題',
    type: 'tf',
    q: '玉米長在田裡，所以玉米是蔬菜類。',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 對', isCorrect: false },
      { key: 'B', text: 'B. 錯', isCorrect: true }
    ],
    shortExplanation: '答案是「錯」！玉米屬於全穀雜糧類，不是蔬菜類。',
    detailedReason: '玉米的澱粉很多，和白飯一樣能提供能量，所以屬於全穀雜糧類，不是蔬菜類。',
    foodId: 'sweet_corn',
    categoryTag: '全穀雜糧類'
  },
  {
    id: 4,
    stage: 1,
    stageName: '小暖身 全穀是非題',
    type: 'tf',
    q: '糙米飯比白米飯保留更多營養。',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 對', isCorrect: true },
      { key: 'B', text: 'B. 錯', isCorrect: false }
    ],
    shortExplanation: '答案是「對」！糙米保留了外層，營養比較多。',
    detailedReason: '選擇全穀雜糧時，盡量選擇糙米、燕麥這類保持原本樣子的食物，營養比較完整。',
    foodId: 'brown_rice',
    categoryTag: '全穀雜糧類'
  },
  {
    id: 5,
    stage: 1,
    stageName: '小暖身 全穀是非題',
    type: 'tf',
    q: '飯吃越多越好，吃很多飯就可以不用吃青菜。',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 對', isCorrect: false },
      { key: 'B', text: 'B. 錯', isCorrect: true }
    ],
    shortExplanation: '答案是「錯」！飯和蔬菜要吃得一樣多。',
    detailedReason: '口訣「飯跟蔬菜一樣多」，全穀雜糧類不能取代蔬菜類，兩種都要吃。',
    foodId: 'broccoli',
    categoryTag: '全穀與蔬菜平衡'
  },

  // ---------------- Stage 2: Level 1 早餐店 (Q7 ~ Q10, Q23, Q24) ----------------
  {
    id: 7,
    stage: 2,
    stageName: 'Level 1 早餐店',
    type: 'choice',
    q: '早上7點，小杰在早餐店點了一份蛋餅。他想再點一杯「可以算一杯奶」的飲料，要選哪一杯？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 奶茶', isCorrect: false },
      { key: 'B', text: 'B. 鮮奶', isCorrect: true },
      { key: 'C', text: 'C. 紅茶', isCorrect: false },
      { key: 'D', text: 'D. 豆漿', isCorrect: false }
    ],
    shortExplanation: '鮮奶屬於乳品類，可以完成「早上一杯奶」。',
    detailedReason: 'A奶茶加了很多糖，奶的量也不多，不算一杯奶；C紅茶沒有奶；D豆漿屬於豆魚蛋肉類，不是乳品類。',
    foodId: 'milk',
    categoryTag: '乳品類'
  },
  {
    id: 8,
    stage: 2,
    stageName: 'Level 1 早餐店',
    type: 'choice',
    q: '小杰的蛋餅是用餅皮包雞蛋做成的。這份蛋餅吃到了哪兩類食物？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 全穀雜糧類、豆魚蛋肉類', isCorrect: true },
      { key: 'B', text: 'B. 蔬菜類、乳品類', isCorrect: false },
      { key: 'C', text: 'C. 水果類、豆魚蛋肉類', isCorrect: false },
      { key: 'D', text: 'D. 全穀雜糧類、油脂與堅果種子類', isCorrect: false }
    ],
    shortExplanation: '餅皮是麵粉做的，屬於全穀雜糧類；雞蛋屬於豆魚蛋肉類。',
    detailedReason: '一道料理裡面可能有好幾類食物，要把材料拆開來看。',
    foodId: 'egg_pancake',
    categoryTag: '全穀與蛋白質'
  },
  {
    id: 9,
    stage: 2,
    stageName: 'Level 1 早餐店',
    type: 'choice',
    q: '早餐還少了水果。口訣說「每餐水果拳頭大」，下列哪一個最適合？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 一個拳頭大的芭樂', isCorrect: true },
      { key: 'B', text: 'B. 一整顆大西瓜', isCorrect: false },
      { key: 'C', text: 'C. 一杯果汁', isCorrect: false },
      { key: 'D', text: 'D. 一包水果軟糖', isCorrect: false }
    ],
    shortExplanation: '一份水果大約是自己一個拳頭大。',
    detailedReason: 'B一整顆西瓜太多了；C果汁少了水果的纖維，容易喝進太多糖；D水果軟糖是零食，不是水果。',
    foodId: 'guava',
    categoryTag: '水果類'
  },
  {
    id: 10,
    stage: 2,
    stageName: 'Level 1 早餐店',
    type: 'choice',
    q: '小杰早上已經喝了一杯鮮奶。口訣說「每天早晚一杯奶」，他今天還需要怎麼做？',
    ans: 'C',
    options: [
      { key: 'A', text: 'A. 不用再喝了', isCorrect: false },
      { key: 'B', text: 'B. 中午再喝兩杯奶茶', isCorrect: false },
      { key: 'C', text: 'C. 晚上再喝一杯牛奶', isCorrect: true },
      { key: 'D', text: 'D. 早上再多喝三杯', isCorrect: false }
    ],
    shortExplanation: '早上一杯、晚上一杯，一天兩杯奶，才能補充足夠的鈣質。',
    detailedReason: 'A只喝一杯還不夠；B奶茶不算一杯奶；D一次喝太多，不如早晚分開喝。',
    foodId: 'milk',
    categoryTag: '每天早晚一杯奶'
  },
  {
    id: 23,
    stage: 2,
    stageName: 'Level 1 早餐店',
    type: 'choice',
    q: '小杰在早餐店看到起司蛋吐司。香濃的「起司」在六大類食物中屬於哪一類？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 全穀雜糧類', isCorrect: false },
      { key: 'B', text: 'B. 乳品類', isCorrect: true },
      { key: 'C', text: 'C. 豆魚蛋肉類', isCorrect: false },
      { key: 'D', text: 'D. 油脂與堅果種子類', isCorrect: false }
    ],
    shortExplanation: '起司是由鮮乳濃縮發酵製成的，屬於乳品類！',
    detailedReason: '起司濃縮了牛奶的鈣質與蛋白質，乳糖含量低，乳糖不耐的人也能透過起司補鈣。',
    foodId: 'cheese',
    categoryTag: '早餐店乳品補充'
  },
  {
    id: 24,
    stage: 2,
    stageName: 'Level 1 早餐店',
    type: 'choice',
    q: '早餐店有切邊白吐司和全麥吐司，小杰選擇哪一種能吃到更多未精製全穀的維生素B群與膳食纖維？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 全麥吐司', isCorrect: true },
      { key: 'B', text: 'B. 切邊白吐司', isCorrect: false },
      { key: 'C', text: 'C. 兩者營養完全相同', isCorrect: false },
      { key: 'D', text: 'D. 抹了厚厚草莓果醬的白吐司', isCorrect: false }
    ],
    shortExplanation: '全麥吐司保留麥粒完整營養，是優質的未精製全穀雜糧！',
    detailedReason: '選擇全穀雜糧時優先挑選糙米、全麥製品，比精製白吐司擁有更多膳食纖維，飽足感更持久。',
    foodId: 'brown_rice',
    categoryTag: '全穀主食選擇'
  },

  // ---------------- Stage 3: Level 2 營養午餐 (Q11 ~ Q14, Q25, Q26) ----------------
  {
    id: 11,
    stage: 3,
    stageName: 'Level 2 營養午餐',
    type: 'choice',
    q: '中午12點，營養午餐有糙米飯和炒青菜。口訣說「飯跟蔬菜一樣多」，哪一個餐盤裝得最好？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 飯裝滿滿，青菜只有一小口', isCorrect: false },
      { key: 'B', text: 'B. 飯和青菜差不多一樣多', isCorrect: true },
      { key: 'C', text: 'C. 只裝青菜，不裝飯', isCorrect: false },
      { key: 'D', text: 'D. 只裝飯和雞腿', isCorrect: false }
    ],
    shortExplanation: '飯和青菜的量差不多，就符合「飯跟蔬菜一樣多」。',
    detailedReason: 'A青菜太少；C沒有全穀雜糧類，會容易餓；D沒有蔬菜類。',
    foodId: 'brown_rice',
    categoryTag: '飯跟蔬菜一樣多'
  },
  {
    id: 12,
    stage: 3,
    stageName: 'Level 2 營養午餐',
    type: 'choice',
    q: '午餐的主菜是滷雞腿。口訣說「豆魚蛋肉一掌心」，吃多少比較剛好？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 差不多自己一個手掌心大', isCorrect: true },
      { key: 'B', text: 'B. 三隻雞腿', isCorrect: false },
      { key: 'C', text: 'C. 只吃雞皮', isCorrect: false },
      { key: 'D', text: 'D. 一口都不吃', isCorrect: false }
    ],
    shortExplanation: '每餐的豆魚蛋肉類，大約是自己一個手掌心的大小和厚度。',
    detailedReason: 'B吃太多了；C雞皮大多是油脂，不是好的蛋白質來源；D完全不吃會少了一類食物。',
    foodId: 'chicken_leg',
    categoryTag: '豆魚蛋肉一掌心'
  },
  {
    id: 13,
    stage: 3,
    stageName: 'Level 2 營養午餐',
    type: 'choice',
    q: '小杰不喜歡吃青菜，想跟同學換成第二碗飯。你會給他什麼建議？',
    ans: 'C',
    options: [
      { key: 'A', text: 'A. 好啊，飯比較好吃', isCorrect: false },
      { key: 'B', text: 'B. 不吃青菜，多吃水果就好', isCorrect: false },
      { key: 'C', text: 'C. 試試看別的青菜或不同煮法，還是要吃蔬菜', isCorrect: true },
      { key: 'D', text: 'D. 青菜和飯都不要吃', isCorrect: false }
    ],
    shortExplanation: '不喜歡某一種青菜，可以換一種試試看，但蔬菜類不能不吃。',
    detailedReason: 'A飯不能取代蔬菜；B口訣說「菜比水果多一點」，水果不能取代蔬菜；D兩類都少了，更不均衡。',
    foodId: 'spinach',
    categoryTag: '均衡蔬菜攝取'
  },
  {
    id: 14,
    stage: 3,
    stageName: 'Level 2 營養午餐',
    type: 'choice',
    q: '今天的營養午餐有糙米飯、炒青菜、滷雞腿、香蕉和保久乳。這一餐吃到幾大類食物？（炒菜用的油不算）',
    ans: 'C',
    options: [
      { key: 'A', text: 'A. 3類', isCorrect: false },
      { key: 'B', text: 'B. 4類', isCorrect: false },
      { key: 'C', text: 'C. 5類', isCorrect: true },
      { key: 'D', text: 'D. 6類', isCorrect: false }
    ],
    shortExplanation: '糙米飯、青菜、雞腿、香蕉、保久乳，剛好是5類。',
    detailedReason: '糙米飯是全穀雜糧類；青菜是蔬菜類；雞腿是豆魚蛋肉類；香蕉是水果類；保久乳是乳品類。',
    foodId: 'banana',
    categoryTag: '六大類食物統整'
  },
  {
    id: 25,
    stage: 3,
    stageName: 'Level 2 營養午餐',
    type: 'choice',
    q: '今天的營養午餐除了滷雞腿，還有一道熱騰騰的「燒豆腐」。豆腐在六大類食物中屬於哪一類？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 蔬菜類', isCorrect: false },
      { key: 'B', text: 'B. 豆魚蛋肉類', isCorrect: true },
      { key: 'C', text: 'C. 全穀雜糧類', isCorrect: false },
      { key: 'D', text: 'D. 乳品類', isCorrect: false }
    ],
    shortExplanation: '豆腐是由黃豆製成的優良植物性蛋白質，屬於豆魚蛋肉類！',
    detailedReason: '豆魚蛋肉類的健康推薦順序是「豆>魚>蛋>肉」，大豆製品零膽固醇、好消化，是非常棒的蛋白質。',
    foodId: 'tofu',
    categoryTag: '豆魚蛋肉優先序'
  },
  {
    id: 26,
    stage: 3,
    stageName: 'Level 2 營養午餐',
    type: 'choice',
    q: '午餐餐盤裡的炒花椰菜是深綠色蔬菜。為什麼深綠色蔬菜在蔬菜中特別重要？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 深綠色蔬菜富含鈣質、鐵質與葉黃素，應占蔬菜三分之一以上', isCorrect: true },
      { key: 'B', text: 'B. 顏色好看而已，營養沒有比較多', isCorrect: false },
      { key: 'C', text: 'C. 可以完全代替白飯', isCorrect: false },
      { key: 'D', text: 'D. 可以完全代替牛奶', isCorrect: false }
    ],
    shortExplanation: '深綠色蔬菜營養豐富，應占每日蔬菜量的三分之一以上！',
    detailedReason: '深綠色蔬菜（如菠菜、綠花椰菜、芥藍菜）含有更多胡蘿蔔素、葉黃素與礦物質，護眼又強身。',
    foodId: 'broccoli',
    categoryTag: '深色蔬菜重要性'
  },

  // ---------------- Stage 4: Level 3 放學點心 (Q15 ~ Q17, Q27, Q28) ----------------
  {
    id: 15,
    stage: 4,
    stageName: 'Level 3 放學點心',
    type: 'choice',
    q: '下午4點放學，小杰肚子有點餓，到便利商店買點心。哪一個選擇比較健康？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 一小包無調味堅果', isCorrect: true },
      { key: 'B', text: 'B. 一大包洋芋片', isCorrect: false },
      { key: 'C', text: 'C. 一杯珍珠奶茶', isCorrect: false },
      { key: 'D', text: 'D. 一條巧克力', isCorrect: false }
    ],
    shortExplanation: '無調味堅果屬於油脂與堅果種子類，可以補上今天還沒吃到的那一類。',
    detailedReason: 'B洋芋片油和鹽很多；C珍珠奶茶糖很多；D巧克力糖和油都多。',
    foodId: 'nuts',
    categoryTag: '健康點心選擇'
  },
  {
    id: 16,
    stage: 4,
    stageName: 'Level 3 放學點心',
    type: 'choice',
    q: '口訣說「堅果種子一茶匙」，小杰今天的堅果要吃多少？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 一整大包', isCorrect: false },
      { key: 'B', text: 'B. 一點點就好，每天一份', isCorrect: true },
      { key: 'C', text: 'C. 越多越好', isCorrect: false },
      { key: 'D', text: 'D. 一顆都不能吃', isCorrect: false }
    ],
    shortExplanation: '堅果很營養，但油脂也多，每天吃一份就夠了。',
    detailedReason: 'A和C吃太多；D堅果種子類也是均衡飲食的一部分，要適量吃。',
    foodId: 'nuts',
    categoryTag: '堅果種子一茶匙'
  },
  {
    id: 17,
    stage: 4,
    stageName: 'Level 3 放學點心',
    type: 'choice',
    q: '小杰在便利商店看到奶茶，說：「喝這杯奶茶，晚上就不用喝牛奶了！」他說的對嗎？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 對，奶茶也有奶', isCorrect: false },
      { key: 'B', text: 'B. 不對，奶茶糖太多，不能算一杯奶', isCorrect: true },
      { key: 'C', text: 'C. 對，喝越甜越好', isCorrect: false },
      { key: 'D', text: 'D. 不對，晚上不能喝任何飲料', isCorrect: false }
    ],
    shortExplanation: '奶茶是含糖飲料，不能代替牛奶。',
    detailedReason: 'A奶茶的奶量少、糖很多；C糖太多對身體不好；D晚上可以喝牛奶，也要記得喝水。',
    foodId: 'milk',
    categoryTag: '飲料與乳品辨識'
  },
  {
    id: 27,
    stage: 4,
    stageName: 'Level 3 放學點心',
    type: 'choice',
    q: '放學肚子餓想挑一份健康的乳品點心，下列哪一個最符合健康飲食原則？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 無糖鮮奶優格，搭配少量新鮮水果', isCorrect: true },
      { key: 'B', text: 'B. 甜甜的草莓風味調味乳，含很多精製糖', isCorrect: false },
      { key: 'C', text: 'C. 高熱量煉乳雪花冰', isCorrect: false },
      { key: 'D', text: 'D. 含有奶精的珍珠奶茶', isCorrect: false }
    ],
    shortExplanation: '無糖原味優格屬於乳品類，能補充好菌與優質鈣質！',
    detailedReason: '原味優格經過乳酸菌發酵，容易消化吸收，且不含過多精緻糖，是放學優質的好點心。',
    foodId: 'yogurt',
    categoryTag: '健康乳品點心'
  },
  {
    id: 28,
    stage: 4,
    stageName: 'Level 3 放學點心',
    type: 'choice',
    q: '口渴想補充水分又想吃點心，小杰挑選了一顆新鮮「陽光柳橙」。柳橙主要能為身體補充什麼？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 豐富的維生素C與天然膳食纖維', isCorrect: true },
      { key: 'B', text: 'B. 大量飽和脂肪酸', isCorrect: false },
      { key: 'C', text: 'C. 咖啡因與反式脂肪', isCorrect: false },
      { key: 'D', text: 'D. 大量精緻加工糖', isCorrect: false }
    ],
    shortExplanation: '新鮮柳橙酸甜多汁，是維生素C與纖維的優質水果來源！',
    detailedReason: '吃新鮮水果「拳頭大」比喝濾渣果汁更好，能完整保留果肉中的膳食纖維，幫助消化好排便。',
    foodId: 'orange',
    categoryTag: '水果類活力點心'
  },

  // ---------------- Stage 5: Boss關 自助餐晚餐 (Q18 ~ Q20, Q29, Q30) ----------------
  {
    id: 18,
    stage: 5,
    stageName: 'Boss關 自助餐晚餐',
    type: 'choice',
    q: '晚上6點半，小杰和家人去自助餐。他已經拿了糙米飯和一塊煎魚，接下來拿什麼最好？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 兩樣青菜，其中一樣是深綠色的菠菜', isCorrect: true },
      { key: 'B', text: 'B. 一塊炸排骨', isCorrect: false },
      { key: 'C', text: 'C. 一盤炒麵', isCorrect: false },
      { key: 'D', text: 'D. 再拿兩塊煎魚', isCorrect: false }
    ],
    shortExplanation: '晚餐還少了蔬菜，而且深色蔬菜要占蔬菜的三分之一以上。',
    detailedReason: 'B煎魚已經有豆魚蛋肉類了；C已經有糙米飯了；D魚太多，超過一掌心。',
    foodId: 'spinach',
    categoryTag: '深色蔬菜搭配'
  },
  {
    id: 19,
    stage: 5,
    stageName: 'Boss關 自助餐晚餐',
    type: 'choice',
    q: '媽媽問：「今天小杰吃了兩份水果，那蔬菜要吃多少才對？」哪一個說法最正確？',
    ans: 'C',
    options: [
      { key: 'A', text: 'A. 不用吃蔬菜，水果夠了', isCorrect: false },
      { key: 'B', text: 'B. 蔬菜吃一點點就好', isCorrect: false },
      { key: 'C', text: 'C. 蔬菜要比水果多一點', isCorrect: true },
      { key: 'D', text: 'D. 蔬菜和水果都不用吃', isCorrect: false }
    ],
    shortExplanation: '口訣說「菜比水果多一點」，蔬菜的量要比水果多。',
    detailedReason: 'A和D都少了蔬菜；B蔬菜太少，要比水果多才夠。',
    foodId: 'carrot',
    categoryTag: '菜比水果多一點'
  },
  {
    id: 20,
    stage: 5,
    stageName: 'Boss關 自助餐晚餐',
    type: 'choice',
    q: 'Boss 挑戰！小杰的一天：早餐蛋餅、鮮奶、芭樂；午餐糙米飯、青菜、雞腿、香蕉、保久乳；點心無調味堅果；晚餐糙米飯、煎魚、菠菜、高麗菜。六句口訣中，哪一句他「還沒完成」？',
    ans: 'D',
    options: [
      { key: 'A', text: 'A. 豆魚蛋肉一掌心', isCorrect: false },
      { key: 'B', text: 'B. 菜比水果多一點', isCorrect: false },
      { key: 'C', text: 'C. 堅果種子一茶匙', isCorrect: false },
      { key: 'D', text: 'D. 每天早晚一杯奶', isCorrect: true }
    ],
    shortExplanation: '小杰早上喝了鮮奶，但晚上還沒喝，睡前記得再喝一杯牛奶！',
    detailedReason: '午餐的保久乳也算一杯奶，但口訣是「早晚」各一杯，晚上還沒喝；A蛋、雞腿、魚都有吃到；B蔬菜吃了3樣，比2份水果多；C下午吃了堅果。',
    foodId: 'milk',
    categoryTag: '特級廚神總口訣'
  },
  {
    id: 29,
    stage: 5,
    stageName: 'Boss關 自助餐晚餐',
    type: 'choice',
    q: 'Boss考驗！小杰在自助餐主菜選了「香煎鮮鮭魚」，依照口訣「豆魚蛋肉一掌心」，海鮮魚類能提供大腦發育最重要的什麼營養？',
    ans: 'A',
    options: [
      { key: 'A', text: 'A. 優質蛋白質與Omega-3不飽和脂肪酸', isCorrect: true },
      { key: 'B', text: 'B. 大量反式脂肪酸', isCorrect: false },
      { key: 'C', text: 'C. 高量的精製白糖', isCorrect: false },
      { key: 'D', text: 'D. 只有熱量沒有蛋白質', isCorrect: false }
    ],
    shortExplanation: '鮮魚屬於豆魚蛋肉類，能提供維持腦力與專注力的Omega-3好油！',
    detailedReason: '魚類蛋白質好消化，所含的EPA與DHA等Omega-3多元不飽和脂肪酸，對學童大腦思考與視力健康非常有益。',
    foodId: 'salmon',
    categoryTag: '特級廚神魚肉試煉'
  },
  {
    id: 30,
    stage: 5,
    stageName: 'Boss關 自助餐晚餐',
    type: 'choice',
    q: 'Boss終極決戰！晚餐時，媽媽在涼拌菠菜上撒了一小把「綜合堅果碎」。這道料理完美補齊了六大口訣中的哪一句？',
    ans: 'B',
    options: [
      { key: 'A', text: 'A. 每天早晚一杯奶', isCorrect: false },
      { key: 'B', text: 'B. 堅果種子一茶匙', isCorrect: true },
      { key: 'C', text: 'C. 每餐水果拳頭大', isCorrect: false },
      { key: 'D', text: 'D. 飯跟蔬菜一樣多', isCorrect: false }
    ],
    shortExplanation: '在餐點中撒上一茶匙堅果，輕鬆完成「堅果種子一茶匙」！',
    detailedReason: '堅果種子類（腰果、核桃、芝麻、杏仁）含有維生素E與不飽和脂肪酸，天天吃一茶匙能維持心血管活力。',
    foodId: 'nuts',
    categoryTag: '特級廚神堅果試煉'
  }
];

// === 3. 中華小廚神故事對話系統 (多頁劇情、每關專屬行前對話) ===
const StoryDialogues = {
  intro: [
    {
      speaker: '【陽泉酒家】及第大廚',
      avatar: 'masterJidi',
      title: '📜 中華小廚神修煉・啟程試煉',
      text: '「小杰！歡迎來到中華小廚神大富翁修煉場！想要考取『特級廚神』，第一關就是【全穀是非題】！玉米、糙米、蔬菜...許多廚師都常常分不清它們到底算哪一類！」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '📜 第 1 關試煉：全穀雜糧小暖身',
      text: '「出發囉！牢記第一關口訣：『飯跟蔬菜一樣多 ‧ 未精製全穀營養多』！在棋盤上擲骰前進答題，收集滿玉米、糙米與蔬菜花椰菜吧！」'
    },
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '📜 第 1 關試煉：全穀雜糧小暖身',
      text: '「沒問題！只要集齊三樣食材，就能回起點大開火翻炒出【五彩元氣全穀炊飯】！大富翁修煉出發——！」'
    }
  ],

  stage1: [
    {
      speaker: '【陽泉酒家】及第大廚',
      avatar: 'masterJidi',
      title: '📜 中華小廚神修煉・啟程試煉',
      text: '「小杰！歡迎來到中華小廚神大富翁修煉場！想要考取『特級廚神』，第一關就是【全穀是非題】！玉米、糙米、蔬菜...許多廚師都常常分不清它們到底算哪一類！」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '📜 第 1 關試煉：全穀雜糧小暖身',
      text: '「出發囉！牢記第一關口訣：『飯跟蔬菜一樣多 ‧ 未精製全穀營養多』！在棋盤上擲骰前進答題，收集滿玉米、糙米與蔬菜花椰菜吧！」'
    },
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '📜 第 1 關試煉：全穀雜糧小暖身',
      text: '「沒問題！只要集齊三樣食材，就能回起點大開火翻炒出【五彩元氣全穀炊飯】！大富翁修煉出發——！」'
    }
  ],

  stage2: [
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '📜 第 2 關試煉：Level 1 早餐店',
      text: '「早晨 7 點了！晨光灑在巷口早餐店，煎台上滋滋作響的蛋餅香氣四溢，我的肚子也咕嚕嚕叫了！」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '📜 第 2 關試煉：Level 1 早餐店',
      text: '「進入【Level 1 早餐店試煉】！早晨是一天活力的源頭，牢記口訣：『每天早晚一杯奶、每餐水果拳頭大』！」'
    },
    {
      speaker: '【陽泉酒家】及第大廚',
      avatar: 'masterJidi',
      title: '📜 第 2 關試煉：Level 1 早餐店',
      text: '「奶茶可不算真正的乳品喔！看清蛋餅材料與起司、芭樂等搭配，收集鮮奶、蛋餅、芭樂與起司，做出【彩虹晨光活力便當】！」'
    }
  ],

  stage3: [
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '📜 第 3 關試煉：Level 2 營養午餐',
      text: '「噹噹噹——中午 12 點，學校下課鐘聲響起！食堂掀起巨大的蒸氣熱浪，今天的午餐主菜是香噴噴的滷雞腿與燒豆腐！」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '📜 第 3 關試煉：Level 2 營養午餐',
      text: '「進入【Level 2 營養午餐食堂】！好吃的雞腿雖然香，但份量到底該拿多少？不愛吃青菜該怎麼辦呢？」'
    },
    {
      speaker: '【陽泉酒家】及第大廚',
      avatar: 'masterJidi',
      title: '📜 第 3 關試煉：Level 2 營養午餐',
      text: '「料理心訣：『飯跟蔬菜一樣多 ‧ 豆魚蛋肉一掌心』！挑食換飯可是不合格的！小杰，在午餐試煉中拿下高分吧！」'
    }
  ],

  stage4: [
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '📜 第 4 關試煉：Level 3 放學點心',
      text: '「下午 4 點放學了！跑完大隊接力，走進便利商店，架上擺滿了洋芋片、巧克力和珍珠奶茶...」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '📜 第 4 關試煉：Level 3 放學點心',
      text: '「危險！這是高糖高油軍團的巨大誘惑！千萬別以為喝甜奶茶可以抵消晚上的牛奶喔！」'
    },
    {
      speaker: '【陽泉酒家】及第大廚',
      avatar: 'masterJidi',
      title: '📜 第 4 關試煉：Level 3 放學點心',
      text: '「真正的廚神懂得以好油強身！『堅果種子一茶匙』！選擇無調味堅果、無糖優格與新鮮柳橙，為最終Boss戰儲備強健能量！」'
    }
  ],

  stage5: [
    {
      speaker: '【特級料理長老】嚴肅評審',
      avatar: 'masterJudge',
      title: '🔥 終極試煉：Boss關 自助餐晚餐',
      text: '「小杰！歷經一整天的嚴格修行，你終於來到了最終殿堂——【Boss關 自助餐晚餐決賽】！」'
    },
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '🔥 終極試煉：Boss關 自助餐晚餐',
      text: '「晚上 6 點半，自助餐廳裡百味爭香！我已經拿了糙米飯和鮮鮭魚，接下來深色蔬菜與水果的配比我絕不會錯！」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '🔥 終極試煉：Boss關 自助餐晚餐',
      text: '「小杰！回顧今天一整天完成的所有口訣！找出唯一那句還沒完成的神聖任務，攻克Boss吧！」'
    },
    {
      speaker: '【特級料理長老】嚴肅評審',
      avatar: 'masterJudge',
      title: '🔥 終極試煉：Boss關 自助餐晚餐',
      text: '「只要你能完美答出最後的料理難題，特級小廚神的黃金臂章，就屬於你！」'
    }
  ],

  ending: [
    {
      speaker: '【特級料理長老】嚴肅評審',
      avatar: 'masterJudge',
      title: '✨ 榮耀時刻：特級廚神誕生！',
      text: '「太耀眼了！六大類營養奧義貫通全身，這道料理散發著七彩的金色光芒！」'
    },
    {
      speaker: '【陽泉酒家】及第大廚',
      avatar: 'masterJidi',
      title: '✨ 榮耀時刻：授予神聖臂章！',
      text: '「小杰！我以陽泉酒家之名，正式授予你『特級小廚神』金光榮譽臂章！你證明了均衡飲食才是最強大的料理力量！」'
    },
    {
      speaker: '【見習廚神】小杰',
      avatar: 'xiaojie',
      title: '✨ 榮耀時刻：六大口訣銘記於心！',
      text: '「耶！我做到了！每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點、飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙！」'
    },
    {
      speaker: '【元氣夥伴】嘟嘟',
      avatar: 'dudu',
      title: '✨ 榮耀時刻：大家一起健康成長！',
      text: '「大家也和小杰一起吃得聰明、吃得健康，成為守護自己健康的特級小食神吧！🎉」'
    }
  ]
};

// === 4. 輪次與五大關卡配置 (每關解鎖 1~2 個食譜，確保各關題目完整覆蓋與學習) ===
const RoundConfigs = {
  1: {
    round: 1,
    name: '小暖身 全穀是非題',
    title: '第 1 關：小暖身 全穀是非題',
    storyKey: 'stage1',
    slogan: '飯跟蔬菜一樣多 ‧ 未精製全穀營養多',
    recipes: [
      {
        id: 'grain_rice',
        name: '五彩元氣全穀炊飯',
        desc: '全穀糙米搭配金黃甜玉米與鮮脆花椰菜，飯跟蔬菜一樣多，未精製全穀營養高！',
        requiredFoods: ['brown_rice', 'sweet_corn', 'broccoli'],
        slogan: '飯跟蔬菜一樣多 ‧ 未精製全穀營養多'
      }
    ],
    rewardPool: ['brown_rice', 'sweet_corn', 'broccoli'],
    quizzes: NutritionQuestions.filter(q => q.stage === 1)
  },
  2: {
    round: 2,
    name: 'Level 1 早餐店',
    title: '第 2 關：Level 1 早餐店',
    storyKey: 'stage2',
    slogan: '每天早晚一杯奶 ‧ 每餐水果拳頭大',
    recipes: [
      {
        id: 'bento',
        name: '彩虹晨光活力便當',
        desc: '高鈣鮮奶配金黃蛋餅與拳頭大芭樂，晨光滿載活力出發！',
        requiredFoods: ['egg_pancake', 'milk', 'guava'],
        slogan: '每天早晚一杯奶 ‧ 每餐水果拳頭大'
      }
    ],
    rewardPool: ['egg_pancake', 'milk', 'guava', 'egg'],
    quizzes: NutritionQuestions.filter(q => q.stage === 2)
  },
  3: {
    round: 3,
    name: 'Level 2 營養午餐',
    title: '第 3 關：Level 2 營養午餐',
    storyKey: 'stage3',
    slogan: '飯跟蔬菜一樣多 ‧ 豆魚蛋肉一掌心',
    recipes: [
      {
        id: 'tofu_pot',
        name: '特級元氣午餐盛盤',
        desc: '招牌滷雞腿、深綠菠菜、營養糙米飯與香蕉，均衡五大類！',
        requiredFoods: ['chicken_leg', 'spinach', 'banana', 'brown_rice'],
        slogan: '飯跟蔬菜一樣多 ‧ 豆魚蛋肉一掌心'
      }
    ],
    rewardPool: ['chicken_leg', 'spinach', 'banana', 'brown_rice', 'tofu'],
    quizzes: NutritionQuestions.filter(q => q.stage === 3)
  },
  4: {
    round: 4,
    name: 'Level 3 放學點心',
    title: '第 4 關：Level 3 放學點心',
    storyKey: 'stage4',
    slogan: '堅果種子一茶匙 ‧ 遠離高糖高脂',
    recipes: [
      {
        id: 'yogurt_bowl',
        name: '繽紛果香堅果優格露',
        desc: '無調味堅果搭配高鈣鮮奶與原味優格，健康解饞不發胖！',
        requiredFoods: ['nuts', 'milk', 'yogurt'],
        slogan: '堅果種子一茶匙 ‧ 遠離高糖高脂'
      }
    ],
    rewardPool: ['nuts', 'milk', 'yogurt', 'orange'],
    quizzes: NutritionQuestions.filter(q => q.stage === 4)
  },
  5: {
    round: 5,
    name: 'Boss關 自助餐晚餐',
    title: '第 5 關：Boss關 自助餐晚餐',
    storyKey: 'stage5',
    slogan: '我的餐盤六口訣 ‧ 六大類均衡全達成',
    recipes: [
      {
        id: 'grand_feast',
        name: '特級全席・七彩元氣盛宴',
        desc: '香煎鮮鮭魚、深綠菠菜、元氣胡蘿蔔與晚安鮮奶，六大類大圓滿！',
        requiredFoods: ['salmon', 'spinach', 'carrot', 'milk'],
        slogan: '六大類食物餐餐均衡大圓滿'
      }
    ],
    rewardPool: ['salmon', 'spinach', 'carrot', 'milk', 'nuts'],
    quizzes: NutritionQuestions.filter(q => q.stage === 5)
  }
};

// === 5. 大富翁 16 格配置 (幸運機會 1 格，命運保留 2 格，其餘答題) ===
const MonopolyTiles = [
  { index: 0,  type: 'start',  name: '起點廚房', icon: '🚩', badge: '起點' },
  { index: 1,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 2,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 3,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 4,  type: 'fate',   name: '命運考驗', icon: '⚡', badge: '命運' }, // 命運格 1
  { index: 5,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 6,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 7,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 8,  type: 'chance', name: '幸運機會', icon: '❓', badge: '機會' }, // 幸運機會唯一 1 格
  { index: 9,  type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 10, type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 11, type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 12, type: 'fate',   name: '命運考驗', icon: '⚡', badge: '命運' }, // 命運格 2
  { index: 13, type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 14, type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' },
  { index: 15, type: 'quiz',   name: '答題試煉', icon: '🎯', badge: '答題' }
];

// === 5. 中華小廚神幸運奇遇與命運考驗（緊密連結各關修行劇情、天機預覽、庇護金牌與食材沒收） ===
const ChanceEventsByStage = {
  1: [
    {
      id: 'chance_1_1',
      icon: '🔮',
      title: '【食譜天機揭秘】',
      speaker: '【山林老隱士】',
      avatar: 'masterJudge',
      story: '老隱士推演天機，提前為小杰展示一道神秘特級食譜！',
      effect: 'sneak_peek',
      effectText: '🔮 搶先揭秘一道未解鎖食譜樣式與口訣！'
    },
    {
      id: 'chance_1_2',
      icon: '🛡️',
      title: '【及第庇護金牌】',
      speaker: '【陽泉酒家 及第大廚】',
      avatar: 'masterJidi',
      story: '師父嘉獎小杰勤練刀工，賞賜一枚陽泉庇護金牌！',
      effect: 'shield',
      effectText: '🛡️ 獲得【廚神庇護金牌】×1！可抵擋一次後退！'
    },
    {
      id: 'chance_1_3',
      icon: '🏃',
      title: '【全穀能量爆發】',
      speaker: '【見習廚神 小杰】',
      avatar: 'xiaojie',
      story: '吃對優質全穀，小杰健步如飛、神采飛揚！',
      effect: 'forward_step',
      effectText: '🚀 全穀能量滿格！額外前進 2 格！'
    }
  ],
  2: [
    {
      id: 'chance_2_1',
      icon: '🔮',
      title: '【酒家秘卷天機】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '嘟嘟在酒家藏書閣翻出菜譜，偷看了一道未來特級料理！',
      effect: 'sneak_peek',
      effectText: '🔮 搶先偷看一道未解鎖食譜！'
    },
    {
      id: 'chance_2_2',
      icon: '🛡️',
      title: '【酪農的庇護金牌】',
      speaker: '【廣州牧場 酪農】',
      avatar: 'masterJudge',
      story: '酪農伯伯讚賞小杰推廣每天早晚一杯奶，送上一枚護身金牌！',
      effect: 'shield',
      effectText: '🛡️ 獲得【廚神庇護金牌】×1！'
    },
    {
      id: 'chance_2_3',
      icon: '⭐',
      title: '【早晨水果頓悟】',
      speaker: '【見習廚神 小杰】',
      avatar: 'xiaojie',
      story: '落實每餐水果拳頭大，小杰廚藝靈光大發！',
      effect: 'bonus_stars',
      effectText: '⭐ 廚藝領悟力大增，星星 ⭐ +2！'
    }
  ],
  3: [
    {
      id: 'chance_3_1',
      icon: '🔮',
      title: '【午餐盛盤天機】',
      speaker: '【陽泉酒家 及第大廚】',
      avatar: 'masterJidi',
      story: '及第師父揮毫點撥，提前預覽特級午餐的終極盛盤！',
      effect: 'sneak_peek',
      effectText: '🔮 搶先窺見神秘特級料理！'
    },
    {
      id: 'chance_3_2',
      icon: '🛡️',
      title: '【掌心刀工賞牌】',
      speaker: '【廣州廚藝評審】',
      avatar: 'masterJudge',
      story: '肉類精準控制在一掌心，評審大人歡喜賞賜庇護金牌！',
      effect: 'shield',
      effectText: '🛡️ 獲得【廚神庇護金牌】×1！'
    },
    {
      id: 'chance_3_3',
      icon: '🎯',
      title: '【嘟嘟捷徑帶路】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '嘟嘟拉著小杰抄近路，直奔前方答題試煉格！',
      effect: 'teleport_quiz',
      effectText: '🎯 直飛前方答題格挑戰贏食材！'
    }
  ],
  4: [
    {
      id: 'chance_4_1',
      icon: '🔮',
      title: '【點心舖古卷】',
      speaker: '【點心舖 老闆娘】',
      avatar: 'masterJudge',
      story: '老闆娘翻開秘笈，展示一道色香味俱全的特級點心料理！',
      effect: 'sneak_peek',
      effectText: '🔮 搶先預覽神秘特級點心！'
    },
    {
      id: 'chance_4_2',
      icon: '🛡️',
      title: '【堅果好油賞牌】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '牢記堅果種子一茶匙，嘟嘟將珍藏的護身金牌送給小杰！',
      effect: 'shield',
      effectText: '🛡️ 獲得【廚神庇護金牌】×1！'
    },
    {
      id: 'chance_4_3',
      icon: '🏃',
      title: '【少糖少油疾行】',
      speaker: '【見習廚神 小杰】',
      avatar: 'xiaojie',
      story: '拒絕油炸洋芋片與甜飲料，小杰體態輕盈飛躍前進！',
      effect: 'forward_step',
      effectText: '🚀 身輕如燕！額外前進 2 格！'
    }
  ],
  5: [
    {
      id: 'chance_5_1',
      icon: '🔮',
      title: '【七彩全席天機】',
      speaker: '【特級長老 十全大師】',
      avatar: 'masterJudge',
      story: '長老大師拂塵輕揚，眼前浮現出七彩全席的傳說幻象！',
      effect: 'sneak_peek',
      effectText: '🔮 終極天機！揭秘七彩全席食譜！'
    },
    {
      id: 'chance_5_2',
      icon: '🛡️',
      title: '【師父終極金牌】',
      speaker: '【陽泉酒家 及第大廚】',
      avatar: 'masterJidi',
      story: '及第師父將掌門金牌交託小杰，守護終極修行！',
      effect: 'shield',
      effectText: '🛡️ 獲得【廚神庇護金牌】×1！'
    },
    {
      id: 'chance_5_3',
      icon: '⭐',
      title: '【六大口訣大圓滿】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '六大口訣融會貫通，小杰周身廚神星光閃耀！',
      effect: 'bonus_stars',
      effectText: '⭐ 廚藝大圓滿，星星 ⭐ +2！'
    }
  ]
};

const FateEventsByStage = {
  1: [
    {
      id: 'fate_1_1',
      icon: '🫘',
      title: '【豆類搞混小插曲】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '小杰差點把毛豆當成全穀，及第師父笑著拉住他！',
      tip: '毛豆富含優質蛋白質屬於「豆魚蛋肉類」，紅豆綠豆澱粉多才是「全穀雜糧類」！',
      effect: 'back_1',
      effectText: '⚠️ 腳步稍歇，退後 1 格！'
    },
    {
      id: 'fate_1_2',
      icon: '🍠',
      title: '【烤地瓜分心小迷糊】',
      speaker: '【陽泉酒家 及第大廚】',
      avatar: 'masterJidi',
      story: '小杰聊天太開心差點火候過大，師父輕敲額頭提醒專心！',
      tip: '未精製全穀如地瓜、糙米，慢火細烹最香甜，能保留完整膳食纖維與B群！',
      effect: 'back_1',
      effectText: '⚠️ 專心練功，退後 1 格！'
    }
  ],
  2: [
    {
      id: 'fate_2_1',
      icon: '🥤',
      title: '【早起找水喝小插曲】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '小杰早起想喝含糖奶茶，嘟嘟及時遞上溫開水！',
      tip: '奶茶糖多奶量少不算奶類，鮮奶才能落實「每天早晚一杯奶」補足鈣質！',
      effect: 'back_1',
      effectText: '⚠️ 補水醒腦，退後 1 格！'
    },
    {
      id: 'fate_2_2',
      icon: '🥓',
      title: '【水果吃太少小提醒】',
      speaker: '【早市 水果攤老闆娘】',
      avatar: 'masterJudge',
      story: '早餐只點蛋餅，老闆娘熱情叮嚀記得吃水果！',
      tip: '口訣說「每餐水果拳頭大」，吃一個拳頭大的芭樂或蘋果，維生素C補滿活力！',
      effect: 'back_1',
      effectText: '⚠️ 停下腳步，退後 1 格！'
    }
  ],
  3: [
    {
      id: 'fate_3_1',
      icon: '🥬',
      title: '【青菜差點沒吃完】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '午餐青菜好多小杰差點挑食，嘟嘟在旁嚴格監督！',
      tip: '口訣「飯跟蔬菜一樣多」，深綠蔬菜鐵質葉黃素豐富，不可挑食喔！',
      effect: 'back_1',
      effectText: '⚠️ 營養要均勻，退後 1 格！'
    },
    {
      id: 'fate_3_2',
      icon: '🍗',
      title: '【雞腿太香想貪吃】',
      speaker: '【陽泉酒家 及第大廚】',
      avatar: 'masterJidi',
      story: '滷雞腿好香小杰想多吃一隻，師父提醒份量要克制！',
      tip: '口訣「豆魚蛋肉一掌心」，每餐蛋白質適量剛剛好，過量會增加腸胃負擔！',
      effect: 'back_1',
      effectText: '⚠️ 克制份量，退後 1 格！'
    }
  ],
  4: [
    {
      id: 'fate_4_1',
      icon: '🍟',
      title: '【放學路過炸物攤】',
      speaker: '【見習廚神 小杰】',
      avatar: 'xiaojie',
      story: '炸雞排飄香好誘人，小杰摸摸肚子克制住貪嘴念頭！',
      tip: '下午肚子餓可選無調味堅果或新鮮水果，遠離高糖高油零食，身體無負擔！',
      effect: 'back_1',
      effectText: '⚠️ 抵擋誘惑，退後 1 格！'
    },
    {
      id: 'fate_4_2',
      icon: '🥜',
      title: '【堅果份量剛剛好】',
      speaker: '【元氣夥伴 嘟嘟】',
      avatar: 'dudu',
      story: '吃堅果太唰嘴，嘟嘟提醒一天一小把就足夠囉！',
      tip: '口訣「堅果種子一茶匙」，堅果富含優質好油，每天適量攝取剛剛好！',
      effect: 'back_1',
      effectText: '⚠️ 節制美味，退後 1 格！'
    }
  ],
  5: [
    {
      id: 'fate_5_1',
      icon: '🥛',
      title: '【晚上一杯奶別忘記】',
      speaker: '【廣州特級長老】',
      avatar: 'masterJudge',
      story: '長老巡視餐盤稱讚小杰搭配好，順便提醒睡前要喝牛奶！',
      tip: '口訣「每天早晚一杯奶」，早上喝一杯，晚上再喝一杯，骨骼強健長得高！',
      effect: 'back_1',
      effectText: '⚠️ 溫馨提醒，退後 1 格！'
    },
    {
      id: 'fate_5_2',
      icon: '🍉',
      title: '【蔬菜要比水果多】',
      speaker: '【陽泉酒家 及第大廚】',
      avatar: 'masterJidi',
      story: '西瓜太甜小杰多吃兩片，師父提醒青菜也要多夾！',
      tip: '口訣「菜比水果多一點」，水果含糖份，蔬菜纖維多，兩者都要吃、菜要更多！',
      effect: 'back_1',
      effectText: '⚠️ 溫馨提醒，退後 1 格！'
    }
  ]
};

const ChanceEvents = Object.values(ChanceEventsByStage).flat();
const FateEvents = Object.values(FateEventsByStage).flat();

// === 6. 存檔與狀態管理 ===
const GameStorageKey = 'anti_nutrition_monopoly_v6';

class GameStateManager {
  constructor() {
    this.state = {
      stars: 0,
      currentRound: 1,  // 1, 2, 3, 4, 5
      boardPosition: 0, // 0 ~ 15
      chefShield: 0,    // 及第師父的廚神庇護金牌 (抵擋食材沒收)
      revealedRecipes: [], // 天機搶先預覽的食譜 ID 列表
      inventory: {
        brown_rice: 0,
        sweet_potato: 0,
        broccoli: 0,
        carrot: 0,
        sweet_corn: 0,
        red_bean: 0,
        edamame: 0,
        tofu: 0,
        milk: 0,
        salmon: 0,
        egg: 0,
        egg_pancake: 0,
        chicken_leg: 0,
        chicken: 0,
        cheese: 0,
        apple: 0,
        banana: 0,
        orange: 0,
        guava: 0,
        spinach: 0,
        nuts: 0,
        olive_oil: 0,
        yogurt: 0
      },
      unlockedRecipes: [],
      answeredQuestions: [], // 記錄答對題目的 ID
      wrongQuestions: [],    // 記錄答錯過且尚未答對的題目 ID (優先出題複習)
      lastCookReminder: null, // 記錄已提醒開火的食譜 ID
      elapsedSeconds: 0,      // 闖關活動累計秒數 (目標 20 分鐘)
      hasSeenIntro: false
    };
    this.load();
  }

  load() {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(GameStorageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          this.state = { ...this.state, ...parsed };
          if (!this.state.revealedRecipes) this.state.revealedRecipes = [];
          if (!this.state.wrongQuestions) this.state.wrongQuestions = [];
          if (this.state.chefShield === undefined) this.state.chefShield = 0;
          if (this.state.elapsedSeconds === undefined) this.state.elapsedSeconds = 0;
        }
      }
    } catch (e) {
      console.warn('Load error', e);
    }
  }

  save() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(GameStorageKey, JSON.stringify(this.state));
      }
    } catch (e) {
      console.warn('Save error', e);
    }
  }

  reset() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(GameStorageKey);
      }
    } catch (e) {}
    this.state = {
      stars: 0,
      currentRound: 1,
      boardPosition: 0,
      chefShield: 0,
      revealedRecipes: [],
      inventory: {
        brown_rice: 0,
        sweet_potato: 0,
        broccoli: 0,
        carrot: 0,
        sweet_corn: 0,
        red_bean: 0,
        edamame: 0,
        tofu: 0,
        milk: 0,
        salmon: 0,
        egg: 0,
        egg_pancake: 0,
        chicken_leg: 0,
        chicken: 0,
        cheese: 0,
        apple: 0,
        banana: 0,
        orange: 0,
        guava: 0,
        spinach: 0,
        nuts: 0,
        olive_oil: 0,
        yogurt: 0
      },
      unlockedRecipes: [],
      answeredQuestions: [],
      wrongQuestions: [],
      lastCookReminder: null,
      elapsedSeconds: 0,
      hasSeenIntro: false
    };
    this.save();
  }

  revealRecipe(recipeId) {
    if (!this.state.revealedRecipes) this.state.revealedRecipes = [];
    if (!this.state.revealedRecipes.includes(recipeId)) {
      this.state.revealedRecipes.push(recipeId);
      this.save();
    }
  }

  isRecipeRevealed(recipeId) {
    return (this.state.revealedRecipes && this.state.revealedRecipes.includes(recipeId)) ||
           (this.state.unlockedRecipes && this.state.unlockedRecipes.includes(recipeId));
  }

  hasChefShield() {
    return (this.state.chefShield || 0) > 0;
  }

  useChefShield() {
    if ((this.state.chefShield || 0) > 0) {
      this.state.chefShield--;
      this.save();
      return true;
    }
    return false;
  }

  addChefShield(count = 1) {
    this.state.chefShield = (this.state.chefShield || 0) + count;
    this.save();
  }

  confiscateFood(foodId, count = 1) {
    if (!this.state.inventory[foodId] || this.state.inventory[foodId] <= 0) return 0;
    const removed = Math.min(this.state.inventory[foodId], count);
    this.state.inventory[foodId] -= removed;
    this.save();
    return removed;
  }

  addFood(foodId, count = 1) {
    if (!this.state.inventory[foodId]) this.state.inventory[foodId] = 0;
    this.state.inventory[foodId] += count;
    this.save();
  }

  recordWrong(questionId) {
    if (!this.state.wrongQuestions) this.state.wrongQuestions = [];
    if (!this.state.answeredQuestions.includes(questionId) && !this.state.wrongQuestions.includes(questionId)) {
      this.state.wrongQuestions.push(questionId);
      this.save();
    }
  }

  recordAnswered(questionId) {
    if (!this.state.answeredQuestions.includes(questionId)) {
      this.state.answeredQuestions.push(questionId);
      this.state.stars = this.state.answeredQuestions.length;
    }
    // 答對後自動從錯題清單中移除
    if (this.state.wrongQuestions && this.state.wrongQuestions.includes(questionId)) {
      this.state.wrongQuestions = this.state.wrongQuestions.filter(id => id !== questionId);
    }
    this.save();
  }

  getAnsweredQuestionsList() {
    return NutritionQuestions.filter(q => this.state.answeredQuestions.includes(q.id));
  }

  // 取得當前關卡的進行中目標食譜
  getActiveRecipe(roundNum) {
    const curRound = roundNum || this.state.currentRound || 1;
    const rConfig = RoundConfigs[curRound];
    if (!rConfig) return null;
    const pending = rConfig.recipes.find(r => !this.state.unlockedRecipes.includes(r.id));
    return pending || rConfig.recipes[rConfig.recipes.length - 1];
  }

  isStageCompleted(roundNum) {
    const curRound = roundNum || this.state.currentRound || 1;
    const rConfig = RoundConfigs[curRound];
    if (!rConfig) return false;
    return rConfig.recipes.every(r => this.state.unlockedRecipes.includes(r.id));
  }

  isGameFinished() {
    return [1, 2, 3, 4, 5].every(r => this.isStageCompleted(r));
  }

  // 取得當前關卡的下一個題目（優先抽取「錯題且尚未答對」的題目，其次抽取食譜所需食材，高效流暢不卡頓）
  getNextQuestion(roundNum) {
    const curRound = roundNum || this.state.currentRound || 1;
    const stageQuestions = NutritionQuestions.filter(q => q.stage === curRound);
    if (!stageQuestions.length) return NutritionQuestions[0];

    const wrongList = this.state.wrongQuestions || [];
    const answeredList = this.state.answeredQuestions || [];

    // 1. 最高優先級：優先跑出本關「曾經答錯且尚未答對」的題目 (錯題複習機制，確保學生能學會)
    const wrongPending = stageQuestions.filter(q => wrongList.includes(q.id) && !answeredList.includes(q.id));
    if (wrongPending.length > 0) {
      return wrongPending[Math.floor(Math.random() * wrongPending.length)];
    }

    // 2. 次高優先級：若食譜缺少食材，優先挑選能獲取該食材且尚未答對的題目
    const activeRecipe = this.getActiveRecipe(curRound);
    const missingFoods = activeRecipe ? activeRecipe.requiredFoods.filter(fId => (this.state.inventory[fId] || 0) === 0) : [];
    if (missingFoods.length > 0) {
      const neededQuestions = stageQuestions.filter(q => missingFoods.includes(q.foodId) && !answeredList.includes(q.id));
      if (neededQuestions.length > 0) {
        return neededQuestions[Math.floor(Math.random() * neededQuestions.length)];
      }
    }

    // 3. 第三優先級：本關尚未答對的任何題目 (確保本關所有題目都能被學習到)
    const unAnswered = stageQuestions.filter(q => !answeredList.includes(q.id));
    if (unAnswered.length > 0) {
      return unAnswered[Math.floor(Math.random() * unAnswered.length)];
    }

    // 4. 第四優先級：若題目都已答過但食譜仍缺食材，抽能獲取缺漏食材的題目 (重複獲得食材)
    if (missingFoods.length > 0) {
      const neededAny = stageQuestions.filter(q => missingFoods.includes(q.foodId));
      if (neededAny.length > 0) {
        return neededAny[Math.floor(Math.random() * neededAny.length)];
      }
    }

    // 5. 本關題目全數掌握且食材充足，循環抽題供學生複習
    return stageQuestions[Math.floor(Math.random() * stageQuestions.length)];
  }

  hasRecipeIngredients(recipeKey) {
    const allRecipes = Object.values(RoundConfigs).flatMap(r => r.recipes);
    const recipe = allRecipes.find(r => r.id === recipeKey);
    if (!recipe) return false;
    return recipe.requiredFoods.every(fId => (this.state.inventory[fId] || 0) > 0);
  }

  consumeRecipeIngredients(recipeKey) {
    const allRecipes = Object.values(RoundConfigs).flatMap(r => r.recipes);
    const recipe = allRecipes.find(r => r.id === recipeKey);
    if (!recipe) return;
    recipe.requiredFoods.forEach(fId => {
      if (this.state.inventory[fId] > 0) this.state.inventory[fId]--;
    });
    if (!this.state.unlockedRecipes.includes(recipeKey)) {
      this.state.unlockedRecipes.push(recipeKey);
    }
    this.save();
  }
}

const gameState = new GameStateManager();

// 導出至全域
window.NutritionQuestions = NutritionQuestions;
window.StoryDialogues = StoryDialogues;
window.RoundConfigs = RoundConfigs;
window.MonopolyTiles = MonopolyTiles;
window.ChanceEvents = ChanceEvents;
window.FateEvents = FateEvents;
window.ChanceEventsByStage = ChanceEventsByStage;
window.FateEventsByStage = FateEventsByStage;
window.gameState = gameState;
window.sounds = sounds;
