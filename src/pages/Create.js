import { useState } from "react"
import "../index.css"

function Create(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  })

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createPeople(newForm)
    setNewForm({
        name: "",
        age: "",
        sex: "",
        cp: "",
        trestbps: "",
        chol: "",
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal: "",
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div class="py-3 text-center">
          <h2
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            Heart Disease Detection
          </h2>
          <p class="lead">Please fill the form below.</p>
        </div>

        <div class="row g-3">
          <div class="col-lg-12">
            <form id="form1">
              <div class="row g-3">

                <div class="col-sm-6">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Name"
                    placeholder="e.g. Bob"
                    value=""
                    required
                    onChange={handleChange}
                  />
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Age</label>
                  <input
                    type="text"
                    class="form-control"
                    id="age"
                    placeholder="years"
                    value=""
                    required
                    onChange={handleChange}
                  />
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Sex</label>
                  <select class="form-select" id="sex" required>
                    <option value="1" selected>Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>

                <div class="col-sm-12">
                  <label class="form-label">Chest pain type</label>
                  <select class="form-select" id="cp" required onChange={handleChange}>
                    <option value="0">typical angina</option>
                    <option value="1">atypical angina</option>
                    <option value="2">non-anginal pain</option>
                    <option value="1">asymptomatic</option>
                  </select>
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Resting blood pressure</label>
                  <input
                    type="text"
                    class="form-control"
                    id="trestbps"
                    placeholder="in mm Hg"
                    onChange={handleChange}
                  />
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Serum cholestoral</label>
                  <input
                    type="text"
                    class="form-control"
                    id="chol"
                    placeholder="in mg/dl"
                    onChange={handleChange}
                  />
                </div>

                <div class="col-sm-6">
                  <label class="form-label"
                    >Fasting blood sugar {'>'} 120 mg/dl</label
                  >
                  <select class="form-select" id="fbs" required onChange={handleChange}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Resting ECG results</label>
                  <select class="form-select" id="restecg" required onChange={handleChange}>
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
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Maximum heart rate achieved</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="thalach"
                    placeholder="200" 
                    onChange={handleChange}
                  />
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Exercise induced angina</label>
                  <select class="form-select" id="exang" required onChange={handleChange}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label"
                    >ST depression induced by exercise relative to rest</label
                  >
                  <input type="text" class="form-control" id="oldpeak" onChange={handleChange}/>
                </div>

                <div class="col-md-6">
                  <label class="form-label"
                    >Slope - the slope of the peak exercise ST segment</label
                  >
                  <select class="form-select" id="slope" required onChange={handleChange}>
                    <option value="0">upsloping</option>
                    <option value="1">flat</option>
                    <option value="2">downsloping</option>
                  </select>
                </div>

                <div class="col-sm-6">
                  <label class="form-label"
                    >Number of major vessels (0-3) colored by flourosopy</label
                  >
                  <select class="form-select" id="ca" required onChange={handleChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Thalium (thal)</label>
                  <select class="form-select" id="thal" required onChange={handleChange}>
                    <option value="0">normal</option>
                    <option value="1">fixed defect</option>
                    <option value="2">reversable defect</option>
                  </select>
                </div>
              </div>

              <hr class="my-4" />

              <button
                class="w-100 btn btn-primary btn-lg"
                onclick={handleSubmit}
                type="submit"
              >
                Analyze <i class="bi bi-search"></i>
              </button>
            </form>

            <div class="row" id="rslt">
              <div class="col-sm-12 py-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-text" id="rslt-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </section>
  )
}

export default Create