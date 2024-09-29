import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function NavBar({navigation}){

    return(
        
            <View style={styles.nav}>
                <View style={styles.navBlock}>
                    <Ionicons name="home-outline" size={24} color="white" />
                    <Text style={{color: 'white'}}>歷史訂單</Text>
                </View>
                <View style={styles.navBlock}>
                    <Ionicons name="home-outline" size={24} color="white" />
                    <Text style={{color: 'white'}}>團購商品列表</Text>
                </View>
                <View style={styles.navBlock}>
                    <Ionicons name="home-outline" size={24} color="white" />
                    <Text style={{color: 'white'}}>個人首頁</Text>
                </View>
            </View>
    );
}




const styles = StyleSheet.create({
    nav:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100vw',
        backgroundColor: '#EF2A39',

        padding: 7,
        borderRadius: '20px',
    },
    navBlock:{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    }
  });