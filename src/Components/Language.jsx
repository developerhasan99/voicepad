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
        <MenuItem value="en-us">English</MenuItem>
        <MenuItem value="bn-bd">বাংলা</MenuItem>
        <MenuItem value="hi-in">हिन्दी</MenuItem>
        <MenuItem value="it-it">Italiano</MenuItem>
        <MenuItem value="de-de">Deutsch</MenuItem>
        <MenuItem value="fr-fr">Français</MenuItem>
        <MenuItem value="nl-nl">Nederlands</MenuItem>
        <MenuItem value="pt-pt">Português</MenuItem>
        <MenuItem value="nb-no">Norsk</MenuItem>
        <MenuItem value="fi-fi">Suomi</MenuItem>
        <MenuItem value="da-dk">Dansk</MenuItem>
        <MenuItem value="th-th">ไทย</MenuItem>
        <MenuItem value="id-id">Bahasa Indonesia</MenuItem>
        <MenuItem value="sv-se">Svenska</MenuItem>
        <MenuItem value="es-mx">Español</MenuItem>
        <MenuItem value="ar-sa">العربية</MenuItem>
        <MenuItem value="hu-hu">Magyar</MenuItem>
        <MenuItem value="cs-cz">Čeština</MenuItem>
        <MenuItem value="ja-jp">日本語</MenuItem>
        <MenuItem value="tr-tr">Türkçe</MenuItem>
        <MenuItem value="pl-pl">Polski</MenuItem>
        <MenuItem value="ru-ru">Русский</MenuItem>
        <MenuItem value="ta-in">தமிழ் (இந்தியா)</MenuItem>
        <MenuItem value="gu-in">ગુજરાતી</MenuItem>
        <MenuItem value="ur-pk">اردو</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Language;
