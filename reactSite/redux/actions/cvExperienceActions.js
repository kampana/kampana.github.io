export function fetchExprience1() {
	return {
		type: "FETCH_EXPRIENCE_FULFILLED",
		payload: [{
                years: '2016 - Present',
                title: 'Full Stack Developer',
                content: ['Hands on development in Java', 'AngularJS', 'Spring', 'Hibernate over MySQL', 'C#'],
                imageName: 'panaya'
            }]
	}
}

export function fetchExprience2() {
	return {
		type: "FETCH_EXPRIENCE_FULFILLED",
		payload: [{
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
            }]
	}
}