/* dev ed: https://www.youtube.com/watch?v=lq7tFgvdf4k */

const button = document.querySelector('.talk');
const content = document.querySelector('.content');
const response =document.querySelector('.response');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    'Im good you little shit', 
    'Doing good shithead', 
    'leave me alone'
];

const weather = [
    'weather is fine, maybe stick your fat head out the window and check, you dumbass',
    'You need a fucking tan *'
];

const alvin = [
    'Alvin is the biggest * on the earth',
    '*',
    'Alvin is a dog',
    'woof woof *',
    'woof woof Alvin is *'
]



recognition.onstart = () => {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = `User: ${transcript}`;
    console.log(`transcript added to html = ${transcript}`);
    readOutLoud(transcript);
};

//add the listener to the btn

button.addEventListener('click', () => {
    recognition.start();
});

readOutLoud = (message) => {
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'I dont know what you said';
    response.textContent = `Computer: ${speech.text}`;

    if(message.includes('How are you' || 'how are you')){
        const finalGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalGreeting;
        response.textContent = `Computer: ${finalGreeting}`;
    } else if (message.includes('How is the weather' || 'how is the weather')){
        const finalWeather = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalWeather;
        response.textContent = `Computer: ${finalWeather}`;
    }
    
    if(message.includes('Alvin' || 'alvin')){
        const alvinDog = alvin[Math.floor(Math.random() * alvin.length)];
        speech.text = alvinDog;
        response.textContent = `Computer: ${alvinDog}`;
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
 
};