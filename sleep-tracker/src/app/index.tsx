import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sleep Tracker</Text>
        <Text style={styles.subtitle}>
          Track your sleep and build healthier sleep habits.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Good evening!</Text>
        <Text style={styles.cardText}>
          Keep track of your nightly sleep and see your weekly statistics.
        </Text>
      </View>

      <View style={styles.navigation}>
        <Link href="/sleep-log" style={styles.button}>
          <Text style={styles.buttonText}>Log Sleep</Text>
        </Link>

        <Link href="/statistics" style={styles.button}>
          <Text style={styles.buttonText}>Sleep Statistics</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F4F7FB',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#243B53',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#627D98',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#243B53',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#627D98',
    lineHeight: 24,
  },
  navigation: {
    gap: 16,
  },
  button: {
    backgroundColor: '#4F6DDE',
    paddingVertical: 16,
    borderRadius: 12,
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});