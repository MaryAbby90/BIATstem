//define(['/implicit/user/mmarini/nancyracepics/biat_extension_self.js'], function(biat_extension_good){
//	return biat_extension_good({
define(['https://maryabby90.github.io/BIATstem/extensionpractice.js'], function(batExtension){
	return batExtension({
		categories : [ 
            {
				name : 'Insects',
				title : {
					media : {word : 'Insects'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Used to position the "Or" in the combined block.
					startStimulus : {
						media : {word : 'Flea, Centipede, Gnat, Wasp'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Flea'},
                    {word: 'Centipede'},
                    {word: 'Gnat'},
                    {word: 'Wasp'}
                ], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			
			
			
			
			
				{
				name : 'Flowers', //Category label.
				title : {
					media : {word : 'Flowers'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {
						    word: 'Orchid, Lilac, Rose, Tulip'},
						    //word : 'Republican, Right Wing, George Bush, Conservative'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Orchid'},   
                    {word: 'Lilac'},
                    {word: 'Rose'},
                    {word: 'Tulip'}
                ], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			}
		
		],
	
		
       	practiceBlock : false, 
		
		base_url : {//Where are your images?
			image : 'https://maryabby90.github.io/BIATstem/'	},
			
			
		fb_strong_Att1WithCatB_Att2WithCatA : 'Your data suggest a strong association Female-Good and Male-Bad.',
		fb_moderate_Att1WithCatB_Att2WithCatA : 'Your data suggest a moderate association Female-Good and Male-Bad.',
		fb_slight_Att1WithCatB_Att2WithCatA : 'Your data suggest a slight association Female-Good and Male-Bad.',
		fb_equal_CatAvsCatB : 'Your data suggest a little to no association of the categories Male and Female with the attributes Good and Bad.',
		fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong association Male-Good and Female-Bad.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate association Male-Good and Female-Bad.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight association Male-Good and Female-Bad.'
			
		
		
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


















