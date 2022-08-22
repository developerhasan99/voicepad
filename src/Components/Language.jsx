import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import lStorage from "../utils/localStorage";

function Language({ state, setState }) {
  const handleChange = (e) => {
    setState({ ...state, language: e.target.value });
    lStorage.set(state);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="select-language-input-label">Select language:</InputLabel>
      <Select
        id="select-language-input-label"
        labelId="select-language-input-label"
        label="Select language:"
        onChange={handleChange}
        value={state.language}
      >
        <MenuItem value="af-za">Afrikaans</MenuItem>
        <MenuItem value="az-az">Azərbaycan</MenuItem>
        <MenuItem value="id-id">Bahasa Indonesia</MenuItem>
        <MenuItem value="ms-my">Bahasa Melayu</MenuItem>
        <MenuItem value="jv-id">Basa Jawa</MenuItem>
        <MenuItem value="su-id">Basa Sunda</MenuItem>
        <MenuItem value="ca-es">Català</MenuItem>
        <MenuItem value="cs-cz">Čeština</MenuItem>
        <MenuItem value="da-dk">Dansk</MenuItem>
        <MenuItem value="de-de">Deutsch</MenuItem>
        <MenuItem value="en-au">English (Australia)</MenuItem>
        <MenuItem value="en-ca">English (Canada)</MenuItem>
        <MenuItem value="en-gh">English (Ghana)</MenuItem>
        <MenuItem value="en-in">English (India)</MenuItem>
        <MenuItem value="en-ie">English (Ireland)</MenuItem>
        <MenuItem value="en-ke">English (Kenya)</MenuItem>
        <MenuItem value="en-nz">English (New Zealand)</MenuItem>
        <MenuItem value="en-ng">English (Nigeria)</MenuItem>
        <MenuItem value="en-ph">English (Philippines)</MenuItem>
        <MenuItem value="en-za">English (South Africa)</MenuItem>
        <MenuItem value="en-tz">English (Tanzania)</MenuItem>
        <MenuItem value="en-gb">English (United Kingdom)</MenuItem>
        <MenuItem value="en-us">English (United States)</MenuItem>
        <MenuItem value="es-mx">Español</MenuItem>
        <MenuItem value="es-ar">Español (Argentina)</MenuItem>
        <MenuItem value="es-bo">Español (Bolivia)</MenuItem>
        <MenuItem value="es-cl">Español (Chile)</MenuItem>
        <MenuItem value="es-co">Español (Colombia)</MenuItem>
        <MenuItem value="es-cr">Español (Costa Rica)</MenuItem>
        <MenuItem value="es-ec">Español (Ecuador)</MenuItem>
        <MenuItem value="es-sv">Español (El Salvador)</MenuItem>
        <MenuItem value="es-es">Español (España)</MenuItem>
        <MenuItem value="es-us">Español (Estados Unidos)</MenuItem>
        <MenuItem value="es-gt">Español (Guatemala)</MenuItem>
        <MenuItem value="es-hn">Español (Honduras)</MenuItem>
        <MenuItem value="es-419">Español (Latinoamérica)</MenuItem>
        <MenuItem value="es-mx">Español (México)</MenuItem>
        <MenuItem value="es-ni">Español (Nicaragua)</MenuItem>
        <MenuItem value="es-pa">Español (Panamá)</MenuItem>
        <MenuItem value="es-py">Español (Paraguay)</MenuItem>
        <MenuItem value="es-pe">Español (Perú)</MenuItem>
        <MenuItem value="es-pr">Español (Puerto Rico)</MenuItem>
        <MenuItem value="es-do">Español (República Dominicana)</MenuItem>
        <MenuItem value="es-uy">Español (Uruguay)</MenuItem>
        <MenuItem value="es-ve">Español (Venezuela)</MenuItem>
        <MenuItem value="eu-es">Euskara</MenuItem>
        <MenuItem value="fil-ph">Filipino</MenuItem>
        <MenuItem value="fr-fr">Français</MenuItem>
        <MenuItem value="gl-es">Galego</MenuItem>
        <MenuItem value="hr-hr">Hrvatski</MenuItem>
        <MenuItem value="zu-za">Isizulu</MenuItem>
        <MenuItem value="is-is">Íslenska</MenuItem>
        <MenuItem value="it-it">Italiano</MenuItem>
        <MenuItem value="it-it">Italiano (Italia)</MenuItem>
        <MenuItem value="it-ch">Italiano (Svizzera)</MenuItem>
        <MenuItem value="sw-ke">Kiswahili (Kenya)</MenuItem>
        <MenuItem value="sw-tz">Kiswahili (Tanzania)</MenuItem>
        <MenuItem value="lv-lv">Latviešu</MenuItem>
        <MenuItem value="lt-lt">Lietuvių</MenuItem>
        <MenuItem value="hu-hu">Magyar</MenuItem>
        <MenuItem value="nl-nl">Nederlands</MenuItem>
        <MenuItem value="nb-no">Norsk (Bokmål)</MenuItem>
        <MenuItem value="pl-pl">Polski</MenuItem>
        <MenuItem value="pt-br">Português (Brasil)</MenuItem>
        <MenuItem value="pt-pt">Português (Portugal)</MenuItem>
        <MenuItem value="ro-ro">Română</MenuItem>
        <MenuItem value="sk-sk">Slovenčina</MenuItem>
        <MenuItem value="sl-si">Slovenščina</MenuItem>
        <MenuItem value="fi-fi">Suomi</MenuItem>
        <MenuItem value="sv-se">Svenska</MenuItem>
        <MenuItem value="vi-vn">Tiếng Việt</MenuItem>
        <MenuItem value="tr-tr">Türkçe</MenuItem>
        <MenuItem value="el-gr">Ελληνικά</MenuItem>
        <MenuItem value="bg-bg">Български</MenuItem>
        <MenuItem value="ru-ru">Русский</MenuItem>
        <MenuItem value="sr-rs">Српски</MenuItem>
        <MenuItem value="uk-ua">Українська</MenuItem>
        <MenuItem value="hy-am">հայերեն</MenuItem>
        <MenuItem value="he-il">עברית</MenuItem>
        <MenuItem value="ur-in">(اردو (بھارت</MenuItem>
        <MenuItem value="ur-pk">(اردو (پاکستان</MenuItem>
        <MenuItem value="ar-x-gulf">العربية</MenuItem>
        <MenuItem value="ar-il">(العربية (إسرائيل</MenuItem>
        <MenuItem value="ar-jo">(العربية (الأردن</MenuItem>
        <MenuItem value="ar-ae">(العربية (الإمارات</MenuItem>
        <MenuItem value="ar-bh">(العربية (البحرين</MenuItem>
        <MenuItem value="ar-dz">(العربية (الجزائر</MenuItem>
        <MenuItem value="ar-sa">(العربية (السعودية</MenuItem>
        <MenuItem value="ar-kw">(العربية (الكويت</MenuItem>
        <MenuItem value="ar-ma">(العربية (المغرب</MenuItem>
        <MenuItem value="ar-tn">(العربية (تونس</MenuItem>
        <MenuItem value="ar-om">(العربية (عُمان</MenuItem>
        <MenuItem value="ar-ps">(العربية (فلسطين</MenuItem>
        <MenuItem value="ar-qa">(العربية (قطر</MenuItem>
        <MenuItem value="ar-lb">(العربية (لبنان</MenuItem>
        <MenuItem value="ar-eg">(العربية (مصر</MenuItem>
        <MenuItem value="fa-ir">فارسی</MenuItem>
        <MenuItem value="ne-np">नेपाली</MenuItem>
        <MenuItem value="mr-in">मराठी</MenuItem>
        <MenuItem value="hi-in">हिन्दी</MenuItem>
        <MenuItem value="bn-bd">বাংলা (বাংলাদেশ)</MenuItem>
        <MenuItem value="bn-in">বাংলা (ভারত)</MenuItem>
        <MenuItem value="gu-in">ગુજરાતી</MenuItem>
        <MenuItem value="ta-in">தமிழ் (இந்தியா)</MenuItem>
        <MenuItem value="ta-lk">தமிழ் (இலங்கை)</MenuItem>
        <MenuItem value="ta-sg">தமிழ் (சிங்கப்பூர்)</MenuItem>
        <MenuItem value="ta-my">தமிழ் (மலேஷியா)</MenuItem>
        <MenuItem value="te-in">తెలుగు</MenuItem>
        <MenuItem value="kn-in">ಕನ್ನಡ</MenuItem>
        <MenuItem value="ml-in">മലയാളം</MenuItem>
        <MenuItem value="si-lk">සිංහල</MenuItem>
        <MenuItem value="th-th">ไทย</MenuItem>
        <MenuItem value="lo-la">ລາວ</MenuItem>
        <MenuItem value="ka-ge">ქართულად</MenuItem>
        <MenuItem value="am-et">አማርኛ</MenuItem>
        <MenuItem value="km-kh">ខ្មែរ</MenuItem>
        <MenuItem value="cmn-hans-cn">中文（中国）</MenuItem>
        <MenuItem value="cmn-hant-tw">中文（台灣）</MenuItem>
        <MenuItem value="yue-hant-hk">中文（香港）</MenuItem>
        <MenuItem value="ja-jp">日本語</MenuItem>
        <MenuItem value="ko-kr">한국어</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Language;
