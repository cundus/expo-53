import { View, Text, FlatList } from "react-native";
import React from "react";
import { getPosts } from "@/api/call/posts";
import axios from "axios";

const Home = () => {
   const [data, setData] = React.useState([]);

   const fetchPosts = async () => {
      try {
         const data = await axios.get("https://jsonplaceholder.org/posts");

         setData(data.data);
      } catch (error) {
         console.log(error.message);
      }
   };

   React.useEffect(() => {
      fetchPosts();
   }, []);

   return (
      <View>
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
      <Text>
         {item.id} {item.title}
      </Text>
   );
};

export default Home;
