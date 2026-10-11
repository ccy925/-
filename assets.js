/**
 * 《小食神大冒險：六大類食物大作戰》 - 向量圖示庫 (SVG Assets)
 * 專為國小高年級健康飲食設計：溫暖、可愛、字少圖多、圓潤童趣
 */

const FoodAssets = {
  // === 1. 全穀雜糧類 (黃色系 / 提供滿滿能量) ===
  brown_rice: {
    id: 'brown_rice',
    name: '健康糙米飯',
    category: 'grains',
    categoryName: '全穀雜糧類',
    color: '#F59E0B',
    desc: '保留豐富維生素B群與膳食纖維，提供持久腦力與體力！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <ellipse cx="50" cy="72" rx="34" ry="12" fill="#E2E8F0"/>
      <path d="M18 52 C18 78 32 82 50 82 C68 82 82 78 82 52 Z" fill="#F87171"/>
      <path d="M18 52 C18 42 32 40 50 40 C68 40 82 42 82 52 Z" fill="#FECACA"/>
      <!-- 米飯堆 -->
      <path d="M22 50 C24 30 36 22 50 22 C64 22 76 30 78 50 Z" fill="#FEF3C7"/>
      <!-- 糙米粒紋理 -->
      <ellipse cx="40" cy="34" rx="4" ry="2" fill="#D97706" transform="rotate(-15 40 34)"/>
      <ellipse cx="60" cy="36" rx="4" ry="2" fill="#D97706" transform="rotate(20 60 36)"/>
      <ellipse cx="50" cy="42" rx="4" ry="2" fill="#D97706" transform="rotate(5 50 42)"/>
      <ellipse cx="32" cy="45" rx="3.5" ry="2" fill="#B45309" transform="rotate(-30 32 45)"/>
      <ellipse cx="68" cy="44" rx="3.5" ry="2" fill="#B45309" transform="rotate(15 68 44)"/>
      <!-- 碗花紋 -->
      <circle cx="50" cy="65" r="5" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="34" cy="63" r="4" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="66" cy="63" r="4" fill="#FFFFFF" opacity="0.8"/>
      <!-- 冒煙 -->
      <path d="M42 16 Q45 10 42 6" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M52 14 Q55 8 52 4" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    </svg>`
  },

  sweet_potato: {
    id: 'sweet_potato',
    name: '黃金烤地瓜',
    category: 'grains',
    categoryName: '全穀雜糧類',
    color: '#F59E0B',
    desc: '含高纖維與胡蘿蔔素，腸道順暢好幫手！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 地瓜外皮 -->
      <ellipse cx="50" cy="54" rx="38" ry="22" fill="#9D174D" transform="rotate(-25 50 54)"/>
      <ellipse cx="50" cy="54" rx="36" ry="19" fill="#BE185D" transform="rotate(-25 50 54)"/>
      <!-- 切開的金黃果肉 -->
      <ellipse cx="56" cy="50" rx="22" ry="14" fill="#F59E0B" transform="rotate(-20 56 50)"/>
      <ellipse cx="56" cy="50" rx="18" ry="10" fill="#FBBF24" transform="rotate(-20 56 50)"/>
      <!-- 可愛表情 -->
      <circle cx="52" cy="48" r="2.5" fill="#78350F"/>
      <circle cx="62" cy="46" r="2.5" fill="#78350F"/>
      <path d="M55 54 Q57 57 60 53" stroke="#78350F" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- 腮紅 -->
      <circle cx="48" cy="52" r="2" fill="#F43F5E" opacity="0.6"/>
      <circle cx="65" cy="49" r="2" fill="#F43F5E" opacity="0.6"/>
      <!-- 香氣 -->
      <path d="M68 25 Q74 20 70 14" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.7"/>
    </svg>`
  },

  oats: {
    id: 'oats',
    name: '高纖全燕麥',
    category: 'grains',
    categoryName: '全穀雜糧類',
    color: '#F59E0B',
    desc: '富含β-葡聚醣與膳食纖維，維持飽足感精神好！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 麥穗枝幹 -->
      <path d="M50 85 Q48 55 52 18" stroke="#D97706" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 麥粒 -->
      <ellipse cx="40" cy="30" rx="10" ry="5" fill="#FDE68A" stroke="#D97706" stroke-width="1.5" transform="rotate(-40 40 30)"/>
      <ellipse cx="60" cy="30" rx="10" ry="5" fill="#FDE68A" stroke="#D97706" stroke-width="1.5" transform="rotate(40 60 30)"/>
      <ellipse cx="38" cy="45" rx="11" ry="5.5" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" transform="rotate(-35 38 45)"/>
      <ellipse cx="62" cy="45" rx="11" ry="5.5" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" transform="rotate(35 62 45)"/>
      <ellipse cx="39" cy="60" rx="10" ry="5" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" transform="rotate(-30 39 60)"/>
      <ellipse cx="61" cy="60" rx="10" ry="5" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" transform="rotate(30 61 60)"/>
      <ellipse cx="50" cy="20" rx="9" ry="5" fill="#FEF08A" stroke="#D97706" stroke-width="1.5" transform="rotate(-85 50 20)"/>
      <!-- 閃光點綴 -->
      <path d="M22 25 L26 25 M24 23 L24 27" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },

  sweet_corn: {
    id: 'sweet_corn',
    name: '甜香金玉米',
    category: 'grains',
    categoryName: '全穀雜糧類',
    color: '#F59E0B',
    desc: '玉米是全穀雜糧類不是蔬菜喔！含豐富葉黃素護眼好夥伴！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 玉米葉苞 -->
      <path d="M30 78 C25 50 35 30 20 25 C35 35 40 65 42 82 Z" fill="#84CC16"/>
      <path d="M70 78 C75 50 65 30 80 25 C65 35 60 65 58 82 Z" fill="#65A30D"/>
      <!-- 玉米主體 -->
      <ellipse cx="50" cy="48" rx="18" ry="32" fill="#FBBF24"/>
      <!-- 玉米顆粒網格 -->
      <circle cx="45" cy="30" r="3.5" fill="#FDE047"/>
      <circle cx="55" cy="30" r="3.5" fill="#FDE047"/>
      <circle cx="42" cy="40" r="4" fill="#FACC15"/>
      <circle cx="52" cy="40" r="4" fill="#FACC15"/>
      <circle cx="58" cy="40" r="3.5" fill="#EAB308"/>
      <circle cx="44" cy="52" r="4" fill="#FDE047"/>
      <circle cx="54" cy="52" r="4" fill="#FDE047"/>
      <circle cx="46" cy="64" r="3.5" fill="#EAB308"/>
      <circle cx="54" cy="64" r="3.5" fill="#FACC15"/>
      <!-- 萌萌小笑臉 -->
      <circle cx="46" cy="42" r="2" fill="#713F12"/>
      <circle cx="54" cy="42" r="2" fill="#713F12"/>
      <path d="M48 48 Q50 51 52 48" stroke="#713F12" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  // === 2. 豆魚蛋肉類 (粉橘色系 / 蛋白質長高增肌) ===
  salmon: {
    id: 'salmon',
    name: '香煎鮮鮭魚',
    category: 'protein',
    categoryName: '豆魚蛋肉類',
    color: '#FB7185',
    desc: '優質蛋白質 + Omega-3 脂肪酸，讓大腦靈光、眼睛亮晶晶！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 鮭魚排厚切形狀 -->
      <path d="M22 45 C22 28 42 22 50 36 C58 22 78 28 78 45 C78 68 56 80 50 82 C44 80 22 68 22 45 Z" fill="#FB923C"/>
      <!-- 外皮邊緣 -->
      <path d="M20 45 C20 26 42 19 50 34 C58 19 80 26 80 45" stroke="#475569" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- 鮭魚油花紋理 -->
      <path d="M30 42 Q50 56 70 42" stroke="#FED7AA" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M32 52 Q50 66 68 52" stroke="#FED7AA" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M36 62 Q50 74 64 62" stroke="#FED7AA" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- 骨頭中間小孔 -->
      <circle cx="50" cy="45" r="4.5" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- 檸檬片點綴 -->
      <circle cx="70" cy="65" r="12" fill="#FACC15"/>
      <circle cx="70" cy="65" r="9" fill="#FEF08A"/>
      <line x1="70" y1="56" x2="70" y2="74" stroke="#FACC15" stroke-width="1.5"/>
      <line x1="61" y1="65" x2="79" y2="65" stroke="#FACC15" stroke-width="1.5"/>
    </svg>`
  },

  egg: {
    id: 'egg',
    name: '活力金黃蛋',
    category: 'protein',
    categoryName: '豆魚蛋肉類',
    color: '#FB7185',
    desc: '完整蛋白質優良來源，含卵磷脂，學習記憶力超棒！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 蛋白荷包蛋 -->
      <path d="M18 52 C15 36 32 24 50 25 C68 26 84 35 82 55 C80 72 65 80 48 80 C30 80 20 68 18 52 Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
      <!-- 蛋黃 -->
      <circle cx="48" cy="50" r="18" fill="#F59E0B"/>
      <circle cx="48" cy="50" r="16" fill="#FBBF24"/>
      <!-- 蛋黃光澤 -->
      <ellipse cx="43" cy="44" rx="4" ry="2.5" fill="#FEF08A" opacity="0.9" transform="rotate(-30 43 44)"/>
      <!-- 蛋黃可愛表情 -->
      <circle cx="44" cy="52" r="2.2" fill="#78350F"/>
      <circle cx="54" cy="52" r="2.2" fill="#78350F"/>
      <path d="M47 56 Q49 59 52 56" stroke="#78350F" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      <circle cx="41" cy="54" r="1.8" fill="#F43F5E" opacity="0.6"/>
      <circle cx="57" cy="54" r="1.8" fill="#F43F5E" opacity="0.6"/>
    </svg>`
  },

  tofu: {
    id: 'tofu',
    name: '植物大豆嫩豆腐',
    category: 'protein',
    categoryName: '豆魚蛋肉類',
    color: '#FB7185',
    desc: '黃豆製成的優質植物性蛋白，零膽固醇、好消化！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 盤子 -->
      <ellipse cx="50" cy="72" rx="38" ry="14" fill="#E0E7FF"/>
      <!-- 豆腐立方體 -->
      <path d="M30 40 L65 32 L80 44 L45 54 Z" fill="#FEF9C3"/>
      <path d="M30 40 L45 54 L45 74 L30 60 Z" fill="#FDE047" opacity="0.8"/>
      <path d="M45 54 L80 44 L80 64 L45 74 Z" fill="#FEF08A"/>
      <!-- 蔥花裝飾 -->
      <ellipse cx="54" cy="42" rx="3.5" ry="2" fill="#22C55E"/>
      <ellipse cx="62" cy="40" rx="3" ry="1.8" fill="#16A34A"/>
      <!-- 醬油露水滴 -->
      <circle cx="68" cy="46" r="2" fill="#78350F" opacity="0.7"/>
      <!-- 萌臉 -->
      <circle cx="54" cy="62" r="2" fill="#713F12"/>
      <circle cx="66" cy="58" r="2" fill="#713F12"/>
      <path d="M58 63 Q61 66 64 63" stroke="#713F12" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  chicken: {
    id: 'chicken',
    name: '低脂香雞胸',
    category: 'protein',
    categoryName: '豆魚蛋肉類',
    color: '#FB7185',
    desc: '豐富支鏈胺基酸，骨骼強健、運動跑步有力量！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 雞肉外型 -->
      <path d="M22 55 C18 35 38 24 60 26 C78 28 85 45 80 62 C74 76 50 78 35 75 C24 72 23 65 22 55 Z" fill="#FDBA74"/>
      <!-- 烤痕 Grill marks -->
      <line x1="38" y1="35" x2="48" y2="45" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
      <line x1="52" y1="38" x2="62" y2="48" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
      <line x1="42" y1="52" x2="52" y2="62" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
      <line x1="58" y1="52" x2="68" y2="62" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
      <!-- 迷迭香裝飾香草 -->
      <path d="M68 68 Q75 60 82 62" stroke="#15803D" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  // === 3. 蔬菜類 (綠色系 / 膳食纖維、礦物質) ===
  broccoli: {
    id: 'broccoli',
    name: '活力綠花椰菜',
    category: 'vegetables',
    categoryName: '蔬菜類',
    color: '#10B981',
    desc: '十字花科蔬菜之王！滿滿維生素C與葉酸，保護細胞健康！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 菜梗 -->
      <path d="M44 60 L42 82 C42 85 58 85 58 82 L56 60 Z" fill="#86EFAC"/>
      <!-- 花簇 -->
      <circle cx="34" cy="46" r="16" fill="#15803D"/>
      <circle cx="66" cy="46" r="16" fill="#15803D"/>
      <circle cx="50" cy="34" r="18" fill="#16A34A"/>
      <circle cx="38" cy="35" r="13" fill="#22C55E"/>
      <circle cx="62" cy="35" r="13" fill="#22C55E"/>
      <circle cx="50" cy="46" r="14" fill="#4ADE80"/>
      <!-- 可愛臉 -->
      <circle cx="45" cy="45" r="2.2" fill="#064E3B"/>
      <circle cx="55" cy="45" r="2.2" fill="#064E3B"/>
      <path d="M48 50 Q50 53 52 50" stroke="#064E3B" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <!-- 腮紅 -->
      <circle cx="41" cy="48" r="2" fill="#F43F5E" opacity="0.6"/>
      <circle cx="59" cy="48" r="2" fill="#F43F5E" opacity="0.6"/>
    </svg>`
  },

  carrot: {
    id: 'carrot',
    name: '甜脆紅蘿蔔',
    category: 'vegetables',
    categoryName: '蔬菜類',
    color: '#10B981',
    desc: 'β-胡蘿蔔素轉化為維生素A，保護靈魂之窗夜視力！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 綠色葉子 -->
      <path d="M50 30 Q40 12 30 18 Q44 26 48 30" fill="#22C55E"/>
      <path d="M50 30 Q50 8 55 12 Q53 22 51 30" fill="#16A34A"/>
      <path d="M50 30 Q65 12 72 20 Q58 26 52 30" fill="#4ADE80"/>
      <!-- 胡蘿蔔身體 -->
      <path d="M35 32 C35 30 65 30 65 32 C65 45 56 82 50 86 C44 82 35 45 35 32 Z" fill="#EA580C"/>
      <!-- 條紋紋理 -->
      <line x1="42" y1="42" x2="52" y2="42" stroke="#C2410C" stroke-width="2" stroke-linecap="round"/>
      <line x1="48" y1="52" x2="60" y2="52" stroke="#C2410C" stroke-width="2" stroke-linecap="round"/>
      <line x1="44" y1="64" x2="54" y2="64" stroke="#C2410C" stroke-width="2" stroke-linecap="round"/>
      <!-- 萌萌小表情 -->
      <circle cx="45" cy="47" r="2.2" fill="#431407"/>
      <circle cx="55" cy="47" r="2.2" fill="#431407"/>
      <path d="M48 52 Q50 55 52 52" stroke="#431407" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  spinach: {
    id: 'spinach',
    name: '鮮翠綠菠菜',
    category: 'vegetables',
    categoryName: '蔬菜類',
    color: '#10B981',
    desc: '含鐵質、葉酸與葉黃素，像大力水手一樣精力充沛！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 根部紅頭 -->
      <path d="M48 76 L52 76 L50 84 Z" fill="#F43F5E"/>
      <!-- 葉柄與葉片 -->
      <path d="M50 76 Q35 55 25 40 Q25 25 40 28 Q50 48 50 76" fill="#15803D"/>
      <path d="M50 76 Q65 55 75 40 Q75 25 60 28 Q50 48 50 76" fill="#16A34A"/>
      <path d="M50 76 Q50 42 50 20 Q44 26 50 76" fill="#22C55E"/>
      <!-- 葉脈 -->
      <path d="M50 76 Q42 50 36 36" stroke="#86EFAC" stroke-width="1.8" fill="none"/>
      <path d="M50 76 Q58 50 64 36" stroke="#86EFAC" stroke-width="1.8" fill="none"/>
      <path d="M50 76 L50 25" stroke="#86EFAC" stroke-width="1.8" fill="none"/>
    </svg>`
  },

  bell_pepper: {
    id: 'bell_pepper',
    name: '七彩甜彩椒',
    category: 'vegetables',
    categoryName: '蔬菜類',
    color: '#10B981',
    desc: '維生素C高於許多柑橘！甜脆可口，抗氧化力一流！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 蒂頭 -->
      <path d="M48 24 L52 24 L54 14 C50 12 46 16 48 24 Z" fill="#15803D"/>
      <!-- 甜椒瓣 -->
      <ellipse cx="36" cy="52" rx="14" ry="24" fill="#EF4444"/>
      <ellipse cx="64" cy="52" rx="14" ry="24" fill="#DC2626"/>
      <ellipse cx="50" cy="55" rx="16" ry="26" fill="#F87171"/>
      <!-- 表情 -->
      <circle cx="44" cy="52" r="2.5" fill="#7F1D1D"/>
      <circle cx="56" cy="52" r="2.5" fill="#7F1D1D"/>
      <path d="M47 58 Q50 62 53 58" stroke="#7F1D1D" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  // === 4. 水果類 (橙紅色系 / 維生素C與抗氧化) ===
  apple: {
    id: 'apple',
    name: '脆甜紅蘋果',
    category: 'fruits',
    categoryName: '水果類',
    color: '#F43F5E',
    desc: '含果膠膳食纖維與多酚，每天一蘋果，活力常伴我！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 葉子與果蒂 -->
      <path d="M50 28 C50 18 55 16 57 16" stroke="#78350F" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M54 20 Q66 12 70 20 Q60 26 54 20" fill="#22C55E"/>
      <!-- 蘋果主體 -->
      <path d="M50 36 C40 26 22 28 20 48 C18 68 34 82 50 82 C66 82 82 68 80 48 C78 28 60 26 50 36 Z" fill="#EF4444"/>
      <!-- 高光 -->
      <ellipse cx="35" cy="44" rx="6" ry="12" fill="#FCA5A5" opacity="0.6" transform="rotate(-25 35 44)"/>
      <!-- 可愛表情 -->
      <circle cx="44" cy="55" r="2.2" fill="#450A0A"/>
      <circle cx="56" cy="55" r="2.2" fill="#450A0A"/>
      <path d="M48 60 Q50 63 52 60" stroke="#450A0A" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <!-- 臉頰 -->
      <circle cx="39" cy="58" r="2.5" fill="#FDA4AF"/>
      <circle cx="61" cy="58" r="2.5" fill="#FDA4AF"/>
    </svg>`
  },

  banana: {
    id: 'banana',
    name: '活力香蕉',
    category: 'fruits',
    categoryName: '水果類',
    color: '#F43F5E',
    desc: '富含鉀離子與天然果糖，迅速補充體能、預防抽筋！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 香蕉彎月形 -->
      <path d="M25 68 C35 78 68 76 82 40 C84 35 80 32 76 34 C64 64 38 66 28 58 Z" fill="#FDE047"/>
      <path d="M23 70 C34 82 72 80 84 38 C86 32 82 30 78 32 C65 68 36 70 25 64 Z" fill="#EAB308" opacity="0.4"/>
      <!-- 香蕉蒂頭 -->
      <path d="M22 66 L18 72 L22 74 Z" fill="#65A30D"/>
      <path d="M82 34 L88 30 L85 36 Z" fill="#713F12"/>
      <!-- 萌臉 -->
      <circle cx="52" cy="58" r="2.2" fill="#713F12"/>
      <circle cx="62" cy="52" r="2.2" fill="#713F12"/>
      <path d="M57 60 Q59 63 62 59" stroke="#713F12" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  orange: {
    id: 'orange',
    name: '陽光多汁柳橙',
    category: 'fruits',
    categoryName: '水果類',
    color: '#F43F5E',
    desc: '滿載維生素C，增強抵抗力，果肉纖維幫助好排便！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <circle cx="50" cy="54" r="30" fill="#F97316"/>
      <circle cx="50" cy="54" r="28" fill="#FB923C"/>
      <!-- 綠葉 -->
      <path d="M50 24 Q58 15 65 20 Q56 26 50 24" fill="#22C55E"/>
      <circle cx="50" cy="24" r="2" fill="#15803D"/>
      <!-- 柳橙斑點 -->
      <circle cx="36" cy="45" r="1.5" fill="#EA580C"/>
      <circle cx="65" cy="58" r="1.5" fill="#EA580C"/>
      <circle cx="44" cy="68" r="1.5" fill="#EA580C"/>
      <!-- 笑臉 -->
      <circle cx="44" cy="52" r="2.2" fill="#7C2D12"/>
      <circle cx="56" cy="52" r="2.2" fill="#7C2D12"/>
      <path d="M47 57 Q50 61 53 57" stroke="#7C2D12" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  // === 5. 乳品類 (水藍色系 / 鈣質骨骼長高高) ===
  milk: {
    id: 'milk',
    name: '高鈣純鮮乳',
    category: 'dairy',
    categoryName: '乳品類',
    color: '#0EA5E9',
    desc: '「每天早晚一杯奶」！豐富鈣質與維生素D，骨骼牙齒壯如山！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 牛奶盒斜角頂 -->
      <path d="M35 34 L50 22 L65 34 Z" fill="#38BDF8"/>
      <!-- 盒身 -->
      <rect x="32" y="34" width="36" height="46" rx="4" fill="#F0F9FF" stroke="#0284C7" stroke-width="2"/>
      <!-- 藍色腰帶色塊 -->
      <rect x="32" y="46" width="36" height="18" fill="#38BDF8"/>
      <!-- 乳牛斑紋 -->
      <path d="M36 49 C38 47 44 48 43 53 C41 57 35 55 36 49 Z" fill="#0284C7"/>
      <path d="M60 52 C64 50 66 56 62 58 C58 58 58 54 60 52 Z" fill="#0284C7"/>
      <!-- 可愛牛奶滴笑臉 -->
      <circle cx="46" cy="70" r="2" fill="#0369A1"/>
      <circle cx="54" cy="70" r="2" fill="#0369A1"/>
      <path d="M48 74 Q50 76 52 74" stroke="#0369A1" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      <!-- 愛心圖示 -->
      <path d="M50 40 C48 37 44 38 44 41 C44 44 50 46 50 46 C50 46 56 44 56 41 C56 38 52 37 50 40 Z" fill="#F43F5E"/>
    </svg>`
  },

  cheese: {
    id: 'cheese',
    name: '濃郁小起司',
    category: 'dairy',
    categoryName: '乳品類',
    color: '#0EA5E9',
    desc: '濃縮乳品精華，小體積高鈣質，乳糖不耐症也能安心補充！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 起司三角本體 -->
      <path d="M22 68 L78 68 L68 36 L30 36 Z" fill="#FBBF24"/>
      <path d="M30 36 L68 36 L52 24 L20 40 Z" fill="#FDE047"/>
      <!-- 起司圓孔洞 -->
      <circle cx="40" cy="52" r="5" fill="#D97706" opacity="0.6"/>
      <circle cx="62" cy="48" r="4" fill="#D97706" opacity="0.6"/>
      <circle cx="52" cy="60" r="3.5" fill="#D97706" opacity="0.6"/>
      <!-- 可愛表情 -->
      <circle cx="45" cy="45" r="2.2" fill="#78350F"/>
      <circle cx="55" cy="43" r="2.2" fill="#78350F"/>
      <path d="M48 48 Q50 51 52 48" stroke="#78350F" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  yogurt: {
    id: 'yogurt',
    name: '元氣鮮優格',
    category: 'dairy',
    categoryName: '乳品類',
    color: '#0EA5E9',
    desc: '滿滿活性益生菌與乳清蛋白，守護腸道好菌多！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 杯蓋 -->
      <ellipse cx="50" cy="34" rx="26" ry="6" fill="#38BDF8"/>
      <!-- 優格杯身 -->
      <path d="M26 34 L32 74 C33 78 67 78 68 74 L74 34 Z" fill="#F0F9FF" stroke="#0284C7" stroke-width="2"/>
      <!-- 標籤草莓圖案 -->
      <circle cx="50" cy="54" r="8" fill="#FDA4AF"/>
      <path d="M47 51 Q50 48 53 51 Q53 56 50 58 Q47 56 47 51" fill="#F43F5E"/>
      <!-- 湯匙 -->
      <path d="M68 20 L62 45" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="60" cy="48" rx="4" ry="6" fill="#CBD5E1"/>
    </svg>`
  },

  // === 6. 油脂與堅果種子類 (棕金色系 / 不飽和脂肪酸、維生素E) ===
  nuts: {
    id: 'nuts',
    name: '綜合香脆堅果',
    category: 'fats_nuts',
    categoryName: '油脂與堅果種子類',
    color: '#D97706',
    desc: '「堅果種子一茶匙」！優質不飽和脂肪酸，保護心臟血管！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 核桃 -->
      <path d="M35 52 C28 42 34 30 45 32 C54 34 50 50 44 56 C38 58 36 56 35 52 Z" fill="#B45309"/>
      <path d="M38 38 Q42 46 39 52" stroke="#78350F" stroke-width="1.8" fill="none"/>
      <!-- 腰果 -->
      <path d="M52 46 C54 36 68 34 72 44 C76 56 62 65 52 58 C46 54 50 48 52 46 Z" fill="#FDE68A" stroke="#D97706" stroke-width="1.5"/>
      <!-- 杏仁果 -->
      <ellipse cx="50" cy="70" rx="14" ry="8" fill="#92400E" transform="rotate(-20 50 70)"/>
      <!-- 閃亮小光芒 -->
      <path d="M68 28 L70 24 L72 28 L76 30 L72 32 L70 36 L68 32 L64 30 Z" fill="#F59E0B"/>
    </svg>`
  },

  olive_oil: {
    id: 'olive_oil',
    name: '純釀金黃油',
    category: 'fats_nuts',
    categoryName: '油脂與堅果種子類',
    color: '#D97706',
    desc: '植物性好油，富含單元不飽和脂肪酸與維生素E，抗發炎！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 瓶塞木蓋 -->
      <rect x="46" y="16" width="8" height="6" rx="2" fill="#78350F"/>
      <!-- 瓶頸 -->
      <path d="M47 22 L47 32 L36 44 L36 76 C36 80 64 80 64 76 L64 44 L53 32 L53 22 Z" fill="#E2E8F0" opacity="0.6"/>
      <!-- 油液 -->
      <path d="M38 52 L38 74 C38 78 62 78 62 74 L62 52 Z" fill="#FBBF24"/>
      <!-- 橄欖葉標籤 -->
      <circle cx="50" cy="62" r="6" fill="#65A30D"/>
      <ellipse cx="50" cy="60" rx="2.5" ry="4" fill="#365314"/>
      <!-- 金黃油滴 -->
      <circle cx="56" cy="38" r="2.5" fill="#F59E0B"/>
    </svg>`
  },

  // === 7. 陷阱食物 (打地鼠時要躲開的垃圾食物/高糖高脂) ===
  junk_fries: {
    id: 'junk_fries',
    name: '超油炸薯條',
    isJunk: true,
    color: '#EF4444',
    desc: '反式脂肪與過量鈉鹽！會讓血管負擔重，不能多吃喔！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 紅色紙盒 -->
      <path d="M30 45 L34 82 L66 82 L70 45 Z" fill="#EF4444"/>
      <path d="M30 45 Q50 52 70 45" stroke="#DC2626" stroke-width="2" fill="#B91C1C"/>
      <!-- 薯條條狀 -->
      <rect x="36" y="24" width="6" height="26" fill="#FACC15" stroke="#CA8A04" stroke-width="1" transform="rotate(-8 39 37)"/>
      <rect x="46" y="18" width="6" height="32" fill="#FDE047" stroke="#CA8A04" stroke-width="1"/>
      <rect x="56" y="22" width="6" height="28" fill="#FACC15" stroke="#CA8A04" stroke-width="1" transform="rotate(10 59 36)"/>
      <rect x="41" y="28" width="6" height="22" fill="#EAB308" stroke="#CA8A04" stroke-width="1" transform="rotate(-3 44 39)"/>
      <!-- 調皮眩暈表情 (X X 眼) -->
      <text x="42" y="66" font-size="9" font-weight="bold" fill="#FFFFFF">✕ ✕</text>
      <path d="M46 73 Q50 70 54 73" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  junk_soda: {
    id: 'junk_soda',
    name: '高糖彩色汽水',
    isJunk: true,
    color: '#EF4444',
    desc: '空熱量與精緻糖！會造成蛀牙與肥胖，喝白開水最好！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 易開罐 -->
      <rect x="35" y="32" width="30" height="48" rx="6" fill="#EC4899"/>
      <ellipse cx="50" cy="32" rx="15" ry="4" fill="#CBD5E1"/>
      <ellipse cx="50" cy="80" rx="15" ry="4" fill="#BE185D"/>
      <!-- 驚險骷髏/眩暈表情 -->
      <circle cx="45" cy="52" r="2.5" fill="#FFFFFF"/>
      <circle cx="55" cy="52" r="2.5" fill="#FFFFFF"/>
      <line x1="45" y1="62" x2="55" y2="62" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <!-- 氣泡炸出 -->
      <circle cx="62" cy="24" r="3" fill="#F472B6"/>
      <circle cx="38" cy="20" r="2" fill="#F472B6"/>
      <path d="M50 28 L50 14" stroke="#A855F7" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },

  junk_donut: {
    id: 'junk_donut',
    name: '爆糖甜甜圈',
    isJunk: true,
    color: '#EF4444',
    desc: '精製糖份過高，容易引起血糖震盪、注意力不集中！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <!-- 甜甜圈外圈 -->
      <ellipse cx="50" cy="52" rx="34" ry="24" fill="#D97706"/>
      <!-- 糖霜 -->
      <ellipse cx="50" cy="48" rx="32" ry="20" fill="#F472B6"/>
      <!-- 中間中空 -->
      <ellipse cx="50" cy="50" rx="12" ry="8" fill="#F8FAFC"/>
      <!-- 巧克力米糖粒 -->
      <line x1="32" y1="44" x2="36" y2="44" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="62" y1="45" x2="66" y2="45" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="46" y1="36" x2="50" y2="36" stroke="#4ADE80" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="60" x2="56" y2="60" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // === 中華小廚神食材 ===
  red_bean: {
    id: 'red_bean',
    name: '養生紅豆綠豆',
    category: 'grains',
    categoryName: '全穀雜糧類',
    color: '#F59E0B',
    desc: '含豐富澱粉能提供元氣能量，是全穀雜糧類喔！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <ellipse cx="50" cy="74" rx="36" ry="12" fill="#E2E8F0"/>
      <path d="M20 54 C20 76 34 82 50 82 C66 82 80 76 80 54 Z" fill="#991B1B"/>
      <ellipse cx="50" cy="54" rx="30" ry="10" fill="#B91C1C"/>
      <ellipse cx="38" cy="46" rx="9" ry="6" fill="#DC2626" transform="rotate(-20 38 46)"/>
      <ellipse cx="60" cy="45" rx="8" ry="5.5" fill="#16A34A" transform="rotate(25 60 45)"/>
      <ellipse cx="48" cy="38" rx="8.5" ry="6" fill="#991B1B" transform="rotate(10 48 38)"/>
      <ellipse cx="36" cy="46" rx="2" ry="4" fill="#FEF2F2" transform="rotate(-20 36 46)"/>
      <ellipse cx="59" cy="45" rx="1.8" ry="3.5" fill="#FEF2F2" transform="rotate(25 59 45)"/>
      <circle cx="44" cy="62" r="2" fill="#FFFFFF"/>
      <circle cx="56" cy="62" r="2" fill="#FFFFFF"/>
      <path d="M48 66 Q50 69 52 66" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  edamame: {
    id: 'edamame',
    name: '元氣鮮毛豆',
    category: 'protein',
    categoryName: '豆魚蛋肉類',
    color: '#FB7185',
    desc: '毛豆富含優質蛋白質，與黃豆一樣屬於豆魚蛋肉類！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <path d="M22 62 C30 40 50 36 82 30 C76 52 56 68 22 62 Z" fill="#65A30D" stroke="#4D7C0F" stroke-width="2"/>
      <circle cx="38" cy="52" r="8" fill="#84CC16"/>
      <circle cx="54" cy="46" r="8.5" fill="#84CC16"/>
      <circle cx="70" cy="39" r="7.5" fill="#84CC16"/>
      <circle cx="36" cy="51" r="1.5" fill="#365314"/>
      <circle cx="42" cy="51" r="1.5" fill="#365314"/>
      <path d="M38 54 Q40 56 42 54" stroke="#365314" stroke-width="1.2" stroke-linecap="round" fill="none"/>
      <circle cx="52" cy="45" r="1.5" fill="#365314"/>
      <circle cx="58" cy="45" r="1.5" fill="#365314"/>
      <path d="M54 48 Q56 50 58 48" stroke="#365314" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  guava: {
    id: 'guava',
    name: '清脆鮮芭樂',
    category: 'fruits',
    categoryName: '水果類',
    color: '#F43F5E',
    desc: '「每餐水果拳頭大」！富含極高維生素C與膳食纖維！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <ellipse cx="50" cy="56" rx="28" ry="30" fill="#84CC16"/>
      <ellipse cx="50" cy="56" rx="26" ry="28" fill="#A3E635"/>
      <path d="M48 26 L52 26 L50 20 Z" fill="#65A30D"/>
      <ellipse cx="58" cy="56" rx="16" ry="20" fill="#FDA4AF"/>
      <circle cx="54" cy="52" r="1.5" fill="#BE123C"/>
      <circle cx="62" cy="58" r="1.5" fill="#BE123C"/>
      <circle cx="56" cy="62" r="1.5" fill="#BE123C"/>
      <circle cx="38" cy="50" r="2.2" fill="#365314"/>
      <circle cx="46" cy="50" r="2.2" fill="#365314"/>
      <path d="M40 56 Q42 59 44 56" stroke="#365314" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`
  },

  chicken_leg: {
    id: 'chicken_leg',
    name: '招牌滷雞腿',
    category: 'protein',
    categoryName: '豆魚蛋肉類',
    color: '#FB7185',
    desc: '「豆魚蛋肉一掌心」！優質蛋白質，補充電力與好體力！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <path d="M68 28 C64 24 58 24 54 28 L46 36 L64 54 L72 46 C76 42 76 36 72 32 Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <circle cx="70" cy="26" r="5" fill="#F8FAFC"/>
      <circle cx="76" cy="32" r="5" fill="#F8FAFC"/>
      <path d="M26 74 C16 64 22 42 42 40 C60 38 68 56 64 70 C60 82 40 86 26 74 Z" fill="#B45309"/>
      <ellipse cx="44" cy="60" rx="18" ry="14" fill="#D97706" transform="rotate(-30 44 60)"/>
      <path d="M30 65 Q45 50 55 60" stroke="#FDE68A" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
    </svg>`
  },

  egg_pancake: {
    id: 'egg_pancake',
    name: '酥脆金黃蛋餅',
    category: 'grains',
    categoryName: '全穀雜糧與蛋白質',
    color: '#F59E0B',
    desc: '餅皮是全穀雜糧類，包覆雞蛋是豆魚蛋肉類，營養雙重滿足！',
    svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
      <ellipse cx="50" cy="72" rx="38" ry="14" fill="#E2E8F0"/>
      <path d="M24 54 C24 44 76 38 76 48 C76 58 24 64 24 54 Z" fill="#FDE047" stroke="#D97706" stroke-width="2"/>
      <ellipse cx="36" cy="53" rx="8" ry="10" fill="#FBBF24" stroke="#D97706" stroke-width="1.5"/>
      <ellipse cx="36" cy="53" rx="5" ry="6" fill="#F59E0B"/>
      <ellipse cx="52" cy="51" rx="8" ry="10" fill="#FBBF24" stroke="#D97706" stroke-width="1.5"/>
      <ellipse cx="66" cy="49" rx="8" ry="10" fill="#FBBF24" stroke="#D97706" stroke-width="1.5"/>
      <circle cx="34" cy="49" r="1.5" fill="#15803D"/>
      <circle cx="50" cy="47" r="1.5" fill="#15803D"/>
      <circle cx="64" cy="45" r="1.5" fill="#15803D"/>
    </svg>`
  }
};

// === 8. 完成料理 (Dishes) ===
const DishAssets = {
  bento: {
    id: 'bento',
    name: '彩虹元氣營養便當',
    desc: '營養師大讚！飯、菜、肉比例完美，顏色繽紛讓人胃口大開！',
    ingredients: ['brown_rice', 'salmon', 'broccoli', 'carrot', 'apple'],
    categoriesCovered: ['grains', 'protein', 'vegetables', 'fruits'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
      <!-- 便當木盒 -->
      <rect x="15" y="20" width="90" height="80" rx="14" fill="#D97706" stroke="#B45309" stroke-width="3"/>
      <rect x="20" y="25" width="80" height="70" rx="10" fill="#FEF3C7"/>
      <!-- 分隔線 -->
      <line x1="60" y1="25" x2="60" y2="95" stroke="#D97706" stroke-width="3"/>
      <line x1="60" y1="60" x2="100" y2="60" stroke="#D97706" stroke-width="3"/>
      <!-- 左半部：糙米飯與黑芝麻 -->
      <ellipse cx="40" cy="60" rx="16" ry="24" fill="#FFFFFF"/>
      <circle cx="40" cy="50" r="1.5" fill="#1E293B"/>
      <circle cx="42" cy="58" r="1.5" fill="#1E293B"/>
      <circle cx="36" cy="66" r="1.5" fill="#1E293B"/>
      <circle cx="44" cy="70" r="1.5" fill="#1E293B"/>
      <!-- 右上半：香煎鮭魚 -->
      <ellipse cx="80" cy="42" rx="14" ry="10" fill="#FB923C"/>
      <path d="M72 40 Q80 46 88 40" stroke="#FED7AA" stroke-width="2" fill="none"/>
      <!-- 右下半：翠綠花椰菜 & 紅蘿蔔 -->
      <circle cx="72" cy="78" r="7" fill="#16A34A"/>
      <circle cx="86" cy="74" r="5" fill="#EA580C"/>
      <circle cx="88" cy="84" r="6" fill="#22C55E"/>
      <!-- 料理光芒 -->
      <path d="M10 12 L14 12 M12 10 L12 14" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
      <path d="M106 18 L110 18 M108 16 L108 20" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },

  tofu_pot: {
    id: 'tofu_pot',
    name: '高鈣野菇嫩豆腐煲',
    desc: '暖呼呼的砂鍋料理！結合植物蛋白與高鈣鮮奶，強健骨骼最棒！',
    ingredients: ['tofu', 'milk', 'broccoli', 'olive_oil'],
    categoriesCovered: ['protein', 'dairy', 'vegetables', 'fats_nuts'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
      <!-- 黑色砂鍋身 -->
      <ellipse cx="60" cy="85" rx="42" ry="14" fill="#334155"/>
      <path d="M20 54 C20 84 35 94 60 94 C85 94 100 84 100 54 Z" fill="#1E293B"/>
      <!-- 雙耳手把 -->
      <path d="M14 58 C10 58 10 70 18 70" stroke="#475569" stroke-width="4" fill="none"/>
      <path d="M106 58 C110 58 110 70 102 70" stroke="#475569" stroke-width="4" fill="none"/>
      <!-- 奶香高湯 -->
      <ellipse cx="60" cy="56" rx="38" ry="14" fill="#FEF08A"/>
      <!-- 嫩豆腐塊 -->
      <rect x="42" y="48" width="14" height="12" rx="2" fill="#FEF9C3" stroke="#FDE047"/>
      <rect x="62" y="52" width="14" height="12" rx="2" fill="#FEF9C3" stroke="#FDE047"/>
      <!-- 綠花椰菜 -->
      <circle cx="36" cy="56" r="6" fill="#16A34A"/>
      <circle cx="82" cy="56" r="6" fill="#22C55E"/>
      <!-- 熱氣騰騰 -->
      <path d="M50 30 Q54 22 50 16" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
      <path d="M68 28 Q72 20 68 14" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
    </svg>`
  },

  yogurt_bowl: {
    id: 'yogurt_bowl',
    name: '繽紛果香堅果優格碗',
    desc: '免開火的輕盈早餐！益生菌、好油與天然水果甜味，腸胃超舒爽！',
    ingredients: ['yogurt', 'oats', 'banana', 'nuts'],
    categoriesCovered: ['dairy', 'grains', 'fruits', 'fats_nuts'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
      <!-- 玻璃透明沙拉碗 -->
      <ellipse cx="60" cy="85" rx="36" ry="10" fill="#E2E8F0"/>
      <path d="M24 50 C24 82 40 90 60 90 C80 90 96 82 96 50 Z" fill="#BAE6FD" opacity="0.5"/>
      <!-- 優格基底 -->
      <ellipse cx="60" cy="52" rx="34" ry="12" fill="#F0F9FF"/>
      <!-- 燕麥片撒落 -->
      <circle cx="45" cy="52" r="2.5" fill="#FBBF24"/>
      <circle cx="50" cy="55" r="2.5" fill="#F59E0B"/>
      <!-- 香蕉切片 -->
      <circle cx="38" cy="48" r="6" fill="#FEF08A" stroke="#FACC15"/>
      <circle cx="52" cy="46" r="6" fill="#FEF08A" stroke="#FACC15"/>
      <!-- 堅果顆粒 -->
      <ellipse cx="72" cy="48" rx="5" ry="3.5" fill="#B45309" transform="rotate(-15 72 48)"/>
      <ellipse cx="80" cy="54" rx="4" ry="3" fill="#D97706"/>
      <!-- 藍莓/草莓點綴 -->
      <circle cx="65" cy="54" r="3.5" fill="#4338CA"/>
      <circle cx="44" cy="58" r="3" fill="#F43F5E"/>
    </svg>`
  },

  grain_rice: {
    id: 'grain_rice',
    name: '五彩元氣全穀炊飯',
    desc: '全穀糙米搭配金黃甜玉米與鮮脆花椰菜，飯跟蔬菜一樣多，未精製全穀營養高！',
    ingredients: ['brown_rice', 'sweet_corn', 'broccoli'],
    categoriesCovered: ['grains', 'vegetables'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
      <ellipse cx="60" cy="86" rx="42" ry="12" fill="#E2E8F0"/>
      <path d="M22 56 C22 86 38 96 60 96 C82 96 98 86 98 56 Z" fill="#F87171"/>
      <path d="M22 56 C22 46 38 42 60 42 C82 42 98 46 98 56 Z" fill="#FECACA"/>
      <path d="M28 54 C30 32 44 24 60 24 C76 24 90 32 92 54 Z" fill="#FEF3C7"/>
      <ellipse cx="48" cy="38" rx="4" ry="5.5" fill="#FACC15" stroke="#EAB308" stroke-width="1.2"/>
      <ellipse cx="72" cy="40" rx="4" ry="5" fill="#FACC15" stroke="#EAB308" stroke-width="1.2"/>
      <ellipse cx="60" cy="46" rx="4" ry="5.5" fill="#FACC15" stroke="#EAB308" stroke-width="1.2"/>
      <ellipse cx="40" cy="46" rx="5" ry="3.5" fill="#22C55E" stroke="#16A34A" stroke-width="1.2" transform="rotate(-20 40 46)"/>
      <ellipse cx="68" cy="34" rx="5" ry="3.5" fill="#22C55E" stroke="#16A34A" stroke-width="1.2" transform="rotate(15 68 34)"/>
      <ellipse cx="80" cy="48" rx="5" ry="3.5" fill="#22C55E" stroke="#16A34A" stroke-width="1.2" transform="rotate(-10 80 48)"/>
      <ellipse cx="52" cy="30" rx="3" ry="1.5" fill="#D97706" transform="rotate(-15 52 30)"/>
      <ellipse cx="58" cy="36" rx="3" ry="1.5" fill="#B45309" transform="rotate(25 58 36)"/>
      <path d="M52 18 Q56 12 52 8" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
      <path d="M68 16 Q72 10 68 6" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
    </svg>`
  },

  sweet_potato_mash: {
    id: 'sweet_potato_mash',
    name: '黃金雙豆地瓜燒',
    desc: '香甜烤地瓜佐養生紅豆與脆嫩花椰菜，雙重全穀加蔬菜，元氣滿點！',
    ingredients: ['sweet_potato', 'red_bean', 'broccoli'],
    categoriesCovered: ['grains', 'vegetables'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
      <ellipse cx="60" cy="68" rx="48" ry="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <ellipse cx="60" cy="68" rx="42" ry="19" fill="#FEF08A" opacity="0.3"/>
      <ellipse cx="60" cy="64" rx="38" ry="17" fill="#9D174D" transform="rotate(-5 60 64)"/>
      <ellipse cx="60" cy="63" rx="34" ry="14" fill="#F59E0B" transform="rotate(-5 60 63)"/>
      <ellipse cx="60" cy="63" rx="30" ry="11" fill="#FBBF24" transform="rotate(-5 60 63)"/>
      <ellipse cx="44" cy="62" rx="4" ry="2.8" fill="#7F1D1D" stroke="#991B1B" stroke-width="1"/>
      <ellipse cx="56" cy="60" rx="4" ry="2.8" fill="#7F1D1D" stroke="#991B1B" stroke-width="1"/>
      <ellipse cx="70" cy="64" rx="4" ry="2.8" fill="#7F1D1D" stroke="#991B1B" stroke-width="1"/>
      <ellipse cx="50" cy="67" rx="3.5" ry="2.5" fill="#7F1D1D" stroke="#991B1B" stroke-width="1"/>
      <circle cx="84" cy="54" r="8" fill="#16A34A"/>
      <circle cx="92" cy="58" r="6" fill="#22C55E"/>
      <path d="M86 60 L88 68" stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 42 Q54 36 50 30" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
      <path d="M64 40 Q68 34 64 28" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
    </svg>`
  },

  omurice: {
    id: 'omurice',
    name: '黃金元氣蛋包飯全餐',
    desc: '小朋友最愛的夢幻料理！滑嫩雞蛋包裹高纖糙米，蛋白質與活力充沛！',
    ingredients: ['egg', 'sweet_corn', 'sweet_potato'],
    categoriesCovered: ['protein', 'grains', 'vegetables'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
      <ellipse cx="60" cy="65" rx="50" ry="26" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <ellipse cx="60" cy="65" rx="44" ry="21" fill="#F8FAFC"/>
      <ellipse cx="60" cy="62" rx="34" ry="16" fill="#FBBF24"/>
      <path d="M42 62 Q60 52 78 62" stroke="#EF4444" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <circle cx="88" cy="58" r="4.5" fill="#FACC15"/>
      <circle cx="92" cy="64" r="4" fill="#EF4444"/>
      <circle cx="86" cy="68" r="4.5" fill="#22C55E"/>
    </svg>`
  },

  grand_feast: {
    id: 'grand_feast',
    name: '特級全席・七彩元氣盛宴',
    desc: '中華小廚神至高榮譽料理！六大類飲食口訣完美貫徹，金光閃耀！',
    ingredients: ['salmon', 'spinach', 'carrot', 'milk'],
    categoriesCovered: ['grains', 'protein', 'vegetables', 'fruits', 'dairy', 'fats_nuts'],
    score: 100,
    svg: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-xl">
      <circle cx="60" cy="60" r="54" fill="#FEF08A" stroke="#F59E0B" stroke-width="4"/>
      <circle cx="60" cy="60" r="48" fill="#FFFBEB" stroke="#FBBF24" stroke-width="2"/>
      <path d="M60 8 L60 14 M60 106 L60 112 M8 60 L14 60 M106 60 L112 60 M23 23 L28 28 M92 92 L97 97 M23 97 L28 92 M92 28 L97 23" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="40" cy="42" rx="12" ry="8" fill="#FBBF24"/>
      <circle cx="78" cy="40" r="9" fill="#10B981"/>
      <ellipse cx="78" cy="76" rx="11" ry="8" fill="#FB923C"/>
      <circle cx="42" cy="76" r="9" fill="#38BDF8"/>
      <circle cx="60" cy="60" r="12" fill="#EF4444"/>
      <circle cx="60" cy="60" r="9" fill="#FDE047"/>
      <text x="60" y="64" font-size="12" font-weight="900" fill="#B45309" text-anchor="middle">特</text>
    </svg>`
  },

  // 未解鎖神秘料理問號圖標
  mystery_dish: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-lg">
    <ellipse cx="60" cy="85" rx="46" ry="14" fill="#CBD5E1"/>
    <ellipse cx="60" cy="83" rx="44" ry="12" fill="#E2E8F0"/>
    <path d="M20 80 C20 40 40 30 60 30 C80 30 100 40 100 80 Z" fill="#F59E0B" opacity="0.9"/>
    <circle cx="60" cy="24" r="6" fill="#D97706" stroke="#FFFFFF" stroke-width="2"/>
    <text x="60" y="68" font-size="34" font-weight="900" fill="#FEF08A" text-anchor="middle">❓</text>
    <path d="M36 44 L40 44 M38 42 L38 46" stroke="#FEF08A" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M84 48 L88 48 M86 46 L86 50" stroke="#FEF08A" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // 大團圓歡聚用餐畫面 (大家一起吃大餐說好好吃)
  feast_together: `<svg viewBox="0 0 340 210" class="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="340" height="210" rx="24" fill="#FFFBEB"/>
    <circle cx="170" cy="115" r="105" fill="#FEF3C7" opacity="0.7"/>
    
    <ellipse cx="170" cy="150" rx="140" ry="48" fill="#DC2626" stroke="#991B1B" stroke-width="4"/>
    <ellipse cx="170" cy="145" rx="132" ry="42" fill="#EF4444"/>
    <ellipse cx="170" cy="142" rx="122" ry="35" fill="#F87171" opacity="0.5"/>
    
    <!-- 中央七彩元氣盛宴盤 -->
    <circle cx="170" cy="140" r="26" fill="#FEF08A" stroke="#F59E0B" stroke-width="2.5"/>
    <circle cx="170" cy="140" r="20" fill="#FB923C"/>
    <text x="170" y="145" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle">特級盛宴</text>
    
    <!-- 左邊料理：雙豆五彩炊飯與蛋包飯 -->
    <ellipse cx="95" cy="146" rx="20" ry="11" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    <ellipse cx="95" cy="144" rx="16" ry="8" fill="#FBBF24"/>
    <circle cx="86" cy="144" r="2.5" fill="#22C55E"/>
    <circle cx="102" cy="144" r="2.5" fill="#FACC15"/>
    
    <!-- 右邊料理：香煎鮮魚與青菜盛盤 -->
    <rect x="225" y="134" width="34" height="22" rx="5" fill="#D97706"/>
    <circle cx="236" cy="145" r="5" fill="#22C55E"/>
    <circle cx="248" cy="145" r="5" fill="#FB923C"/>

    <!-- 蒸氣與「好好吃！」歡樂對白氣泡 -->
    <path d="M160 110 Q165 100 160 92" stroke="#F59E0B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M180 108 Q185 98 180 90" stroke="#F59E0B" stroke-width="2.5" fill="none" stroke-linecap="round"/>

    <!-- 嘟嘟的對白：「每一道都好好吃喔！」 -->
    <g transform="translate(205, 18)">
      <rect x="0" y="0" width="125" height="34" rx="12" fill="#FFFFFF" stroke="#F43F5E" stroke-width="2"/>
      <polygon points="20,34 26,42 32,34" fill="#FFFFFF"/>
      <polygon points="19,34 26,42 33,34" fill="#FFFFFF" stroke="#F43F5E" stroke-width="2"/>
      <rect x="20" y="32" width="12" height="4" fill="#FFFFFF"/>
      <text x="62" y="22" font-size="12" font-weight="900" fill="#BE123C" text-anchor="middle">😋「每一道都好好吃！」</text>
    </g>

    <!-- 小杰的對白：「六大類營養大滿足！」 -->
    <g transform="translate(10, 18)">
      <rect x="0" y="0" width="130" height="34" rx="12" fill="#FFFFFF" stroke="#F59E0B" stroke-width="2"/>
      <polygon points="85,34 91,42 97,34" fill="#FFFFFF"/>
      <polygon points="84,34 91,42 98,34" fill="#FFFFFF" stroke="#F59E0B" stroke-width="2"/>
      <rect x="85" y="32" width="12" height="4" fill="#FFFFFF"/>
      <text x="65" y="22" font-size="12" font-weight="900" fill="#B45309" text-anchor="middle">🎉「六大類營養大滿足！」</text>
    </g>

    <!-- 左側小杰 -->
    <g transform="translate(60, 64)">
      <circle cx="20" cy="20" r="16" fill="#FED7AA"/>
      <path d="M6 14 C12 6 28 6 34 14 Z" fill="#78350F"/>
      <circle cx="15" cy="18" r="2.5" fill="#1E293B"/>
      <circle cx="25" cy="18" r="2.5" fill="#1E293B"/>
      <path d="M16 23 Q20 28 24 23 Z" fill="#DC2626"/>
      <circle cx="11" cy="22" r="2" fill="#F43F5E" opacity="0.6"/>
      <circle cx="29" cy="22" r="2" fill="#F43F5E" opacity="0.6"/>
      <path d="M6 34 L34 34 L38 55 L2 55 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
      <ellipse cx="20" cy="46" rx="8" ry="5" fill="#FEF3C7" stroke="#D97706"/>
    </g>

    <!-- 及第師父 (左中) -->
    <g transform="translate(120, 50)">
      <path d="M12 12 C10 0 28 0 26 12 Z" fill="#FFFFFF" stroke="#CBD5E1"/>
      <rect x="10" y="10" width="18" height="4" fill="#1E3A8A"/>
      <circle cx="19" cy="22" r="13" fill="#FED7AA"/>
      <path d="M13 20 Q16 17 19 20" stroke="#1E293B" stroke-width="1.5" fill="none"/>
      <path d="M21 20 Q24 17 27 20" stroke="#1E293B" stroke-width="1.5" fill="none"/>
      <path d="M16 26 C18 28 22 28 24 26" stroke="#1E293B" stroke-width="2" fill="none"/>
      <path d="M4 35 L34 35 L38 55 L0 55 Z" fill="#1E3A8A"/>
    </g>

    <!-- 嘟嘟 (右中歡喜大口吃) -->
    <g transform="translate(185, 52)">
      <circle cx="6" cy="10" r="7" fill="#78350F"/>
      <circle cx="32" cy="10" r="7" fill="#78350F"/>
      <circle cx="19" cy="22" r="14" fill="#FEE2E2"/>
      <circle cx="14" cy="20" r="2.5" fill="#1E293B"/>
      <circle cx="24" cy="20" r="2.5" fill="#1E293B"/>
      <circle cx="9" cy="23" r="2" fill="#F43F5E" opacity="0.6"/>
      <circle cx="29" cy="23" r="2" fill="#F43F5E" opacity="0.6"/>
      <ellipse cx="19" cy="26" rx="4" ry="3" fill="#BE123C"/>
      <path d="M6 35 L32 35 L36 55 L2 55 Z" fill="#F43F5E"/>
    </g>

    <!-- 特級評審長老 (右側) -->
    <g transform="translate(245, 60)">
      <circle cx="19" cy="20" r="14" fill="#FED7AA"/>
      <path d="M9 10 L19 2 L29 10 Z" fill="#F59E0B"/>
      <path d="M13 18 L17 18 M21 18 L25 18" stroke="#1E293B" stroke-width="2"/>
      <path d="M14 26 C17 38 21 38 24 26 Z" fill="#FFFFFF"/>
      <path d="M4 34 L34 34 L38 55 L0 55 Z" fill="#F59E0B"/>
    </g>

    <text x="115" y="120" font-size="14">✨</text>
    <text x="225" y="120" font-size="14">✨</text>
    <text x="170" y="85" font-size="14">❤️</text>
  </svg>`
};

// === 9. 柴犬主廚「波波」 (Chef Bobo) ===
const CharacterAssets = {
  chefBobo: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow">
    <!-- 主廚高帽 -->
    <path d="M44 32 C40 18 52 14 60 14 C68 14 80 18 76 32 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <path d="M48 20 C46 12 56 10 60 10 C64 10 74 12 72 20" stroke="#CBD5E1" stroke-width="1.5" fill="none"/>
    <rect x="42" y="30" width="36" height="8" rx="2" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
    <rect x="42" y="34" width="36" height="3" fill="#EF4444"/>
    
    <!-- 柴犬耳朵 -->
    <polygon points="34,44 26,22 46,32" fill="#D97706"/>
    <polygon points="33,40 28,26 42,32" fill="#FECACA"/>
    <polygon points="86,44 94,22 74,32" fill="#D97706"/>
    <polygon points="87,40 92,26 78,32" fill="#FECACA"/>

    <!-- 柴犬臉頰圓輪廓 -->
    <circle cx="60" cy="56" r="28" fill="#F59E0B"/>
    <!-- 白眉毛與白臉頰斑塊 -->
    <ellipse cx="46" cy="44" rx="4" ry="2.5" fill="#FFFFFF" transform="rotate(-15 46 44)"/>
    <ellipse cx="74" cy="44" rx="4" ry="2.5" fill="#FFFFFF" transform="rotate(15 74 44)"/>
    <path d="M38 52 C38 68 48 76 60 76 C72 76 82 68 82 52 C76 62 68 64 60 64 C52 64 44 62 38 52 Z" fill="#FEF3C7"/>

    <!-- 眼睛 (亮晶晶萌眼) -->
    <circle cx="48" cy="50" r="3.5" fill="#1E293B"/>
    <circle cx="47" cy="49" r="1.2" fill="#FFFFFF"/>
    <circle cx="72" cy="50" r="3.5" fill="#1E293B"/>
    <circle cx="71" cy="49" r="1.2" fill="#FFFFFF"/>

    <!-- 黑鼻子與微笑 -->
    <ellipse cx="60" cy="58" rx="3.5" ry="2.5" fill="#1E293B"/>
    <path d="M56 62 Q60 65 64 62" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
    <!-- 粉嫩舌頭吐出來 -->
    <path d="M58 63 C58 68 62 68 62 63 Z" fill="#F43F5E"/>
    <!-- 腮紅 -->
    <circle cx="40" cy="58" r="3" fill="#F43F5E" opacity="0.6"/>
    <circle cx="80" cy="58" r="3" fill="#F43F5E" opacity="0.6"/>

    <!-- 主廚紅色領結 -->
    <polygon points="60,78 50,72 50,84" fill="#EF4444"/>
    <polygon points="60,78 70,72 70,84" fill="#EF4444"/>
    <circle cx="60" cy="78" r="3" fill="#DC2626"/>

    <!-- 身體廚師服 -->
    <path d="M38 82 C38 80 46 76 60 76 C74 76 82 80 82 82 L86 108 C86 112 34 112 34 108 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <!-- 圍裙口袋與金鈕扣 -->
    <circle cx="56" cy="88" r="2" fill="#F59E0B"/>
    <circle cx="56" cy="98" r="2" fill="#F59E0B"/>
    <circle cx="64" cy="88" r="2" fill="#F59E0B"/>
    <circle cx="64" cy="98" r="2" fill="#F59E0B"/>
  </svg>`,

  // 可愛地鼠洞/木籃
  moleHole: `<svg viewBox="0 0 100 60" class="w-full h-full">
    <!-- 地洞深色陰影 -->
    <ellipse cx="50" cy="40" rx="44" ry="16" fill="#78350F" opacity="0.8"/>
    <ellipse cx="50" cy="38" rx="40" ry="13" fill="#451A03"/>
    <!-- 前緣土堆與綠草 -->
    <path d="M6 38 C14 46 86 46 94 38 C90 50 10 50 6 38 Z" fill="#92400E"/>
    <!-- 草叢點綴 -->
    <path d="M12 40 L16 32 L20 40 L24 34 L28 42" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M72 40 L76 34 L80 40 L84 32 L88 42" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`
};

// === 10. 中華小廚神故事角色頭像 (Story Characters) ===
const StoryCharacters = {
  xiaojie: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
    <!-- 小杰：少年見習廚神，紅色頭巾、陽光自信 -->
    <circle cx="50" cy="50" r="32" fill="#FED7AA"/>
    <!-- 頭巾 -->
    <path d="M20 40 C28 22 72 22 80 40 C75 32 25 32 20 40 Z" fill="#DC2626"/>
    <rect x="18" y="32" width="64" height="10" rx="3" fill="#EF4444"/>
    <rect x="42" y="34" width="16" height="6" rx="1" fill="#FEF08A"/>
    <!-- 頭髮 -->
    <path d="M22 36 Q18 48 24 54" stroke="#1E293B" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M78 36 Q82 48 76 54" stroke="#1E293B" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M32 26 Q36 14 42 24" stroke="#1E293B" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M58 26 Q64 14 68 24" stroke="#1E293B" stroke-width="4" stroke-linecap="round" fill="none"/>
    <!-- 濃眉大眼 -->
    <path d="M34 44 L44 42" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M56 42 L66 44" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="39" cy="50" r="4.5" fill="#1E293B"/>
    <circle cx="38" cy="48" r="1.5" fill="#FFFFFF"/>
    <circle cx="61" cy="50" r="4.5" fill="#1E293B"/>
    <circle cx="60" cy="48" r="1.5" fill="#FFFFFF"/>
    <!-- 腮紅與熱血笑容 -->
    <circle cx="32" cy="56" r="3" fill="#F43F5E" opacity="0.6"/>
    <circle cx="68" cy="56" r="3" fill="#F43F5E" opacity="0.6"/>
    <path d="M44 60 Q50 67 56 60" stroke="#78350F" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <path d="M46 61 Q50 66 54 61" fill="#DC2626"/>
    <!-- 廚師白袍領口 -->
    <path d="M30 76 L50 86 L70 76 L76 96 L24 96 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <path d="M46 76 L50 84 L54 76" stroke="#EF4444" stroke-width="2" fill="none"/>
  </svg>`,

  masterJidi: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
    <!-- 及第師父：嚴肅智慧大師，高聳白色主廚大帽，深藍廚袍 -->
    <path d="M32 30 C28 8 72 8 68 30 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="30" y="28" width="40" height="8" rx="2" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="30" y="32" width="40" height="3" fill="#1E3A8A"/>
    <!-- 臉孔 -->
    <circle cx="50" cy="52" r="24" fill="#FED7AA"/>
    <!-- 眉毛與眼睛 -->
    <path d="M36 46 L46 44" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
    <path d="M54 44 L64 46" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="41" cy="50" rx="3.5" ry="2" fill="#1E293B"/>
    <ellipse cx="59" cy="50" rx="3.5" ry="2" fill="#1E293B"/>
    <circle cx="41" cy="49" r="1" fill="#FFFFFF"/>
    <circle cx="59" cy="49" r="1" fill="#FFFFFF"/>
    <!-- 鬍子與嘴型 -->
    <path d="M44 58 Q50 56 56 58" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M42 62 C46 64 54 64 58 62" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <!-- 廚袍 -->
    <path d="M26 74 L50 82 L74 74 L80 98 L20 98 Z" fill="#1E3A8A" stroke="#172554" stroke-width="2"/>
    <path d="M46 76 L50 96 L54 76" stroke="#F59E0B" stroke-width="2.5" fill="none"/>
  </svg>`,

  dudu: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
    <!-- 嘟嘟：可愛開朗雙包子頭，紅色絲帶，粉色圍裙 -->
    <circle cx="24" cy="30" r="12" fill="#78350F"/>
    <circle cx="76" cy="30" r="12" fill="#78350F"/>
    <ellipse cx="24" cy="38" rx="7" ry="4" fill="#EF4444"/>
    <ellipse cx="76" cy="38" rx="7" ry="4" fill="#EF4444"/>
    <circle cx="50" cy="52" r="26" fill="#FEE2E2"/>
    <path d="M26 40 C32 30 68 30 74 40 C70 44 30 44 26 40 Z" fill="#78350F"/>
    <circle cx="40" cy="50" r="5" fill="#1E293B"/>
    <circle cx="38" cy="48" r="1.8" fill="#FFFFFF"/>
    <circle cx="41" cy="52" r="1" fill="#FFFFFF"/>
    <circle cx="60" cy="50" r="5" fill="#1E293B"/>
    <circle cx="58" cy="48" r="1.8" fill="#FFFFFF"/>
    <circle cx="61" cy="52" r="1" fill="#FFFFFF"/>
    <circle cx="32" cy="56" r="3.5" fill="#F43F5E" opacity="0.6"/>
    <circle cx="68" cy="56" r="3.5" fill="#F43F5E" opacity="0.6"/>
    <path d="M45 58 Q50 64 55 58" stroke="#BE123C" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M28 74 L50 82 L72 74 L76 96 L24 96 Z" fill="#F43F5E"/>
    <path d="M36 78 L50 84 L64 78" stroke="#FFFFFF" stroke-width="2" fill="none"/>
  </svg>`,

  masterJudge: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow">
    <!-- 特級料理長老：金光長袍與白鬍 -->
    <circle cx="50" cy="50" r="26" fill="#FED7AA"/>
    <path d="M34 26 L50 12 L66 26 L62 34 L38 34 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
    <circle cx="50" cy="22" r="4" fill="#EF4444"/>
    <path d="M24 38 Q20 54 26 64" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M76 38 Q80 54 74 64" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M40 58 C44 76 56 76 60 58 C56 66 44 66 40 58 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
    <ellipse cx="42" cy="48" rx="4" ry="2" fill="#1E293B"/>
    <ellipse cx="58" cy="48" rx="4" ry="2" fill="#1E293B"/>
    <path d="M24 74 L50 82 L76 74 L82 98 L18 98 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
    <circle cx="50" cy="88" r="5" fill="#EF4444" stroke="#FEF08A" stroke-width="1.5"/>
  </svg>`
};

// 全域導出
window.FoodAssets = FoodAssets;
window.DishAssets = DishAssets;
window.CharacterAssets = CharacterAssets;
window.StoryCharacters = StoryCharacters;
