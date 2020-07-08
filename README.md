## React-Test-Library Intro

- References:
  - https://testing-library.com/docs/dom-testing-library/api-queries
  - https://testing-library.com/docs/react-testing-library/api
  - https://react-testing-examples.com/jest-rtl/
  - https://www.robinwieruch.de/react-testing-library



- Queries
  - `screen.debug();` doesn't pause the thread; it simply logs the output of any earlier `render`
  - Three variants: 
    - `getBy*` throws an error if nothing's found
    - `queryBy*` returns `null` if nothing's found (so you can `expect` it `toBeNull` with Jest)
    - `findBy*` combines `getBy` with the `waitFor` [Async Utility](https://testing-library.com/docs/dom-testing-library/api-async), defaulting to 1000ms
  - Each of the above can return an array of DOM nodes, instead, via `getAllBy`, `queryAllBy`, `findAllBy`
  - query options:
    - `*ByLabelText` will grab the node of _the element associated with_ the... 
      - `<label>` that has that string as a child
      - element that has a matching `aria-labelledby` or `aria-label` attr
    - `*ByPlaceholderText` will grab the node whose `placeholder` element matches the string
    - 






## Todo: Learn More re: CRA Down the Road

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
