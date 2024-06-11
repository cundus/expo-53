import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { getPosts } from "@/api/call/posts";
import axios from "axios";
import { Link } from "expo-router";
import AppCard from "@/components/card/AppCard";

const Home = () => {
   const [data, setData] = React.useState([]);

   const fetchPosts = async () => {
      try {
         const data = await axios.get("http://10.0.2.2:5000/threads");
         // const data = await axios.get("https://jsonplaceholder.org/posts");
         console.log(data.data);

         setData(data.data);
      } catch (error) {
         console.log(error.message);
      }
   };

   React.useEffect(() => {
      fetchPosts();
   }, []);

   return (
      <View style={{ flex: 1 }}>
         <Text>Home</Text>
         <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <RenderItem item={item} />}
         />
      </View>
   );
};

const RenderItem = ({ item }) => {
   return (
      <Link href={`detail/${item.id}`} asChild>
         <Pressable>
            <AppCard />
         </Pressable>
      </Link>
   );
};

export default Home;
