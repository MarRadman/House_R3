// Header & Navmenu.
// TODO: Implement bugermenu and fix the navmenu with the correct styling.
import houseTitle from "@/assets/houseTitle.png";
import burgerMenu from "@/assets/burgerMenu.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navItems">
          <img src={houseTitle} alt="House Title" />
          <img src={burgerMenu} alt="Burger menu" id="burgerMenu" />
        </div>
      </nav>
      <div className="hero-container">
        <section className="image-content-header">
          <article>
            <h2 id="header-title">Unika hus i en unik miljö</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
              tortor eu odio dapibus molestie nec quis ipsum.
            </p>
            <button className="blackButton">LÄS MER</button>
          </article>
        </section>
      </div>
    </header>
  );
};

export default Header;
