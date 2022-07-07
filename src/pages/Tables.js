import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const FlexContainer = styled.div`
  display: flex !important;
  flex-direction: row;
  & div {
    width: 50%;
    margin-top: 1rem;
  }
  @media screen and (max-width: 980px) {
    flex-direction: column;
    width: 100%;
    & div {
      width: 100%;
    }
  }
`;

const Th = styled.th`
  color: ${(props) => props.fg || ""};
  font-size: 1.2em;
`;

const Td = styled.td`
  background-color: ${(props) => props.bg || ""};
`;

const TdCondition = styled.td`
  color: ${(props) =>
    props.pays === "switzerland"
      ? "seagreen"
      : props.pays === "usa"
      ? "blue"
      : props.pays === "finland"
      ? "salmon"
      : ""};
`;

export default function Tables() {
  return (
    <>
      <main>
        <h1>Tables</h1>
        <Navigation />
        <section>
          <table>
            <thead>
              <tr>
                <Th fg="darkSlateBlue">Groupe</Th>
                <Th fg="darkSlateBlue">Pays</Th>
                <Th fg="darkSlateBlue">Style</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eluveitie</td>
                <td>Suisse</td>
                <td>Folk metal</td>
              </tr>
              <tr>
                <td>Insumnium</td>
                <td>Finland</td>
                <td>Death metal</td>
              </tr>
              <tr>
                <td>Dream Theater</td>
                <td>USA</td>
                <td>Progressive metal</td>
              </tr>
              <tr>
                <td>Nightwish</td>
                <td>Finland</td>
                <td>Symphonic metal</td>
              </tr>
              <tr>
                <td>Symphony X</td>
                <td>USA</td>
                <td>Progressive metal</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Flex divs</h3>
          <FlexContainer>
            <div>
              <h4>Left table</h4>
              <table>
                <thead>
                  <tr>
                    <Th fg="seagreen">Groupe</Th>
                    <Th fg="crimson">Pays</Th>
                    <Th fg="teal">Style</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eluveitie</td>
                    <TdCondition pays="switzerland">Suisse</TdCondition>
                    <Td bg="yellow">Folk metal</Td>
                  </tr>
                  <tr>
                    <td>Insumnium</td>
                    <TdCondition pays="finland">Finland</TdCondition>
                    <td>Death metal</td>
                  </tr>
                  <tr>
                    <td>Dream Theater</td>
                    <TdCondition pays="usa">USA</TdCondition>
                    <td>Progressive metal</td>
                  </tr>
                  <tr>
                    <td>Nightwish</td>
                    <TdCondition pays="finland">Finland</TdCondition>
                    <td>Symphonic metal</td>
                  </tr>
                  <tr>
                    <td>Symphony X</td>
                    <TdCondition pays="usa">USA</TdCondition>
                    <td>Progressive metal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>Right table</h4>
              <table>
                <thead>
                  <tr>
                    <th>Groupe</th>
                    <th>Pays</th>
                    <th>Style</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eluveitie</td>
                    <td pays="suisse">Suisse</td>
                    <td>Folk metal</td>
                  </tr>
                  <tr>
                    <td>Insumnium</td>
                    <td pays="finland">Finland</td>
                    <td>Death metal</td>
                  </tr>
                  <tr>
                    <td>Dream Theater</td>
                    <td>USA</td>
                    <td>Progressive metal</td>
                  </tr>
                  <tr>
                    <td>Nightwish</td>
                    <td>Finland</td>
                    <td>Symphonic metal</td>
                  </tr>
                  <tr>
                    <td>Symphony X</td>
                    <td>USA</td>
                    <td>Progressive metal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FlexContainer>
        </section>
      </main>
    </>
  );
}
