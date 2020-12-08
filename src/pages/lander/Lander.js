import React from "react";
import { Link } from "react-router-dom";
import "./Lander.scss";

const Lander = () => {
  return (
    <main className="lander__content">
      <h1>Welcome to the Campaign (setup)!</h1>

      <section>
        <p>If you&apos;re here, then either:</p>
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
          So let&apos;s get started! The backgrounder map-n&apos;-quiz should take ~10
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
          Click &apos;Randomize&apos; to generate a scaffold of a character. If you see an
          attribute you like, click on it to pin that value for the next
          randomization.
        </p>
        <p>
          When you&apos;ve found/assembled a character that you like, hit cmd+p to
          print (well, save to pdf.) We&apos;ll reference it together when building
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
          using some of 1997&apos;s finest HTML.
        </p>
        <p>
          I don&apos;t want to make reference to e.g. &quot;the ruler of Chondath&quot; and
          have people go &quot;dafuk is a Chondath lol&quot; -- so this just
          includes some basic geography/society of the region through which
          you&apos;ll be traipsing.
        </p>
        <p>
          (Confession: it&apos;s titled as &quot;Map and Quiz&quot; everywhere, but the latter
          is entirely missing -- I haven&apos;t had time to create one.)
        </p>
      </section>
    </main>
  );
};

export default Lander;
