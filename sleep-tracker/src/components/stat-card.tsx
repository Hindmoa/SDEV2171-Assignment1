import { StyleSheet, Text, View } from 'react-native';

type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    minHeight: 150,
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: '#627D98',
    lineHeight: 21,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#243B53',
  },
});