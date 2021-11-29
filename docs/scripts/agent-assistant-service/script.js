/**
 * This is a module that simulates an agent assistant.
 * It listens for keywords from the customer and suggests 
 * possible responses for the agent.
 */

const responseMap = {
    1: "Please wait while I connect you to a voice agent",
    2: "I could provide you a one-time discount",
    3: "We're sorry to hear about your experience.",
    4: "We're glad that you enjoy our service!",
    5: "Goodbye. Please don't forget to like and subscribe to our channel.",
    6: "<img src=https://assets-global.website-files.com/5de87425133808841c6e3b3e/61891febd278607ea13b9a5d_TV%20marketing%20top%20panel%20desktop%20(1).png>As our customers deserve the best entertainment experience, Astro is refreshing its content and packages to offer more choice, value, flexibility, and better experience in a streaming world as part of the new Astro experience. The all-new Astro packs are designed for customers in the streaming and connected world, where they can stream all the shows they love on Ultra Box and soon, Ulti Box. Customers can now enjoy their favourite shows all on Astro, from global streaming services like Netflix, Disney+ Hotstar, HBO GO, iQIYI, TVBAnywhere+ as well as all Astro’s flagship shows and the best of live sports in one place, on the big screen. Our new packages offer unbeaten value, a greater variety of content and greater convenience, all made better with our Astro & Broadband for better connectivity.",
    7: "test"
}

const keywordMap = {
    'talk': 1,
    'expensive': 2,
    'afford': 2,
    'price': 2,
    'bad': 3,
    'suck': 3,
    'stupid': 3,
    'amazing': 4,
    'thank': 4,
    'helpful': 4,
    'bye': 5,
    'picture': 6,
    'test' : 7
}

export default {
    /**
     * Analyzses the text for any keyword
     * @param {String} origText the text to be analyzed
     * @returns {Array} possible responses 
     */
    analyzeText(origText){
        let responses = [];
        let text = origText.toLowerCase();
        let responseIndexArr = []; 

        Object.keys(keywordMap).forEach(key => {    
            let index = keywordMap[key];

            let val = responseMap[`${index}`];

            if(text.includes(key) && !responseIndexArr.includes(index)){
                responses.push(val);
                responseIndexArr.push(index);
            }
        })

        return responses;
    }
}
