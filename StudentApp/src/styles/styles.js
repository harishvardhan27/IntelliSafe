import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
    padding: 20,
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerSubtext: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  button: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  emergencyButton: {
    backgroundColor: '#e74c3c',
  },
  input: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  quickAction: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: (width - 60) / 2,
    marginBottom: 15,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusPending: {
    backgroundColor: '#fff3cd',
  },
  statusInvestigating: {
    backgroundColor: '#cce7ff',
  },
  statusResolved: {
    backgroundColor: '#d4edda',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  emergencyContact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginVertical: 10,
  },
  emergencyIcon: {
    marginRight: 15,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emergencyDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  callButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  callButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  alert: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeaa7',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  alertDanger: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  alertSuccess: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  alertText: {
    color: '#856404',
  },
  reportItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#667eea',
    paddingLeft: 15,
    marginVertical: 15,
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  reportId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priorityText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  reportType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reportLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  reportDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  reportDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});