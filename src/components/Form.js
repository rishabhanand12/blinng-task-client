import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      url: "",
      loc: "",
      banner: "",
    };
    this.bannerRef = React.createRef();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({
      [event.target.name]: file,
    });
    let bannerImg = document.createElement("img");
    bannerImg.src = URL.createObjectURL(file);
    this.bannerRef.current.append(bannerImg);
    bannerImg.onload = function () {
      URL.revokeObjectURL(bannerImg);
    };
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    let { name, description, banner, url, loc } = this.state;
    formData.append("name", name);
    formData.append("description", description);
    formData.append("banner", banner);
    formData.append("url", url);
    formData.append("loc", loc);
    try {
      let url = "http://localhost:5000/api/banner";
      let response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <div className="form-div">
          <form
            className="flex space-evenly align-center"
            onSubmit={this.handleSubmit}
            encType="multipart/form-data"
          >
            <div className="row-1-2">
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
              />
              <textarea
                onChange={this.handleChange}
                type="text"
                name="description"
                value={this.state.description}
                placeholder="Description"
              />
              <input
                onChange={this.handleChange}
                type="text"
                name="loc"
                value={this.state.loc}
                placeholder="Loc"
              />
            </div>
            <div className="row-1-2">
              <label ref={this.bannerRef} htmlFor="coverImg">
                + Click to add banner
              </label>
              <input
                onChange={this.handleFileChange}
                type="file"
                name="banner"
                accept="image/*,.jpg,.jpeg,.png,.webp"
                defaultValue={this.state.banner}
                id="coverImg"
              />
              <input
                onChange={this.handleChange}
                type="text"
                name="url"
                value={this.state.url}
                placeholder="URL"
              />
            </div>

            <input type="submit" value="Upload" onSubmit={this.handleSubmit} />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
