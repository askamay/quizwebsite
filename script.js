const questions = [
    {
        'que' : 'When was FC Barcelona founded?',
        'a': '1899',
        'b': '1920',
        'c': '1891',
        'd': '1880',
        'correct': 'a'
    },

    {
        'que' : 'Whats the name of FC Barcelonas stadium?',
        'a': 'CAMP ROCK',
        'b': 'CAMP NOU',
        'c': 'CAMP BARCA',
        'd': 'CAMP DIVIDE',
        'correct': 'b'
    },

    {
        'que' : 'Whats the name of the Spanish league they participate in?',
        'a': 'LA LIGA',
        'b': 'PREMIER LEAGUE',
        'c': 'BUNDELSLIGA',
        'd': 'SERIE A',
        'correct': 'a'
    },

    
    {
        'que' : 'Derbi Barceloni is played between which clubs?',
        'a': 'BARCA AND REAL BETIS',
        'b': 'BARCA AND REAL MADRID',
        'c': 'BARCA AND ATLETICO',
        'd': 'BARCA AND ESPANYOL',
        'correct': 'd'
    },

    {
        'que' : 'Who is GOAT?',
        'a': 'MEYMAR',
        'b': 'RONALDO',
        'c': 'MESSI',
        'd': 'SUAREZ',
        'correct': 'c'
    }

]

let index = 0
let total = questions.length
let right = 0, wrong = 0
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion = () =>{
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadquestion()
    return
}

const getAnswer = () =>{
    let answer 
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value
            }
        }
    )
    return answer
}

const reset= () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3>Thank you for playing the Quiz</h3>
    <h2>${right}/${total} are correct</h2>
    </div>
    `
}

loadquestion()