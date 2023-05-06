(() =>{

    let sobreNosotros = document.querySelector("#content__SobreNosotros")

    window.onscroll = () =>{

        let position = window.pageYOffset || document.documentElement.scrollTop;

        sobreNosotros.style.bottom = position * 0.043 + "px";

    }
})();