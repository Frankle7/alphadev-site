import "./MainCard.css";


export default function MainCard() {
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-background">
          <img src="assets/images/codin.gif" alt="Coding animation" className="background-video" />
        </div>

        <div className="card-content">
          <div className="circle-photo">
            <img src="assets/images/img1.jpeg" alt="Sua Foto" />
          </div>
          <h2>Isfrankle Silva</h2>
          <p>
            Atuo como desenvolvedor Front-end, com experiência bancaria e start-ups como desenvolvedor Web
            (React), híbrido (Flutter) e nativo (Kotlin) em produtos de Marktplace, Investimento, Cartoes...
            Minha abordagem de aprendizado segue o formato T-Shaped, permitindo-me construir um conhecimento sólido e versátil.
          </p>
        </div>
      </div>
    </section>
  );
}
