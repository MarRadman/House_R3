// Footer.
// TODO: Implement text and bullet point menu with the correct styling.
import houseTitleFooter from "@/assets/houseTitleFooter.png";

const Footer = () => {
  return (
    <footer>
      <section className="footerItems">
        <ul className="footerList">
          <li>Våra hus</li>
          <li>Tillval</li>
          <li>Hållbarhet</li>
        </ul>
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
        style={{ margin: "5% 2% 0% 2%" }}
      />
    </footer>
  );
};

export default Footer;
