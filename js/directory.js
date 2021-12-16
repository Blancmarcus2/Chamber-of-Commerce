const directoryURL = 'https://directory.json';
fetch(directoryURL)
    .then(response => response.json())
    .then(jsonObject => {
        const localbusinessorganizations= jsonObject['localbusinessorganizations'];
        for (let i = 0; i < localbusinessorganizations.length; i++) {
            var cards = document.createElement('section');
            var article = document.createElement('article');
            var image_cards = document.createElement('div');
            var name = document.createElement('h5');
            var address = document.createElement('p');
            var desc = document.createElement('p');
            var phone = document.createElement('p');
            var website = document.createElement('p');
            var img = document.createElement('img');
            name.textContent = localbusinessorganizations[i].name;
            address.textContent = localbusinessorganizations[i].address;
            desc.textContent = localbusinessorganizations[i].desc;
            phone.textContent = localbusinessorganizations[i].phone;
            website.textContent = localbusinessorganizations[i].website;
            img.setAttribute('src', localbusinessorganizations[i].imageUrl);
            image_cards.appendChild(img, img.alt = localbusinessorganizations[i].name, img.className = 'event__image');
            article.appendChild(name);
            article.appendChild(address);
            article.appendChild(desc);
            article.appendChild(phone);
            article.appendChild(website);
            document.querySelector('div.cards').appendChild(cards, cards.appendChild(article)).appendChild(image_cards);
            // document.querySelector('div.cards',article).appendChild(article);
        }
    })
    .catch(err => document.querySelector('div.cards').innerHTML = err)
