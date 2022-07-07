import React from "react";
import Navigation from "../components/Navigation";

export default function Forms() {
  return (
    <>
      <main>
        <h1>Forms</h1>
        <Navigation />
        <form>
          <fieldset>
            <legend>Be first</legend>
            <label for="full-name">Full Name</label>
            <input id="full-name" type="text" value="Elon Reeve Musk" />
            <p>
              Sex
              <br />
              <label>
                <input type="radio" name="sex" checked="checked" />
                Male
              </label>
              <label>
                <input type="radio" name="sex" />
                Female
              </label>
            </p>
            <p>
              <label for="date">Date of birth</label>
              <input id="date" type="date" value="1971-06-28" />
            </p>
            <p>
              <label for="email">E-mail</label>
              <input id="email" type="email" value="elon.musk@spacex.com" />
            </p>
            <p>
              <label for="phone">Phone number</label>
              <input id="phone" type="tel" placeholder="Numbers only, please" />
            </p>
            <p>
              <label for="country">Country</label>
              <br />
              <select id="country">
                <option value="china">China</option>
                <option value="russia">Russia</option>
                <option value="usa" selected="">
                  USA
                </option>
              </select>
            </p>
            <p>
              <label for="about">Tell us about yourself</label>
              <textarea id="about"></textarea>
            </p>
            <p>
              <label for="photo">Photo</label>
              <input id="photo" type="file" />
            </p>
            <p>
              <label for="eyes-color">
                Eyes color <small>(just kidding)</small>
              </label>
              <input id="eyes-color" type="color" value="#000000" />
            </p>
            <p>
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Use strong password!"
              />
            </p>
            <p>
              <label>
                <input type="checkbox" />I pass my soul to SpaceX.
              </label>
            </p>
            <p>
              <input type="submit" value="Submit" />
              <button id="reset" type="reset" disabled="">
                Reset
              </button>
              <output id="output" style={{ display: "none" }}>
                <p>Welcome on board!</p>
              </output>
            </p>
          </fieldset>
        </form>
      </main>
    </>
  );
}
