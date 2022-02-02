import { useState } from "react";

function Show(props) {
  const id = props.match.params.id;
  const people = props.people;
  const person = people.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(person);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePeople(editForm);
    props.history.push("/")
  };

  const removePerson = () => {
      props.deletePeople(person._id)
      props.history.push("/")
  }

  return (
    <div className="person">
      <h1>{person.name}</h1>
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
      
      <button id="delete" onClick={removePerson}>DELETE</button>
      <form onSubmit={handleSubmit}>
      
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="years"
                    value=""
                    required
                    onChange={handleChange}
                  />

                  <select className="form-select" id="sex" required onChange={handleChange}>
                    <option value="1" selected>Male</option>
                    <option value="0">Female</option>
                  </select>

                  <select className="form-select" id="cp" required onChange={handleChange}>
                    <option value="0">typical angina</option>
                    <option value="1">atypical angina</option>
                    <option value="2">non-anginal pain</option>
                    <option value="1">asymptomatic</option>
                  </select>

                  <input
                    type="text"
                    className="form-control"
                    id="trestbps"
                    placeholder="in mm Hg"
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    className="form-control"
                    id="chol"
                    placeholder="in mg/dl"
                    onChange={handleChange}
                  />

                  <select className="form-select" id="fbs" required onChange={handleChange}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>

                  <select className="form-select" id="restecg" required onChange={handleChange}>
                    <option value="0">normal</option>
                    <option value="1">
                      having ST-T wave abnormality (T wave inversions and/or ST
                      elevation or depression of {'>'} 0.05 mV)
                    </option>
                    <option value="2" onChange={handleChange}>
                      showing probable or definite left ventricular hypertrophy
                      by Estes' criteria
                    </option>
                  </select>

                  <input type="text" className="form-control" id="thalach" onChange={handleChange}/>

                  <select className="form-select" id="exang" required onChange={handleChange}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>

                  <input type="text" className="form-control" id="oldpeak" onChange={handleChange}/>
                
                  <select className="form-select" id="slope" required onChange={handleChange}>
                    <option value="0">upsloping</option>
                    <option value="1">flat</option>
                    <option value="2">downsloping</option>
                  </select>
                
                  <select className="form-select" id="ca" required onChange={handleChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <select className="form-select" id="thal" required onChange={handleChange}>
                    <option value="0">normal</option>
                    <option value="1">fixed defect</option>
                    <option value="2">reversable defect</option>
                  </select>

        <input type="submit" value="Update Person" />
      </form>
    </div>
  );
}

export default Show;