import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../styles/styles';

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
    anonymous: false,
    priority: 'medium'
  });
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const incidentTypes = [
    'Suspicious Activity',
    'Fight/Violence',
    'Theft',
    'Unauthorized Entry',
    'Medical Emergency',
    'Fire/Safety Hazard',
    'Harassment',
    'Other'
  ];

  const handleSubmit = () => {
    if (!formData.type || !formData.location || !formData.description) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ type: '', location: '', description: '', anonymous: false, priority: 'medium' });
      setFiles([]);
    }, 1000);
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });
    if (!result.canceled) {
      setFiles(result.assets);
    }
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <View style={[styles.card, styles.alertSuccess]}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Report Submitted Successfully!</Text>
          <Text style={{ marginBottom: 5 }}>Report ID: #IS{Date.now().toString().slice(-6)}</Text>
          <Text style={{ marginBottom: 20 }}>Your report has been received and will be reviewed by security personnel.</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setSubmitted(false)}
          >
            <Text style={styles.buttonText}>Submit Another Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="report-problem" size={32} color="white" />
        <Text style={styles.headerText}>Report Incident</Text>
        <Text style={styles.headerSubtext}>Help keep our campus safe</Text>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Incident Type *</Text>
        <Picker
          selectedValue={formData.type}
          onValueChange={(value) => setFormData({...formData, type: value})}
          style={styles.input}
        >
          <Picker.Item label="Select incident type" value="" />
          {incidentTypes.map(type => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Location *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Library Block A, Room 201"
          value={formData.location}
          onChangeText={(text) => setFormData({...formData, location: text})}
        />

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Priority Level</Text>
        <Picker
          selectedValue={formData.priority}
          onValueChange={(value) => setFormData({...formData, priority: value})}
          style={styles.input}
        >
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Emergency" value="emergency" />
        </Picker>

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Description *</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Describe what happened in detail..."
          value={formData.description}
          onChangeText={(text) => setFormData({...formData, description: text})}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
          <Text style={styles.buttonText}>📷 Attach Evidence ({files.length} files)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
          onPress={() => setFormData({...formData, anonymous: !formData.anonymous})}
        >
          <MaterialIcons 
            name={formData.anonymous ? 'check-box' : 'check-box-outline-blank'} 
            size={24} 
            color="#667eea" 
          />
          <Text style={{ marginLeft: 10 }}>Submit anonymously</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>📤 Submit Report</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Emergency? Call Immediately</Text>
        <TouchableOpacity style={[styles.button, styles.emergencyButton]}>
          <Text style={styles.buttonText}>📞 Campus Security: 100</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReportIncident;