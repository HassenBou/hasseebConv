document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour gérer la conversion
    window.convert = function() {
        const type = document.getElementById('type').value;
        const fromUnit = document.getElementById('from-unit').value;
        const toUnit = document.getElementById('to-unit').value;
        const value = parseFloat(document.getElementById('value').value);
        const resultElement = document.getElementById('result');
        const outputElement = document.getElementById('output');

        let result = '';

        // Vérification de la validité de la valeur entrée
        if (isNaN(value)) {
            alert('Veuillez entrer un nombre valide.');
            return;
        }

        // Calcul des conversions en fonction du type, des unités source et cible
        switch (type) {
            case 'length':
                if (fromUnit === 'm' && toUnit === 'cm') {
                    result = `${value} mètres = ${(value * 100).toFixed(2)} centimètres`;
                } else if (fromUnit === 'cm' && toUnit === 'mm') {
                    result = `${value} centimètres = ${(value * 10).toFixed(2)} millimètres`;
                } else if (fromUnit === 'km' && toUnit === 'm') {
                    result = `${value} kilomètres = ${(value * 1000).toFixed(2)} mètres`;
                }
                break;
            case 'time':
                if (fromUnit === 's' && toUnit === 'min') {
                    result = `${value} secondes = ${(value / 60).toFixed(2)} minutes`;
                } else if (fromUnit === 'min' && toUnit === 'h') {
                    result = `${value} minutes = ${(value / 60).toFixed(2)} heures`;
                } else if (fromUnit === 'h' && toUnit === 'd') {
                    result = `${value} heures = ${(value / 24).toFixed(2)} jours`;
                } else if (fromUnit === 'd' && toUnit === 'mo') {
                    result = `${value} jours = ${(value / 30).toFixed(2)} mois`;
                } else if (fromUnit === 'mo' && toUnit === 'y') {
                    result = `${value} mois = ${(value / 12).toFixed(2)} années`;
                }
                break;
            case 'mass':
                if (fromUnit === 'g' && toUnit === 'kg') {
                    result = `${value} grammes = ${(value / 1000).toFixed(2)} kilogrammes`;
                } else if (fromUnit === 'kg' && toUnit === 'g') {
                    result = `${value} kilogrammes = ${(value * 1000).toFixed(2)} grammes`;
                } else if (fromUnit === 'mg' && toUnit === 'g') {
                    result = `${value} milligrammes = ${(value / 1000).toFixed(2)} grammes`;
                }
                break;
            case 'temperature':
                if (fromUnit === 'C' && toUnit === 'F') {
                    result = `${value} degrés Celsius = ${(value * 9/5 + 32).toFixed(2)} degrés Fahrenheit`;
                } else if (fromUnit === 'C' && toUnit === 'K') {
                    result = `${value} degrés Celsius = ${(value + 273.15).toFixed(2)} Kelvin`;
                } else if (fromUnit === 'F' && toUnit === 'C') {
                    result = `${value} degrés Fahrenheit = ${((value - 32) * 5/9).toFixed(2)} degrés Celsius`;
                } else if (fromUnit === 'F' && toUnit === 'K') {
                    result = `${value} degrés Fahrenheit = ${(((value - 32) * 5/9) + 273.15).toFixed(2)} Kelvin`;
                } else if (fromUnit === 'K' && toUnit === 'C') {
                    result = `${value} Kelvin = ${(value - 273.15).toFixed(2)} degrés Celsius`;
                } else if (fromUnit === 'K' && toUnit === 'F') {
                    result = `${value} Kelvin = ${(((value - 273.15) * 9/5) + 32).toFixed(2)} degrés Fahrenheit`;
                }
                break;
            case 'surface':
                if (fromUnit === 'm2' && toUnit === 'cm2') {
                    result = `${value} mètres carrés = ${(value * 10000).toFixed(2)} centimètres carrés`;
                } else if (fromUnit === 'cm2' && toUnit === 'mm2') {
                    result = `${value} centimètres carrés = ${(value * 100).toFixed(2)} millimètres carrés`;
                }
                break;
            case 'energy':
                if (fromUnit === 'J' && toUnit === 'kJ') {
                    result = `${value} joules = ${(value / 1000).toFixed(2)} kilojoules`;
                } else if (fromUnit === 'kJ' && toUnit === 'J') {
                    result = `${value} kilojoules = ${(value * 1000).toFixed(2)} joules`;
                }
                break;
            case 'force':
                if (fromUnit === 'N' && toUnit === 'kN') {
                    result = `${value} newtons = ${(value / 1000).toFixed(2)} kilonewtons`;
                }
                break;
            case 'speed':
                if (fromUnit === 'm/s' && toUnit === 'km/h') {
                    result = `${value} mètres par seconde = ${(value * 3.6).toFixed(2)} kilomètres par heure`;
                } else if (fromUnit === 'km/h' && toUnit === 'm/s') {
                    result = `${value} kilomètres par heure = ${(value / 3.6).toFixed(2)} mètres par seconde`;
                }
                break;
            case 'pressure':
                if (fromUnit === 'Pa' && toUnit === 'kPa') {
                    result = `${value} pascal = ${(value / 1000).toFixed(2)} kilopascal`;
                } else if (fromUnit === 'kPa' && toUnit === 'Pa') {
                    result = `${value} kilopascal = ${(value * 1000).toFixed(2)} pascal`;
                }
                break;
            case 'electricity':
                if (fromUnit === 'V' && toUnit === 'kV') {
                    result = `${value} volts = ${(value / 1000).toFixed(2)} kilovolts`;
                }
                break;
            case 'volume':
                if (fromUnit === 'L' && toUnit === 'mL') {
                    result = `${value} litres = ${(value * 1000).toFixed(2)} millilitres`;
                } else if (fromUnit === 'mL' && toUnit === 'L') {
                    result = `${value} millilitres = ${(value / 1000).toFixed(2)} litres`;
                }
                break;
            case 'sound':
                if (fromUnit === 'dB' && toUnit === 'dB_SPL') {
                    result = `${value} décibels = ${(value * 1).toFixed(2)} dB SPL`; // Just an example
                }
                break;
            default:
                result = 'Type invalide sélectionné';
        }

        // Afficher le résultat
        resultElement.style.display = 'block';
        outputElement.textContent = result;
    };

    // Fonction pour afficher les unités disponibles en fonction du type sélectionné
    document.getElementById('type').addEventListener('change', function() {
        const type = this.value;
        const fromUnit = document.getElementById('from-unit');
        const toUnit = document.getElementById('to-unit');

        // Vide les anciennes options
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';

        // Unités à afficher en fonction du type
        switch (type) {
            case 'length':
                fromUnit.innerHTML = `
                    <option value="m">Mètre (m)</option>
                    <option value="cm">Centimètre (cm)</option>
                    <option value="km">Kilomètre (km)</option>
                    <option value="mm">Millimètre (mm)</option>`;
                toUnit.innerHTML = `
                    <option value="m">Mètre (m)</option>
                    <option value="cm">Centimètre (cm)</option>
                    <option value="km">Kilomètre (km)</option>
                    <option value="mm">Millimètre (mm)</option>`;
                break;
            case 'time':
                fromUnit.innerHTML = `
                    <option value="s">Seconde(s) (s)</option>
                    <option value="min">Minute(s) (min)</option>
                    <option value="h">Heure(s) (h)</option>
                    <option value="d">Jour(s) (d)</option>
                    <option value="semaine">Semaine(s) (semaine)</option>
                    <option value="mo">Mois (mo)</option>
                    <option value="y">Année(s) (y)</option>
                    <option value="décade">Décennie(s) (décade)</option>
                    <option value="siècle">Siècle(s) (siècle)</option>
                    <option value="millénaire">Millénaire(s) (millénaire)</option>`;
                toUnit.innerHTML = `
                    <option value="s">Seconde(s) (s)</option>
                    <option value="min">Minute(s) (min)</option>
                    <option value="h">Heure(s) (h)</option>
                    <option value="d">Jour(s) (d)</option>
                    <option value="semaine">Semaine(s) (semaine)</option>
                    <option value="mo">Mois (mo)</option>
                    <option value="y">Année(s) (y)</option>
                    <option value="décade">Décennie(s) (décade)</option>
                    <option value="siècle">Siècle(s) (siècle)</option>
                    <option value="millénaire">Millénaire(s) (millénaire)</option>`;
                break;
            case 'mass':
                fromUnit.innerHTML = `
                    <option value="g">Grammes (g)</option>
                    <option value="kg">Kilogrammes (kg)</option>
                    <option value="mg">Milligrammes (mg)</option>`;
                toUnit.innerHTML = `
                    <option value="g">Grammes (g)</option>
                    <option value="kg">Kilogrammes (kg)</option>
                    <option value="mg">Milligrammes (mg)</option>`;
                break;
            case 'temperature':
                fromUnit.innerHTML = `
                    <option value="C">Celsius (°C)</option>
                    <option value="F">Fahrenheit (°F)</option>
                    <option value="K">Kelvin (K)</option>`;
                toUnit.innerHTML = `
                    <option value="C">Celsius (°C)</option>
                    <option value="F">Fahrenheit (°F)</option>
                    <option value="K">Kelvin (K)</option>`;
                break;
            case 'surface':
                fromUnit.innerHTML = `
                    <option value="m2">Mètre carré (m²)</option>
                    <option value="cm2">Centimètre carré (cm²)</option>
                    <option value="km2">Kilomètre carré (km²)</option>`;
                toUnit.innerHTML = `
                    <option value="m2">Mètre carré (m²)</option>
                    <option value="cm2">Centimètre carré (cm²)</option>
                    <option value="km2">Kilomètre carré (km²)</option>`;
                break;
            case 'energy':
                fromUnit.innerHTML = `
                    <option value="J">Joule (J)</option>
                    <option value="kJ">Kilojoule (kJ)</option>`;
                toUnit.innerHTML = `
                    <option value="J">Joule (J)</option>
                    <option value="kJ">Kilojoule (kJ)</option>`;
                break;
            case 'force':
                fromUnit.innerHTML = `
                    <option value="N">Newton (N)</option>`;
                toUnit.innerHTML = `
                    <option value="N">Newton (N)</option>
                    <option value="kN">Kilonewton (kN)</option>`;
                break;
            case 'speed':
                fromUnit.innerHTML = `
                    <option value="m/s">Mètre par seconde (m/s)</option>
                    <option value="km/h">Kilomètre par heure (km/h)</option>`;
                toUnit.innerHTML = `
                    <option value="m/s">Mètre par seconde (m/s)</option>
                    <option value="km/h">Kilomètre par heure (km/h)</option>`;
                break;
            case 'pressure':
                fromUnit.innerHTML = `
                    <option value="Pa">Pascal (Pa)</option>
                    <option value="kPa">Kilopascal (kPa)</option>`;
                toUnit.innerHTML = `
                    <option value="Pa">Pascal (Pa)</option>
                    <option value="kPa">Kilopascal (kPa)</option>`;
                break;
            case 'electricity':
                fromUnit.innerHTML = `
                    <option value="V">Volt (V)</option>
                    <option value="kV">Kilovolt (kV)</option>`;
                toUnit.innerHTML = `
                    <option value="V">Volt (V)</option>
                    <option value="kV">Kilovolt (kV)</option>`;
                break;
            case 'volume':
                fromUnit.innerHTML = `
                    <option value="L">Litre (L)</option>
                    <option value="mL">Millilitre (mL)</option>`;
                toUnit.innerHTML = `
                    <option value="L">Litre (L)</option>
                    <option value="mL">Millilitre (mL)</option>`;
                break;
            case 'sound':
                fromUnit.innerHTML = `
                    <option value="dB">Décibel (dB)</option>
                    <option value="dB_SPL">Décibel SPL (dB SPL)</option>`;
                toUnit.innerHTML = `
                    <option value="dB">Décibel (dB)</option>
                    <option value="dB_SPL">Décibel SPL (dB SPL)</option>`;
                break;
            default:
                fromUnit.innerHTML = '';
                toUnit.innerHTML = '';
        }
    });

    // Initialisation des unités à afficher pour la première sélection
    document.getElementById('type').dispatchEvent(new Event('change'));
});
