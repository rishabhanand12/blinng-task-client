import React from "react";
import Select from "react-select";

const options = [
  { value: "Sydney", label: "Sydney" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "New York", label: "New York" },
  { value: "Turkey", label: "Turkey" },
  { value: "Kenya", label: "Kenya" },
];

export default class SingleSelect extends React.Component {
  render() {
    return (
      <>
        <Select
          onChange={this.handleChange}
          className="basic-single"
          classNamePrefix="select"
          defaultValue=""
          name="locations"
          options={options}
          placeholder="Filter by Location"
        />
      </>
    );
  }
}
