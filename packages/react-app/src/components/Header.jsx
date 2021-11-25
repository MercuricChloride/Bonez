import { PageHeader } from "antd";
import { BackgroundColor, white } from "chalk";
import React from "react";

// displays a page header

export default function Header() {
  return (
      <div style={{
        backgroundColor: "rgba(0,2,43,0.63)",
        height:'80px',
        display: 'flex',
        justifyContent:'center',
        alignContent:'center',
        position:'fixed',
        top:'0',
        width:'100%',
        zIndex:'2',
      }}>
        <a href="https://yoco.finance">
          <img src="./imgs/yologowhite.png" alt="logo" style={{
            maxHeight:'80px'
          }}/>
        </a>
      </div>
  );
}
