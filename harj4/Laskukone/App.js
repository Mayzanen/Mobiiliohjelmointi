import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  keyboardType
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { add1: "0", add2: "0", add3: "0", reduce1: "0", reduce2: "0", reduce3: "0", multiplication1: "0", multiplication2: "0", multiplication3: "0", division1: "0", division2: "0", division3: "0", log: "", showLog: true };
    this.countPlus = this.countPlus.bind(this);
    this.countReduce = this.countReduce.bind(this);
    this.countMultiplication = this.countMultiplication.bind(this);
    this.countDivision = this.countDivision.bind(this);
    this.reset = this.reset.bind(this);
    this.showLog = this.showLog.bind(this);
  }

  countPlus(){
    let sum = (parseInt(this.state.add1) + parseInt(this.state.add2)).toString();
    let logadd = this.state.add1 + " + " + this.state.add2 + " = " + sum + "\n";
    let newlog = this.state.log + logadd;
    this.setState({log: newlog});
    this.setState({add3: sum});
    
  }

  countReduce(){
    let reduce = (parseInt(this.state.reduce1) - parseInt(this.state.reduce2)).toString();
    let logadd = this.state.reduce1 + " - " + this.state.reduce2 + " = " + reduce + "\n";
    let newlog = this.state.log + logadd;
    this.setState({log: newlog});
    this.setState({reduce3: reduce});
  }

  countMultiplication(){
    let multiplication = (parseInt(this.state.multiplication1) * parseInt(this.state.multiplication2)).toString();
    let logadd = this.state.multiplication1 + " * " + this.state.multiplication2 + " = " + multiplication + "\n";
    let newlog = this.state.log + logadd;
    this.setState({log: newlog});
    this.setState({multiplication3: multiplication});
  }

  countDivision(){
    let division = (parseInt(this.state.division1) / parseInt(this.state.division2)).toString();
    let logadd = this.state.division1 + " / " + this.state.division2 + " = " + division + "\n";
    let newlog = this.state.log + logadd;
    this.setState({log: newlog});
    this.setState({division3: division});
  }

  reset(){
    this.setState({ add1: "0", add2: "0", add3: "0", reduce1: "0", reduce2: "0", reduce3: "0", multiplication1: "0", multiplication2: "0", multiplication3: "0", division1: "0", division2: "0", division3: "0", log: "" });
  }

  showLog(){
    this.setState(previousState => {
      return { showLog: !previousState.showLog };
    });
  }
  
  render() {
    let display = this.state.showLog ? this.state.log : "";
    let logbutton = this.state.showLog ? "Hide log" : "Show log";
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {/* Pluslasku */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center'}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(add1) => this.setState({add1})}
            value={this.state.add1}
            keyboardType={'numeric'}
          />
          <Text style={styles.welcome}>
            +
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(add2) => this.setState({add2})}
            value={this.state.add2}
            keyboardType={'numeric'}
          />
          
          <Button
            onPress={this.countPlus}
            title="Count"
            color="#841584"
          />

          <Text
          value>
            {this.state.add3}
          </Text>
        </View>

        {/* Vähennyslasku */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(reduce1) => this.setState({reduce1})}
          value={this.state.reduce1}
          keyboardType={'numeric'}
        />
        <Text style={styles.welcome}>
          -
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(reduce2) => this.setState({reduce2})}
          value={this.state.reduce2}
          keyboardType={'numeric'}
        />
        
        <Button
          onPress={this.countReduce}
          title="Count"
          color="#841584"
        />

        <Text>
          {this.state.reduce3}
        </Text>
      </View>
      
      {/* Kertolasku */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(multiplication1) => this.setState({multiplication1})}
          value={this.state.multiplication1}
          keyboardType={'numeric'}
        />
        <Text style={styles.welcome}>
          *
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(multiplication2) => this.setState({multiplication2})}
          value={this.state.multiplication2}
          keyboardType={'numeric'}
        />
        
        <Button
          onPress={this.countMultiplication}
          title="Count"
          color="#841584"
        />

        <Text>
          {this.state.multiplication3}
        </Text>
      </View>

      {/* Jakolasku */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(division1) => this.setState({division1})}
          value={this.state.division1}
          keyboardType={'numeric'}
        />
        <Text style={styles.welcome}>
          /
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(division2) => this.setState({division2})}
          value={this.state.division2}
          keyboardType={'numeric'}
        />
        
        <Button
          onPress={this.countDivision}
          title="Count"
          color="#841584"
        />

        <Text>
          {this.state.division3}
        </Text>
      </View>

      {/* Reset + Show / hide log */}
      <View style={{flexDirection: 'row', justifyContent: 'center', height: 40, alignItems: 'center'}}>
        <Button
          onPress={this.reset}
          title="Reset"
          color="#841584"
        />
        <Button
          onPress={this.showLog}
          title={logbutton}
          color="#841584"
        />
      </View>

      {/* Log */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>
          {display}
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
