import { StyleSheet } from 'react-native';
import { Accordion } from '../components/Accordion';

import { Text, View } from '../components/Themed';
import { Faqs } from '../mocks/faq';

export default function TabTwoScreen() {


  return (
    <View style={styles.container}>
      {Faqs.map((question,i) => (
        <Accordion answers={question.answers} question={question.question}  key={i} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
