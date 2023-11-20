document.querySelector('.button-primary').onclick = () => {
    let select = document.querySelector('.s-100');
    let t = select.options[select.selectedIndex].text;
    if (t == 'Moskva') {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Moskva&appid=70e1ed322b02acbc57d443dd91065f3e')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.package-name').textContent = data.name;
                document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
                //https://openweathermap.org/img/wn/02d@2x.png
                document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })
            .catch(function () {
                // catch any errors
            });
    }
    else if (t == 'Ekaterinburg') {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=ekaterinburg&appid=70e1ed322b02acbc57d443dd91065f3e')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.package-name').textContent = data.name;
                document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
                //https://openweathermap.org/img/wn/02d@2x.png
                document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })
            .catch(function () {
                // catch any errors
            });
    }
    else if (t == 'Belgorod') {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Belgorod&appid=70e1ed322b02acbc57d443dd91065f3e')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.package-name').textContent = data.name;
                document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
                //https://openweathermap.org/img/wn/02d@2x.png
                document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })
            .catch(function () {
                // catch any errors
            });
    }
    else if (t == 'Goa') {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Goa&appid=70e1ed322b02acbc57d443dd91065f3e')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.package-name').textContent = data.name;
                document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
                //https://openweathermap.org/img/wn/02d@2x.png
                document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })
            .catch(function () {
                // catch any errors
            });
    }

}