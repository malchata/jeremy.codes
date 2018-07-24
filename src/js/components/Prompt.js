import { h, render, Component } from "preact";
import { CommandLink } from "./CommandLink";
import commandList from "../helpers/command-list";

export default class Prompt extends Component {
  constructor(props) {
    super(props);
    this.promptString = "⚡️ guest@jeremy.codes ~ $";
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setState({
      "bufferContents": "",
      "command": "",
      "commandHistory": [],
      "commandHistoryIndex": 0
    });
    this.availableCommands = commandList.map(commandPair => commandPair[0]);
  }

  componentDidMount() {
    this.setState({
      bufferContents: <samp>Hi! This is my website! Type (or tap) <CommandLink>help</CommandLink> to see a list of commands.</samp>
    });
  }

  handleKeyDown(event) {
    // Up/down keys pressed
    if ((event.keyCode === 38 || event.keyCode === 40) && this.state.commandHistory.length > 0) {
      event.preventDefault();

      if (event.keyCode === 38) {
      }

      if (event.keyCode === 40) {
      }
    }

    // Enter key pressed
    if (event.keyCode === 13) {
      event.preventDefault();
      let input = event.target.innerText.trim();
      let inputParts = event.target.innerText.trim().split(" ");
      let command = inputParts[0];
      let args;

      if (inputParts.length > 1) {
        args = inputParts[1];
      }

      if (this.availableCommands.indexOf(command) !== -1) {
        switch (command) {
          case "clear":
            this.bufferHandler("clear");
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

      event.target.innerText = "";
      this.setState({
        command: ""
      });

      this.setState({
        commandHistory: [...this.state.commandHistory, input]
      });

      this.setState({
        commandHistoryIndex: this.state.commandHistory.length - 1
      });
    }
  }

  bufferHandler(action, command, input, args = null) {
    let lastCommand = <samp><kbd>{this.promptString} {input}</kbd></samp>

    if (action === "clear") {
      this.setState({
        bufferContents: ""
      });
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
      const module = import(`../commands/${command}.js`).then(module => {
        this.setState({
          bufferContents: <output>
            {this.state.bufferContents}
            {lastCommand}
            {[...module.default(args).map(line => <samp>{line}</samp>)]}
            <br />
          </output>
        });
      });
    }
  }

  render(props) {
    return (
      <section>
        {this.state.bufferContents}
        <samp class="prompt">{this.promptString}</samp>&nbsp;<kbd id="command-line" contentEditable onKeyDown={this.handleKeyDown} />
      </section>
    );
  }
}
