<<<<<<< HEAD
import { Button, Col, Divider, Row } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { tryToDisplay } from "./utils";

const DisplayVariable = ({ contractFunction, functionInfo, refreshRequired, triggerRefresh, blockExplorer }) => {
=======
import { Col, Divider, Row } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import tryToDisplay from "./utils";

const DisplayVariable = ({ contractFunction, functionInfo, refreshRequired, triggerRefresh }) => {
>>>>>>> 0b840342 (Initial commit)
  const [variable, setVariable] = useState("");

  const refresh = useCallback(async () => {
    try {
      const funcResponse = await contractFunction();
      setVariable(funcResponse);
      triggerRefresh(false);
    } catch (e) {
      console.log(e);
    }
  }, [setVariable, contractFunction, triggerRefresh]);

  useEffect(() => {
    refresh();
  }, [refresh, refreshRequired, contractFunction]);

  return (
    <div>
      <Row>
        <Col
          span={8}
          style={{
            textAlign: "right",
            opacity: 0.333,
            paddingRight: 6,
            fontSize: 24,
          }}
        >
          {functionInfo.name}
        </Col>
        <Col span={14}>
<<<<<<< HEAD
          <h2>{tryToDisplay(variable, false, blockExplorer)}</h2>
        </Col>
        <Col span={2}>
          <h2>
            <Button type="link" onClick={refresh} icon="🔄" />
=======
          <h2>{tryToDisplay(variable)}</h2>
        </Col>
        <Col span={2}>
          <h2>
            <a href="#" onClick={refresh}>
              🔄
            </a>
>>>>>>> 0b840342 (Initial commit)
          </h2>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default DisplayVariable;
