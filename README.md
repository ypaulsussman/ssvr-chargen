# One-Off D&D Player-Onboarding App 🐉 ⚔️

## Why did you build this?

Mercenary and feckless as ever, I changed jobs in the summer of 2020. 👼

My then-position had, for much of the prior year, involved working on the server (_either via Ruby on Rails, the Elasticsearch DSL, the occasional SQL, or our old friend bash_); the new role, however, would almost exclusively be a return to React and vanilla JS.

As such, I decided to embark on a refresher project: I came up with half a dozen ideas, and settled on `ssvr-chargen`\* as both a nifty concept and tool I might, y'know, someday actually use.

In the background of wrapping up projects at my old employer and onboarding at my new one, I put this together over the intervening nights and weekends. And -- after a [draining data-munging project](https://github.com/ypaulsussman/wwc_api) immediately prior -- it was really fun to work on something so bounded and browser-oriented! 

I acheived a personally-satisfying MVP right about the time life returned to normal and I (_yet again..._) became too busy to run that envisioned D&D campaign: combined, these convinced me to stabilize the code in its current form.

The site's [viewable to all](https://nervous-mclean-e592b8.netlify.app/), and (_given negligible hosting/upkeep costs_) probably will remain so. If you want to tool around, the login token is in `constants.js` -- knock yourself out! Inside there's a campaign-specific character-backstory generator, and a clickable gazetteer of the adventuring region (_...so maybe ~5min of entertainment._) 😸

\*(_If you're really interested, the plan was to broadly adapt the [Shattered Star](https://pathfinderwiki.com/wiki/Shattered_Star_(adventure*path)) Adventure Path to the [Vilhon Reach](https://en.wikipedia.org/wiki/The_Vilhon_Reach) region of the Forgotten Realms. Nerd_)

## What did you learn?

Normally I try to write [a separate post](https://www.suss.world/category/what-i-do/) on what I discovered while building something new. This site, however, was intended as a light apertif, a reexploration of previously-familiar skills: as such, there's not _really_ enough content for a separate article.

In getting it out the door, I encountered three novel-to-me aspects of the frontend; for my own notes, I'm recording them inside the repo (_aka here!_)

- Implementing the clickable-image setup via `<map>` and `<area>` tags, in `src/pages/mapQuiz/MapQuiz.js`
  - There's always a thrill at getting to follow the rule of [least power](https://en.wikipedia.org/wiki/Rule_of_least_power) with a feature you thought you couldn't.
  - In the dash to get the app out the door, I pretty comprehensively threw responsive design out the window. I wonder how much of it _could_ be done with adding bootstrap-style breakpoints and concomitant multipliers on each `coordinates` key: or whether, ultimately, this would need to cede responsibility to JavaScript.
- Using `localStorage` with `<Router>` for the cheapest convenience-login around.
  - This was pretty fun, in a "_god this is hacky but away we goooo hey that only took like 20 minutes_" sort of way.
  - Honestly, for stateful-but-client-side-only POC apps, mocking out (_future server/db_) behaviors and persistence by writing to `localStorage` doesn't seem terrible.
  - `src/pages/login/Login.test.js` displays the main hangup, though: I'm still pretty bad at mocking browser API's in test.
- Which brings us to `testing-library`!
  - Just when I'd finally Stockholm'd myself into getting comfortable with Enzyme, I joined a team that was all RTL, all day.
  - I love the philosophy of testing user interactions over implementation details: it reminds me of Rails' slow replacement of `controllers/` unit tests with `integration/` suites.
  - I'm not in love with how often I've needed to use `document.body.querySelector` to get at a node: though, as the docs note, this is often a code smell of our own (_implying that the code under tests needs better a11y markup._) So perhaps this is a net positive?
  - The only other qualification I've got is that, to date, I think both here and at work I've used `fireEvent.click` for simulating 95+% of interactions. Which, true, probably accurately mirrors actual user-behavior: but also means that I don't yet fully know how well it triggers/handles other `event` types.

## Where might it go next?

(_AKA notes for future-y-with-time-on-his hands, who will clearly ever exist_)

- Add character-backstory management
  - Add '_save character_' to `localStorage` (_serialize keys; lookup by name_)
  - Add index-view of saved characters
    - Add '_print characters_' PDF export, from index-view
  - Add show-view for saved characters
    - Add ability to imperatively select a given attribute, from show-view
- Add `Mapquiz`... uh, quiz

## (_Complete aside, but don't lose this y!_) VSCode Debugging Setup:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch ff localhost",
      "type": "firefox",
      "request": "launch",
      "reAttach": true,
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "log": {
        "fileName": "${workspaceFolder}/log.txt",
        "fileLevel": {
          "default": "Debug"
        }
      }
    }
  ]
}
```

**NB:** run `npm start` and only _then_ run the debugger
