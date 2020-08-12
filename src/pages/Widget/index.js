import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";
import WidgetCard from "../../components/WidgetCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function WidgetPage() {
  const [widgets] = useLocalStorage("widgets", [
    {
      title: {
        text: "",
      },
      series: [
        {
          data: [1, 2, 3, 3, 2, 4, 1],
        },
      ],
    },
  ]);

  console.log(widgets);

  return (
    <Container>
      {widgets.map((widget) => (
        <WidgetCard key={widget.title} options={widget} />
      ))}
    </Container>
  );
}

export default WidgetPage;
