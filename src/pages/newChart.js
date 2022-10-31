import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
const NewChart = () => {
  const data = [
    {
      date: "1/20/1970",
      value: 40415.8577343653,
    },
    {
      date: "1/20/1970",
      value: 40374.33099681075,
    },
    {
      date: "1/20/1970",
      value: 40304.8463299986,
    },
    {
      date: "1/20/1970",
      value: 40357.12123118642,
    },
    {
      date: "1/20/1970",
      value: 40431.88933930467,
    },
    {
      date: "1/20/1970",
      value: 40470.12832026779,
    },
    {
      date: "1/20/1970",
      value: 40481.086778032375,
    },
    {
      date: "1/20/1970",
      value: 40402.52332708897,
    },
    {
      date: "1/20/1970",
      value: 40391.08279041136,
    },
    {
      date: "1/20/1970",
      value: 40464.07227687911,
    },
    {
      date: "1/20/1970",
      value: 40447.8374646938,
    },
    {
      date: "1/20/1970",
      value: 40435.32173637514,
    },
    {
      date: "1/20/1970",
      value: 40357.16793649608,
    },
    {
      date: "1/20/1970",
      value: 40325.96536591621,
    },
    {
      date: "1/20/1970",
      value: 40336.397056042624,
    },
    {
      date: "1/20/1970",
      value: 40432.08542806313,
    },
    {
      date: "1/20/1970",
      value: 40460.725240265565,
    },
    {
      date: "1/20/1970",
      value: 40384.31269725552,
    },
    {
      date: "1/20/1970",
      value: 40340.1464100414,
    },
    {
      date: "1/20/1970",
      value: 40327.820365263906,
    },
    {
      date: "1/20/1970",
      value: 40268.46129015659,
    },
    {
      date: "1/20/1970",
      value: 40305.266809841465,
    },
    {
      date: "1/20/1970",
      value: 40306.28694646918,
    },
    {
      date: "1/20/1970",
      value: 40225.646416124975,
    },
    {
      date: "1/20/1970",
      value: 40166.603663175774,
    },
    {
      date: "1/20/1970",
      value: 40074.760324257586,
    },
    {
      date: "1/20/1970",
      value: 39894.34743084353,
    },
    {
      date: "1/20/1970",
      value: 39717.046440075115,
    },
    {
      date: "1/20/1970",
      value: 39688.874896277324,
    },
    {
      date: "1/20/1970",
      value: 39734.0685915938,
    },
    {
      date: "1/20/1970",
      value: 39735.612848249344,
    },
    {
      date: "1/20/1970",
      value: 39712.380970255326,
    },
    {
      date: "1/20/1970",
      value: 39624.8615286463,
    },
    {
      date: "1/20/1970",
      value: 39591.2324164513,
    },
    {
      date: "1/20/1970",
      value: 39542.856645143365,
    },
    {
      date: "1/20/1970",
      value: 39581.7408847903,
    },
    {
      date: "1/20/1970",
      value: 39559.97043253585,
    },
    {
      date: "1/20/1970",
      value: 39533.03148910748,
    },
    {
      date: "1/20/1970",
      value: 39514.25444542564,
    },
    {
      date: "1/20/1970",
      value: 39441.84781336339,
    },
    {
      date: "1/20/1970",
      value: 39432.92109571669,
    },
    {
      date: "1/20/1970",
      value: 39405.938460895995,
    },
    {
      date: "1/20/1970",
      value: 39457.36672076119,
    },
    {
      date: "1/20/1970",
      value: 39451.63139571853,
    },
    {
      date: "1/20/1970",
      value: 39436.78640684378,
    },
    {
      date: "1/20/1970",
      value: 39509.13533169023,
    },
    {
      date: "1/20/1970",
      value: 39527.74719786152,
    },
    {
      date: "1/20/1970",
      value: 39512.30174729762,
    },
    {
      date: "1/20/1970",
      value: 39471.30321650977,
    },
    {
      date: "1/20/1970",
      value: 39461.478908602025,
    },
    {
      date: "1/20/1970",
      value: 39391.91310928988,
    },
    {
      date: "1/20/1970",
      value: 39362.66116649217,
    },
    {
      date: "1/20/1970",
      value: 39377.22723940625,
    },
    {
      date: "1/20/1970",
      value: 39381.98911967796,
    },
    {
      date: "1/20/1970",
      value: 39405.94431119658,
    },
    {
      date: "1/20/1970",
      value: 39372.1144452293,
    },
    {
      date: "1/20/1970",
      value: 39343.87927956979,
    },
    {
      date: "1/20/1970",
      value: 39292.965958898,
    },
    {
      date: "1/20/1970",
      value: 39285.016415566446,
    },
    {
      date: "1/20/1970",
      value: 39245.232128963195,
    },
    {
      date: "1/20/1970",
      value: 39319.85999129287,
    },
    {
      date: "1/20/1970",
      value: 39227.78745241363,
    },
    {
      date: "1/20/1970",
      value: 39136.46205240244,
    },
    {
      date: "1/20/1970",
      value: 39071.94691728285,
    },
    {
      date: "1/20/1970",
      value: 39059.189767955286,
    },
    {
      date: "1/20/1970",
      value: 39051.49306759023,
    },
    {
      date: "1/20/1970",
      value: 39097.03753850031,
    },
    {
      date: "1/20/1970",
      value: 39113.76243289255,
    },
    {
      date: "1/20/1970",
      value: 39090.52686142834,
    },
    {
      date: "1/20/1970",
      value: 39105.99230777646,
    },
    {
      date: "1/20/1970",
      value: 39155.66804199617,
    },
    {
      date: "1/20/1970",
      value: 39181.550338137415,
    },
    {
      date: "1/20/1970",
      value: 39164.166481885724,
    },
    {
      date: "1/20/1970",
      value: 39143.534183879456,
    },
    {
      date: "1/20/1970",
      value: 39130.93539657088,
    },
    {
      date: "1/20/1970",
      value: 39096.557472390516,
    },
    {
      date: "1/20/1970",
      value: 39061.74627450276,
    },
    {
      date: "1/20/1970",
      value: 39100.287278506505,
    },
    {
      date: "1/20/1970",
      value: 39117.16718447708,
    },
    {
      date: "1/20/1970",
      value: 39232.84930057725,
    },
    {
      date: "1/20/1970",
      value: 39240.029121876025,
    },
    {
      date: "1/20/1970",
      value: 39217.51207293404,
    },
    {
      date: "1/20/1970",
      value: 39274.15673333146,
    },
    {
      date: "1/20/1970",
      value: 39231.50880488931,
    },
    {
      date: "1/20/1970",
      value: 39383.637814127855,
    },
    {
      date: "1/20/1970",
      value: 39314.33895101726,
    },
    {
      date: "1/20/1970",
      value: 39546.466569748656,
    },
    {
      date: "1/20/1970",
      value: 39662.436063826324,
    },
    {
      date: "1/20/1970",
      value: 39725.35557192332,
    },
    {
      date: "1/20/1970",
      value: 39681.20093306274,
    },
    {
      date: "1/20/1970",
      value: 39637.67195198329,
    },
    {
      date: "1/20/1970",
      value: 40092.77146391527,
    },
    {
      date: "1/20/1970",
      value: 40732.1947294494,
    },
    {
      date: "1/20/1970",
      value: 40791.495738286954,
    },
    {
      date: "1/20/1970",
      value: 40726.52556898612,
    },
    {
      date: "1/20/1970",
      value: 40800.28578029587,
    },
    {
      date: "1/20/1970",
      value: 40821.412176375,
    },
    {
      date: "1/20/1970",
      value: 40833.60059784078,
    },
    {
      date: "1/20/1970",
      value: 40822.24759022002,
    },
    {
      date: "1/20/1970",
      value: 40899.76051703604,
    },
    {
      date: "1/20/1970",
      value: 41013.2403703884,
    },
    {
      date: "1/20/1970",
      value: 41242.96474729972,
    },
    {
      date: "1/20/1970",
      value: 41274.973085596655,
    },
    {
      date: "1/20/1970",
      value: 41078.80564096513,
    },
    {
      date: "1/20/1970",
      value: 40320.35813716465,
    },
    {
      date: "1/20/1970",
      value: 39569.72883759963,
    },
    {
      date: "1/20/1970",
      value: 39444.53874234866,
    },
    {
      date: "1/20/1970",
      value: 39507.585325006796,
    },
    {
      date: "1/20/1970",
      value: 39437.2986879423,
    },
    {
      date: "1/20/1970",
      value: 39254.55760893854,
    },
    {
      date: "1/20/1970",
      value: 39239.97905828343,
    },
    {
      date: "1/20/1970",
      value: 39252.484664189586,
    },
    {
      date: "1/20/1970",
      value: 39243.75670048241,
    },
    {
      date: "1/20/1970",
      value: 39246.35598684171,
    },
    {
      date: "1/20/1970",
      value: 39249.51881752207,
    },
    {
      date: "1/20/1970",
      value: 39223.60786066403,
    },
    {
      date: "1/20/1970",
      value: 39211.05610505573,
    },
    {
      date: "1/20/1970",
      value: 39169.67978201802,
    },
    {
      date: "1/20/1970",
      value: 39194.426466363024,
    },
    {
      date: "1/20/1970",
      value: 39241.266405268856,
    },
    {
      date: "1/20/1970",
      value: 39252.758471871515,
    },
    {
      date: "1/20/1970",
      value: 39269.65172774723,
    },
    {
      date: "1/20/1970",
      value: 39286.49947713419,
    },
    {
      date: "1/20/1970",
      value: 39327.472482326,
    },
    {
      date: "1/20/1970",
      value: 39269.605157434184,
    },
    {
      date: "1/20/1970",
      value: 39273.70415735988,
    },
    {
      date: "1/20/1970",
      value: 39336.78069226287,
    },
    {
      date: "1/20/1970",
      value: 39374.364481992285,
    },
    {
      date: "1/20/1970",
      value: 39345.677027881175,
    },
    {
      date: "1/20/1970",
      value: 39328.29951261376,
    },
    {
      date: "1/20/1970",
      value: 39328.275668045324,
    },
    {
      date: "1/20/1970",
      value: 39332.24285716319,
    },
    {
      date: "1/20/1970",
      value: 39385.13059286145,
    },
    {
      date: "1/20/1970",
      value: 39397.15459262444,
    },
    {
      date: "1/20/1970",
      value: 39375.2563468811,
    },
    {
      date: "1/20/1970",
      value: 39342.250722010736,
    },
    {
      date: "1/20/1970",
      value: 39344.21026074321,
    },
    {
      date: "1/20/1970",
      value: 39316.574116164535,
    },
    {
      date: "1/20/1970",
      value: 39346.0610775824,
    },
    {
      date: "1/20/1970",
      value: 39443.33374269204,
    },
    {
      date: "1/20/1970",
      value: 39500.0122503768,
    },
    {
      date: "1/20/1970",
      value: 39518.21972026555,
    },
    {
      date: "1/20/1970",
      value: 39477.024939310584,
    },
    {
      date: "1/20/1970",
      value: 39473.690588975514,
    },
    {
      date: "1/20/1970",
      value: 39467.7644548517,
    },
    {
      date: "1/20/1970",
      value: 39467.53810837508,
    },
    {
      date: "1/20/1970",
      value: 39457.113796519625,
    },
    {
      date: "1/20/1970",
      value: 39453.352310840426,
    },
    {
      date: "1/20/1970",
      value: 39528.739147195054,
    },
    {
      date: "1/20/1970",
      value: 39548.74089709631,
    },
    {
      date: "1/20/1970",
      value: 39607.22805377008,
    },
    {
      date: "1/20/1970",
      value: 39737.58870842802,
    },
    {
      date: "1/20/1970",
      value: 39693.88080832944,
    },
    {
      date: "1/20/1970",
      value: 39668.66102714936,
    },
    {
      date: "1/20/1970",
      value: 39616.99491884768,
    },
    {
      date: "1/20/1970",
      value: 39568.096657881295,
    },
    {
      date: "1/20/1970",
      value: 39552.10432075221,
    },
    {
      date: "1/20/1970",
      value: 39497.153613922004,
    },
    {
      date: "1/20/1970",
      value: 39482.353140199135,
    },
    {
      date: "1/20/1970",
      value: 39519.12992920305,
    },
    {
      date: "1/20/1970",
      value: 39440.24026574057,
    },
    {
      date: "1/20/1970",
      value: 39465.44071440721,
    },
    {
      date: "1/20/1970",
      value: 39463.40835597247,
    },
    {
      date: "1/20/1970",
      value: 39397.607353566855,
    },
    {
      date: "1/20/1970",
      value: 39385.88230694361,
    },
    {
      date: "1/20/1970",
      value: 39412.07792506078,
    },
    {
      date: "1/20/1970",
      value: 39444.16420154973,
    },
    {
      date: "1/20/1970",
      value: 39446.28569892048,
    },
    {
      date: "1/20/1970",
      value: 39473.357948832745,
    },
    {
      date: "1/20/1970",
      value: 39569.86038141661,
    },
    {
      date: "1/20/1970",
      value: 39540.07699880531,
    },
    {
      date: "1/20/1970",
      value: 39543.519593283476,
    },
    {
      date: "1/20/1970",
      value: 39560.739961918385,
    },
    {
      date: "1/20/1970",
      value: 39545.62931397187,
    },
    {
      date: "1/20/1970",
      value: 39545.26285883283,
    },
    {
      date: "1/20/1970",
      value: 39601.250230773985,
    },
    {
      date: "1/20/1970",
      value: 39695.74544550673,
    },
    {
      date: "1/20/1970",
      value: 39777.9328115448,
    },
    {
      date: "1/20/1970",
      value: 39696.258829289676,
    },
    {
      date: "1/20/1970",
      value: 39673.80918938849,
    },
    {
      date: "1/20/1970",
      value: 39645.4995278469,
    },
    {
      date: "1/20/1970",
      value: 39683.09754554235,
    },
    {
      date: "1/20/1970",
      value: 39733.07543572621,
    },
    {
      date: "1/20/1970",
      value: 39693.95265990956,
    },
    {
      date: "1/20/1970",
      value: 39656.36335874451,
    },
    {
      date: "1/20/1970",
      value: 39654.22387310107,
    },
    {
      date: "1/20/1970",
      value: 39633.51084217549,
    },
    {
      date: "1/20/1970",
      value: 39602.54594372496,
    },
    {
      date: "1/20/1970",
      value: 39562.9067357432,
    },
    {
      date: "1/20/1970",
      value: 39463.2848586923,
    },
    {
      date: "1/20/1970",
      value: 39343.89623447487,
    },
    {
      date: "1/20/1970",
      value: 39304.65378423683,
    },
    {
      date: "1/20/1970",
      value: 39302.53534018252,
    },
    {
      date: "1/20/1970",
      value: 39250.19871168105,
    },
    {
      date: "1/20/1970",
      value: 39255.176486937045,
    },
    {
      date: "1/20/1970",
      value: 39250.90924871354,
    },
    {
      date: "1/20/1970",
      value: 39249.431769554685,
    },
    {
      date: "1/20/1970",
      value: 39245.382923437624,
    },
    {
      date: "1/20/1970",
      value: 39255.855858960545,
    },
    {
      date: "1/20/1970",
      value: 39270.10035402045,
    },
    {
      date: "1/20/1970",
      value: 39263.43598787574,
    },
    {
      date: "1/20/1970",
      value: 39317.950384102616,
    },
    {
      date: "1/20/1970",
      value: 39315.18380588308,
    },
    {
      date: "1/20/1970",
      value: 39282.03945508668,
    },
    {
      date: "1/20/1970",
      value: 39213.36718163701,
    },
    {
      date: "1/20/1970",
      value: 39207.735578999745,
    },
    {
      date: "1/20/1970",
      value: 39180.17152896031,
    },
    {
      date: "1/20/1970",
      value: 39147.52864094204,
    },
    {
      date: "1/20/1970",
      value: 39152.63323744872,
    },
    {
      date: "1/20/1970",
      value: 39173.98227348459,
    },
    {
      date: "1/20/1970",
      value: 39173.52267299824,
    },
    {
      date: "1/20/1970",
      value: 39187.54064866102,
    },
    {
      date: "1/20/1970",
      value: 39199.96896696124,
    },
    {
      date: "1/20/1970",
      value: 39229.95448462391,
    },
    {
      date: "1/20/1970",
      value: 39187.8512177573,
    },
    {
      date: "1/20/1970",
      value: 39198.0153507347,
    },
    {
      date: "1/20/1970",
      value: 39275.42924609468,
    },
    {
      date: "1/20/1970",
      value: 39228.76390017102,
    },
    {
      date: "1/20/1970",
      value: 39206.525343732224,
    },
    {
      date: "1/20/1970",
      value: 39192.10629052346,
    },
    {
      date: "1/20/1970",
      value: 39195.890264602036,
    },
    {
      date: "1/20/1970",
      value: 39156.784140759984,
    },
    {
      date: "1/20/1970",
      value: 39136.20374945895,
    },
    {
      date: "1/20/1970",
      value: 39084.95744054528,
    },
    {
      date: "1/20/1970",
      value: 39071.33449933508,
    },
    {
      date: "1/20/1970",
      value: 39030.66435263743,
    },
    {
      date: "1/20/1970",
      value: 39037.15311252576,
    },
    {
      date: "1/20/1970",
      value: 39150.36449061943,
    },
    {
      date: "1/20/1970",
      value: 39133.66594081773,
    },
    {
      date: "1/20/1970",
      value: 39197.87809084376,
    },
    {
      date: "1/20/1970",
      value: 39204.50542324411,
    },
    {
      date: "1/20/1970",
      value: 39160.87663279592,
    },
    {
      date: "1/20/1970",
      value: 39127.135620446825,
    },
    {
      date: "1/20/1970",
      value: 39128.830315759435,
    },
    {
      date: "1/20/1970",
      value: 39129.89828394446,
    },
    {
      date: "1/20/1970",
      value: 39093.47158881142,
    },
    {
      date: "1/20/1970",
      value: 39084.0338561231,
    },
    {
      date: "1/20/1970",
      value: 39040.03848364,
    },
    {
      date: "1/20/1970",
      value: 39081.445346075096,
    },
    {
      date: "1/20/1970",
      value: 39106.29021758284,
    },
    {
      date: "1/20/1970",
      value: 39099.09668890555,
    },
    {
      date: "1/20/1970",
      value: 39071.25746778658,
    },
    {
      date: "1/20/1970",
      value: 39005.60001495946,
    },
    {
      date: "1/20/1970",
      value: 39059.88277034918,
    },
    {
      date: "1/20/1970",
      value: 38931.63718650022,
    },
    {
      date: "1/20/1970",
      value: 38840.64762888434,
    },
    {
      date: "1/20/1970",
      value: 38841.40859025816,
    },
    {
      date: "1/20/1970",
      value: 38856.211872884945,
    },
    {
      date: "1/20/1970",
      value: 38870.70429859545,
    },
    {
      date: "1/20/1970",
      value: 38774.01040258053,
    },
    {
      date: "1/20/1970",
      value: 38744.73392848421,
    },
    {
      date: "1/20/1970",
      value: 38719.41262298529,
    },
    {
      date: "1/20/1970",
      value: 38621.643487380155,
    },
    {
      date: "1/20/1970",
      value: 38663.87667657173,
    },
    {
      date: "1/20/1970",
      value: 38810.140517390224,
    },
    {
      date: "1/20/1970",
      value: 38869.314041939186,
    },
    {
      date: "1/20/1970",
      value: 38828.57289177029,
    },
    {
      date: "1/20/1970",
      value: 38844.03528810117,
    },
    {
      date: "1/20/1970",
      value: 38882.3269441826,
    },
    {
      date: "1/20/1970",
      value: 38907.903905725274,
    },
    {
      date: "1/20/1970",
      value: 38844.225926429586,
    },
    {
      date: "1/20/1970",
      value: 38868.452890435714,
    },
    {
      date: "1/20/1970",
      value: 38886.557085187385,
    },
    {
      date: "1/20/1970",
      value: 38865.06191685378,
    },
    {
      date: "1/20/1970",
      value: 38863.41655069586,
    },
    {
      date: "1/20/1970",
      value: 38875.01016742721,
    },
    {
      date: "1/20/1970",
      value: 38875.4137547094,
    },
    {
      date: "1/20/1970",
      value: 38883.82419484946,
    },
    {
      date: "1/20/1970",
      value: 38771.69469251223,
    },
    {
      date: "1/20/1970",
      value: 38768.29508806567,
    },
    {
      date: "1/20/1970",
      value: 38743.82939556211,
    },
    {
      date: "1/20/1970",
      value: 38701.875231133614,
    },
    {
      date: "1/20/1970",
      value: 38672.24093031238,
    },
    {
      date: "1/20/1970",
      value: 38704.78825225745,
    },
    {
      date: "1/20/1970",
      value: 38692.10961899446,
    },
    {
      date: "1/20/1970",
      value: 38675.90755561043,
    },
    {
      date: "1/20/1970",
      value: 38691.11040868137,
    },
    {
      date: "1/20/1970",
      value: 38722.02916719832,
    },
    {
      date: "1/20/1970",
      value: 38731.923496616255,
    },
    {
      date: "1/20/1970",
      value: 38748.68111031023,
    },
    {
      date: "1/20/1970",
      value: 38733.62045214658,
    },
    {
      date: "1/20/1970",
      value: 38745.07642566925,
    },
    {
      date: "1/20/1970",
      value: 38778.66484535526,
    },
    {
      date: "1/20/1970",
      value: 38736.8092071621,
    },
    {
      date: "1/20/1970",
      value: 38707.774901357254,
    },
    {
      date: "1/20/1970",
      value: 38713.2642905603,
    },
    {
      date: "1/20/1970",
      value: 38713.10420013968,
    },
    {
      date: "1/20/1970",
      value: 38649.20654044507,
    },
  ];
  //   for (let num = 30; num >= 0; num--) {
  //     data.push({
  //       date: subDays(new Date(), num).toISOString().substr(0, 10),
  //       value: 1 + Math.random(),
  //     });
  //   }
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <Area dataKey="value"></Area>
        <XAxis dataKey="date" />
        <YAxis dataKey="value" />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default NewChart;
