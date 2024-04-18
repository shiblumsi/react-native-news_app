import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color';

const HeadlineList = ({ newsList }) => {
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          height: 1,
          backgroundColor: Color.lightGray,
          marginTop: 10,
          marginLeft: -20,
        }}
      ></View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: item.image_url }}
                style={{ height: 100, width: 100, borderRadius: 10 }}
              />
              <View style={{ marginRight: 100, marginLeft: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 600 }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    color: Color.primary,
                  }}
                >
                  {item?.source}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: Color.lightGray,
                marginTop: 10,
                marginLeft: -20,
              }}
            ></View>
          </View>
        )}
      />
    </View>
  );
};

export default HeadlineList