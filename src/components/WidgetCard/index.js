import React, { useRef } from "react";
import {
  Container,
  NavDropdown,
  Button,
  Card,
  Dropdown,
} from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.css";

function WidgetCard() {
  const options = {
    title: {
      text: "",
    },
    series: [
      {
        data: [1, 2, 3, 3, 2, 4, 1],
      },
    ],
  };

  const chartRef = useRef();

  return (
    <Card>
      <Card.Header>
        Featured
        <Dropdown>
          <Dropdown.Toggle></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card.Body>
    </Card>
  );
}

export default WidgetCard;
