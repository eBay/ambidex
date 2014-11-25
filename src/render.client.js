var React                   = require("react/addons");
var ReactRouter             = require("react-router");
var injectTapEventPlugin    = require("react-tap-event-plugin");


var containerSelector = "body";


injectTapEventPlugin();

var mountReact = function() {
  var container = document.querySelector(containerSelector);

  if (!container) {
    return false;

  } else {
    ReactRouter.run(
      require(__ambidexRoutesPath),
      ReactRouter.HistoryLocation,

      Handler =>  React.render(
                    <Handler
                      settings = { __ambidexSettings }
                    />,
                    container
                  )
    );

    return true;
  }
};

if (!mountReact()) {
  window.addEventListener(
    "DOMContentLoaded",
    mountReact
  );
}
