const handleKyeEvents = (state, setState) => {
  window.onkeydown = function (e) {
    if ((e.altKey && e.key === "z") || (e.altKey && e.key === "Z")) {
      setState({
        ...state,
        isListening: !state.isListening,
      });
    }
  };
};

export default handleKyeEvents;
