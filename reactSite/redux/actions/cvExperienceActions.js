import axios from "axios";

export function fetchExprience() {
	 return function(dispatch) {
	 	dispatch({type: "FETCH_EXPRIENCE_PENDING"})
    //axios.get("http://localhost:5000")
    axios.get(getNodeUrl())
      .then((response) => {
        // Get from remote server
        dispatch({type: "FETCH_EXPRIENCE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        // In case of failure, fail over with local array
        dispatch({type: "FETCH_EXPRIENCE_FULFILLED", payload: exprience1Backup});
	     	dispatch({type: "FETCH_EXPRIENCE_FULFILLED", payload: exprience2Backup});
      })
  }
}

// Returns the nodeJS URL, in case of production or local dev
function getNodeUrl() {
    if (process.env.NODE_ENV === 'production') {
      return "http://nodejs-kampana.herokuapp.com";
    } else {
      return "http://localhost:5000"
    }
}

const exprience1Backup = [{
				        years: '2016 - Present',
                title: 'Team Leader',
                content: ['Leading 4 team members', 'Hands on development in Java 8', 'AngularJS with Redux', 'TypeScript and ES6', 'ElasticSearch', 'Spring', 'Hibernate over MySQL'],              
                imageName: 'panaya'
}];

const exprience2Backup = [{
                years: '2014-2016',
                title: 'Team Leader',
                content: ['Leading 6-12 team members', 'Hands on development in Java', 'AngularJS'],
                imageName: 'ibm'
            },
            {
                years: '2010-2014',
                title: 'Team Leader',
                content: ['Leading 4 team members worldwide', 'Hands on development in Java','GUI development in SWING'],
                imageName: 'ibm'
            },
            {
                years: '2008-2010',
                title: 'GUI Developer',
                content: ['Hands on development in Java', 'GUI development in SWING'],
                imageName: 'ibm'
            }];

