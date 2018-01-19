function TrieNode(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
    this.list =[];  
}

function Trie() {
    this.root = new TrieNode(null);
}

Trie.prototype.insert = function (word) {
    var node = this.root;
    node.list.push(word); 

    for (var i = 0; i < word.length; i++) {

        if (!node.children[word[i]]) {
            node.children[word[i]] = new TrieNode(word[i]);
            node.children[word[i]].parent = node;
        }
        node = node.children[word[i]];
        node.list.push(word);

        if (i == word.length - 1) {
            node.end = true;
        }
    }
};

Trie.prototype.find = function (word) {
    var node = this.root;
    var output = [];
    if (!word || word === '*') {
        return node.list;
    }
    for (var i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
            node = node.children[word[i]];
        } else {
            return output;
        }
    }   

    return node.list;
};