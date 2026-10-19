import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SleepListScreen() {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSleepEntries() {
      try {
        const response = await fetch('http://localhost:3000/sleep-entries');

        if (!response.ok) {
          throw new Error('Failed to fetch sleep entries');
        }

        const data = await response.json();
        setEntries(data);
      } catch (err) {
        setError('Unable to load sleep entries.');
      } finally {
        setLoading(false);
      }
    }

    fetchSleepEntries();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Log List</Text>

      <Text style={styles.description}>
        View your recorded sleep entries.
      </Text>

      {loading ? (
        <Text>Loading sleep entries...</Text>
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : entries.length === 0 ? (
        <Text>No sleep entries found.</Text>
      ) : (
        entries.map((entry) => (
          <View key={entry.id} style={styles.entryCard}>
            <Text>Date: {entry.date}</Text>
            <Text>Time to Bed: {entry.bedTime}</Text>
            <Text>Time Awake: {entry.wakeTime}</Text>
            <Text>Sleep Quality: {entry.quality}</Text>
          </View>
        ))
      )}

      <Link href="/" style={styles.backButton}>
        Back to Home
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#243B53',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#627D98',
    marginBottom: 30,
  },
  entryCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  backButton: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#4F6DDE',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});