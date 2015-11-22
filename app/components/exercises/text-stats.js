/* npm text-stats -->  https://www.npmjs.com/package/text-stats */
var textStats = {
	stats: function(text) {
		var data;
		if (text.length) {
			data = {
				sentences: this.sentences(text),
				words: this.words(text),
				syllables: this.syllables(text),
				characters: this.characters(text),
				carpar: this.charactersWords(text),
				gulpease: this.gulpease(text),
				gunningFog: this.gunningFog(text)
			};
		}
		return data;
	},
	findSentences : function(text) {
		var sentence, sentences, result, _i, _len;
		sentences = text.split(".");
		result = [];
		for (_i = 0, _len = sentences.length; _i < _len; _i++) {
			sentence = sentences[_i];
			if (sentence.trim() !== "") {
				result.push(sentence);
			}
		}
		return result;
	},

	sentences : function(text) {
		return this.findSentences(text).length;
	},

	findWords : function(sentence) {
		return sentence.match(/[A-z\u00E0-\u00FC]+/g);
	},

	words : function(sentence) {
		return this.findWords(sentence).length;
	},

	findSyllables : function(word) {
		word = word.toLowerCase();
		if (word.length <= 3) {
			return 1;
		}
		word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
		word = word.replace(/^y/, '');
		return word.match(/[aeiouy]{1,2}/g);
	},

	syllables : function(word) {
		return this.findSyllables(word).length;
	},

	characters : function(sentence) {
		var word, tot, _i, _len;
		sentence = this.findWords(sentence);
		tot = 0;
		for (_i = 0, _len = sentence.length; _i < _len; _i++) {
			word = sentence[_i];
			if (word !== null) {
				tot += word.length;
			}
		}
		return tot;
	},

	charactersWords : function(sentence) {
		var result, tot;
		tot = this.characters(sentence);
		result = tot / this.words(sentence);
		return result.toFixed(1);
	},

	gulpease : function(text) {
		var _characters, _sentences, _words, _result;
		_sentences = this.sentences(text);
		_characters = this.characters(text);
		_words = this.words(text);
		_result = 89 + ((300 * _sentences) - 10 * _characters) / _words;
		return parseInt(_result, 10);
	},

	gunningFog : function(text) {
		var word, _sentences, _i, _len, _words, _wordsComplesse, _result;
		_sentences = this.sentences(text);
		_words = this.words(text);
		_wordsComplesse = 0;
		for (_i = 0, _len = _words.length; _i < _len; _i++) {
			word = _words[_i];
			if (this.syllables(word) > 2) {
				_wordsComplesse += 1;
			}
		}
		_result = 0.4 * ((_words / _sentences) + 100 * (_wordsComplesse / _words));
		return parseInt(_result, 10);
	}
};