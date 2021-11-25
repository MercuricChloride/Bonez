import { Button } from "antd";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import Address from "./Address";
import Balance from "./Balance";
import Wallet from "./Wallet";

/*
  ~ What it does? ~

  Displays an Address, Balance, and Wallet as one Account component,
  also allows users to log in to existing accounts and log out

  ~ How can I use? ~

  <Account
    address={address}
    localProvider={localProvider}
    userProvider={userProvider}
    mainnetProvider={mainnetProvider}
    price={price}
    web3Modal={web3Modal}
    loadWeb3Modal={loadWeb3Modal}
    logoutOfWeb3Modal={logoutOfWeb3Modal}
    blockExplorer={blockExplorer}
  />

  ~ Features ~

  - Provide address={address} and get balance corresponding to the given address
  - Provide localProvider={localProvider} to access balance on local network
  - Provide userProvider={userProvider} to display a wallet
  - Provide mainnetProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide price={price} of ether and get your balance converted to dollars
  - Provide web3Modal={web3Modal}, loadWeb3Modal={loadWeb3Modal}, logoutOfWeb3Modal={logoutOfWeb3Modal}
              to be able to log in/log out to/from existing accounts
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
*/

export default function Account({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
}) {
  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <button
          key="loginbutton"
          class='btn'
          onClick={logoutOfWeb3Modal}
        >
          logout
        </button>,
      );
    } else {
      modalButtons.push(
        <button
          key="loginbutton"
          class='btn'
          onClick={loadWeb3Modal}
        >
          connect wallet
        </button>,
      );
    }
  }

  const display = minimized ? (
    ""
  ) : (
    <span class='balance'>
      <Balance address={address} provider={localProvider} price={price} />
    </span>
  );

  return (
      <div class="header tinted p-20">
        <div class="container">
          <div class="row middle-xs">
            <div class="col-xs-6 logo ">
              <div class="box">
                <img src="imgs/yologowhite.png" />
                <span>NFT</span>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="box right row end-xs middle-xs ">
                <svg class="wallet-icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 841.9 595.3">
                  <path d="M588.2 273.6h-4.4c-18.3 0-36.7-.1-55 0-34.3.1-60.9 27.3-60.3 61.5.5 31.4 26.9 57.8 58.3 58.2 19 .2 37.9.1 56.9.1h4.3c.1 1.1.3 2.1.3 3 0 8.9.1 17.7 0 26.6-.2 17.2-13.1 30.2-30.5 30.3-30.4.1-60.9 0-91.3 0H302.9c-29.5 0-50.1-20.7-50.1-50.2V203.9c0-29.5 20.6-50.2 50.1-50.2h218.2c11.1 0 19.3 7.7 19.2 18.1 0 9.4-7.4 17.2-16.8 17.8-1.5.1-3 .1-4.5.1H303.4c-1.6 0-3.3-.1-4.9.2-6 1.1-10.3 6.7-9.8 12.7.4 5.9 5.3 10.6 11.3 11 1.4.1 2.7 0 4.1 0h252.6c17.1 0 30.5 11.8 31.2 27.9.7 10.6.3 21.1.3 32.1z" />
                  <path d="M588.2 297.9v71.2c-.9.1-1.7.3-2.5.3-19.2 0-38.4.1-57.6 0-16.5-.1-30.3-11.2-34.4-27-4-15.6 2.7-32.1 17.1-39.9 4.8-2.6 10.5-4.5 15.9-4.6 20.1-.5 40.2-.2 60.3-.2.2-.1.6.1 1.2.2z" />
                </svg>
                {display}
                {modalButtons}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
