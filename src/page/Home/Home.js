import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import "./Home.css";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await this.getAnime();
  }

  async getAnime() {
    await Axios.get("https://anime-list.herokuapp.com/getallpage").then((x) => {
      console.log(x.data);
      this.setState({ data: x.data.values });
      console.log("state", this.state.data);
    });
  }

  renderCard(){
    if (this.state.data.length != 0) {
      let jsx = this.state.data.map((item) => {
        return (
          <Col style={{ marginTop: "25px" }} sm="4">
            <Card style={{ maxHeight: "700px" }}>
              <CardBody>
                <CardTitle className="row justify-content-center align-items-center" style={{
                  minHeight: "72px",
                }}>{item.title}</CardTitle>
              </CardBody>
              <img
                style={{
                  objectFit: "cover",
                  maxHeight: "520px",
                  minHeight: "500px",
                }}
                src={item.image}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  {/* {item.synopsis[item.synopsis.length-1]} */}
                </CardText>
                <CardLink href={item.link}>Original Link</CardLink>
              </CardBody>
            </Card>
          </Col>
        );
      });
      return jsx;
    }
  };

  render() {
    return (
      <div>
        {this.state.data.length == 0 && (
          <div className="row justify-content-center">
            <div
              className="text-center"
              style={{ marginTop: "200px" }}
            >
              <Spinner style={{ width: "5rem", height: "5rem" }} />
            </div>
          </div>
        )}
        {this.state.data.length !== 0 && (
          <Container style={{ paddingBottom: "50px" }}>
            <div style={{ marginTop: "20px" }}>
              <Jumbotron>
                <h1 className="display-3">Hello!</h1>
                <p className="lead">
                  this website is only for the purposes of learning scrap with
                  expressJS and reactJS
                </p>
                <hr className="my-2" />
                <p>the source of this web is My Anime List.</p>
                <p className="lead">
                  <a href="https:myanimelist.net/" target="_blank">
                    <Button color="primary">Visit</Button>
                  </a>
                </p>
              </Jumbotron>
            </div>
            <Row>{this.renderCard()}</Row>
          </Container>
        )}
      </div>
    );
    // if (!this.state.data) {
    //   return (
    //     <div className="row justify-content-center">
    //       <div className="col-md-12 text-center" style={{ marginTop: "200px" }}>
    //         <Spinner style={{ width: "10rem", height: "10rem" }} />
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <Container style={{ paddingBottom: "50px" }}>
    //       <div style={{ marginTop: "20px" }}>
    //         <Jumbotron>
    //           <h1 className="display-3">Hello!</h1>
    //           <p className="lead">
    //             this website is only for the purposes of learning scrap with
    //             expressJS and reactJS
    //           </p>
    //           <hr className="my-2" />
    //           <p>the source of this web is My Anime List.</p>
    //           <p className="lead">
    //             <a href="https://myanimelist.net/" target="_blank">
    //               <Button color="primary">Visit</Button>
    //             </a>
    //           </p>
    //         </Jumbotron>
    //       </div>
    //       <Row>{this.renderCard()}</Row>
    //     </Container>
    //   );
    // }
  }
}
export default Home;
