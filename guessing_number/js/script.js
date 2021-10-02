new Vue({
    el: '#app',
    data() {
        return {
            buttons: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        };
    },
    methods: {
        randomNumber: function () {
            return Math.floor(Math.random() * 10);
        },
        randomResult: function () {
            document.getElementById("card-massage").classList.remove("d-none");
        },
        conditionResult: function (value, result) {
            let element = document.getElementById("massage");
            if (value == result) {
                element.innerHTML = "Congratulation!";
                element.classList.remove("text-danger");
                element.classList.add("text-success");
            } else {
                element.innerHTML = "Ouch! Try again!";
                element.classList.remove("text-success");
                element.classList.add("text-danger");
            }
        },
        handleOnclick: function (id) {
            let value = document.getElementById(id).value;
            let result = this.randomNumber();
            document.getElementById('result').innerHTML= result;
            this.randomResult();
            this.conditionResult(value, result);
        }
    },
});

const randomNumber = () => Math.floor(Math.random() * 10);
const randomResult = () => document.getElementById("card-massage").classList.remove("d-none");

const conditionResult = (value, result) => {
    let element = document.getElementById("massage");
    if (value == result) {
        element.innerHTML = "Congratulation!";
        element.classList.remove("text-danger");
        element.classList.add("text-success");
    } else {
        element.innerHTML = "Ouch! Try again!";
        element.classList.remove("text-success");
        element.classList.add("text-danger");
    }
};

document.getElementById("zero").onclick = () => {
    let value = document.getElementById("zero").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("one").onclick = () => {
    let value = document.getElementById("one").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("two").onclick = () => {
    let value = document.getElementById("two").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("three").onclick = () => {
    let value = document.getElementById("three").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("four").onclick = () => {
    let value = document.getElementById("four").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};

document.getElementById("five").onclick = () => {
    let value = document.getElementById("five").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("six").onclick = () => {
    let value = document.getElementById("six").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("seven").onclick = () => {
    let value = document.getElementById("seven").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("eight").onclick = () => {
    let value = document.getElementById("eight").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};
document.getElementById("nine").onclick = () => {
    let value = document.getElementById("nine").value;
    let result = randomNumber();
    document.getElementById("result").innerHTML= result;
    randomResult();
    conditionResult(value, result);
};

