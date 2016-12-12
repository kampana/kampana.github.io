import axios from "axios";

export function fetchExprience() {
	 return function(dispatch) {
	 	
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
      	console.log(response);
        dispatch({type: "FETCH_EXPRIENCE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EXPRIENCE_FULFILLED", payload: exprience1Backup});
	 	dispatch({type: "FETCH_EXPRIENCE_FULFILLED", payload: exprience2Backup});
      })
  }
}

const exprience1Backup = [{
				years: '2016 - Present',
                title: 'Full Stack Developer',
                content: ['Hands on development in Java', 'AngularJS', 'Spring', 'Hibernate over MySQL', 'C#'],
                imageName: 'panaya'
}];

const exprience2Backup = [{
                years: '2013-2016',
                title: 'Team Leader',
                content: ['Leading 6-12 team members', 'Hands on development in Java', 'AngularJS'],
                imageName: 'ibm'
            },
            {
                years: '2010-2013',
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
