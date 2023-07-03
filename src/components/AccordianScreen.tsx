import * as React from 'react';
import { List } from 'react-native-paper';

const AccordianScreen = ({ route, navigation }: any) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Six Pillars">

      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

    </List.Section>
  );
};

export default AccordianScreen;