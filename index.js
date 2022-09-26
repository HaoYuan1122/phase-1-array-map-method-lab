const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    const tutorial=tutorials.map(element=>{
        const word=element.split(" ")
        
        return word.map(item=>{
            const originWord=item
            const modifiedWord=originWord.slice(0,1).toUpperCase()+originWord.slice(1)
            return modifiedWord
        }).join(' ').toString()
    })
  return tutorial
}

console.log(titleCased())
// const element='what does the this keyword mean?'
// console.log(element.split(" "))

word.map(item=>{
    const originWord=item
    const modifiedWord=originWord.slice(0,1).toUpperCase()+originWord.slice(1)
    return modifiedWord
})


// console.log(upper.join(' ').toString())