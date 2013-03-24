enyo.kind({
	name: "Tally",
	classes: "tally",
	published: {
		number : 1
	},
	components: [
		{kind: "FlyweightRepeater", components: [
			{tag: "img", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAGCAQAAAClB0z9AAAADElEQVQI12NgoBUAAABaAAGF4JwLAAAAAElFTkSuQmCC"},
			{name: "content", classes: "content"}
		]}
	],
	numberChanged: function(){
		this.number = this.number || 0;
		this.removeClass("tally-0");
		this.removeClass("tally-1");
		this.removeClass("tally-2");
		this.removeClass("tally-3");
		this.removeClass("tally-4");
		this.addClass("tally-" + this.number%5);

		var fly = this.$.flyweightRepeater;
		fly.count = Math.ceil(this.number/5);
		fly.render();
	},
	create: function(){
		this.inherited( arguments );
		this.numberChanged();
	}
});
