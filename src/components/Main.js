import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import About from "../pages/About"
import Create from "../pages/Create"

function Main(props) {
  const [people, setPeople] = useState(null)

  const URL = "https://heart-disease-predictor-be1.herokuapp.com/people/"
// retreive data 
  const getPeople = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPeople(data)
  }

  const createPeople = async (person) => {
    // make post request to create people
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    })
    // update list of people
    getPeople()
  }

  const updatePeople = async (person, id) => {
    // make put request to create people
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    })
    // update list of people
    getPeople()
  }

  const deletePeople = async (id) => {
    // make delete request to create people
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of people
    getPeople()
  }

  useEffect(() => getPeople(), [])

  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/">
            <Index people={people} />
          </Route>
          <Route
          path="/people/:id"
          render={(rp) => (
            <Show
              people={people}
              updatePeople={updatePeople}
              deletePeople={deletePeople}
              {...rp}
            />
          )}
        />
          <Route exact path="/new">
            <Create createPeople={createPeople} />  
          </Route> 
          <Route people={people} path="/about" component={About} />
        </Switch>
      </main>
    </div>
  )
}

export default Main