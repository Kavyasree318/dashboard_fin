import React, { Component, setState } from "react";
import "./css/dashboard.css";
import Data from "./data";

var aa;

class Dashboard extends Component {
  // constructor() {
  //     super()
  //     this.state = {
  //         hover:true
  //     }
  // }

  // onMouseEvent() {
  //     var onMouseEvent = setState.onMouseEvent.bind(setState);
  //     this.setState({
  //         hover: aa
  //     })
  //     // const onMouseEvent = onMouseEvent.bind(this)
  //     console.log("jh")

  // }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 year">
            <h4>2018</h4>
            <hr />
            <table>
                <tbody>
              <tr>
                <th>q1</th>
                <th>q2</th>
                <th>q3</th>
                <th>q4</th>
              </tr>
              <tr>
                <td></td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="sample1" data-toggle="tooltip" data-placement="bottom" title={Data[1].duration}> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3 year">
            <h4>2019</h4>
            <hr />
            <table>
                <tbody>
              <tr>
                <th>q1</th>
                <th>q2</th>
                <th>q3</th>
                <th>q4</th>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className="sample1" data-toggle="tooltip" data-placement="bottom" title={Data[1].duration}> </td>
                <td className="sample1" data-toggle="tooltip" data-placement="bottom" title={Data[1].duration}> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td className="sample2" data-toggle="tooltip" data-placement="bottom" title={Data[2].duration}> </td>
                <td className="sample2" data-toggle="tooltip" data-placement="bottom" title={Data[2].duration}> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3 year">
            <h4>2020</h4>
            <hr />
            <table>
                <tbody>
              <tr>
                <th>q1</th>
                <th>q2</th>
                <th>q3</th>
                <th>q4</th>
              </tr>
              <tr>
                <td className="sample" data-toggle="tooltip" data-placement="bottom" title={Data[0].duration}></td>
                <td className="sample" data-toggle="tooltip" data-placement="bottom" title={Data[0].duration}> </td>
                <td className="sample" data-toggle="tooltip" data-placement="bottom" title={Data[0].duration}> </td>
                <td className="sample" data-toggle="tooltip" data-placement="bottom" title={Data[0].duration}> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className="sample2" data-toggle="tooltip" data-placement="bottom" title={Data[2].duration}> </td>
                <td className="sample2" data-toggle="tooltip" data-placement="bottom" title={Data[2].duration}> </td>
                <td className="sample2" data-toggle="tooltip" data-placement="bottom" title={Data[2].duration}> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3 year">
            <h4>2021</h4>
            <hr />
            <table>
                <tbody>
              <tr>
                <th>q1</th>
                <th>q2</th>
                <th>q3</th>
                <th>q4</th>
              </tr>
              <tr>
                <td className="sample" data-toggle="tooltip" data-placement="bottom" title={Data[0].duration}> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
