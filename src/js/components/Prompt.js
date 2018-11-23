import { h, render, Component } from "preact";
import localStore from "../helpers/local-store";
import CommandLink from "./CommandLink";
import commandList from "../helpers/command-list";
import { version } from "../../../package.json";
// import OnDemandLiveRegion from "on-demand-live-region";

export default class Prompt extends Component {
  constructor(props) {
    super(props);

    this.promptString = "⚡️ guest@jeremy.codes ~ $";
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.commandLink = this.commandLink.bind(this);
    this.availableCommands = commandList.map(commandPair => commandPair[0]);
    // this.liveRegion = new OnDemandLiveRegion({
    //   parent: "#term > output"
    // });

    let history = localStore("get", "history");
    this.setState({
      "bufferContents": null,
      "command": "",
      "commandLink": "",
      "commandHistory": typeof history === "string" ? history.split(",") : [],
      "historyCursor": typeof history === "string" ? history.split(",").length : 0,
      "loading": false
    });
  }

  componentDidMount() {
    this.setState({
      bufferContents: this.props.initialContent
    });

    this.setState({
      bufferContents: h("output", null, this.state.bufferContents, h("p", null, "This is version ", h("strong", null, h("u", null, version)), ". To find out what's new in this release, enter ", h(CommandLink, null, "cat CHANGELOG"), "."))
    });

    this.textInput.focus();
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleKeyDown(event) {
    this.textInput.focus();

    // Up/down keys pressed
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
      this.history(event.keyCode === 38);
    }

    // Ctrl+L shortcut (clear buffer)
    if (event.ctrlKey && event.keyCode === 76) {
      event.preventDefault();
      this.setState({
        bufferContents: ""
      });
    }

    // Enter key pressed
    if (event.keyCode === 13) {
      event.preventDefault();
      this.execCommand(this.textInput.innerText);
    }
  }

  commandLink(event) {
    if (event.target.nodeName === "A" && event.target.className === "command") {
      event.preventDefault();
      let command = event.target.innerText;
      this.execCommand(command);
    }

    this.textInput.focus();
  }

  history(up) {
    if (this.state.commandHistory.length > 0) {
      if (up === true && this.state.historyCursor > 0) {
        this.setState({
          historyCursor: this.state.historyCursor - 1
        });
      }

      if (up === false && this.state.historyCursor < this.state.commandHistory.length) {
        this.setState({
          historyCursor: this.state.historyCursor + 1
        });
      }

      this.setState({
        command: this.state.commandHistory[this.state.historyCursor]
      });
    }
  }

  execCommand(input) {
    let inputParts = input.trim().split(" ");
    let command = inputParts[0];
    let args;

    if (inputParts.length > 1) {
      args = inputParts[1];
    }

    if (this.availableCommands.indexOf(command.toLowerCase()) !== -1) {
      switch (command.toLowerCase()) {
        case "clear":
          this.bufferHandler("clear");
          break;

        case "history":
          this.bufferHandler("history", command, input, args);
          break;

        case "cd":
        case "rm":
          this.bufferHandler("permission", command, input, args);
          break;

        default:
          this.bufferHandler("command", command, input, args);
          break;
      }
    } else {
      this.bufferHandler("error", command, input, args);
    }

    localStore("set", "history", input);

    this.setState({
      command: "",
      commandHistory: [...this.state.commandHistory, input],
    });

    // We need to set this in a separate call so the new value reflects the updated state
    this.setState({
      historyCursor: this.state.commandHistory.length
    });
  }

  bufferHandler(action, command, input, args = null) {
    let lastCommand = h("p", null, this.promptString, input);

    if (action === "clear") {
      this.setState({
        bufferContents: ""
      });

      window.scrollTo(0, 0);
    } else if (action === "history") {
      let output;

      if (args === null) {
        output = [...this.state.commandHistory.map((command, index) => h("p", null, h("span", null, "  "), String(index).padStart(String(this.state.commandHistory.length).length, " "), h("span", null, "  "), h(CommandLink, null, command)))];
      }
      if (args === "-c") {
        this.setState({
          commandHistory: []
        });

        localStore("set", "history", "", true);
      }

      this.setState({
        bufferContents: h("output", null, this.state.bufferContents, lastCommand, output, h("br"))
      });
    } else if (action === "permission") {
      this.setState({
        bufferContents: h("output", null, this.state.bufferContents, lastCommand, h("p", null, "permission denied: ", input), h("br"))
      });
    } else if (action === "error") {
      this.setState({
        bufferContents: h("output", null, this.state.bufferContents, lastCommand, h("p", null, command, ": command not found"), h("br"))
      });
    } else {
      this.setState({
        loading: true
      });

      const module = import(/* webpackChunkName: "[request]" */ `../commands/${command.toLowerCase()}.js`).then(module => {
        this.setState({
          loading: false,
          bufferContents: h("output", null, this.state.bufferContents, lastCommand, [...module.default(args).map(line => line)], h("br"))
        });
      }).catch(error => {
        this.setState({
          loading: false,
          bufferContents: h("output", null, this.state.bufferContents, lastCommand, "Error: ", error, h("br"))
        });
      });
    }

    this.textInput.focus();
  }

  render() {
    return (
      h("output", {
        onClick: this.commandLink
      },
      this.state.bufferContents,
      h("p", {
        className: "prompt"
      }, this.promptString),
      h("span", null, {
        dangerouslySetInnerHTML: {
          __html: "&nbsp;"
        }
      }),
      h("p", {
        id: "prompt",
        ref: c => this.textInput = c,
        className: this.state.loading === true ? "loading" : "",
        role: "textbox",
        contentEditable: this.state.loading === true ? "false" : "true",
        onKeyDown: this.handleKeyDown
      }, this.state.command))
    );
  }
}
