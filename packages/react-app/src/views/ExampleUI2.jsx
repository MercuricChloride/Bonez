import { GithubOutlined, SyncOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Col, Row } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";
import { parseEther } from "@ethersproject/units";
import { utils, ethers } from "ethers";
import { parse } from "dotenv";

export default function ExampleUI({
  purpose,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  price2mint,
}) {

  return (
    <div>
      <div class="bg" style={{ paddingTop: '80px' }}></div>
      <div class="main container">



        <div class="row m-0">

          <div class="col-xs-12 col-md-6 p-0">
            <div class="box p-30">
              <h3 class="font-light m-0">THE</h3>
              <h1 class="font-light m-0">YOCONAUTS NFT GENESIS COLLECTION</h1>
              <h3 class="font-light m-0">BY YOCOIN</h3>
            </div>
            <div class="box tinted p-30">
              <p>The YOCOnaut is a genesis collection of 400 unique NFT digital collectibles living on the blockchain. Each YOCOnaut includes 8 independent features, each element is available in 5 unique colourways, ensuring an exclusive mint each time </p>
              <p>Each NFT that you purchase will double as your ticket into a raffle for 5 lucky winners which will be drawn upon sellout of the genesis collection.</p>
              <p>The winner will receive 2500 MATIC.<br />4 Winners will receive 1000 MATIC each.</p>
              <p>Your NFT purchase will also be your exclusive whitelist access to future giveaways, NFTs, and genesis upgrades.</p>
              <button type="button" class="btn btn-big mt-20 mb-20"
                onClick={async () => {
                  let priceRightNow = await readContracts.YoconautRinkeby.price();
                  tx(writeContracts.YoconautRinkeby.claim({ value: priceRightNow }));
                }}
              >MINT YOUR EXCLUSIVE YOCONAUT <span>({price2mint && (+ethers.utils.formatEther(price2mint).substring(0, 5))} MATIC)</span></button>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 p-0 center">
            <div class="box">
              <img src="imgs/front.png" />
            </div>
          </div>
        </div>



        <div class="row m-0">
          <div class="col-xs-12 col-md-6 p-0 center">
            <div class="box">
              <img src="imgs/orangenft.png" />
            </div>
          </div>
          <div class="col-xs-12 col-md-6 p-0">
            <div class="box tinted p-30">
              <p>The 400 holders of genesis YOCOnaut NFTs receive exclusive access to a 1/1 collection of 3D rotating YOCOnauts which will be color matched to an exclusively designed clothing line available only to the initial holder of the genesis collection.</p>
              <h1 class="font-light m-0">CAPTAIN YO</h1>
              <p>Captain Yo. Leader of the YOCOnauts and senior member of the Cryptovian Alliance.</p>
              <p>Captain Yo is a true believer in everything fair (launched) and good. Tirelessly fighting his way through scourges of demonic invaders (Turdticks, HashHounds, Ragnarugs), exploring new galaxies and uncovering the mysteries of Cryptovia with his loyal crew by his side.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer tinted p-40 mt-20">
        <div class="container">
          <div class="row top-xs">
            <div class="col-xs-12 col-md-3">
              <div class="box">
                <h4 class="font-light m-0">YOCOIN (YOCO)</h4>
                <p>YoCoin (YOCO) is a Safe, Secure, Eco-Friendly, DeFi Cryptocurrency Engineered with the Lowest Trading Fees Available as well as Automatic Rewards for Life!</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3 col-md-offset-2">
              <div class="box mb-20">
                <h4 class="font-light m-0">INVEST</h4>
                <p class="m-0"><a href="https://yoco.finance/how-to-buy/pancakeswap/" target="_blank" rel="noopener">PancakeSwap (BNB)</a></p>
                <p class="m-0"><a href="https://yoco.finance/how-to-buy/hotbit/" target="_blank" rel="noopener">Hotbit (USDT)</a></p>
                <p class="m-0"><a href="https://yoco.finance/how-to-buy/xt-com/" target="_blank" rel="noopener">XT.com (ETH)</a></p>
                <p class="m-0"><a href="https://yoco.finance/how-to-buy/xt-com/" target="_blank" rel="noopener">XT.com (USDT)</a></p>
              </div>
            </div>
            <div class="col-xs-12 col-md-2">
              <div class="box mb-20">
                <h4 class="font-light m-0">RESOURCES</h4>
                <p class="m-0"><a href="https://coinmarketcap.com/currencies/yocoin-yoco/">CoinMarketCap</a></p>
                <p class="m-0"><a href="https://bscscan.com/token/0xdd17629d05e068a9d118ee35d11101d4140d0586">BSC Contract</a></p>
                <p class="m-0"><a href="https://yoco.finance/whitepaper/">Whitepaper</a></p>
                <p class="m-0"><a href="https://yoco.finance/tokenomics/">Tokenomics</a></p>
                <p class="m-0"><a href="https://yoco.finance/roadmap/">Roadmap</a></p>
                <p class="m-0"><a href="https://yoco.finance/news/">News</a></p>
              </div>
            </div>
            <div class="col-xs-12 col-md-2">
              <div class="box mb-20">
                <h4 class="font-light m-0">REACH OUT</h4>
                <p class="m-0"><a href="http://discord.gg/yocoinyoco">Discord</a></p>
                <p class="m-0"><a href="https://www.facebook.com/groups/yocoin/">Facebook</a></p>
                <p class="m-0"><a href="https://twitter.com/yocoiny">Twitter</a></p>
                <p class="m-0"><a href="http://t.me/YOCOyocoin">Telegram</a></p>
                <p class="m-0"><a href="https://www.reddit.com/r/YoCoin">Reddit</a></p>
                <p class="m-0"><a href="https://instagram.com/yocoin_official">Instagram</a></p>
                <p class="m-0"><a href="https://www.youtube.com/c/YoCoinYOCO">YouTube</a></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
