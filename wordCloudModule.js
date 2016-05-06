var wordCloudModule = function() {
	var scale, words, width, height,margin, color;
	
	//default parameters
	width = 850;
	height = 350;
	margin=50;
	scale=5;
	minColor = "#ff0000"
	maxColor = "#000000"

	//default color scale
	var color = d3.scale.linear()
             .domain([0,1,2,3,4,5,6,10,15,20,100])
             .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

	var chart = function(selection){
		selection.each(function(data,index){
			var toRender = d3.select(this);
			var svg = toRender.append('svg')
			word_list = wordDict(data, scale)
			var maxOccs = d3.max(word_list, function(d){return +d.size})
			var minOccs = d3.min(word_list, function(d){return +d.size})
			console.log(maxOccs)
			console.log(minOccs)
			color = d3.scale.linear().domain([minOccs,maxOccs]).range([minColor, maxColor])
			d3.layout.cloud().size([width-margin, height-margin])
            .words(wordDict(data, scale))
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end",draw)
            .start();
		})   
	}

	chart.maxColor = function(value){
		if(!arguments.length) return maxColor;
		maxColor = value;
		return this;
	};

	chart.minColor = function(value){
		if(!arguments.length) return minColor;
		minColor = value;
		return this;
	};

	chart.scale = function(value){
		if(!arguments.length) return scale;
		scale = value;
		return this;
	};

	chart.margin = function(value){
		if(!arguments.length) return margin;
		margin = value;
		return this;
	};

	chart.words = function(value){
		if(!arguments.length) return words;
		words = value;
		return this;
	}

	chart.width = function(value){
		if(!arguments.length) return width;
		width = value;
		return this;
	}

	chart.height = function(value){
		if(!arguments.length) return height;
		height = value;
		return this;
	}

	function draw(words){
				d3.select("body").append("svg").attr("width", width)
						.attr("height", height)
						.attr("class", "wordcloud")
						.append("g")
						.attr("transform", "translate(320,200)")
						.selectAll("text")
						.data(words)
						.enter().append("text")
						.style("font-size", function(d) { return d.size + "px"; })
		                .style("fill", function(d, i) { return color(i); })
		                .attr("transform", function(d) {
		                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		                })
		        .text(function(d) { return d.text; });
	}
	function wordDict(data){
        var wordArr = data.split([" "])
        cleanWords = {}
        for (var i = 0; i < wordArr.length; i++){
            wordArr[i] = wordArr[i].replace(/[^a-zA-Z ]/g, "").toLowerCase()
            if(wordArr[i] in cleanWords){
                cleanWords[wordArr[i]]+=1;

            } else {
                cleanWords[wordArr[i]] = 1;
            }
        }

        new_freq_list = []
        for(var key in cleanWords){
            new_freq_list.push({"text": key, "size": cleanWords[key] * scale})
            //console.log(cleanWords[key]);
        }
        return new_freq_list
    }
    return chart;
}