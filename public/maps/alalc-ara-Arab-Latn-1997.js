var map = function(Interscript) {Interscript.define_map("alalc-ara-Arab-Latn-1997", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.parallel_regexp_gsub(s, map.cache.PRE_4333344039008503376);
return s;
};
map.cache.PRE_4333344039008503376 = ["(?<_0>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_1>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_2>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_3>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_4>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_5>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_6>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_7>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_8>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_9>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_10>ِي(?=(?:َ|u064f)))|(?<_11>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ][؀-ۿ])ة)|(?<_12>(?<="+Interscript.aliases.boundary+"ال[؀-ۿ][؀-ۿ])ة)|(?<_13>اللَّه)|(?<_14>(?<!(?:"+Interscript.aliases.boundary+"ال|"+Interscript.aliases.boundary+"))آ(?!(?:"+Interscript.aliases.boundary+"|ء)))|(?<_15>ِيّ"+Interscript.aliases.boundary+")|(?<_16>عُو)|(?<_17>َوْ)|(?<_18>َيْ)|(?<_19>ُوا)|(?<_20>أَ(?![ةل]))|(?<_21>َآ(?![ثل]))|(?<_22>ُوّ)|(?<_23>َوّ)|(?<_24>َيّ)|(?<_25>ِيّ)|(?<_26>"+Interscript.aliases.boundary+"ال)|(?<_27>َوْ)|(?<_28>َيْ)|(?<_29>عَ)|(?<_30>عِ)|(?<_31>عُ)|(?<_32>ِي)|(?<_33>ُو)|(?<_34>َا)|(?<_35>َى)|(?<_36>ة"+Interscript.aliases.line_end+")|(?<_37>أو)|(?<_38>أي)|(?<_39>"+Interscript.aliases.boundary+"أ)|(?<_40>أ"+Interscript.aliases.boundary+")|(?<_41>إي)|(?<_42>ئ"+Interscript.aliases.boundary+")|(?<_43>"+Interscript.aliases.boundary+"ا)|(?<_44>"+Interscript.aliases.boundary+"آ)|(?<_45>(?<=ل)آ)|(?<_46>بّ)|(?<_47>تّ)|(?<_48>ثّ)|(?<_49>جّ)|(?<_50>حّ)|(?<_51>خّ)|(?<_52>دّ)|(?<_53>ذّ)|(?<_54>رّ)|(?<_55>زّ)|(?<_56>سّ)|(?<_57>شّ)|(?<_58>صّ)|(?<_59>ضّ)|(?<_60>طّ)|(?<_61>ظّ)|(?<_62>غّ)|(?<_63>فّ)|(?<_64>قّ)|(?<_65>كّ)|(?<_66>لّ)|(?<_67>مّ)|(?<_68>نّ)|(?<_69>هّ)|(?<_70>وّ)|(?<_71>يّ)|(?<_72>ًى)|(?<_73>ًا)|(?<_74>ىً)|(?<_75>اً)|(?<_76>هَ)|(?<_77>َا)|(?<_78>َى)|(?<_79>ُو)|(?<_80>ِي)|(?<_81>َ)|(?<_82>ِ)|(?<_83>ُ)|(?<_84>ْ)|(?<_85>ة)|(?<_86>ء)|(?<_87>أ)|(?<_88>ؤ)|(?<_89>إ)|(?<_90>ئ)|(?<_91>ا)|(?<_92>آ)|(?<_93>ٌ)|(?<_94>ً)|(?<_95>ٍ)|(?<_96>،)|(?<_97>ب)|(?<_98>ﺑ)|(?<_99>ﺒ)|(?<_100>ﺐ)|(?<_101>ت)|(?<_102>ﺗ)|(?<_103>ﺘ)|(?<_104>ﺖ)|(?<_105>ث)|(?<_106>ﺛ)|(?<_107>ﺜ)|(?<_108>ﺚ)|(?<_109>ج)|(?<_110>ﺟ)|(?<_111>ﺠ)|(?<_112>ﺞ)|(?<_113>ح)|(?<_114>ﺣ)|(?<_115>ﺤ)|(?<_116>ﺢ)|(?<_117>خ)|(?<_118>ﺧ)|(?<_119>ﺨ)|(?<_120>ﺦ)|(?<_121>د)|(?<_122>ﺪ)|(?<_123>ﺣ)|(?<_124>ﺻ)|(?<_125>ﺿ)|(?<_126>ﻃ)|(?<_127>ﻇ)|(?<_128>ذ)|(?<_129>ﺬ)|(?<_130>ر)|(?<_131>ﺮ)|(?<_132>ز)|(?<_133>ﺰ)|(?<_134>س)|(?<_135>ﺳ)|(?<_136>ﺴ)|(?<_137>ﺲ)|(?<_138>ش)|(?<_139>ﺷ)|(?<_140>ﺸ)|(?<_141>ﺶ)|(?<_142>ص)|(?<_143>ﺻ)|(?<_144>ﺼ)|(?<_145>ﺺ)|(?<_146>ض)|(?<_147>ﺿ)|(?<_148>ﻀ)|(?<_149>ﺾ)|(?<_150>ط)|(?<_151>ﻃ)|(?<_152>ﻄ)|(?<_153>ﻂ)|(?<_154>ظ)|(?<_155>ﻇ)|(?<_156>ﻈ)|(?<_157>ﻆ)|(?<_158>ع)|(?<_159>ﻋ)|(?<_160>ﻌ)|(?<_161>ﻊ)|(?<_162>غ)|(?<_163>ﻏ)|(?<_164>ﻐ)|(?<_165>ﻎ)|(?<_166>ف)|(?<_167>ﻓ)|(?<_168>ﻔ)|(?<_169>ﻒ)|(?<_170>ق)|(?<_171>ﻗ)|(?<_172>ﻘ)|(?<_173>ﻖ)|(?<_174>ك)|(?<_175>ﻛ)|(?<_176>ﻜ)|(?<_177>ﻚ)|(?<_178>ل)|(?<_179>ﻟ)|(?<_180>ﻠ)|(?<_181>ﻞ)|(?<_182>م)|(?<_183>ﻣ)|(?<_184>ﻤ)|(?<_185>ﻢ)|(?<_186>ن)|(?<_187>ﻧ)|(?<_188>ﻨ)|(?<_189>ﻦ)|(?<_190>ه)|(?<_191>ﻫ)|(?<_192>ﻬ)|(?<_193>ﻪ)|(?<_194>و)|(?<_195>ﻮ)|(?<_196>ي)|(?<_197>ﻳ)|(?<_198>ﻴ)|(?<_199>ﻱ)|(?<_200>َ)|(?<_201>ُ)|(?<_202>ِ)|(?<_203>گ)|(?<_204>ڴ)|(?<_205>پ)|(?<_206>چ)|(?<_207>ژ)|(?<_208>ڤ)|(?<_209>ۋ)|(?<_210>ڥ)|(?<_211>؀)|(?<_212>؁)|(?<_213>؂)|(?<_214>؃)|(?<_215>؄)|(?<_216>؅)|(?<_217>؆)|(?<_218>؇)|(?<_219>؈)|(?<_220>؉)|(?<_221>؊)|(?<_222>؋)|(?<_223>؍)|(?<_224>؎)|(?<_225>؏)|(?<_226>ؐ)|(?<_227>ؑ)|(?<_228>ؒ)|(?<_229>ؓ)|(?<_230>ؔ)|(?<_231>ؕ)|(?<_232>ؖ)|(?<_233>ؗ)|(?<_234>ؘ)|(?<_235>ؙ)|(?<_236>ؚ)|(?<_237>؛)|(?<_238>؜)|(?<_239>؝)|(?<_240>؞)|(?<_241>؟)|(?<_242>ؠ)|(?<_243>ب)|(?<_244>ت)|(?<_245>ث)|(?<_246>ج)|(?<_247>ح)|(?<_248>خ)|(?<_249>د)|(?<_250>ذ)|(?<_251>ر)|(?<_252>ز)|(?<_253>س)|(?<_254>ش)|(?<_255>ص)|(?<_256>ض)|(?<_257>ط)|(?<_258>ظ)|(?<_259>ع)|(?<_260>غ)|(?<_261>ػ)|(?<_262>ؼ)|(?<_263>ؽ)|(?<_264>ؾ)|(?<_265>ؿ)|(?<_266>ـ)|(?<_267>ف)|(?<_268>ق)|(?<_269>ك)|(?<_270>ل)|(?<_271>م)|(?<_272>ن)|(?<_273>و)|(?<_274>١)|(?<_275>٢)|(?<_276>٣)|(?<_277>٤)|(?<_278>٥)|(?<_279>٦)|(?<_280>٧)|(?<_281>٨)|(?<_282>٩)|(?<_283>٪)|(?<_284>٫)|(?<_285>٬)|(?<_286>٭)|(?<_287>ٮ)|(?<_288>ٯ)|(?<_289>ٰ)|(?<_290>ٱ)|(?<_291>ٲ)|(?<_292>ٳ)|(?<_293>ٴ)|(?<_294>ٵ)|(?<_295>ٶ)|(?<_296>ٷ)|(?<_297>ٸ)|(?<_298>ٹ)|(?<_299>ٺ)|(?<_300>ٻ)|(?<_301>ټ)|(?<_302>ٽ)|(?<_303>ٿ)|(?<_304>ڀ)|(?<_305>ځ)|(?<_306>ڂ)|(?<_307>ڃ)|(?<_308>ڄ)|(?<_309>څ)|(?<_310>ڇ)|(?<_311>ڈ)|(?<_312>ډ)|(?<_313>ڊ)|(?<_314>ڋ)|(?<_315>ڌ)|(?<_316>ڍ)|(?<_317>ڎ)|(?<_318>ڏ)|(?<_319>ڐ)|(?<_320>ڑ)|(?<_321>ڒ)|(?<_322>ړ)|(?<_323>ڔ)|(?<_324>ڕ)|(?<_325>ږ)|(?<_326>ڗ)|(?<_327>ڙ)|(?<_328>ښ)|(?<_329>ڛ)|(?<_330>ڜ)|(?<_331>ڝ)|(?<_332>ڞ)|(?<_333>ڟ)|(?<_334>ڠ)|(?<_335>ڡ)|(?<_336>ڢ)|(?<_337>ڣ)|(?<_338>ڦ)|(?<_339>ڧ)|(?<_340>ڨ)|(?<_341>ک)|(?<_342>ڪ)|(?<_343>ګ)|(?<_344>ڬ)|(?<_345>ڭ)|(?<_346>ڮ)|(?<_347>ڰ)|(?<_348>ڱ)|(?<_349>ڲ)|(?<_350>ڳ)|(?<_351>ڵ)|(?<_352>ڶ)|(?<_353>ڷ)|(?<_354>ڸ)|(?<_355>ڹ)|(?<_356>ں)|(?<_357>ڻ)|(?<_358>ڼ)|(?<_359>ڽ)|(?<_360>ھ)|(?<_361>ڿ)|(?<_362>ۀ)|(?<_363>ہ)|(?<_364>ۂ)|(?<_365>ۃ)|(?<_366>ۄ)|(?<_367>ۅ)|(?<_368>ۆ)|(?<_369>ۇ)|(?<_370>ۈ)|(?<_371>ۉ)|(?<_372>ۊ)|(?<_373>ی)|(?<_374>ۍ)|(?<_375>ێ)|(?<_376>ۏ)|(?<_377>ې)|(?<_378>ۑ)|(?<_379>ے)|(?<_380>ۓ)|(?<_381>۔)|(?<_382>ە)|(?<_383>ۖ)|(?<_384>ۗ)|(?<_385>ۘ)|(?<_386>ۙ)|(?<_387>ۚ)|(?<_388>ۛ)|(?<_389>ۜ)|(?<_390>۝)|(?<_391>۞)|(?<_392>۟)|(?<_393>۠)|(?<_394>ۡ)|(?<_395>ۢ)|(?<_396>ۣ)|(?<_397>ۤ)|(?<_398>ۥ)|(?<_399>ۦ)|(?<_400>ۧ)|(?<_401>ۨ)|(?<_402>۩)|(?<_403>۪)|(?<_404>۫)|(?<_405>۬)|(?<_406>ۭ)|(?<_407>ۮ)|(?<_408>ۯ)|(?<_409>۰)|(?<_410>۱)|(?<_411>۲)|(?<_412>۳)|(?<_413>۴)|(?<_414>۵)|(?<_415>۶)|(?<_416>۷)|(?<_417>۸)|(?<_418>۹)|(?<_419>ۺ)|(?<_420>ۻ)|(?<_421>ۼ)|(?<_422>۽)|(?<_423>۾)|(?<_424>ۿ)", ["h","h","h","h","h","h","h","h","h","h","iy","h","h","Allāh","’ā","ī","‘ū","aw","ay","ū","a","ā","ūw","aww","ayy","īy","al-","aw","ay","‘a","‘i","‘ū","ī","ū","ā","á","h","aw","ay","","’a","ī","’a","a","ā","ā","bb","tt","thth","jj","ḥḥ","khkh","dd","dhdh","rr","zz","ss","shsh","ṣṣ","ḍḍ","ṭṭ","ẓẓ","ghgh","ff","qq","kk","ll","mm","nn","hh","ww","yy","an","an","an","an","hā","ā","á","ū","ī","a","i","u","","t","’","’","’","i","’","","","un","an","in",",","b","b","b","b","t","t","t","t","th","th","th","th","j","j","j","j","ḥ","ḥ","ḥ","ḥ","kh","kh","kh","kh","d","d","ḥ","ṣ","ḍ","ṭ","ẓ","dh","dh","r","r","z","z","s","s","s","s","sh","sh","sh","sh","ṣ","ṣ","ṣ","ṣ","ḍ","ḍ","ḍ","ḍ","ṭ","ṭ","ṭ","ṭ","ẓ","ẓ","ẓ","ẓ","‘","‘","‘","‘","gh","gh","gh","gh","f","f","f","f","q","q","q","q","k","k","k","k","l","l","l","l","m","m","m","m","n","n","n","n","h","h","h","h","w","w","y","y","y","y","a","u","i","g","ñ","p","ch","zh","v","v","v","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","b","t","th","j","ḥ","kh","d","dh","r","z","s","sh","ṣ","ḍ","ṭ","ẓ","‘","gh","","","","","","","f","q","k","l","m","n","w","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }