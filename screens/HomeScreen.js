import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, touchableOpacity } from 'react-native';

export default class HomeScreen extends Component{
	constructor(){
	    super();
	    this.state={
	      text: '',
	      displayText: '',
	      isSearchPressed: '',
	  	  word: '',
	  	  lexicalCategory: '',
	   	  examples:[],
	  	  definition: ''
	    };
  	}
  	getWord=(word)=>{
		    var text = text.toLowerCase()
        try{
          var wordData = dictionary[text]["word"]
          var definition = dictionary[text]["definition"]
          var lexicalCategory = dictionary[text]["lexicalCategory"]

          this.setState({
            "word": wordData,
            "definition": definition,
            "lexicalCategory": lexicalCategory
          })
        }
        catch(err){
          alert("Sorry this word is not available for now.");
          this.setState({
            text:'',
            isSearchPressed:false
          })
        }
		}

	render(){
		return(
			<View>
				 <View style={styles.detailsContainer}>
					<Text style={styles.buttonText}>Word:{" "}</Text>
					<Text style={{fontSize:18}}>{this.state.word}</Text>
				 </View>

				 <View style={styles.detailsContainer}>
					<Text style={styles.buttonText}>Type:{" "}</Text>
					<Text style={{fontSize:18}}>{this.state.lexicalCategory}</Text>
				 </View>

				 <View style={{flexDirection:'row', flexWarp: 'wrap'}}>
					<Text style={styles.buttonText}>Definition:{" "}</Text>
					<Text style={{fontSize:18}}>{this.state.definition}</Text>
				 </View>

				<TextInput
		          style={ styles.inputBox }
		          onChangeText={text => {
		          	this.setState({
		          		text:text,
		          		isSearchPressed: false,
		          		word: "loading...",
		          		lexicalCategory: '',
		          		examples:[],
		          		definition: ""
		          	});
		          }}
		          value={this.state.text}
        		/>

            <View style={styles.detailsContainer}>
              <Text style={{FontSize:20}}>{
                this.state.isSearchPressed && this.state.word === "Loading..."
                ? this.state.word:""
              }
              </Text>
              {
                this.state.word!=="Loading..."?(
                  <View style={{justifyContent:center,marginleft:10}}>
                    <View style={styles.detailsContainer}>
                      <Text style={styles.displayText}>
                      Word:{""}
                      </Text>
                      <Text style={{fontSize:18}}>
                      {this.state.word}
                      </Text>
                    </View>
                    <View style={styles.detailsContainer}>
                      <Text style={styles.displayText}>
                      Type:{""}
                      </Text>
                      <Text style={{fontSize:18}}>
                      {this.state.lexicalCategory}
                      </Text>
                    </View>

        		<touchableOpacity 
        		style={styles.searchButton} 
        		onPress={()=>{
        			this.setState({isSearchPressed:true});
        			this.getWord(this.state.text);
        		}}>
        			<Text style={styles.buttonText}>Search</Text>
        		</touchableOpacity>
    		</View>
		)
	}
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  searchButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
