import React, { Component } from "react";

export default class Content3 extends Component {
  render() {
    return (
      <div>
        {/* implement */}
        <div className="d-flex justify-content-around">
          <h2 className> Rental book management</h2>
          <button id="show" className="btnAdd" onclick="showForm()">
            Add
          </button>
          <button id="hide" className="btnClose" onclick="showForm()">
            Close
          </button>
        </div>
        <div id="form-open" className="form-open">
          <form>
            <div className="form-row">
              <div className="col form-group">
                <label className="mt-2 ml-2 mb-2 mr-2 h5">ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="idRes"
                  placeholder="Enter id register"
                  required
                />
              </div>
              <div className="col form-group">
                <label className="mt-2 ml-2 mb-2 mr-2 h5">Borrower name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameBr"
                  placeholder="Enter borrower name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <label className="mt-2 ml-2 mb-2 mr-2 h5">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title name"
                  required
                />
              </div>
              <div className="col form-group">
                <label htmlFor="inputState" className="mt-2 ml-2 mb-2 mr-2 h5">
                  Category
                </label>
                <select id="inputState" className="form-control">
                  <option selected>Novel</option>
                  <option>Comic</option>
                  <option>Anecdote</option>
                  <option>Autobiography</option>
                  <option>Folk Tale &amp;&amp; Fairy Tale</option>
                  <option>Myth</option>
                  <option>Fable</option>
                  <option>Book</option>
                  <option>Dictionary</option>
                  <option>Funny story</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <label className="mt-2 ml-2 mb-2 mr-2 h5">Date borrowed</label>
                <input
                  type="date"
                  className="form-control"
                  id="dateBor"
                  required
                />
              </div>
              <div className="col form-group">
                <label className="mt-2 ml-2 mb-2 mr-2 h5">Date return</label>
                <input
                  type="date"
                  className="form-control"
                  id="dateReturn"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <button className="form-button" id="saveBtn">
                  Save
                </button>
              </div>
            </div>
          </form>
          {/* end form */}
        </div>
        {/* search button */}
        <div>
          <form className="row ml-2">
            <div className="d-flex justify-content-end">
              <div className="col form-group">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search"
                />
              </div>
            </div>
          </form>
          {/* end search */}
          <table id="table" className="table">
            {/* table head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Borrower</th>
                <th>Titile</th>
                <th>Category</th>
                <th>Date borrowed </th>
                <th>Date returned</th>
                <th>Function</th>
              </tr>
            </thead>
            {/* end table head */}
            {/* content table */}
            <tbody id="mytable">
              <tr>
                <td className="idRes">02</td>
                <td className="nameBr">Do Thanh Binh</td>
                <td className="title">Harry Poster</td>
                <td className="inputState">Novel</td>
                <td className="bor">2021-4-20</td>
                <td className="return">2021-4-23</td>
                <td>
                  <a
                    className="remove"
                    data-toggle="tooltip"
                    title="Delete"
                    href="#"
                  >
                    {" "}
                    <i className="fa fa-remove" />
                  </a>
                  {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                </td>
              </tr>
              <tr>
                <td className="idRes">02</td>
                <td className="nameBr">Do Thanh Binh</td>
                <td className="title">Java Core</td>
                <td className="inputState">Book</td>
                <td className="bor">2021-4-20</td>
                <td className="return">2021-4-23</td>
                <td>
                  <a
                    className="remove"
                    data-toggle="tooltip"
                    title="Delete"
                    href="#"
                  >
                    {" "}
                    <i className="fa fa-remove" />
                  </a>
                  {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                </td>
              </tr>
              <tr>
                <td className="idRes">02</td>
                <td className="nameBr">Do Thanh Binh</td>
                <td className="title">Head First Design Patterns</td>
                <td className="inputState">Book</td>
                <td className="bor">2021-4-20</td>
                <td className="return">2021-4-23</td>
                <td>
                  <a
                    className="remove"
                    data-toggle="tooltip"
                    title="Delete"
                    href="#"
                  >
                    {" "}
                    <i className="fa fa-remove" />
                  </a>
                  {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                </td>
              </tr>
              <tr>
                <td className="idRes">05</td>
                <td className="borrower">Huynh Huu An</td>
                <td className="titles">Greek mythology</td>
                <td className="category">Myth</td>
                <td className="dateBor">2021-4-21</td>
                <td className="returnBor">2021-4-26</td>
                <td>
                  <a
                    className="remove"
                    data-toggle="tooltip"
                    title="Delete"
                    href="#"
                  >
                    {" "}
                    <i className="fa fa-remove" />
                  </a>
                  {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                </td>
              </tr>
              <tr>
                <td className="idRes">05</td>
                <td className="nameBr">Huynh Huu An</td>
                <td className="title">Head First Design Patterns</td>
                <td className="inputState">Book</td>
                <td className="bor">2021-4-20</td>
                <td className="return">2021-4-23</td>
                <td>
                  <a
                    className="remove"
                    data-toggle="tooltip"
                    title="Delete"
                    href="#"
                  >
                    {" "}
                    <i className="fa fa-remove" />
                  </a>
                  {/* <a class="edit" data-toggle="tooltip" title="Edit" href="#"> <i class="fa fa-edit"></i></a> */}
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
        {/* end implement */}
      </div>
    );
  }
}
