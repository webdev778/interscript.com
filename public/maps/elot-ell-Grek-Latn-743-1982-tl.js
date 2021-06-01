var map = function(Interscript) {Interscript.define_map("elot-ell-Grek-Latn-743-1982-tl", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "(?<=[ΑαΕεΗη])Υ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "F̱");
s = Interscript.gsub(s, "(?<=[ΑαΕεΗη])Υ(?="+Interscript.aliases.boundary+")", "F̱");
s = Interscript.gsub(s, "(?<=[ΑαΕεΗη])υ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "f̱");
s = Interscript.gsub(s, "(?<=[ΑαΕεΗη])υ(?="+Interscript.aliases.boundary+")", "f̱");
s = Interscript.gsub(s, "(?<=[ΑαΕεΗη])Υ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "V̱");
s = Interscript.gsub(s, "(?<=[ΑαΕεΗη])υ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "v̱");
s = Interscript.gsub(s, "Αύ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "Áf̱");
s = Interscript.gsub(s, "Αύ(?="+Interscript.aliases.boundary+")", "Áf̱");
s = Interscript.gsub(s, "Αύ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "Áv̱");
s = Interscript.gsub(s, "αύ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "áf̱");
s = Interscript.gsub(s, "αύ(?="+Interscript.aliases.boundary+")", "áf̱");
s = Interscript.gsub(s, "αύ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "áv̱");
s = Interscript.gsub(s, "Εύ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "Éf̱");
s = Interscript.gsub(s, "Εύ(?="+Interscript.aliases.boundary+")", "Éf̱");
s = Interscript.gsub(s, "Εύ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "Év̱");
s = Interscript.gsub(s, "εύ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "éf̱");
s = Interscript.gsub(s, "εύ(?="+Interscript.aliases.boundary+")", "éf̱");
s = Interscript.gsub(s, "εύ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "év̱");
s = Interscript.gsub(s, "Ηύ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "Í̱f̱");
s = Interscript.gsub(s, "Ηύ(?="+Interscript.aliases.boundary+")", "Í̱f̱");
s = Interscript.gsub(s, "Ηύ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "Í̱v̱");
s = Interscript.gsub(s, "ηύ(?=[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ])", "í̱f̱");
s = Interscript.gsub(s, "ηύ(?="+Interscript.aliases.boundary+")", "í̱f̱");
s = Interscript.gsub(s, "ηύ(?!(?:[θΘκΚξΞπΠσΣςτΤφΦχΧψΨ]|"+Interscript.aliases.boundary+"))", "í̱v̱");
s = Interscript.gsub(s, "(?<=[Οο])Υ", "U");
s = Interscript.gsub(s, "(?<=[Οο])υ", "u");
s = Interscript.gsub(s, "(?<=[Οο])ύ", "ú");
s = Interscript.gsub(s, "(?<=[ΆάΈέΉήΌό])Υ", "Υ");
s = Interscript.gsub(s, "(?<=[ΆάΈέΉήΌό])υ", "y");
s = Interscript.gsub(s, "Γ(?=[ξΞχΧ])", "Ṉ");
s = Interscript.gsub(s, "γ(?=[ξΞχΧ])", "ṉ");
s = Interscript.gsub(s, "Γ[Γγ]", "Ṉg");
s = Interscript.gsub(s, "γγ", "ṉg");
s = Interscript.gsub(s, "Γ[Κκ]", "Gk");
s = Interscript.gsub(s, "γ[Κκ]", "gk");
s = Interscript.gsub(s, "(?<="+Interscript.aliases.boundary+")Μ[πΠ]", "B");
s = Interscript.gsub(s, "(?<="+Interscript.aliases.boundary+")μ[πΠ]", "b");
s = Interscript.gsub(s, "Μ[πΠ](?="+Interscript.aliases.boundary+")", "B");
s = Interscript.gsub(s, "μ[πΠ](?="+Interscript.aliases.boundary+")", "b");
s = Interscript.gsub(s, "(?<!"+Interscript.aliases.boundary+")Μ[πΠ]", "Mp");
s = Interscript.gsub(s, "(?<!"+Interscript.aliases.boundary+")μ[πΠ]", "mp");
s = Interscript.gsub(s, ";", "?");
s = Interscript.gsub(s, ";", "?");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_832671118626526055);
s = Interscript.gsub(s, "(?<=[A-Z])(?:Th|Ch|Ps)", function(a){return a.toUpperCase();});
s = Interscript.gsub(s, "(?:Th|Ch|Ps)(?=[A-Z])", function(a){return a.toUpperCase();});
return s;
};
map.cache.PTREE_832671118626526055 = {"39":{"":""},"902":{"":"Á"},"913":{"":"A"},"914":{"":"V"},"915":{"":"G"},"916":{"":"D"},"917":{"":"E","938":{"":"Eï"},"970":{"":"Eï"}},"904":{"970":{"":"Éï"},"":"É"},"918":{"":"Z"},"919":{"":"I̱"},"920":{"":"Th"},"921":{"":"I"},"922":{"":"K"},"923":{"":"L"},"924":{"":"M"},"925":{"":"N"},"926":{"":"X"},"927":{"":"O"},"928":{"":"P"},"929":{"":"R"},"931":{"":"S"},"932":{"":"T"},"933":{"":"Y"},"934":{"":"F"},"935":{"":"Ch"},"936":{"":"Ps"},"937":{"":"O̱"},"905":{"":"Í̱"},"906":{"":"Í"},"908":{"":"Ó"},"910":{"":"Ý"},"911":{"":"Ó̱"},"938":{"":"Ï"},"939":{"":"Ÿ"},"940":{"":"á"},"945":{"":"a"},"946":{"":"v"},"947":{"":"g"},"948":{"":"d"},"949":{"":"e","970":{"":"eï"}},"941":{"970":{"":"éï"},"953":{"":"éï"},"":"é"},"950":{"":"z"},"951":{"":"i̱"},"952":{"":"th"},"953":{"":"i"},"954":{"":"k"},"955":{"":"l"},"956":{"":"m"},"957":{"":"n"},"958":{"":"x"},"959":{"":"o"},"960":{"":"p"},"961":{"":"r"},"963":{"":"s"},"962":{"":"s"},"964":{"":"t"},"965":{"":"y"},"966":{"":"f"},"967":{"":"ch"},"968":{"":"ps"},"969":{"":"o̱"},"942":{"":"í̱"},"943":{"":"í"},"972":{"":"ó"},"973":{"":"ý"},"974":{"":"ó̱"},"970":{"":"ï"},"971":{"":"ÿ"},"912":{"":"ḯ"},"944":{"":"ÿ́"},"903":{"":";"},"183":{"":";"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }