// Header & Navmenu.
// TODO: Implement bugermenu and fix the navmenu with the correct styling.
import houseTitle from "@/assets/HouseTitle.svg";
import burgerMenu from "@/assets/BurgerMenu.svg";
import house1 from "@/assets/House1.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navItems">
          <img src={houseTitle} alt="House Title" />
          <img src={burgerMenu} alt="Burger menu" />
        </div>
      </nav>
      <div>
        {/* <img
          src={house1}
          alt="House nr 1 on a mountain"
          className="image-container-header"
        /> */}
        <section className="image-content-header">
          <article>
            <h2>Unika hus i en unik miljö</h2>
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
