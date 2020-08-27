import AsyncStorsge from '@react-native-community/async-storage'

export const keys ={
    uuid : 'uuid'
};

const setAsyncStorage = async(keys, item) =>{
    try {
        await AsyncStorsge.setItem(keys, item)
    } catch (error) {
        console.log('error')
    }
}


const getAsyncStorage = async(keys) =>{
    try {
     const value =   await AsyncStorsge.getItem(keys);
     if(value){
         return value;
     }
     else{
         return null
     }
    } catch (error) {
        console.log('error')
        return null;
    }
}



const clearAsyncStorage = async()=> {
    try {
        await AsyncStorsge.clear();
    } catch (error) {
        console.log('error')
        
    }
}

export{ setAsyncStorage, getAsyncStorage, clearAsyncStorage};