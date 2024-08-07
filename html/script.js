function sayHello() {
    const name = document.getElementById('nameInput').value;
    const greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = `Hello, ${name}!`;
    } else {
        greetingElement.textContent = 'Please enter your name.';
    }
}