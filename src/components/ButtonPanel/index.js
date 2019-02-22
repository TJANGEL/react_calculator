import Button from "../Button";
import React from "react";
import "./style.css";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} red />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} red />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} red />
        </div>
        <div>
          <Button name="" clickHandler={this.handleClick} />
          <Button name="0" clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} red />
          <Button name="%" clickHandler={this.handleClick} red />
        </div>
        <div>
          <Button name="Clear" clickHandler={this.handleClick} red />
        </div>
      </div>
    );
  }
}
export default ButtonPanel;
