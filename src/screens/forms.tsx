import { StyleSheet, Text,TextInput , View, Image } from 'react-native';
import batLogo from '../../assets/logo-de-batman.png'

type HomeProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({setActive}:HomeProps){
    return(
        <View style={style.content}>
            <View style={style.logo}>
                <Image
                    style={style.img}
                    source={batLogo}
                />
            </View>
            <View style={style.form}>
                <Text>Nome:</Text>
                <TextInput 
                style={style.input}
                placeholder='Digite seu nome'
                />

                <Text>Contato:</Text>
                <TextInput
                style={style.input}
                placeholder='Digite seu numero'
                keyboardType='number-pad'
                />

                <Text>Localização:</Text>
                <TextInput 
                style={[style.input, style.bigInput]}
                placeholder='Digite o enderenço da ocorrencia'
                />

                <Text>Descrição:</Text>
                <TextInput 
                style={[style.input, style.bigInput]}
                placeholder='Digite qual a ocorrencia'
                />
            </View>
            <View style={style.button}>
                <Text
                 style={style.textButton}
                 onPress={()=>{setActive(false)}}
                >
                    Enviar
                </Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    content:{
        margin: 50,
        flex: 1,
        alignItems: 'flex-start',
    },
    logo:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 32,
        
    },
    img:{
        height:30,
        width:55,
        alignSelf: 'flex-start',
    },
    form:{
        flexGrow: 1,
    },
    input:{
        width: 320,
        marginTop: 8,
        marginBottom: 32,
        borderWidth:2,
        borderRadius:12,
        
    },
    bigInput:{
        height:170,
        textAlignVertical: 'top',
    },
    button:{
        marginBottom: 32,
        justifyContent: 'center',
    },
    textButton:{
        width:320,
        paddingVertical: 8,
        backgroundColor: '#000',
        color: '#fff',
        fontSize: 32,
        textAlign: 'center',
        borderRadius:12,
    }
})