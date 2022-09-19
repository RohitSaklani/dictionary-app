let word = document.getElementById("word");

let callsubmit = document.getElementById("onsubmit");
let syno_card = document.getElementById("syno_card");
let anto_card = document.getElementById("anto_card");
let describe_container = document.getElementById("describe-container");
let antonyms;
let synonyms;

let speeches;


callsubmit.addEventListener('click', function() {
    console.log("inside checmeaning");
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    let ele;
    url = url + word.value;
    console.log(url);

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {




            console.log(data[0]);

            speeches = data[0].meanings;
            console.log(speeches[0].partOfSpeech);

            while (describe_container.firstChild) {
                describe_container.removeChild(describe_container.firstChild);
            }

            for (let x of speeches) {
                if (x.antonyms.length != 0 && x.synonyms.length != 0) {
                    let newdiv = document.createElement("div");
                    describe_container.appendChild(newdiv);

                    let head = document.createElement("h2");
                    head.innerHTML = x.partOfSpeech;
                    newdiv.appendChild(head);

                    if (x.antonyms.length !== 0) {
                        let antonyms = document.createElement("h3");
                        antonyms.innerHTML = "antonyms";
                        let anto_ele = document.createElement("p");
                        anto_ele.classList.add("w-300");
                        anto_ele.innerHTML = x.antonyms;


                        newdiv.appendChild(antonyms);
                        newdiv.appendChild(anto_ele);

                    }

                    if (x.synonyms.length != 0) {
                        let synonyms = document.createElement("h3");
                        synonyms.innerHTML = "synonyms";
                        let syno_ele = document.createElement("p");
                        syno_ele.innerHTML = x.synonyms;

                        newdiv.appendChild(synonyms);
                        newdiv.appendChild(syno_ele);
                    }

                }

            }




        })


});