import {
    showElement,
    hideElement,
    getProperty,
    setImageURL
} from './codeOrg.js'


export function escolherMassa() {
    // Verificar o estado dos elementos de rádio para escolher a massa
    if (getProperty("massaTradicional", "checked")) {
        setImageURL("imageMassa", "massa-tradicional.png");
    }
    else if (getProperty("massaPan", "checked")) {
        setImageURL("imageMassa", "massa-pan.png");
    }
    else if (getProperty("massaIntegral", "checked")) {
        setImageURL("imageMassa", "massa-integral.png");
    }
}

export function escolherMolho() {
    if (getProperty("radioMolhoDeTomate", "checked")) {
        showElement("imageMolhoDeTomate");
    } else {
        hideElement("imageMolhoDeTomate")
    }

    if (getProperty("molhoPesto", "checked")) {
        showElement("imageMolhoPesto");
    } else {
        hideElement("imageMolhoPesto")
    }
}


export function escolherTipo() {
    // Escolher tipo de pizza
    //Se as duas checkbox estiverem marcadas vai aparecer o "vegano-e-Nvegano"
    const carneComVegetais = getProperty("checkboxNaoVegetariana", "checked") && getProperty("checkboxVegetariana", "checked");
    const recheioPizza = getProperty("checkboxNaoVegetariana", "checked") || getProperty("checkboxVegetariana", "checked");
    const recheioNaoVegetariano = getProperty("checkboxNaoVegetariana", "checked") && !getProperty("checkboxVegetariana", "checked");
    const recheioVegetariano = !getProperty("checkboxNaoVegetariana", "checked") && getProperty("checkboxVegetariana", "checked");


    if (carneComVegetais) {
        showElement("imageVegetarianaNaoVegetriana");
    } else {
        hideElement("imageVegetarianaNaoVegetriana");
        hideElement("imageVegetariana");
        hideElement("imageNaoVegetariana");
    }

    if (recheioPizza) {
        if (recheioNaoVegetariano) {
            showElement("imageNaoVegetariana");
        } else {
            hideElement("imageNaoVegetariana");
        }

        if (recheioVegetariano) {
            showElement("imageVegetariana");
        } else {
            hideElement("imageVegetariana");
        }
    }
}