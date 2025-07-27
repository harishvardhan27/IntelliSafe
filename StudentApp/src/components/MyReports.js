import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const MyReports = ({ navigation }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReports([
        {
          id: 'IS001234',
          type: 'Suspicious Activity',
          location: 'Library Block A',
          status: 'investigating',
          date: '2024-01-15',
          priority: 'medium',
          description: 'Person loitering near entrance after hours'
        },
        {
          id: 'IS001235',
          type: 'Theft',
          location: 'Cafeteria',
          status: 'resolved',
          date: '2024-01-10',
          priority: 'high',
          description: 'Laptop stolen from table'
        },
        {
          id: 'IS001236',
          type: 'Medical Emergency',
          location: 'Sports Complex',
          status: 'pending',
          date: '2024-01-18',
          priority: 'emergency',
          description: 'Student collapsed during exercise'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return 'schedule';
      case 'investigating': return 'search';
      case 'resolved': return 'check-circle';
      default: return 'schedule';
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending': return styles.statusPending;
      case 'investigating': return styles.statusInvestigating;
      case 'resolved': return styles.statusResolved;
      default: return styles.statusPending;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'emergency': return '#e74c3c';
      case 'high': return '#f39c12';
      case 'medium': return '#3498db';
      case 'low': return '#27ae60';
      default: return '#3498db';
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="assignment" size={32} color="white" />
          <Text style={styles.headerText}>My Reports</Text>
          <Text style={styles.headerSubtext}>Loading your reports...</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="assignment" size={32} color="white" />
        <Text style={styles.headerText}>My Reports</Text>
        <Text style={styles.headerSubtext}>Track your incident reports</Text>
      </View>

      {reports.length === 0 ? (
        <View style={styles.card}>
          <Text style={{ marginBottom: 15 }}>No reports submitted yet.</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Report')}
          >
            <Text style={styles.buttonText}>Submit Your First Report</Text>
          </TouchableOpacity>
        </View>
      ) : (
        reports.map(report => (
          <View key={report.id} style={[styles.card, styles.reportItem]}>
            <View style={styles.reportHeader}>
              <View>
                <Text style={styles.reportId}>#{report.id}</Text>
                <Text style={[styles.priorityText, { color: getPriorityColor(report.priority) }]}>
                  {report.priority.toUpperCase()} PRIORITY
                </Text>
              </View>
              <View style={[styles.statusBadge, getStatusStyle(report.status)]}>
                <MaterialIcons name={getStatusIcon(report.status)} size={16} />
                <Text style={styles.statusText}> {report.status}</Text>
              </View>
            </View>
            
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.reportType}>{report.type}</Text>
              <Text style={styles.reportLocation}>📍 {report.location}</Text>
              <Text style={styles.reportDate}>📅 {new Date(report.date).toLocaleDateString()}</Text>
            </View>
            
            <Text style={styles.reportDescription}>{report.description}</Text>
            
            {report.status === 'investigating' && (
              <View style={[styles.alert, { marginTop: 10 }]}>
                <Text style={styles.alertText}>
                  <Text style={{ fontWeight: 'bold' }}>Update:</Text> Security team is currently investigating this incident.
                </Text>
              </View>
            )}
            
            {report.status === 'resolved' && (
              <View style={[styles.alert, styles.alertSuccess, { marginTop: 10 }]}>
                <Text style={{ color: '#155724' }}>
                  <Text style={{ fontWeight: 'bold' }}>Resolved:</Text> This incident has been successfully addressed.
                </Text>
              </View>
            )}
          </View>
        ))
      )}

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Report Status Guide</Text>
        <Text style={{ fontSize: 14, lineHeight: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Pending:</Text> Report received, awaiting review{"\n"}
          <Text style={{ fontWeight: 'bold' }}>Investigating:</Text> Security team is actively working on this{"\n"}
          <Text style={{ fontWeight: 'bold' }}>Resolved:</Text> Incident has been addressed
        </Text>
      </View>
    </ScrollView>
  );
};

export default MyReports;