function sendForm(event) {
    let error = false;

    error = validate(event.target[0], /^[А-Я][а-яА-Я\s]*[а-я]$/g, "Введите корректное имя");
    error = validate(event.target[3], /^\+375[0-9]{9}$/g, "Введите правильный номер телефона (+375ХХХХХХХХХ)");
    error = validate(event.target[4], /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g, "Введите корректный адрес электронной почты");
    error = validate(event.target[5], /^(https?:\/\/)?[0-9a-z-_]*(\.[0-9a-z-_]+)*(\.[a-z]+)+(\/[0-9a-z-_]*)*?\/?$/g, "Введите корректный адрес URL");
    error = validate(event.target[6], /[\w\W\d\D]{10,}/, "Ваш адрес слишком короток");

    if (!error) {
        //добавляем карточку пользователя в список
    }

    return false;
}

function validate(element, regexTemplate, errorMessage) {
    let val = element.value;
    let errorField = document.createElement("div");
    errorField.classList.add("error");

    if (element.nextElementSibling) {
        element.nextElementSibling.remove();
        element.classList.remove("error");
    }

    if (!regexTemplate.test(val)) {
        errorField.innerText = errorMessage;
        element.parentElement.append(errorField);
        element.classList.add("error");
        return false;
    } else {
        return true;
    }
}