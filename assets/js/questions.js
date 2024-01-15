// array of simple JS questions
questions = [
    {
    question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    choices: [
        "They are all used to declare constants.",
        "'let' is block-scoped, 'const' is used for constants, and 'var' is function-scoped.",
        "'let' is used for loop counters, 'const' is block-scoped, and 'var' is function-scoped.",
        "There is no difference, and you can use them interchangeably.",
        ],
        correctAnswer: "'let' is block-scoped, 'const' is used for constants, and 'var' is function-scoped.",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      choices: ["var", "let", "const", "variable"],
      correctAnswer: "var",
    },
    {
      question: "What does 'NaN' stand for in JavaScript?",
      choices: ["Not a Number", "New and Null", "Negative and Null", "None of the Above"],
      correctAnswer: "Not a Number",
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      choices: [
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "alert('Hello World');",
        "msg('Hello World');",
      ],
      correctAnswer: "alert('Hello World');",
    },
    {
      question: "Which built-in method reverses the elements of an array?",
      choices: ["reverse()", "invert()", "flip()", "backwards()"],
      correctAnswer: "reverse()",
    },
    {
      question: "What is the purpose of the 'return' statement in a function?",
      choices: [
        "To stop the execution of a function",
        "To specify the value to be returned by the function",
        "To define a loop",
        "To print a message",
      ],
      correctAnswer: "To specify the value to be returned by the function",
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      choices: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
      correctAnswer: "[1, 2, 3]",
    },
    {
      question: "Which method is used to add a new element to the end of an array?",
      choices: ["push()", "append()", "addToEnd()", "insert()"],
      correctAnswer: "push()",
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      choices: [
        "Assigns a value to a variable",
        "Compares values for equality and type",
        "Creates a new variable",
        "Performs addition",
      ],
      correctAnswer: "Compares values for equality and type",
    },
    {
      question: "How do you comment in JavaScript?",
      choices: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */",
        "Comment-This is a comment",
      ],
      correctAnswer: "// This is a comment",
    },
  ];
  
  // exports the array to be called by logic.js
  window.questions = questions;
  