//define(['/implicit/user/mmarini/nancyracepics/biat_extension_self.js'], function(biat_extension_good){
//	return biat_extension_good({
define(['/implicit/user/mmarini/racenancy_discrimination2/extension2.js'], function(batExtension){
	return batExtension({
categories : [ 
            {
				name : 'People of Color',
				title : {
					media : {word : 'People of Color'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Used to position the "Or" in the combined block.
					startStimulus : {
						media : {word : 'Black, Asian, Latinx'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Black'},
                    {word: 'Asian'},
                    {word: 'Latinx'}  
                ], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			
			
			
			
			
				{
				name : 'White People', //Category label.
				title : {
					media : {word : 'White People'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {
						    word: 'White, Euro-American, Caucasian'},
						    //word : 'Republican, Right Wing, George Bush, Conservative'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'White'},   
                    {word: 'Euro-American'},
                    {word: 'Caucasian'}
                ], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			}
		
		],
	
		
       	practiceBlock : false, 
		
		base_url : {//Where are your images?
			image : '/implicit/user/mmarini/racenancy_discrimination2/'	},
		
			
		fb_strong_Att1WithCatB_Att2WithCatA : 'Your data suggest a strong association CATEGORYB-Good and CATEGORYA-Bad.',
		fb_moderate_Att1WithCatB_Att2WithCatA : 'Your data suggest a moderate association CATEGORYB-Good and CATEGORYA-Bad.',
		fb_slight_Att1WithCatB_Att2WithCatA : 'Your data suggest a slight association CATEGORYB-Good and CATEGORYA-Bad.',
		fb_equal_CatAvsCatB : 'Your data suggest a little to no association of the categories CATEGORYA and CATEGORYB with the attributes Good and Bad.',
		fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong association CATEGORYA-Good and CATEGORYB-Bad.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate association CATEGORYA-Good and CATEGORYB-Bad.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight association CATEGORYA-Good and CATEGORYB-Bad.'
			
			
		
		
});
});


/*define(['/implicit/common/all/js/pip/piscripts/biat/biat4.js'], function(batExtension){
	return batExtension({
		categories : [  
			{
				name : 'Black People',
				title : {
					media : {word : 'Black People'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 8, //Used to position the "Or" in the combined block.
					startStimulus : {
						media : {image : 'blacks.jpg'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 13
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{image: 'bf14_nc.jpg'},
					{image: 'bf23_nc.jpg'},
					{image: 'bf56_nc.jpg'},
					{image: 'bm14_nc.jpg'},
					{image: 'bm23_nc.jpg'},
					{image: 'bm56_nc.jpg'}
				], 
				//Stimulus css
				stimulusCss : {color:'#33FF33','font-size':'2em'}
			},	
			{
				name : 'White people', //Category label.
				title : {
					media : {word : 'White people'}, 
					css : {color:'#31b404','font-size':'2em'}, 
					height : 8,
					startStimulus : {
						media : {image : 'whites.jpg'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 13
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{image: 'wf2_nc.jpg'},
					{image: 'wf3_nc.jpg'},
					{image: 'wf6_nc.jpg'},
					{image: 'wm1_nc.jpg'},
					{image: 'wm4_nc.jpg'},
					{image: 'wm6_nc.jpg'}
				], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			}
		], 
		
		practiceBlock : false, 
		base_url : {//Where are your images?
			image : '/implicit/user/mmarini/nancyracepics/'
		}
	});
});*/















