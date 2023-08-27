import { Loader, Page } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import "./smartBuilding.scss";

const Smartbuildings = () => {
  const { data: smartbuildings, isLoading } = useFetch(
    "/smartbuildings?sort[0]=date:desc&populate=*"
  );

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Energy And Environment - Smart City Citizen</title>
        <meta
          name="description"
          content="Latest news on smart city projects tackling energy and climate change - one of the most pressing issue of our age. We cover air quality, smart grids, solar and wind & water power, renewable energy and working towards meeting sustainable development goals"
        />
      </Helmet>
      <section className="city_building">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.smartbuildings_title}
          pagePara={headerparagraphs?.[0]?.attributes.smartbuildings_paragraph}
          smartbuildings={smartbuildings}
        />
        <div className="container">
          <div className="wrapper2">
            <div className="commercial_building">
              <h1>Commercial building</h1>
              <div className="newses">
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
              </div>
              <div className="BTN">
              <button>Read more</button>
              </div>
            </div>
            <div className="smart_residence">
              <h1>Commercial building</h1>
              <div className="newses">
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
              </div>
              <div className="BTN">
              <button>Read more</button>
              </div>
            </div>
            <div className="retail">
              <h1>Commercial building</h1>
              <div className="newses">
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
              </div>
              <div className="BTN">
              <button>Read more</button>
              </div>
            </div>
            <div className="municipals">
              <h1>Commercial building</h1>
              <div className="newses">
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
              </div>
              <div className="BTN">
              <button>Read more</button>
              </div>
            </div>
            <div className="park">
              <h1>Commercial building</h1>
              <div className="newses">
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
              </div>
              <div className="BTN">
              <button>Read more</button>
              </div>
            </div>
            <div className="industries">
              <h1>Commercial building</h1>
              <div className="newses">
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
                <div class="news">
                  <div class="news_img">
                    <a href="/details/opinion/5">
                      <img
                        src="https://backend-api.blr1.digitaloceanspaces.com/17452a32591c88a28449252c3aa5b354.jpg"
                        alt="news"
                      />
                    </a>
                  </div>
                  <div class="news_desc">
                    <a href="/details/opinion/5">demo part one</a>
                    <div class="author">
                      <strong>sadman</strong>
                      <span>2023-08-27</span>
                    </div>
                    <p>this is demko part one </p>
                  </div>
                </div>
              </div>
              <div className="BTN">
              <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smartbuildings;
