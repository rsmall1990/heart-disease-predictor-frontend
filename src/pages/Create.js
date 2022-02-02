import { useState } from "react"
import { useHistory } from "react-router-dom"
// import * as tf from '@tensorflow/tfjs';

// const MODEL_URL = "./heart-model.json";
// const model = await tf.loadLayersModel(MODEL_URL);
// console.log("model loaded");

function Create(props) {
  const history = useHistory()
  
  // state to hold formData
  const [state, setState] = useState({
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
    probability: "0.5",
  })


  // handleChange function for form
  const handleChange = (event) => {
		// console.log("state handlechange", state)
    setState( prevState => ({
			...prevState,
			[event.target.name]: event.target.value
		}));
	};

  // handle submit function for form
  const handleSubmit = (event) => {
    // console.log("state",state);
    state.probability= Math.random()
    // setState( prevState => ({
		// 	...prevState,
		// }));
    // console.log("state2",state);
		event.preventDefault();
		props.createPeople(state);
    setState({
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
        probability: ""
    });
    history.push("/");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
          <h2>Heart Disease Detection</h2>
          <p className="lead">Please fill the form below:</p>

        
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="e.g. Bob"
                    required
                    onChange={handleChange}
                  />

                <div className="col-sm-6">
                  <label className="form-label">Age</label>
                  <input
                    type="text"
                    name="age"
                    value={state.age}
                    placeholder="years"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Sex</label>
                  <input
                    type="text"
                    name="sex"
                    value={state.sex}
                    placeholder="1 for Male, 0 for Female"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-12">
                  <label className="form-label">Chest pain type</label>
                  <input
                    type="text"
                    name="cp"
                    value={state.cp}
                    placeholder="0-3"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Resting blood pressure</label>
                  <input
                    type="text"
                    name="trestbps"
                    value={state.trestbps}
                    placeholder="e.g. 120"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Serum cholestoral</label>
                  <input
                    type="text"
                    name="chol"
                    value={state.chol}
                    placeholder="in mg/dl"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label"
                    >Fasting blood sugar {'>'} 120 mg/dl</label
                  >
                  <input
                    type="text"
                    name="fbs"
                    value={state.fbs}
                    placeholder="1 yes, 0 no"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Resting ECG results</label>
                  <input
                    type="text"
                    name="restecg"
                    value={state.restecg}
                    placeholder="0-2"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Maximum heart rate achieved</label>
                  <input 
                    type="text"  
                    name="thalach"
                    value={state.thalach}
                    placeholder="e.g. 200" 
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Exercise induced angina</label>
                  <input
                    type="text"
                    name="exang"
                    value={state.exang}
                    placeholder="1 yes, 0 no"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    ST depression induced by exercise relative to rest
                  </label>
                  <input 
                    type="text"  
                    name="oldpeak"
                    value={state.oldpeak}
                    placeholder="0 or 1"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Slope - the slope of the peak exercise ST segment
                  </label>
                  <input
                    type="text"
                    name="slope"
                    value={state.slope}
                    placeholder="0, 1, 2"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">
                    Number of major vessels (0-3) colored by flourosopy
                  </label>
                  <input
                    type="text"
                    name="ca"
                    value={state.ca}
                    placeholder="0-3"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Thalium (thal)</label>
                  <input
                    type="text"
                    name="thal"
                    value={state.thal}
                    placeholder="0-2"
                    required
                    onChange={handleChange}
                  />
                </div>

            <input type="submit" value="Add and Analyze" />
        </form>
    </section>
  )
}

export default Create