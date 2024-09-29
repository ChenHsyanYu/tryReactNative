import { Autocomplete, AutocompleteItem } from "@ui-kitten/components";
import { useState, useCallback } from "react";
import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 简单的过滤函数
const filter = (item, query) => item.itemName.toLowerCase().includes(query.toLowerCase());

export default function SearchBar({ item }) {
    const [value, setValue] = useState('');
    const [data, setData] = useState(item);

    const onSelect = useCallback((index) => {
        setValue(data[index].itemName);  // 注意这里的属性名
    }, [data]);

    // const onChangeText = useCallback((query) => {
    //     setValue(query);
    //     setData(item.filter(item => filter(item, query)));
    // }, [item]);

    // const clearInput = () => {
    //     setValue('');
    //     setData(item);
    // };

    // const renderCloseIcon = () => (
    //     <TouchableWithoutFeedback onPress={clearInput}>
    //         <Ionicons
    //             name='close-circle-outline'
    //             size={24} // 添加大小
    //         />
    //     </TouchableWithoutFeedback>
    // );

    // const renderOption = (item, index) => (
    //     <AutocompleteItem
    //         key={index}
    //         title={item.itemName}
    //     />
    // );

    return (
        <Autocomplete
            placeholder='Place your Text'
            value={value}
            placement='inner top'
            // accessoryRight={renderCloseIcon}
            // onChangeText={onChangeText}
            // onSelect={onSelect}
        >
            {/* {data.map(renderOption)} */}
        </Autocomplete>
    );
}
