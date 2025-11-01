import cycle from "./image.png"
import './App.css';
import axios from "axios";
import React from "react";

class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      activeItem: {
        image: null,
      },
    };
  }


  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };


    componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("/api/web/")
      .then((res) => this.setState({ imageList: res.data }))
      .catch((err) => console.log(err));
  };
  
  refreshPage() {
    window.location.reload(false);
  }

   handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);

    let url = "http://localhost:8000/api/web/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    this.refreshPage();
  };


  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/web/${item.id}/`)
      .then((res) => this.refreshList());
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.imageList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <img src={item.image} />
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };


    render(){
  return (
    <div>
        <img src={cycle} className="App-logo" alt="logo" width='100%'/>
        <h4 className="text-center py-3">New Arrival</h4>
        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <input type="submit" />
        </form>
        <div>
        {this.renderItems()}
        </div>
    </div>
  );
}
};

export default Home;

