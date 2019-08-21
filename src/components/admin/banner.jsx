import React, { Component } from "react";
import classnames from "classnames";
import { getBanners } from "../../actions/custAction";
import { uploadBanner } from "../../login/actions/authAction";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      banners: [],
      name: "",
      file: null,
      errors: {}
    };
  }

  updateBanner = () => {
    getBanners()
      .then(res => {
        this.setState({
          count: res.data.count,
          banners: res.data.banners
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateBanner();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.banners !== this.state.banners) {
      this.updateBanner();
    }
  }

  banners = () => {
    const names = this.state.banners.map(object => {
      return object.name;
    });
    var banners = new Array(this.state.count).fill(0).map((zero, index) => (
      <tr key={index}>
        <th scope="col">{index + 1}</th>
        <td>{names[index]}</td>
        <td>testing</td>
      </tr>
    ));
    return banners;
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  readFile = e => {
    this.setState({
      file: e.target.files[0],
      loaded: 0
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", this.state.name);
    data.append("banner", this.state.file);
    uploadBanner(data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <div className="col-sm p-5">
          <h3 className="text-center">Жагсаалт</h3>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Нэр</th>
                  <th scope="col">Тайлбар</th>
                </tr>
              </thead>
              <tbody>{this.banners()}</tbody>
            </table>
          </div>
        </div>
        <div className="col-sm p-5">
          <h3 className="text-center">Баннер нэмэх</h3>

          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                placeholder="Баннерийн нэр"
                className={classnames("form-control", {
                  invalid: errors.name
                })}
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                name="file"
                aria-label="Image"
                onChange={this.readFile}
                error={errors.image}
                id="image"
                className={classnames("file-input", {
                  invalid: errors.image
                })}
              />
            </div>
            <div className="input-group justify-content-center">
              <button className="btn btn-primary mt-3" type="submit">
                Нэмэх
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Banner;
