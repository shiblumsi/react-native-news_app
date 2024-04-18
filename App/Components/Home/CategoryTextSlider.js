import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Shared/Color';

const CategoryTextSlider = () => {
    const [active, setActive] = useState(1)

    const categoryList = [
      {
        id: 1,
        name: "Latest"
      },
      {
        id: 2,
        name: "World"
      },
      {
        id: 3,
        name: "Sports"
      },
      {
        id: 4,
        name: "Intertwinement"
      },
      {
        id: 5,
        name: "Business"
      },
      {
        id: 6,
        name: "Life-Style"
      }
    ];
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setActive(item.id)}>
            <Text
              style={item.id === active ? styles.activeCatList : styles.catList}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    catList:{
        marginRight:15,
        fontSize:20, 
        fontWeight:'bold'
    },
    activeCatList:{
        marginRight:15,
        fontSize:20, 
        fontWeight:'bold',
        color:Color.primary
    }
})
export default CategoryTextSlider