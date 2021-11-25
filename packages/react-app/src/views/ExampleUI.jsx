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
    <div style={{
      paddingTop:'80px'
    }}>
      <Row justify={'center'} align='bottom'>
        <Col xs={24} lg={12} style={{
        }}>
          <Row justify='center'>
              <Col span={24} align='left'>
                <h3 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    margin:'0'
                }}>The</h3>
                <h1 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    marginBottom:'0'
                }}>
                YOCONAUTS NFT 
                <br />
                GENESIS COLLECTION
                </h1>
                <h3 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    margin:'0'
                }}>BY YOCOIN</h3>
              </Col>
            </Row>
          <Row justify={'center'}>
            <Col span={24} style={{
            backgroundColor:'rgba(0,2,43,0.63)',
            padding:'40px'
          }}>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif'
            }}>The YOCOnaut is a genesis collection of 400 unique NFT digital collectibles living on the blockchain.
                <br />
                Each NFT that you purchase will double as your ticket into a raffle for 5 lucky winners which will be drawn upon sellout of the genesis collection.
                <br />
                The winner will receive 2500 MATIC.
                4 Winners will receive 1000 matic each.
                <br />
                Your NFT purchase will also be your exclusive whitelist access to future giveaways, NFTs, and genesis upgrades.
                <br />
              </h3>
              <Button style={{
                width:'60%',
                height:'10%',
                backgroundColor:'#0dbbb9'
              }}type="primary"
              onClick={async () => {
                    let priceRightNow = await readContracts.YoconautRinkeby.price();
                    tx(writeContracts.YoconautRinkeby.claim({ value: priceRightNow }));
                  }}
                >
                  Mint for { price2mint && (+ethers.utils.formatEther(price2mint).substring(0,5)) } MATIC
                </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={{span: 24, offset: 0}} lg={{span: 8}}>
          <img src="./imgs/front.png" alt="A lovely picture of a little astronaut" style={{
            maxHeight:'700px'
          }}/> 
        </Col>
      </Row>
      <Divider />
      <Row justify={'center'} align={'top'} style={{
      }}>
        <Col xs={16} lg={12} style={{
        }}>
          <img src="./imgs/orangenft.png" alt="A lovely picture of a little astronaut" style={{
            width:'100%',
            maxHeight:'560px'
          }}/> 
        </Col>
        <Col xs={24} lg={12} style={{
          backgroundColor:'rgba(0,2,43,0.63)',
          padding:'40px',
          maxHeight:'560px',
          maxWidth:'560px',
        }}>
          <h1 style={{
              fontFamily: 'Montserrat, sans-serif',
          }}>
            CAPTAIN YO
          </h1>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif'
            }}>
              Captain Yo. Leader of the YOCOnauts and senior member of the Cryptovian Alliance.
              <br />
              Captain Yo is a true believer in everything fair (launched) and good. Tirelessly fighting his way through scourges of demonic invaders (Turdticks, HashHounds, Ragnarugs), exploring new galaxies and uncovering the mysteries of Cryptovia with his loyal crew by his side.
              <br />
              The Captain Yo NFT includes 8 independant features, each element is available in 5 unique colourways, ensuring an exclusive and rare mint each time.
            </h3>
        </Col>
      </Row>
     </div>
  );
}
