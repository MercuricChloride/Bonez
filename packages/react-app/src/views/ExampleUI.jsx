import { GithubOutlined, SyncOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Col, Row } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";
import { parseEther } from "@ethersproject/units";
import { utils, ethers } from "ethers";
import { parse } from "dotenv";

export default function ExampleUI({
  purpose,
  bonezEvents,
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
    <div style={{
        backgroundImage:'url(./imgs/background.jpg)'
    }}>
      <Row style={{
        //backgroundImage:'url(./imgs/background.jpg)'
      }} justify={'center'}>
        <Col xs={24} lg={8} style={{
        }}>
          <h1>YoConauts!</h1>
          <br />
          <h3>Captain Yo. Leader of the YOCOnauts and senior member of the Cryptovian Alliance.</h3>
          <br />
          <h3>Captain Yo is a true believer in everything fair (launched) and good. Tirelessly fighting his way through scourges of demonic invaders (Turdticks, HashHounds, Ragnarugs), exploring new galaxies and uncovering the mysteries of Cryptovia with his loyal crew by his side.</h3>
          <br />
          <h3>This genesis collection of 400 uniquely identifiable Captain Yo NFTs is your ticket to future exclusive launches, giveaways and upgrades.  Get yours now at https://nft.yoco.finance/</h3>
          <br />
          <h3>Ownership will be verified in the discord after purchase.</h3>
        </Col>
        <Col xs={0} lg={8}>
          <img src="./imgs/yoconaut.png" alt="A lovely picture of a little astronaut" style={{
            width: '100%' 
          }}/> 
        </Col>
      </Row>
      <Divider />
      <Row style={{
        //backgroundImage:'url(./imgs/background.jpg)'
      }} justify={'center'}>
        <Col xs={24} lg={8} style={{
          border: 'solid 2px cyan'
        }}>
          <h1>Sample Minting UI</h1>
          <br />
          <h3>Price is determined with a pseudo bonding curve, minting begins at 1 matic and increases with each consecutive mint by 5% until the maximum price is met at a cost of 500 MATIC per token.</h3>
          <br />
        </Col>
      </Row>
    </div>
  );
}
