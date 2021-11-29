/**
 * This is a module that simulates an agent assistant.
 * It listens for keywords from the customer and suggests 
 * possible responses for the agent.
 */

const responseMap = {
    1: "Please wait while I connect you to a voice agent",
    2: "I could provide you a one-time offer of free sports channels",
    3: "We're sorry to hear about your experience.",
    4: "We're glad that you enjoy our service!",
    5: "Goodbye. Please don't forget to like and subscribe to our channel.",
    6: "<img src=https://assets-global.website-files.com/5de87425133808841c6e3b3e/61891febd278607ea13b9a5d_TV%20marketing%20top%20panel%20desktop%20(1).png>As our customers deserve the best entertainment experience, Astro is refreshing its content and packages to offer more choice, value, flexibility, and better experience in a streaming world as part of the new Astro experience. The all-new Astro packs are designed for customers in the streaming and connected world, where they can stream all the shows they love on Ultra Box and soon, Ulti Box. Customers can now enjoy their favourite shows all on Astro, from global streaming services like Netflix, Disney+ Hotstar, HBO GO, iQIYI, TVBAnywhere+ as well as all Astro’s flagship shows and the best of live sports in one place, on the big screen. Our new packages offer unbeaten value, a greater variety of content and greater convenience, all made better with our Astro & Broadband for better connectivity.",
    7: "<img src=https://assets-global.website-files.com/5fc0b76331240365f64b0633/6183f5c80cd5cc0fc8567f42_cass%20faq%20tv%201.png><br>Link: https://support.astro.com.my/question/how-are-cancellation-fee-calculated",
    8: "<br>•With numerous OTT entrants, consumers are suffering from subscription fatigue. In fact, they are looking for a one stop shop platform where OTT services are integrated in one place. <br>•Astro offers flexibility and convenience with new packs where customers can get the convenience of accessing a variety of content via Ultra Box as the single remote-control solution. <br>•In addition, there will be cost savings for Astro customers to purchase both Netflix and Astro together. Even better deals available if customers also subscribe to broadband for a better-connected experience.",
    9: "<br>•eGG Network<br>•Astro SuperSport<br>•Astro SuperSport 2<br>•FOX SPORTS<br>•FOX SPORTS 2<br>•Eurosport<br>•Astro SuperSport 3<br>•Astro Supersport4<br>•FOX SPORTS 3<br>•beIn Sports<br>•beIN Sports MAX<br>•Arena HD<br>•FOX SPORTS 2 HD<br>•FOX SPORTS 3 HD<br>•Astro Supersport 2 HD<br>•Astro SuperSport 3 HD<br>•Astro SuperSport 4 HD"
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
    'why is astro': 6,
    'cancellation' : 7,
    'vs direct' : 8,
    'sports': 9
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
