import { h, render, Component } from "preact";
import localStore from "../helpers/local-store";
import CommandLink from "./CommandLink";
import commandList from "../helpers/command-list";
import { version } from "../../../package.json";
// import OnDemandLiveRegion from "on-demand-live-region";

export default class Prompt extends Component {
  constructor(props) {
    super(props);

    this.promptElement = document.getElementById("command-line");
    this.promptString = "⚡️ guest@jeremy.codes ~ $";
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.commandLink = this.commandLink.bind(this);
    this.availableCommands = commandList.map(commandPair => commandPair[0]);
    // this.liveRegion = new OnDemandLiveRegion();

    let history = localStore("get", "history");
    this.setState({
      "bufferContents": "",
      "command": "",
      "commandLink": "",
      "commandHistory": typeof history === "string" ? history.split(",") : [],
      "commandCursor": typeof history === "string" ? history.split(",").length : 0,
      "loading": false
    });
  }

  componentDidMount() {
    this.setState({
      bufferContents: this.props.initialContent
    });

    this.setState({
      bufferContents: <output>
        {this.state.bufferContents}
        <samp><br/>This is version <strong><u>{version}</u></strong>. To find out what's new in this release, enter <CommandLink>cat CHANGELOG</CommandLink>.</samp>,
        <br />
      </output>
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
      if (up === true && this.state.commandCursor > 0) {
        this.setState({
          commandCursor: this.state.commandCursor - 1
        });
      }

      if (up === false && this.state.commandCursor < this.state.commandHistory.length) {
        this.setState({
          commandCursor: this.state.commandCursor + 1
        });
      }

      this.setState({
        command: this.state.commandHistory[this.state.commandCursor]
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
      commandCursor: this.state.commandHistory.length
    });
  }

  bufferHandler(action, command, input, args = null) {
    let lastCommand = <samp><kbd>{this.promptString} {input}</kbd></samp>;

    if (action === "clear") {
      this.setState({
        bufferContents: ""
      });

      window.scrollTo(0, 0);
    } else if (action === "history") {
      let output;

      if (args === null) {
        output = [...this.state.commandHistory.map((command, index) => {
          console.log(String(this.state.commandHistory).length);
          return <samp>&nbsp;&nbsp;{String(index).padStart(String(this.state.commandHistory.length).length, " ")}&nbsp;&nbsp;<CommandLink>{command}</CommandLink></samp>;
        })];
      }
      if (args === "-c") {
        this.setState({
          commandHistory: []
        });

        localStore("set", "history", "", true);
      }

      this.setState({
        bufferContents: <output>
          {this.state.bufferContents}
          {lastCommand}
          {output},
          <br />
        </output>
      });
    } else if (action === "permission") {
      this.setState({
        bufferContents: <output>
          {this.state.bufferContents}
          {lastCommand}
          <samp>permission denied: {input}</samp>
          <br />
        </output>
      });
    } else if (action === "error") {
      this.setState({
        bufferContents: <output>
          {this.state.bufferContents}
          {lastCommand}
          <samp>{command}: command not found</samp>
          <br />
        </output>
      });
    } else {
      this.setState({
        loading: true
      });

      const module = import(/* webpackChunkName: "[request]" */ `../commands/${command.toLowerCase()}.js`).then(module => {
        this.setState({
          loading: false,
          bufferContents: <output>
            {this.state.bufferContents}
            {lastCommand}
            {[...module.default(args).map(line => <samp>{line}</samp>)]}
            <br />
          </output>
        });
      }).catch(error => {
        this.setState({
          loading: false,
          bufferContents: <output>
            {this.state.bufferContents}
            {lastCommand}
            <samp>{`Error: ${error}`}</samp>
            <br />
          </output>
        });
      });
    }

    this.textInput.focus();
  }

  render(props) {
    return (
      <output onClick={this.commandLink}>
        {this.state.bufferContents}
        <samp class="prompt">{this.promptString}</samp>&nbsp;<kbd id="command-line" ref={c => this.textInput = c} className={this.state.loading === true ? "loading" : ""} role="textbox" contentEditable={this.state.loading === true ? "false" : "true"} onKeyDown={this.handleKeyDown}>{this.state.command}</kbd>
      </output>
    );
  }
}
