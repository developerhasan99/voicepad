class LStorage {
  constructor() {
    this.storage = {
      draftArray: Array(5).fill(""),
    };
    this.storageToken = "f3e905cdfbb9391458b46578457721d1";
    this.localState = window.localStorage.getItem(this.storageToken);
  }

  get = () => {
    if (this.localState) {
      this.storage = JSON.parse(this.localState);
    }
    return this.storage;
  };

  set = (state) => {
    const objectForLS = {
      language: state.language,
      selectedDraft: state.selectedDraft,
      draftArray: state.draftArray,
    };

    const strObjectForLS = JSON.stringify(objectForLS);

    window.localStorage.setItem(this.storageToken, strObjectForLS);
  };
}

const lStorage = new LStorage();

export default lStorage;
