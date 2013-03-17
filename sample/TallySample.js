enyo.kind({
	name: "TallySample",
	components: [
		{kind:"FittableColumns", components: [
			{content: "4, large marks:", style: "width: 150px"},
			{fit: true, components: [
				{kind: "Tally", number: 4, classes: "large"}
			]}
		]},
		{kind:"FittableColumns", components: [
			{content: "8, small marks:", style: "width: 150px"},
			{fit: true, components: [
				{kind: "Tally", number: 8, classes: "small"}
			]}
		]},
		{kind:"FittableColumns", components: [
			{content: "160:", style: "width: 150px"},
			{fit: true, components: [
				{kind: "Tally", number: 160}
			]}
		]},
		{kind:"FittableColumns", ontap: "countup", components: [
			{content: "down 16, tap to count up", style: "width: 150px"},
			{fit: true, components: [
				{kind: "Tally", number: 16}
			]}
		]},
		{kind:"FittableColumns", ontap: "countdown", components: [
			{content: "19, tap to count down:", style: "width: 150px"},
			{fit: true, components: [
				{kind: "Tally", number: 19}
			]}
		]},
		{kind:"FittableColumns", ontap: "random", components: [
			{content: "32, tap to set to random", style: "width: 150px"},
			{fit: true, components: [
				{kind: "Tally", number: 32}
			]}
		]}
	],
	countup: function(inSender, inEvent){
		var tally = inSender.children[1].children[0];
		tally.setNumber( tally.getNumber()+1 );
	},
	countdown: function(inSender, inEvent){
		var tally = inSender.children[1].children[0];
		tally.setNumber( tally.getNumber()-1 );
	},
	random: function(inSender, inEvent){
		var tally = inSender.children[1].children[0];
		tally.setNumber( Math.ceil(100 * Math.random()) );
	}
});
