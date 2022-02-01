import { useState } from "react"
import { Link } from "react-router-dom"
import "../index.css"

function Index(props) {
  
  const loaded = () => {
    return props.people.map((person) => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <h3>{person.age}</h3>
        <h3>{person.sex}</h3>
        <h3>{person.cp}</h3>
        <h3>{person.trestbps}</h3>
        <h3>{person.chol}</h3>
        <h3>{person.fbs}</h3>
        <h3>{person.restecg}</h3>
        <h3>{person.thalach}</h3>
        <h3>{person.exang}</h3>
        <h3>{person.oldpeak}</h3>
        <h3>{person.slope}</h3>
        <h3>{person.ca}</h3>
        <h3>{person.thal}</h3>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      {props.people ? loaded() : loading()}
    </section>
  )
}

export default Index