class SpecialHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <header class="header">

      <a href="./index.html"><img src="./assets/img/logo.png" alt="logo futamigos" class="logo"></a>

      <div class="div-header">
        <div class="div-header-cima">

          <div class="patrocinadores">
            <img src="./assets/img/lamafia.png" alt="patrocinador la mafia" class="patrocinador">
            <img src="./assets/img/logo_privacy.png" alt="" class="patrocinador-privacy">
            <img src="./assets/img/amstel.png" alt="" class="patrocinador">
          </div>
          <div class="redes">
            <a href="https://www.instagram.com/futamigos.oficial" target="blank">
              <img src="./assets/img/instagram.png" alt="instagram" class="instagram">
            </a>
          </div>

        </div>
      </div>
        <div class="div-header-baixo desktop">
          <div class="div-menu">
            <a href="./galeria.html" class="menu">galeria</a>
            <a href="./mvps.html" class="menu">mvps</a>
            <a href="./index.html#elenco" class="menu">elenco</a>
            <a href="./index.html#proximo-jogo" class="menu">jogos</a>
          </div>
        </div>

        <div class="div-header-baixo-mobile">
          <div class="dropdown">
            <button></button>
            <div class="content">
              <a href="./galeria.html">galeria</a>
              <a href="./mvps.html">mvps</a>
              <a href="./index.html#elenco">elenco</a>
              <a href="./index.html#proximo-jogo">jogos</a>
            </div>
          </div>

          <div class="redes-mobile">
            <a href="https://www.instagram.com/futamigos.oficial" target="blank">
              <img src="./assets/icons8-instagram.svg" alt="instagram" class="instagram">
            </a>
            </div>
        </div>

      </header>
    `
    }
}

class SpecialFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer>
      <div>
        <p>Copyright 2024 - Todos os direitos reservados</p>
        <p>Desenvolvido por: Vinicius Quintian e Lucas Mendes</p>
      </div>
      <div class="footer-patrocinadores">
        <img src="./assets/img/lamafia.png" alt="logo lamafia" class="footer-patrocinador">
        <img src="./assets/img/logo_privacy.png" alt="logo privacy" class="footer-patrocinador-privacy">
        <img src="./assets/img/amstel.png" alt="logo amstel" class="footer-patrocinador">
      </div>
    </footer>
    `
  }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)