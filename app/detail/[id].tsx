import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Image } from "expo-image";
const blurhash =
   "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Detail = () => {
   const { id } = useLocalSearchParams();
   const [post, setPost] = React.useState<{
      id: number;
      title: string;
      body: string;
      category: string;
      image: string;
   }>({
      body: "",
      category: "",
      id: 0,
      title: "",
      image: "",
   });

   const fetchPost = async () => {
      try {
         const data = await axios.get(
            `https://jsonplaceholder.org/posts/${id}`
         );

         console.log(data.data);
         setPost(data.data);
      } catch (error: any) {
         console.log(error.message);
      }
   };

   React.useEffect(() => {
      fetchPost();
   }, []);

   return (
      <View style={{ flex: 1 }}>
         <Image
            style={{ width: "100%", backgroundColor: "#0553", height: 300 }}
            source={post.image}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
         />
         <Text
            style={{
               width: "100%",
               textAlign: "center",
               fontSize: 24,
               fontWeight: "600",
            }}
         >
            {post.title}
         </Text>
      </View>
   );
};

export default Detail;
