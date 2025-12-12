import "./styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import house2 from "@/assets/house2.png";
import house3 from "@/assets/house3.png";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section1-container">
          <article className="article1-container">
            <h2 id="article-title">Lorem ipsum dolor</h2>
            <div className="aside-container-separate">
              <aside className="aside-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ac erat tempor, fringilla nunc vitae, laoreet velit.
                  Suspendisse eu odio.
                </p>
                <p>
                  dapibus molestie nec quis ipsum. Pellentesque pretium finibus
                  vulputate. Praesent et urna ultricies, varius ipsum eget,
                  iaculis ante. Pellentesque quis mi tempus elit lobortis
                  cursus. Etiam vel sollicitudin elit, nec fringilla nibh.
                  Aenean convallis enim justo, nec lobortis velit molestie
                  vitae. Integer ac erat iaculis, blandit orci fermentum,
                  ullamcorper augue. Suspendisse vel massa sollicitudin, varius
                  lectus eu, rhoncus nisi. Fusce ullamcorper diam at lectus
                  cursus efficitur.
                </p>
              </aside>
              <aside className="aside-container">
                <p>
                  Morbi ornare sagittis dui, at dictum nulla bibendum non.
                  Nullam rhoncus quam metus, id bibendum justo ultricies et.
                  Integer nec nisl turpis. Nunc eget pulvinar urna. Duis mattis
                  porttitor semper. Nam sollicitudin odio et urna consectetur,
                  dignissim tempor eros dapibus. Duis a tortor et mauris egestas
                  interdum. Vivamus sed tortor ultricies, efficitur diam et,
                  pulvinar ligula. Ut ac rhoncus erat, eget rhoncus neque. Fusce
                  eu fermentum est. Nam fermentum tincidunt est, eget tempus ex
                  convallis nec. Ut felis nulla, consequat ac lorem quis,
                  dapibus cursus magna. Nunc sed lacus nuleros.
                </p>
              </aside>
            </div>
          </article>
        </section>
        <section className="section-container-images">
          <aside className="image-container">
            <img src={house2} alt="House nr 2 on a mountain" />
            <article className="image-content">
              <h2>Våra hus</h2>
              <button className="whiteButton">VÅRA HUS</button>
            </article>
          </aside>
          <aside className="image-container">
            <img src={house3} alt="House nr 3 on a mountain" />
            <article className="image-content">
              <h2>Tillval</h2>
              <button className="whiteButton">LÄS MER</button>
            </article>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
