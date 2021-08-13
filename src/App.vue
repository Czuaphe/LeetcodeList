<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  beforeCreate() {
    console.log("App beforeCreate :>> ");
  },
  created() {
    console.log("App created :>> ");
  },
  beforeMount() {
    console.log("App beforeMount :>> ");
  },
  mounted() {
    console.log("App mounted :>> ");
    // leetcode
    // this.runLeetcode();
    // others code
    this.runOthers()
  },
  methods: {
    // 运行所有的leetcode项目
    runLeetcode() {
      // leetcode 76
      // let s = "obzcopzocynyrsgsarijyxnkpnukkrvzuwdjldxndmnvevpgmxrmvfwkutwekrffnloyqnntbdohyfqndhzyoykiripdzwiojyoznbtogjyfpouuxvumtewmmnqnkadvzrvouqfbbdiqremqzgevkbhyoznacqwbhtrcjwfkzpdstpjswnpiqxjhywjanhdwavajrhwtwzlrqwmombxcaijzevbtcfsdcuovckoalcseaesmhrrizcjgxkbartdtotpsefsrjmvksqyahpijsrppdqpvmuocofuunonybjivbjviyftsyiicbzxnwnrmvlgkzticetyfcvqcbjvbufdxgcmesdqnowzpshuwcseenwjqhgsdlxatamysrohfnixfprdsljyyfhrnnjsagtuihuczilgvtfcjwgdhpbixlzmakebszxbhrdibpoxiwztshwczamwnninzmqrmpsviydkptjzpktksrortapgpxwojofxeasoyvyprjoguhqobehugwdvtzlenrcttuitsiijswpogicjolfxhiscjggzzissfcnxnvgftxvbfzkukqrtalvktdjsodmtgzqtuyaqvvrbuexgwqzwduixzrpnvegddyyywaquxjxrnuzlmyipuqotkghfkpknqinoidifnfyczzonxydtqroazxhjnrxfbmtlqcsfhshjrxwqvblovaouxwempdrrplefnxmwrwfjtebrfnfanvvmtbzjesctdgbsfnpxlwihalyiafincfcwgdfkvhebphtxukwgjgplrntsuchyjjuqozakiglangxkttsczhnswjksnuqwflmumpexxrznzwxurrysaokwxxqkrggytvsgkyfjrewrcvntomnoazmzycjrjrqemimyhriyxgrzcfuqtjhvjtuhwfzhwpljzajitrhryaqchnuawbxhxrpvyqcvhpggrpplhychyulijhkglinibedauhvdydkqszdbzfkzbvhldstocgydnbfjkcnkfxcyyfbzmmyojgzmasccaahpdnzproaxnexnkamwmkmwslksfpwirexxtymkmojztgmfhydvlqtddewjvsrmyqjrpycbmndhupmdqqabiuelacuvxnhxgtpvrtwfgzpcrbhhtikbcqpctlxszgpfbgcsbaaiapmtsucocmpecgixshrrnhyrpalralbccnxvjzjllarqhznzghswqsnfuyywmzbopyjyauknxddgdthlabjqtwxpxwljvoxkpjjpfvccyikbbrpdsyvlxscuoofkecwtnfkvcnzbxkeabtdusyhrqklhaqreupakxkfzxgawqfwsaboszvlshwzhosojjotgyagygguzntrouhiweuomqptfjjqsxlbylhwtpssdlltgubczxslqjgxuqnmpynnlwjgmebrpokxjnbiltvbebyytnnjlcwyzignmhedwqbfdepqakrelrdfesqrumptwwgifmmbepiktxavhuavlfaqxqhreznbvvlakzeoomykkzftthoemqwliednfsqcnbexbimrvkdhllcesrlhhjsspvfupxwdybablotibypmjutclgjurbmhztboqatrdwsomnxnmocvixxvfiqwmednahdqhxjkvcyhpxxdmzzuyyqdjibvmfkmonfxmohhshpkhmntnoplphqyprveyfsmsxjfosmicdsjrieeytpnbhlsziwxnpmgoxneqbnufhfwrjbqcsdfarybzwaplmxckkgclvwqdbpumsmqkswmjwnkuqbicykoisqwoootrdpdvcuiuswfqmrkctsgrevcxnyncmivsxbpbxzxpwchiwtkroqisnmrbmefbmatmdknaklpgpyqlsccgunaibsloyqpnsibwuowebomrmcegejozypjzjunjmeygozcjqbnrpakdermjcckartbcppmbtkhkmmtcngteigjnxxyzaibtdcwutkvpwezisskfaeljmxyjwykwglqlnofhycwuivdbnpintuyhtyqpwaoelgpbuwiuyeqhbvkqlsfgmeoheexbhnhutxvnvfjwlzfmvpcghiowocdsjcvqrdmkcizxnivbianfpsnzabxqecinhgfyjrjlbikrrgsbgfgyxtzzwwpayapfgueroncpxogouyrdgzdfucfrywtywjeefkvtzxlwmrniselyeodysirqflpduvibfdvedgcrzpzrunpadvawfsmmddqzaaahfxlifobffbyzqqbtlcpquedzjvykvarayfldvmkapjcfzfbmhscdwhciecsbdledspgpdtsteuafzbrjuvmsfrajtulwirzagiqjdiehefmfifocadxfuxrpsemavncdxuoaetjkavqicgndjkkfhbvbhjdcygfwcwyhpirrfjziqonbyxhibelinpllxsjzoiifscwzlyjdmwhnuovvugfhvquuleuzmehggdfubpzolgbhwyeqekzccuypaspozwuhbzbdqdtejuniuuyagackubauvriwneeqfhtwkocuipcelcfrcjcymcuktegiikyosumeioatfcxrheklookaqekljtvtdwhxsteajevpjviqzudnjnqbucnfvkybggaybebljwcstmktgnipdyrxbgewqczzkaxmeazpzbjsntltjwlmuclxirwytvxgvxscztryubtjweehapvxrguzzsatozzjytnamfyiitreyxmanhzeqwgpoikcjlokebksgkaqetverjegqgkicsyqcktmwjwakivtsxjwrgakphqincqrxqhzbcnxljzwturmsaklhnvyungjrxaonjqomdnxpnvihmwzphkyuhwqwdboabepmwgyatyrgtboiypxfavbjtrgwswyvcqhzwibpisydtmltbkydhznbsvxktyfxopwkxzbftzknnwipghuoijrbgqnzovxckvojvsqqraffwowfvqvfcmiicwitrhxdeombgesxexedlakitfovtydxunqnwqqdeeekiwjnwoshqcsljiicgobbbuqakjdonjawgjlezdnqhfdqnmsuavxdpnfzwipmspiabveaarshzwxmirgkmfncvtdrdvfxkpxlkdokxgtwcskmjryyymcthfnkasinihaunohkxaibtsqelockaefjmsuolebtnepauwmrxutspjwaxbmahsjtkfkxlnszribmeofbkyvbjscjtqjakuwvcgunvnonvqbbggfshauqsyznokqbhowjusypfnecffenojfvlblgzntqzlrgzprvhqnpfrrkzxznieiuivajivzijsqijigtatifmbplzqahuidegfoobpymkputzamzvweiyvvzlwihgmmmrcburbgbsdxrfjsbiylitghgcpqjbevvgypxcybubyoijijrhuzcdijfybqbfowlookqmlnplbxvjjosfqviygqyhgamuwzjklbyzopkrnhbywtfoqomweldmlrhjqswctubiknzzvcztyehouvnyiqnvkufaobehxhrjvtisxjlxoumipzjarwvbsaegdkpbsjmpevjbewzuqnfhoohhmdjgfpmjzdmtmykqvtucptwfidpwtwffzolffzqfdearclkyeecuzabjeqhxpmfodsvisnpxrqowdawheydfyhoexvcmihdlzavtqlshdhdgjzpozvvackebhgqppvcrvymljfvooauxcjnbejdivikcoaugxwzsulgfqdtefpehbrlhaoqxwcancuvbqutnfbuygoemditeagmcveatgaikwflozgdhkyfqmjcruyyuemwbqwxyyfiwnvlmbovlmccaoguieu",
      // t = "cjgamyzjwxrgwedhsexosmswogckohesskteksqgrjonnrwhywxqkqmywqjlxnfrayykqotkzhxmbwvzstrcjfchvluvbaobymlrcgbbqaprwlsqglsrqvynitklvzmvlamqipryqjpmwhdcsxtkutyfoiqljfhxftnnjgmbpdplnuphuksoestuckgopnlwiyltezuwdmhsgzzajtrpnkkswsglhrjprxlvwftbtdtacvclotdcepuahcootzfkwqhtydwrgqrilwvbpadvpzwybmowluikmsfkvbebrxletigjjlealczoqnnejvowptikumnokysfjyoskvsxztnqhcwsamopfzablnrxokdxktrwqjvqfjimneenqvdxufahsshiemfofwlyiionrybfchuucxtyctixlpfrbngiltgtbwivujcyrwutwnuajcxwtfowuuefpnzqljnitpgkobfkqzkzdkwwpksjgzqvoplbzzjuqqgetlojnblslhpatjlzkbuathcuilqzdwfyhwkwxvpicgkxrxweaqevziriwhjzdqanmkljfatjifgaccefukavvsfrbqshhswtchfjkausgaukeapanswimbznstubmswqadckewemzbwdbogogcysfxhzreafwxxwczigwpuvqtathgkpkijqiqrzwugtr";
      // let s = "ab", t = "a";
      // console.log("s.length :>> ", s.length);
      // console.log("t.length :>> ", t.length);
      // console.time();
      // let result = this.minWindow(s, t);
      // console.timeEnd();
      // console.log("result :>> ", result);

      // leetcode 3
      // let s = "aub";
      // let result = this.lengthOfLongestSubstring(s);
      // console.log("result :>> ", result);
      // console.log("currect :>> ", 3);

      // leetcode 119
      // let result = this.getRow(4);
      // console.log("result :>> ", result);

      // leetcode 28
      // let haystack = 'hello'
      // let needle = 'll'
      // let result = this.strStr(haystack, needle)
      // console.log('result :>> ', result);

    },
    runOthers() {
      // 字节面试题：smartRepeat
      // let str = "2[1[a]3[b]2[3[c]4[d]]]"
      // let result = this.smartRepeat(str)
      // console.log('result :>> ', result);
    },
    // leetcode 76
    minWindow: function (s, t) {
      // 初始化数据
      // 创建左右指针，和结果字符串，创建字典表 如： aba -> {a: 2, b: 1}
      let l = 0,
        r = 0,
        res = "";
      const m = new Map();
      for (let i = 0; i < t.length; i++) {
        const c = t[i];
        m.set(c, m.has(c) ? m.get(c) + 1 : 1);
      }
      let needType = m.size;
      // 开始遍历字符串，录找结果
      while (r < s.length) {
        // 移动右指针，录找结果，
        // 如果字符是否目标串，种类数量 - 1，种类数量为0，种类 - 1，接近结果
        const c = s[r];
        if (m.has(c)) {
          m.set(c, m.get(c) - 1);
          if (m.get(c) === 0) needType -= 1;
        }
        r++;
        // 需要匹配的种类为0，找到一个结果，开始优化
        while (needType === 0) {
          // 当前结果如果比原先的结果更短，赋值
          let newRes = s.slice(l, r);
          if (!res || newRes.length < res.length) res = newRes;

          // 移动左指针，优化结果
          // 如果字符在目标串中，种类数量 + 1，种类数量不为0，种类 + 1，结果无效，重新录找
          const c2 = s[l];
          if (m.has(c2)) {
            m.set(c2, m.get(c2) + 1);
            if (m.get(c2) === 1) needType += 1;
          }
          l++;
        }
      }
      // 返回结果值
      return res;
    },
    // leetcode 3
    lengthOfLongestSubstring: function (s) {
      if (s.length == 1) return 1;
      let l = 0,
        r = 0,
        res = 0;
      let m = new Set();
      let repeatValue = "";
      while (r < s.length) {
        const c = s[r];
        if (m.has(c)) {
          repeatValue = c;
        } else {
          m.add(c);
        }
        r++;

        while (repeatValue) {
          if (res < r - l - 1) res = r - l - 1;
          const c2 = s[l];
          if (c2 == repeatValue) {
            repeatValue = "";
          } else {
            m.delete(c2);
          }
          l++;
        }
      }
      return res < m.size ? m.size : res;
    },
    // leetcode 119
    getRow: function (rowIndex) {
      let array = Array(rowIndex + 1).fill(1);
      for (let i = 1; i < array.length - 1; i++) {
        for (let j = i; j > 0; j--) {
          array[j] = array[j] + array[j - 1];
        }
      }
      return array;
    },
    // leetcode 28
    strStr: function (haystack, needle) {
      let flag;
      if (needle.length == 0) return 0;
      for (let i = 0; i < haystack.length; ) {
        flag = true;
        for (let j = 0; j < needle.length; j++) {
          if (needle[j] != haystack[i + j]) {
            flag = false;
            break;
          }
        }
        if (flag) {
          return i;
        } else {
          let word = haystack[i + needle.length];
          let index = needle.lastIndexOf(word);
          if (index >= 0) {
            i += needle.length - index;
          } else {
            i += needle.length + 1;
          }
        }
      }
      return -1;
    },
    // 字节面试题
    smartRepeat: function(str) {
      // let str = '2[abc]'
      let stack = []
      let temp = ''
      let array = []
      let index = -1
      for (let i = 0 ; i < str.length; i ++) {
        let char = str[i]
        if (!isNaN(Number(char))) {
          let number = Number(char)
          stack.push(number)
          index ++
        } else if (char == '[') {
          stack.push(char)
        } else if (char == ']') {
          stack.pop()
          /** 字符串相乘 */ 
          let num = stack.pop()
          // 值为空，则结束当前层，实际值为上层字符串连接
          if (temp == '') {
            // 上层的都连起来
            temp = array[index + 1].join('')
          }
          // 得到重复的串
          let repeat = ''
          for (let j = 0; j < num; j ++) {
            repeat += temp
          }
          temp = repeat
          // 放入对应层数组
          if (array[index] !== undefined) {
            array[index].push(temp)
          } else {
            array[index] = [temp]
          }

          temp = ''
          index --;
        } else {
          temp += char
        }
      }
      // console.log('array :>> ', array[0]);
      return array[0]
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
