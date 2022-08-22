import { Button } from "@mui/material";
import { Mic } from "@mui/icons-material";

function SwitchListeningMode({ state, setState }) {
  const handleListening = () => {
    setState({ ...state, isListening: !state.isListening });
  };

  return (
    <Button
      onClick={handleListening}
      variant="outlined"
      startIcon={<Mic />}
      className={state.isListening ? "listening" : ""}
    >
      {state.isListening ? "Stop" : "Start"} listening!
    </Button>
  );
}

export default SwitchListeningMode;
