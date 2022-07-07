import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#f2f2f2"};
  color: ${(props) => props.color || "black"};
  margin-right: 0.5rem;
`;

/* Button primary width variables and props */

const bgColor = "darkSlateBlue";
const bgColorHover = "#5246a0";
const fgColor = "white";
const fgColorHover = "white";

const Button2 = styled.button`
  // Add props primary
  background: ${(props) => (props.primary ? bgColor : "")};
  color: ${(props) => (props.primary ? fgColor : "")};
  margin-right: 0.5rem;
  transition: background-color 0.2s ease;
  &:hover {
    background: ${(props) => (props.primary ? bgColorHover : "")};
    color: ${(props) => (props.primary ? fgColorHover : "")};
  }
`;

/* Add props dynamically */

const Button3 = styled.button`
  margin-right: 0.5rem;
  color: ${(props) => props.fg || "black"};
  /* color: ${(props) => props.color || "black"}; */
`;

const ButtonThemed = styled.button`
  background-color: ${(props) =>
    props.blue
      ? "darkslateblue"
      : props.green
      ? "seagreen"
      : props.red
      ? "crimson"
      : ""};
  color: ${(props) =>
    props.blue
      ? "white"
      : props.green
      ? "white"
      : props.red
      ? "white"
      : "black"};
  margin-right: 0.5rem;
`;

export default function Buttons() {
  return (
    <>
      <main>
        <h1>Buttons</h1>
        <Navigation />
        <section>
          <h2>Buttons</h2>
          <h3>Default button</h3>
          <p>
            <button>Click me !</button>
          </p>
        </section>
        <section>
          <p>Button with props (default values)</p>
          <Button>Default button</Button>
          <h3>Buttons customized with props !</h3>
          <p>
            <Button backgroundColor="seagreen" color="white">
              Sea green
            </Button>
            <Button backgroundColor="slateblue" color="white">
              Slate blue
            </Button>
            <Button backgroundColor="crimson" color="white">
              Crimson
            </Button>
          </p>
        </section>
        <section>
          <h3>Buttons whith primary props</h3>
          <p>
            <Button2>Default</Button2>
            <Button2 primary>Primary</Button2>
          </p>
        </section>
        <section>
          <h3>Boutons with ternary logic</h3>
          <p>
            <ButtonThemed>Default</ButtonThemed>
            <ButtonThemed blue>Blue</ButtonThemed>
            <ButtonThemed red>Red</ButtonThemed>
            <ButtonThemed green>Green</ButtonThemed>
          </p>
        </section>
        <section>
          <h3>Button wiyh dynamic color</h3>
          <p>
            <Button3 fg="blue">Button blue</Button3>
            <Button3 fg="green">Button green</Button3>
            <Button3 fg="crimson">Button red</Button3>
            <Button3 fg="teal">Button teal</Button3>
            <Button3 fg="darkorange">Button orange</Button3>
          </p>
        </section>
      </main>
    </>
  );
}
