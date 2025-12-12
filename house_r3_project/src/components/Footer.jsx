// Footer.
// TODO: Implement text and bullet point menu with the correct styling.
import houseTitleFooter from "@/assets/houseTitleFooter.png";

const Footer = () => {
  return (
    <footer>
      <section className="footerItems">
        <div className="footerList">
          <ol>
            <ul>Våra hus</ul>
            <ul>Tillval</ul>
            <ul>Hållbarhet</ul>
          </ol>
        </div>
        <article className="footerArticle">
          <p>
            Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
            rhoncus quam metus, id bibendum justo ultricies et. Integer nec nisl
            turpis. Nunc eget pulvinar urna.
          </p>
        </article>
      </section>
      <img
        src={houseTitleFooter}
        alt="House title"
        height={"auto"}
        width={"96%"}
        style={{ margin: "0% 2% 0% 2%" }}
      />
    </footer>
  );
};

export default Footer;
