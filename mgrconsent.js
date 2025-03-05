define(['managerAPI'], function(Manager) {

    var API = new Manager();
    API.addSettings('skin', 'demo');
    API.addSettings('skip', true);

    /**********
     ***Define all the tasks in advance.
     **********/
    API.addTasksSet({
        consent: [{ type: 'quest', name: 'consent', scriptUrl: 'consent.js', header: 'Consent', title: 'Consent Agreement' }],
         
        realstart : [{ type: 'quest', name: 'realstart', scriptUrl: 'realstart.js' }],
        
        redirectpage : [{ type: 'message', name: 'redirectpage', templateUrl: 'redirectpage.jst', piTemplate: true, buttonText: '<b>Continue</b>'}],
        
        //this redirects participants back into the pool.
        redirect: [{ type:'redirect', url: '/implicit/Assign' }],
        
        instiat_race: [{type: 'message', name: 'instiat_race', templateUrl: 'instiat_race.jst', title: 'IAT Instructions', piTemplate: true }],
		
		instiat_black: [{type: 'message', name: 'instiat_black', templateUrl: 'instiat_black.jst', title: 'IAT Instructions', piTemplate: true }],
		
		instiat_practice: [{type: 'message', name: 'instiat_practice', templateUrl: 'instiat_practice.jst', title: 'IAT Instructions', piTemplate: true	}],
       
        intro6k: [{type: 'message', name: 'intro6k', templateUrl: 'intro6k.jst', title: 'Questionnaire', piTemplate: true }],

		explicits1: [{type: 'quest', name: 'explicits1',	scriptUrl: 'explicits1.js'}],

		explicits: [{type: 'quest', name: 'explicits', scriptUrl: 'explicits.js'}],
			
		extension2: [{type: 'pip', name: 'extension2', version: '0.3',	scriptUrl: 'extension2.js'}],
		
		racebiasbiat: [{type: 'pip', name: 'racebiasbiat', version: '0.3', scriptUrl: 'racebiasbiat.js'}],
		
		racebiat: [{type: 'pip', name: 'racebiat', version: '0.3', scriptUrl: 'racebiat.js'}],
		
		practice: [{type: 'pip', name: 'practice', version: '0.3',	scriptUrl: 'practice.js'}],
        
        lastpage: [{type: 'message', name: 'lastpage', templateUrl: 'lastpage.jst', title: 'End', piTemplate:'debrief', last: true, demo:true, header: 'Last Page'}]       
       
    });
    
    API.addSequence([
        {
            inherit: 'consent'
        },
        
        {
            mixer: 'branch',// if participants choose "I decline", they are taken to a transition page telling them they are being redirected
            conditions: [
                function(){ return piGlobal.consent.questions.userconsent.response === true;} // if the question name or response options were changed in consent.js, adapt this too 
            ],
            data: [
                {
                    inherit: 'realstart'
                },
                {
                mixer: 'random',
                data: [{
                    mixer: 'wrapper',
                    data:[{inherit: 'instiat_practice'}, {inherit: 'practice'}]
                }]},
                {
                mixer: 'random',
                data: [{
                    mixer: 'wrapper',
                    data:[{inherit: 'instiat_black'}, {inherit: 'racebiasbiat'}]
                },
                {
                    mixer: 'wrapper',
                    data:[{inherit: 'instiat_race'}, {inherit: 'racebiat'}]
                }]
                },
                {    inherit: 'explicits'
                },
                {
                    inherit: 'intro6k'
                },
                {
                    inherit: 'explicits1'
                },
                {
                    inherit: 'lastpage'
                }
                ],
            elseData: [// if participants does not agree to participate, they are redirected.
                {
                    inherit: 'redirectpage'
                },
                {
                    inherit: 'redirect'
                }
            ]
        },
        {
            
        }
        ]);
    return API.script;
});





