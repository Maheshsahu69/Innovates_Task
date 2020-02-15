import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countRoom: 1,
      countAdult: 1,
      countChildren: 3,
    }

   // functions binding start from here..................................... 
    this.incrementRoom = this.incrementRoom.bind(this);
    this.decrementRoom = this.decrementRoom.bind(this);
    this.incrementAdult = this.incrementAdult.bind(this);
    this.decrementAdult = this.decrementAdult.bind(this);
    this.incrementChildren = this.incrementChildren.bind(this);
    this.decrementChildren = this.decrementChildren.bind(this);

  };

  //Functions defination starts from here.....................................
  incrementRoom() {
    if (this.state.countRoom < 5) {
      this.setState({
        countRoom: this.state.countRoom + 1,
        countAdult: this.state.countRoom + 1,
        countChildren: (this.state.countRoom + 1) * 3
      });
    }


  }

  decrementRoom() {
    if (this.state.countRoom > 1) {
      this.setState({
       countRoom: this.state.countRoom - 1,
        countAdult: this.state.countRoom -1,
        //countChildren: this.state.countChildren==0?(16-4):(this.state.countChildren - 3)
      

      });
    }
  
    if(this.state.countRoom>1){
      this.setState({countChildren:3});
    }
    if(this.state.countRoom>2){
      this.setState({countChildren:6});
    }
    if(this.state.countRoom>3){
      this.setState({countChildren:9});
    }
    if(this.state.countRoom>4){
      this.setState({countChildren:12});
    }
    if(this.state.countRoom>5){
      this.setState({countChildren:15});
    }
   

  }

  incrementAdult() {
    if (this.state.countAdult < 4 && this.state.countRoom == 1) {
      this.setState({
        countAdult:this.state.countAdult + 1
      });

      if (this.state.countChildren > 0) {
        this.setState({
          countChildren: this.state.countChildren - 1
        });

      }

    }
    if (this.state.countAdult < 8 && this.state.countRoom == 2) {
      this.setState({
        countAdult: this.state.countAdult + 1,
        countChildren: this.state.countChildren - 1,
      });
    }

    if (this.state.countAdult < 12 && this.state.countRoom == 3) {
      this.setState({
        countAdult: this.state.countAdult + 1,
        countChildren: this.state.countChildren - 1,
      });
    }

    if (this.state.countAdult < 16 && this.state.countRoom == 4) {
      this.setState({
        countAdult: this.state.countAdult + 1,
        countChildren: this.state.countChildren - 1,
      });
    }

    if (this.state.countAdult < 20 && this.state.countRoom == 5) {
      this.setState({
        countAdult: this.state.countAdult + 1,
        countChildren:this.state.countChildren-1,
      });


    }

    // if Adult increase Room count should also increase to meet requirement 
    // if(this.state.countAdult+1==5){
    //   this.setState({
    //     countAdult:this.state.countAdult+1,
    //     countRoom:2
    //   });
    // }

    // if(this.state.countAdult+1==9){
    //   this.setState({
    //     countAdult:this.state.countAdult+1,
    //     countRoom:3
    //   });
    // }

    // if(this.state.countAdult+1==13){
    //   this.setState({
    //     countAdult:this.state.countAdult+1,
    //     countRoom:4
    //   });
    // }

    // if(this.state.countAdult+1==17){
    //   this.setState({
    //     countAdult:this.state.countAdult+1,
    //     countRoom:5
    //   });
    // }


  }

  decrementAdult() {
    if (this.state.countAdult > this.state.countRoom) {
      this.setState({
        countAdult: this.state.countAdult - 1,
        countChildren: this.state.countChildren + 1
      });

    }
  }


  incrementChildren() {
    if ((this.state.countChildren < 3) && this.state.countRoom == 1)
      this.setState({
        countChildren: this.state.countChildren + 1,
        countAdult: this.state.countChildren==0?this.state.countAdult=3:this.state.countAdult - 1
      });

    if ((this.state.countChildren < 6) && this.state.countRoom == 2)
      this.setState({
        countChildren: this.state.countChildren + 1,
        countAdult: this.state.countAdult - 1
      });

    if ((this.state.countChildren < 9) && this.state.countRoom == 3)
      this.setState({
        countChildren: this.state.countChildren + 1,
        countAdult: this.state.countAdult - 1
      });
    if ((this.state.countChildren < 12) && this.state.countRoom == 4)
      this.setState({
        countChildren: this.state.countChildren + 1,
        countAdult: this.state.countAdult - 1
      });
    if ((this.state.countChildren < 15) && this.state.countRoom == 5)
      this.setState({
        countChildren: this.state.countChildren + 1,
        countAdult: this.state.countAdult - 1
      });

  }

  decrementChildren() {
    if (this.state.countChildren > 0) {
      this.setState({
        countChildren: this.state.countChildren - 1,
        countAdult: this.state.countAdult + 1
      });
    }


  }
  render() {
    return (
      <div>
        <h2 style={{ color: "#006699", marginLeft: "90px" }}> <span className="fa fa-users" aria-hidden="true" style={{ color: "#006699", fontSize: "25px" }}> </span> Choose Number Of People</h2>
        <div id="outerDivID">
          <div style={{ width: "100%", borderBottom: "2px solid #7a7a52", height: "90px" }}> <span className="fa fa-bed" aria-hidden="true" style={{ color: "#006699", fontSize: "25px" }}></span><span id="TitleDivRoom" > ROOMS</span>
            <span style={{ paddingLeft: "460px" }}><button id="btnDecreament" className="fa fa-minus-circle" onClick={this.decrementRoom}></button></span>
            <span style={{ paddingLeft: "45px", color: "#006699", fontWeight: "bold" }} >{this.state.countRoom}</span>
            <span style={{ paddingLeft: "50px" }}><button id="btnIncrement" className="fa fa-plus-circle" onClick={this.incrementRoom} ></button></span>

          </div>

          <div style={{ width: "100%", borderBottom: "2px solid #7a7a52", height: "95px",marginTop:"15px"}}> <span className="fa fa-user" aria-hidden="true" style={{ color: "#006699", fontSize: "25px" }}></span><span id="TitleDivAdult">  ADULTS</span>
            <span style={{ paddingLeft: "472px" }}><button id="btnDecreament" className="fa fa-minus-circle" onClick={this.decrementAdult} ></button></span>
            <span style={{ paddingLeft: "45px", color: "#006699", fontWeight: "bold" }}>{this.state.countAdult}</span>
            <span style={{ paddingLeft: "50px" }}><button id="btnIncrement" className="fa fa-plus-circle" onClick={this.incrementAdult} ></button></span>

          </div>

          <div style={{ width: "100%", height: "90px",marginTop:"15px"}}> <span className="fa fa-child" aria-hidden="true" style={{ color: "#006699", fontSize: "25px" }}></span><span id="TitleDivChildren"> CHILDREN</span>
            <span style={{ paddingLeft: "442px" }}><button id="btnDecreament" className="fa fa-minus-circle" onClick={this.decrementChildren}></button></span>
            <span style={{ paddingLeft: "45px", color: "#006699", fontWeight: "bold" }}>{this.state.countChildren}</span>
            <span style={{ paddingLeft: "50px" }}><button id="btnIncrement" className="fa fa-plus-circle" onClick={this.incrementChildren}></button></span>

          </div>
        </div>
      </div>


    );
  };

};
export default App;


//ReactDOM.render(<App/>, )