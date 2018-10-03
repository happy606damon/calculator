var calc = {
	getDisplay: function() {
		return document.getElementById('display');
	},

	display: function(n) {
		var displayField = this.getDisplay();
		displayField.value += n;
	},

	clear: function() {
		var displayField = this.getDisplay();
		displayField.value = '';
	},

	root: function() {
		var displayField = this.getDisplay();
		console.log(eval(displayField));
		displayField.value = Math.sqrt(eval(displayField.value));
	},

	super: function() {
		var displayField = this.getDisplay();
		console.log(eval(displayField));
		displayField.value = eval(1/(displayField.value));
	},

	naturalLog: function() {
		var displayField = this.getDisplay();
		console.log(eval(displayField));
		displayField.value = Math.log(eval(displayField.value));
	},

	factorial: function() {
		var displayField = this.getDisplay();
		var factorialSet = console.log(eval(displayField));
			if (factorialSet < 0) {
				displayField.value = -1;
			} else if (factorialSet == 0) {
				displayField.value = 1;
			} else {
				var someThing = displayField.value;
				for (i = 1; i < someThing; i++) 
				// for (i = someThing; i > 0; i--)
				{
					displayField.value *= i;
				}
			}
	},

	square: function() {
		var displayField = this.getDisplay();
		console.log(eval(displayField));
		displayField.value = Math.pow(eval(displayField.value), 2);
	},

	sine: function() {
		var displayField = this.getDisplay();
		console.log(eval(displayField));
		displayField.value = Math.sin(eval(displayField.value));
	},

	cosine: function() {
		var displayField = this.getDisplay();
		console.log(displayField);
		console.log(eval(displayField));
		displayField.value = Math.cos(eval(displayField.value));
	},

	tangent: function() {
		var displayField = this.getDisplay();
		console.log(eval(displayField));
		displayField.value = Math.tan(eval(displayField.value));
	}, 

	equals: function() {
		var displayField = this.getDisplay();
		var powerToSet = displayField.value;
		if (displayField.value.indexOf("^") != -1){
			powerToSet = displayField.value.split("^");
			var split1 = Number(powerToSet[0]);
			var split2 = Number(powerToSet[1]);
			displayField.value = Math.pow(eval(split1),eval(split2));
		} else {
			var calculation = displayField.value;
			console.log(calculation);
			var result = eval(calculation);
			displayField.value = result;
		}
	}

}