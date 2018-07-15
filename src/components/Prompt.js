import { h, render, Component } from "preact";
import CommandList from "./CommandList";

export default class Prompt extends Component {
  constructor(props) {
    super(props);
    this.promptString = "⚡️ root@jeremy.codes $";
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      "bufferContents": "",
      "command": ""
    }
  }

  componentDidMount() {
    this.setState({
      bufferContents: <samp>Hi! This is my website! Type <u>help</u> to see a list of commands.</samp>
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      let command = event.target.innerText;

      if (CommandList.indexOf(command) !== -1) {
        switch (command) {
          case "clear":
            this.bufferHandler("clear");
            break;

          default:
            this.bufferHandler("command", command);
            break;
        }

        event.target.innerText = "";
        this.setState({
          command: ""
        });
      } else {
        this.bufferHandler("error", command);
      }
    }
  }

  bufferHandler(action, command) {
    let lastCommand = <samp><kbd>{this.promptString} {command}</kbd></samp>

    if (action === "clear") {
      this.setState({
        bufferContents: ""
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
      const module = import(`./commands/${command}.js`).then(module => {
        let output = [];

        module.default().forEach(line => {
          output.push(<samp>{line}</samp>);
        });

        this.setState({
          bufferContents: <output>
            {this.state.bufferContents}
            {lastCommand}
            {output}
          </output>
        });
      });
    }
  }

  render(props) {
    return (
      <section>
        {this.state.bufferContents}
        <samp class="prompt">{this.promptString}</samp>&nbsp;<kbd id="command-line" contentEditable onKeyPress={this.handleKeyPress}/>
      </section>
    );
  }
}
