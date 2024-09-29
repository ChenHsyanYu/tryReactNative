import { View,Image, TextBase } from "react-native"
import { StyleSheet } from "react-native"
import { Card,Text, Layout, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';


export default function ItemCard({itemName, itemPrice, itemEndDate, itemUnit}){
    const navigation = useNavigation();
    // const itemName = '香帥芋泥蛋糕';
    // const itemPrice = 100;
    // const itemUnit = '條';
    // const itemEndDate = '2024/05/15';
    return(
        <Layout>
            <Card 
                style={styles.card}
                onPress={() => navigation.navigate('Details')}
            >
                {/* <View style={styles.card}> */}
                    <Image source={'Image'}></Image>
                    <Text style={styles.textAlign}>{ itemName }</Text>
                    <Text style={styles.textAlign}>${ itemPrice } / { itemUnit }</Text>
                    <Text style={styles.textAlign}>結單日期：{ itemEndDate }</Text>
                {/* </View> */}
            </Card>
            {/* <Button>確定</Button> */}
        </Layout>
        
    )
}

const styles = StyleSheet.create({
    card:{
        display: 'block',
        height: 240,
        width: 185,
        borderRadius: '20px',
        shadowColor: 'gray',
        textAlign: 'center',

    },

    textAlign:{
        textAlign: 'center',
    }
});