const backdrop = document.querySelector(".backdrop");
const connectBtn = document.querySelector(".connect--button");
const walletsContainer = document.querySelector(".wallet__container");
const wallet = document.querySelector(".wallet__btn");
connectBtnContainer = document.querySelector(".connect__btn--container");

const state = {};

///////////////////////////////
///////////////////////////
//display Wallets

// connectBtn.addEventListener("click");

const connectWallet = () => {
    backdrop.classList.remove("hidden");
    walletsContainer.classList.remove("hidden");
};
const removeWalletContainer = () => {
    backdrop.classList.add("hidden");
    walletsContainer.classList.add("hidden");
};

const getWalletHandler = async () => {
    state.accounts = await ethereum.request({ method: "eth_requestAccounts" });
    state.userAccount = state.accounts[0];
};

const displayAddr = () => {
    const addr = `${state.userAccount.slice(0, 3)}...${state.userAccount.slice(
        -4
    )}`;
    connectBtnContainer.innerHTML = addr;
};

connectBtn.addEventListener("click", connectWallet);
wallet.addEventListener("click", async () => {
    await getWalletHandler();
    removeWalletContainer();
    displayAddr();
});
