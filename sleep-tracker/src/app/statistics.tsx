
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Define the structure of a sleep entry
type SleepEntry = {
  id: number;
  date: string;
  bedTime: string;
  wakeTime: string;
  quality: number;
};

// Reusable statistics card
function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

export default function StatisticsScreen() {
  const [entries, setEntries] = useState<SleepEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch sleep entries from the backend
  useEffect(() => {
    async function fetchSleepEntries() {
      try {
        const response = await fetch('http://localhost:3000/sleep-entries');

        if (!response.ok) {
          throw new Error('Failed to fetch sleep entries');
        }

        const data: SleepEntry[] = await response.json();
        setEntries(data);
      } catch (err) {
        setError('Unable to load sleep statistics.');
      } finally {
        setLoading(false);
      }
    }

    fetchSleepEntries();
  }, []);

  // Calculate average sleep quality
  const averageQuality =
    entries.length > 0
      ? (
          entries.reduce((total, entry) => total + entry.quality, 0) /
          entries.length
        ).toFixed(1)
      : '0.0';

  // Calculate average bedtime
  const averageBedTime =
    entries.length > 0
      ? (() => {
          const totalMinutes = entries.reduce((total, entry) => {
            const [hours, minutes] = entry.bedTime.split(':').map(Number);
            return total + hours * 60 + minutes;
          }, 0);

          const averageMinutes = Math.round(totalMinutes / entries.length);
          const hours = Math.floor(averageMinutes / 60);
          const minutes = averageMinutes % 60;

          return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        })()
      : '--:--';

  // Calculate average wake time
  const averageWakeTime =
    entries.length > 0
      ? (() => {
          const totalMinutes = entries.reduce((total, entry) => {
            const [hours, minutes] = entry.wakeTime.split(':').map(Number);
            return total + hours * 60 + minutes;
          }, 0);

          const averageMinutes = Math.round(totalMinutes / entries.length);
          const hours = Math.floor(averageMinutes / 60);
          const minutes = averageMinutes % 60;

          return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        })()
      : '--:--';

  // Calculate total sleep entries
  const totalEntries = entries.length;

  // Dynamic statistics cards
  const statistics = [
    { title: 'Average Sleep Quality', value: `${averageQuality} / 5` },
    { title: 'Average Time to Bed', value: averageBedTime },
    { title: 'Average Wake Time', value: averageWakeTime },
    { title: 'Total Sleep Entries', value: totalEntries.toString() },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Statistics</Text>

      <Text style={styles.description}>
        Your sleep overview based on recorded sleep entries.
      </Text>

      {loading ? (
        <Text style={styles.message}>Loading sleep statistics...</Text>
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : entries.length === 0 ? (
        <Text style={styles.message}>No sleep entries found.</Text>
      ) : (
        <View style={styles.grid}>
          {statistics.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    width: '48%',
    minWidth: 140,
  },
  statTitle: {
    fontSize: 15,
    color: '#627D98',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#243B53',
  },
  message: {
    fontSize: 16,
    color: '#627D98',
    marginTop: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
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
