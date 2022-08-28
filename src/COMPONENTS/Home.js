import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import Navbar from "./Navbar";
import { Ucontext } from "./Usercontext";

const Home = () => {
  let context2 = useContext(Ucontext);

  const capture_event = (event) => {
    let title_of_card =
      event.target.parentNode.parentNode.previousElementSibling
        .previousElementSibling.innerText;

    let src =
      event.target.parentNode.parentNode.previousElementSibling.firstChild.src;

    let desc =
      event.target.parentNode.parentNode.nextElementSibling.firstChild
        .innerText;

    let obj = { title: title_of_card, url: src, desc: desc };

    context2.setReaddata([obj]);
  };

  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Trending Blogs</h1>
        <div className="blog-card" onClick={capture_event}>
          <div>
            <div id="1">
              <h1>heading-1 HAI</h1>
            </div>

            <div id="2">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div id="3">
              <Link to="/readSection" id="read-more">
                <button id="bt-1">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1>heading-1</h1>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div>
              <Link to="/readSection" id="read-more">
                <button id="bt-2">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1>heading-1</h1>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div>
              <Link to="/readSection" id="read-more">
                <button id="bt-3">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1>heading-1</h1>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div>
              <Link to="/readSection" id="read-more">
                <button id="bt-4">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>

          {context2.card_data.map((val) => {
            return (
              <>
                <div>
                  <div id="1">
                    <h1>{val.title}</h1>
                  </div>

                  <div id="2">
                    <img src={val.url} alt="" width="100%" height="100%" />
                  </div>

                  <div id="3">
                    <Link to="/readSection" id="read-more">
                      <button id="bt-1">Read More</button>
                    </Link>
                  </div>

                  <div id="4" style={{ display: "none" }}>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
