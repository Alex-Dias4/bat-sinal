import { StyleSheet, Text, View, Image } from 'react-native';
import batLogo from '../../assets/logo-de-batman.png'
// import { handleActive } from '../services/useStates';

type HomeProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function Home({setActive}:HomeProps){
    return(
        <View style={styles.container}>
            <Image style={styles.img}
                source={batLogo}

            />

            <Text
             style={styles.text}
             onPress={()=>{setActive(true)}}
             >activate bat signal</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    text:{
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        paddingVertical:12,
        paddingHorizontal:32,
        textAlign: 'center',
        backgroundColor: "#000",
        borderRadius: 16,
    },
    img:{

        width: 184,
        height:100
    }
})