/* JS - Map, Reduce, Filter and chaining of all of them */
import React from 'react';

let arr = [1,2,3,4];

let sum = arr.reduce((acc, val) => {
    return acc + val;
  },100);


  let sum2 = arr.reduce((acc, val) => {
    return acc + val;
  },100);


  let plus5 = arr.map((val, i, arr) => {
    return val + 5;
  });

  let even = arr.filter(val => {
    return val % 2 === 0;
  });

  let data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

  let ages = data
  .filter((animal) => {
    return animal.type === 'dog';
}).map((animal) => {
    return animal.age * 7
}).reduce((sum, animal) => {
    return sum + animal;
});

console.log(ages);


let sample = {
      todos : [
                {
                    id : Date.now(),
                    text: "This is a Test Task 1",
                    complete:false,
                    token:6
                },  
                {
                    id : Date.now(),
                    text: "This is a Test Task 2",
                    complete:false,
                    token:7
                },
                {
                    id : Date.now(),
                    text: "This is a Test Task 3",
                    complete:false,
                    token:9
                }
              ]
}

let {todos} = sample;


let ToDoCom = todos.map((todo) => {
  return <li key={todo.id}>{todo.text}</li>
});

ToDoCom