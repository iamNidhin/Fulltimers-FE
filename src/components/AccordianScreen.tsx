import * as React from 'react';
import {useEffect, useState} from 'react';
import { FlatList, Text } from 'react-native';
import {List} from 'react-native-paper';

const AccordianScreen = ({route, navigation}: any) => {
  const [expanded, setExpanded] = useState(true);
  const [filteredData, setFilteredData] = useState();
  

  const handlePress = () => setExpanded(!expanded);
  useEffect(() => {
    setFilteredData(route.params.data);
    
  }, []);



  const renderItem = ({ item }: any) => (
      <List.Accordion
        title={item[0].subcategory}
        // left={props => <List.Icon {...props} icon="folder" />}
        titleStyle={{fontWeight:"700",fontSize:21}}
        >
        {item.map((element :any ) => 
        <><List.Item title={element.title} titleStyle={{fontWeight:"700", fontSize:20}} /><Text style={{fontSize:15,textAlign:"justify", padding:10, color:"black"}}>{element.data}</Text></>
        )
        }
      </List.Accordion>
);

  return (
    <>
    <FlatList
                    data={filteredData}
                    // keyExtractor={(item) => item[0].id.toString()}
                    renderItem={renderItem}
                    style={{ padding: 10 }}
                />
    </> 
  );
};

export default AccordianScreen;
