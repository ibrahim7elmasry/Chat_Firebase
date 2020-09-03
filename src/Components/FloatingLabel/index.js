
import React from 'react';
import {
  
  TextInput,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';

 import styles from './styles'
//  import { Colors, Fonts, ApplicationStyles } from '~/Theme'

class FloatingLabelInput extends React.Component{
  state={
    isFocus:false
  }

componentWillMount(){
  this._animationIsFocused= new Animated.Value( this.props.value === "" ? 0 : 1 )
  this._animationIsBlur= new Animated.Value( this.props.value === "" ? 1 : 0 )
}

componentDidUpdate(){
    Animated.timing(
      this._animationIsFocused,
      {
    toValue:(this.state.isFocus || this.props.value !=="") ? 1:0,
    duration: 200 ,

  }).start();
    

      Animated.timing(
      this._animationIsBlur,
      {
    toValue:(this.state.isFocus || this.props.value !=="") ? 1:0,
    duration: 200 ,

  }).start();

  
}
  handleFocus =()=>{this.setState({isFocus:true})}
  handleblur =()=>{this.setState({isFocus:false})}
render(){
  const {label ,type,...props}=this.props
  const {isFocus} =this.state;

  
  const labelStyle ={
    position:"absolute",
    right:7,
    // top: !isFocus ? 18 :0 ,
    top:this._animationIsFocused.interpolate({
      inputRange: [0 , 1],
      outputRange: [16 , 0]
    }) ,
    //  ...Fonts.style.medium1,
    fontSize: !isFocus ? 20 :14 ,
    fontSize: this._animationIsFocused.interpolate({
      inputRange: [0 , 1],
      outputRange: [20 , 14]
    }) ,
    
     color : !isFocus ? "black":"#ff69b4",
    // color : this._animationIsFocused.interpolate({
    //   inputRange: [0 , 1],
    //   outputRange: ["#aaa" , "red"]
      
    // }) ,

  }


  return(
    <View style={styles.container}>
     <Animated.Text style={labelStyle }>
     
     {label} 
     </Animated.Text>
      <TextInput
    {...props}
      style={[ styles.TextInputcontainer ,
         {
       borderBottomColor:!isFocus ? "#aaa":"#ff69b4" }]}
       onFocus={this.handleFocus}
      onBlur={this.handleblur}
      keyboardType={this.props.type}
 
       />
    
    </View>
  )
}

}

 export default FloatingLabelInput;