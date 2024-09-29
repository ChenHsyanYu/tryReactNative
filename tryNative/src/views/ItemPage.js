import { View, Text,FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ItemCard from "../components/ItemCard";
import { useSelector,useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar";

export default function ItemPage(){
    const allItems = useSelector((state) => state.allItem.allItems);
    const dispatch = useDispatch();
    return(
        <View style={styles.outer}>
            <View style={styles.header}>
                <Text style={{fontSize: '36px'}}><Ionicons name="home-outline" size={36} color="#EF2A39" />恩恩的團購商品</Text>
                <Text>歡迎大家加入我的團購</Text>
            </View>
            {/* <View style={styles.search}> */}
                <SearchBar item={allItems} style={styles.search}/>
            {/* </View> */}
            <View>
                <FlatList
                    data={allItems}
                    keyExtractor={(item) => item.ID}
                    renderItem={({ item }) => (
                        <ItemCard 
                            itemName={item.itemName} 
                            itemPrice={item.itemPrice} 
                            itemUnit={item.itemUnit} 
                            itemEndDate={item.itemEndDate} 
                        />
                    )}
                    contentContainerStyle={styles.cards}
                />
                {/* <ItemCard /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outer:{
        flex: 1,
        width: '100%',
    },
    header:{
        marginTop: '10%',
        marginLeft: '5%',
        display: 'flex',
        gap: '20px',
    },
    search:{
        width: '90%',
        borderRadius: '5px',
        borderWidth: 1, // 相當於 CSS 中的 1px
        borderColor: 'black', // 邊框顏色
        padding: 10,
        marginLeft: '5%',
        marginTop: 30,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },  // 陰影偏移量
        shadowOpacity: 0.8,        // 陰影不透明度
        shadowRadius: 3,  
    },
    text:{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        alignItems: 'center',
        shadowOpacity: 0,   

    },
    cards: {
        marginTop: '10%',
        flexDirection: 'row',   // 水平布局
        flexWrap: 'wrap',       // 允许换行
        justifyContent: 'space-around', // 项目之间的间隔
    },
})