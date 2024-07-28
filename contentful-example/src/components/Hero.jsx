import heroImg from "../assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
            impedit autem magni aperiam commodi voluptas iste est minima.
            Dolores in tempora quos dicta id quas, itaque quibusdam repellendus
            officia?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
