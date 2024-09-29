import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';



export default function ItemDetailPage(){
    const navigation = useNavigation();
    return(
        <>
            <View style={styles.header}>
                <Ionicons name='arrow-back-outline' size={28} onPress={()=> navigation.navigate('Home')}></Ionicons>
                <Text style={styles.h1}>恩恩的團購</Text>
            </View>
            <Image></Image>
            <View></View>
        
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        
    }, 
    h1:{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 36,
        
    }
});