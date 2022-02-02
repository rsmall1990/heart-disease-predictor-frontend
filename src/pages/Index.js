import { Link } from "react-router-dom"
import "../index.css"

function Index(props) {
  
  const loaded = () => {
    return props.people.map((person) => (
      <tr>
          <div key={person._id} className="person">
          <td>
          <Link to={`/people/${person._id}`}>
            <h1>{person.name}</h1>
          </Link>
          </td>
          <td>{person.age}</td>
          <td>{person.sex}</td>
          <td>{person.cp}</td>
          <td>{person.trestbps}</td>
          <td>{person.chol}</td>
          <td>{person.fbs}</td>
          <td>{person.restecg}</td>
          <td>{person.thalach}</td>
          <td>{person.exang}</td>
          <td>{person.oldpeak}</td>
          <td>{person.slope}</td>
          <td>{person.ca}</td>
          <td>{person.thal}</td>
          <td>{person.probability}</td>
        </div>
      </tr>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <div className="peopleTable">
      <table>
        <th>
          <tr>
            <td>Name</td>
            <td>age</td>
            <td>sex</td>
            <td>cp</td>
            <td>trestbps</td>
            <td>chol</td>
            <td>fbs</td>
            <td>restecg</td>
            <td>thalach</td>
            <td>exang</td>
            <td>oldpeak</td>
            <td>slope</td>
            <td>ca</td>
            <td>thal</td>
            <td>Probability</td>
          </tr>
        </th>
        <tbody>

              {props.people ? loaded() : loading()}

        </tbody>
      </table>      
    </div>
  )
}

export default Index