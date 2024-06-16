import linkStyles from "./linkSection.module.css";
export const LinksSection = () => {
  return (
    <section className={linkStyles.linksContainer}>
      <h3>Links</h3>
      <ul className={linkStyles.linksList}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </section>
  );
};
