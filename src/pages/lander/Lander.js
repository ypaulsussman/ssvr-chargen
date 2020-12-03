import React from "react";
import { Link } from "react-router-dom";
import "./Lander.scss";

const Lander = () => {
  return (
    <main className="lander__content">
      <h1>Welcome to the Campaign (setup)!</h1>

      <section>
        <p>If you're here, then either:</p>
        <ol>
          <li>
            I sent you a token so we could get you onboarded and prepped to
            play, and/or
          </li>
          <li>
            ...you know how to use browser DevTools (
            <em>which is also cool!</em>)
          </li>
        </ol>
        <p>
          So let's get started! The backgrounder map-n'-quiz should take ~10
          min, while you can spend as much time as you like on the rando-PC
          generator.
        </p>
      </section>
      <section>
        <Link aria-label="Link to PC Generator" to="/chargen">
          <h2 className="lander__link-text">Random-PC Generator</h2>
        </Link>
        <p>Start here first!</p>
        <p>
          Click 'Randomize' to generate a scaffold of a character. If you see an
          attribute you like, click on it to pin that value for the next
          randomization.
        </p>
        <p>
          When you've found/assembled a character that you like, hit cmd+p to
          print (well, save to pdf.) We'll reference it together when building
          out your player sheet.
        </p>
        <p>
          Repeat this 2-3 times, such that you have a couple options in case of
          overlap.
        </p>
      </section>
      <section>
        <Link aria-label="Link to Campaign Map" to="/mapquiz">
          <h2 className="lander__link-text">Backgrounder Map and Quiz</h2>
        </Link>
        <p>
          Later on, take a gander at that rad clickable map I put together,
          using some of 1997's finest HTML.{" "}
        </p>
        <p>
          I don't want to make reference to e.g. "the ruler of Chondath" and
          have people go "dafuk is a Chondath lol" -- so this just
          includes some basic geography/society of the region through which
          you'll be traipsing.
        </p>
        <p>
          (Confession: it's titled as "Map and Quiz" everywhere, but the latter
          is entirely missing -- I haven't had time to create one.)
        </p>
      </section>
    </main>
  );
};

export default Lander;
