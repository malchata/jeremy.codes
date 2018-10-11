import { h, render, Component } from "preact";
import { CommandLink } from "./CommandLink";
import commandList from "../helpers/command-list";
// import OnDemandLiveRegion from "on-demand-live-region";

export default class Prompt extends Component {
  constructor(props) {
    super(props);

    this.setState({
      "bufferContents": "",
      "command": "",
      "commandHistory": [],
      "commandHistoryIndex": 0,
      "commandLink": "",
      "loading": false
    });

    this.promptElement = document.getElementById("command-line");
    this.promptString = "⚡️ guest@jeremy.codes ~ $";
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.commandLink = this.commandLink.bind(this);
    this.availableCommands = commandList.map(commandPair => commandPair[0]);
    // this.liveRegion = new OnDemandLiveRegion();
  }

  componentDidMount() {
    this.setState({
      bufferContents: <samp>Hi! This is my website! Type (or tap) <CommandLink href="/help.html">help</CommandLink> to see a list of commands.</samp>
    });
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleKeyDown(event) {
    // Up/down keys pressed
    if ((event.keyCode === 38 || event.keyCode === 40) && this.state.commandHistory.length > 0) {
      event.preventDefault();
      this.history();
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
  }

  history() {
    let command;
    let commandIndex;

    if (this.state.commandHistory.length === 1) {
      commandIndex = 0;
    } else {
      // Up
      if (event.keyCode === 38) {
      }

      // Down
      if (event.keyCode === 40) {
      }
    }

    this.setState({
      command: command,
      commandHistoryIndex: commandIndex
    });
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
          this.bufferHandler("history");
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

    this.setState({
      command: "",
      commandHistoryIndex: this.state.commandHistory.length,
      commandHistory: [...this.state.commandHistory, input]
    });
  }

  bufferHandler(action, command, input, args = null) {
    let lastCommand = <samp><kbd>{this.promptString} {input}</kbd></samp>

    if (action === "clear") {
      this.setState({
        bufferContents: ""
      });
    } else if (action === "history") {
      // TODO: Implement history thingy
    } else if (action === "permission") {
      this.setState({
        bufferContents: <output>
          {this.state.bufferContents}
          {lastCommand}
          <samp>permission denied: {input}</samp>
        </output>
      });
    } else if (action === "error") {
      this.setState({
        bufferContents: <output>
          {this.state.bufferContents}
          {lastCommand}
          <samp>{command}: command not found</samp>
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
        })
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

      this.textInput.focus();
    }
  }

  render(props) {
    return (
      <main onClick={this.commandLink}>
        {this.state.bufferContents}
        <samp class="prompt">{this.promptString}</samp>&nbsp;<kbd id="command-line" ref={c => this.textInput = c} className={this.state.loading === true ? "loading" : ""} contentEditable={this.state.loading === true ? "false" : "true"} onKeyDown={this.handleKeyDown}>{this.state.command}</kbd>
      </main>
    );
  }
}
