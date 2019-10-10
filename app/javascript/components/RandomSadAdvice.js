import React from "react"
class RandomSadAdvice extends React.Component {

  advice() {
    let advices = ["Oh I'm sorry. YOu know it’s okay to feel sad.", "It's OK to feel sad, just remember that it's temporary.", "Sorry to hear that. What's one way you can take care of yourself today?", "It’s OK to feel sad. Be brave and reach out to someone.", "Sorry to hear that. We're not on this earth to see through one another, but to see one another through.", "I’m sorry you don't feel good today.", "Sorry to hear that. Why not make a nice hot cup of chamomile tea?"]

    let index = Math.floor(Math.random() * advices.length)
    return advices[index]
  }
  render() {
    console.log(this.advice())



    return (
      <>
        <h3 className='title'>{this.advice()}</h3>
      </>
    );
  }
}

export default RandomSadAdvice
