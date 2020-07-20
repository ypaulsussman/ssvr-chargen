# SSVR Character Generator

## Debugging

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

NB: run `npm start` and only _then_ run the debugger


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
