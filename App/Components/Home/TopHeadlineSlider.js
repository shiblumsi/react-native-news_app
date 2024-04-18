import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Color from '../../Shared/Color'

const TopHeadlineSlider = ({newsList}) => {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: item.image_url }}
              style={{
                height: Dimensions.get("screen").width * 0.77,
                borderRadius: 10,
              }}
            />
            <Text
              numberOfLines={2}
              style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ color: Color.primary, marginTop: 3 }}>
              {item.source}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadlineSlider