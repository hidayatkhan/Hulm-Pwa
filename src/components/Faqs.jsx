import React, { Component } from "react";

class Faqs extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="row justify-content-center">
      //     <div className="media-container-column col-lg-8">
      //       <div className="accordion">
      //         <div className="card">
      //           <div
      //             className="card-header"
      //             data-toggle="collapse"
      //             data-target="#collapseOne"
      //             aria-expended="true"
      //             aria-controls="collapseOne"
      //           >
      //             <div className="mb-0">
      //               <h5></h5>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div
        className="container py-3 "
        style={{
          width: "100%",
          margin: "5%",
          justifyItems: "center",
        }}
      >
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="accordion" id="faqExample">
              <div className="card">
                <div className="card-header p-2" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Q: How does this work?
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    <b>Answer:</b> It works using the Bootstrap 4 collapse
                    component with cards to make a vertical accordion that
                    expands and collapses as questions are toggled.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-2" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Q: What is Bootstrap 4?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    Bootstrap is the most popular CSS framework in the world.
                    The latest version released in 2018 is Bootstrap 4.
                    Bootstrap can be used to quickly build responsive websites.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-2" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Q. What is another question?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    The answer to the question can go here.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-2" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Q. What is the next question?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    The answer to this question can go here. This FAQ example
                    can contain all the Q/A that is needed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
