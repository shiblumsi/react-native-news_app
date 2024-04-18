import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color';
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';


const Home = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
      getTopHeadline();
    }, []);
    const getTopHeadline = async () => {
      const result = (await GlobalApi.getTopHeadline).data;
      console.log(result.data);
      setNewsList(result.data);
    };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.appName}>Latest News</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <CategoryTextSlider />
      <TopHeadlineSlider newsList={newsList} />
      <HeadlineList newsList={newsList} />
    </View>
  );
}

const styles = StyleSheet.create({
    appName:{
        fontSize:24,
        color:Color.primary,
        fontWeight:'bold'
    }
})
export default Home