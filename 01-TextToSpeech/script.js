const textArea = document.querySelector('#text')
let voiceList = document.querySelector('#voice') 
let speechBtn = document.querySelector('.submit')

let synth = speechSynthesis
let isSpeaking = true

function voiceSpeech() {
    for (let voice of synth.getVoices()) {
        let option = document.createElement('option')
        option.text = voice.name
        voiceList.add(option)
        console.log(option)
    }
}

synth.addEventListener('voiceschanged', voiceSpeech)

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text)
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utterance.voice = voice
        }
    }
    speechSynthesis.speak(utterance)
}

speechBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (textArea.value !== '') {
        if (!synth.speaking) {
            textToSpeech(textArea.value)
        }
        if (textArea.value.length > 80) {
            if (isSpeaking) {
                synth.resume()
                isSpeaking = false
                speechBtn.innerHTML = 'Pause Speech'
            } else {
                synth.pause()
                isSpeaking = true
                speechBtn.innerHTML = 'Resume Speech'
            }
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true
                    speechBtn.innerHTML = 'Convert To Speech'
                }
            })
        } else {
            speechBtn.innerHTML = 'Convert To Speech'
        }
    }
})

