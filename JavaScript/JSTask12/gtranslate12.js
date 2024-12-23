function translateText() {
    const languageSelect = document.getElementById('languageSelect');
    const translatedText = document.getElementById('translatedText');
    const text = "Hi, welcome to Google translation.";

    switch (languageSelect.value) {
        case 'hindi':
            translatedText.textContent = "नमस्ते, गूगल अनुवाद में आपका स्वागत है।";
            break;
        case 'english':
            translatedText.textContent = text;
            break;
        case 'french':
            translatedText.textContent = "Bonjour, bienvenue sur Google Traduction.";
            break;
        case 'telugu':
            translatedText.textContent = "హాయ్, గూగుల్ అనువాదానికి స్వాగతం.";
            break;
        case 'dutch':
            translatedText.textContent = "Hallo, welkom bij Google Vertalen.";
            break;
        default:
            translatedText.textContent = text;
    }
}

    
