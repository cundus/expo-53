import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

interface Props {}

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;
const AppCard = ({}) => {
   return (
      <Card style={{ margin: 10 }}>
         <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
         />
         <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
         </Card.Content>
         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
         <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
         </Card.Actions>
      </Card>
   );
};

export default AppCard;
