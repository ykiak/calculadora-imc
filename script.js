document.querySelector("#button").addEventListener("click", (event) => {
    event.preventDefault()
    const formData = document.querySelector("#form")
    const imc = Number((formData.peso.value / Math.pow(formData.altura.value, 2)).toFixed(1))
    const sexo = document.querySelector("#sexo").value
    const calcularImc = () => {
        let res, status
        if(formData.peso.value <= 0 || formData.altura.value <= 0){
            document.querySelector("#valor").textContent = "Por favor, insira valores válidos"
            return
        }
        if (sexo === "m") {
            if (imc < 20) {
                res = "Abaixo do normal"
                status = "baixo"
            }
            else if (imc < 25) {
                res = "Normal"
                status = "normal"
            }
            else if (imc < 30) {
                res = "Obesidade leve"
                status = "leve"
            }
            else if (imc < 40) {
                res = "Obesidade moderada"
                status = "moderada"
            }
            else {
                res = "Obesidade mórbida"
                status = "morbida"
            }
        } else {
            if (imc < 19) {
                res = "Abaixo do normal"
                status = "baixo"
            }
            else if (imc < 24) {
                res = "Normal"
                status = "normal"
            }
            else if (imc < 29) {
                res = "Obesidade leve"
                status = "leve"
            }
            else if (imc < 39) {
                res = "Obesidade moderada"
                status = "moderada"
            }
            else {
                res = "Obesidade mórbida"
                status = "morbida"
            }
        }
        document.querySelector("#valor").textContent = imc // exibe imc
        document.querySelector("#valor").className = "value" // altera tamanho e peso da fonte
        document.querySelector("#classificacao").textContent = res // exibe a classificação
        document.querySelector("#classificacao").className = `imc_${status}` // altera a cor dinamicamente
    }

    const calcularPesoIdeal = () => {
        let pesomin, pesomax
        if(formData.peso.value <= 0 || formData.altura.value <= 0) return
         // cálculo do peso ideal com base na altura
        if(sexo === "m"){
            pesomin = (20 * Math.pow(formData.altura.value, 2)).toFixed(1)
            pesomax = (24.9 * Math.pow(formData.altura.value, 2)).toFixed(1)
            document.querySelector("#peso_ideal").textContent = `Peso ideal para homens: ${pesomin}kg - ${pesomax}kg`
        }
        else{
            pesomin = (19 * Math.pow(formData.altura.value, 2)).toFixed(1)
            pesomax = (23.9 * Math.pow(formData.altura.value, 2)).toFixed(1)
            document.querySelector("#peso_ideal").textContent = `Peso ideal para mulheres: ${pesomin}kg - ${pesomax}kg`
        }
    }

    if (!formData.peso.value || !formData.altura.value) { // validação
        return
    } else {
        calcularImc()
        calcularPesoIdeal()
    }
})