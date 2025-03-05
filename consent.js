define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Consent',
		decline: false,
		autoFocus:true
	});
  
    /**
   * Question prototypes
   */
   API.addQuestionsSet('basicSelect',{
    type: 'selectOne',
    autoSubmit:'true',
    maxWidth: '60%'
  });
  
   API.addSequence([
    {
      inherit : 'basicPage',
      questions : [{
        type: 'info',
        stem: 
        '<p>The purpose of this research is to examine attitudes and beliefs about race. In this study you will complete two tasks in which you will be asked to sort pictures and words into groups as fast as you can. In addition, you will be asked to complete some questions about your beliefs, attitudes, and opinions, and some standard demographic questions.</p>' + 
        '<p>This study should take about 10 minutes to complete. Participation is voluntary. It is your choice whether or not to participate in this research. If you choose to participate, you may change your mind and leave the study at any time. </p>'+
        '<p>This research involves minimal risk. We cannot promise any benefits to you or others from your taking part in this research. However, this research may help us to understand how people think, and it may provide you an educational and engaging experience. You will not be compensated for participating in this research.</p>' +
        '<p>The data we collect will not contain any information that can identify you. All data will be stored on password-protected computers and servers to which only the researchers will have access. Your data may be used in future research projects.</p>' +
        '<p>a. If you have questions, concerns, or complaints, b. If you would like to talk to the research team, c. If you think the research has harmed you, or d. If you wish to withdraw from the study, the researcher for this study is Maddalena Marini who can be reached at <a href="mailto: Maddalena.Marini@iit.it ">Maddalena.Marini@iit.it </a>.</p>'+
        '<p>This research has been reviewed by the Committee on the Use of Human Subjects in Research at University of Ferrara (via Aldo Moro, 8 - 44124 Ferrara, FE, Italy, phone +39-0532-236-896).</p>' +
        '<p><strong>Privacy Policy</strong></p>' +
        '<p>Project Implicit’s <a href="https://implicit.harvard.edu/implicit/privacy.html" target="_blank">privacy policy</a> applies to this study.</p>'+
        '<ul type="disc"><li>Data exchanged with this site are protected by SSL encryption. Project Implicit uses the same secure hypertext '+
        'transfer protocol (HTTPS) that banks use to securely transfer credit card information. </li>' + 
        '<li>Researchers will have access to the information you provided at registration. IP addresses are recorded but not accessible '+
        'to researchers. All information will be kept confidential to the extent provided by law. </li>' + 
        '<li>Data from this study may be publicly posted with identifying information removed. </li></ul>'
        },
        

    // Note: Feel free to adapt language based on your consent form.
    {
        inherit : 'basicSelect',
        name: 'userconsent',
        description: '<b>Do you agree to participate?</b><p>Please double-click the appropriate box below.<p>',
        answers: [
            {text: 'YES, I agree to participate.', value: true},
            {text: 'NO, I do not agree to participate.', value: false}
        ]
      }
      ]
    }
    
      
     ]);
 return API.script;
});






