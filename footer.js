//Template-Footer
const templateFooter = document.createElement('templateFooter')
templateFooter.innerHTML = `
<footer>
    <div class="logo">
        <img src="./img/logo.png " alt="Logo" />
        </div>
        <div class="footer-content">
        <span>
            Profesor <strong>Ronald Palacios</strong> | Curso:
            <u>Api HTML y JavaScript</u> &copy; 2024
        </span>
        <span>
            Estudiante: <strong>Andrea Muchacho</strong> | Cedula: 31131098
        </span>
    </div>
</footer>
`
class TemplateFooter extends HTMLElement{
    constructor(){
        super()
        const html = templateFooter.cloneNode(true)
        this.append(html)
    }
}
customElements.define("mi-footer", TemplateFooter)
