import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

interface SignOutComponentProps {
  onSignOut: () => void;
  onCancel: () => void;
  username?: string;
}

const SignOutComponent: React.FC<SignOutComponentProps> = ({
  onSignOut,
  onCancel,
  username,
}) => {
  const handleSignOut = () => {
    Alert.alert(
      'Confirm Sign Out',
      'Are you sure you want to sign out? You will need to log in again to access your account.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: onCancel,
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: () => {
            onSignOut();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Sign Out</Text>
          {username && (
            <Text style={styles.subtitle}>
              Are you sure you want to sign out of {username}'s account?
            </Text>
          )}
          <Text style={styles.description}>
            You will need to enter your credentials again to access your account.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
              <Text style={styles.signOutButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// Alternative simpler version that can be used inline
export const SignOutButton: React.FC<{
  onSignOut: () => void;
  style?: any;
  textStyle?: any;
}> = ({ onSignOut, style, textStyle }) => {
  const handlePress = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: onSignOut,
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={[styles.inlineSignOutButton, style]} onPress={handlePress}>
      <Text style={[styles.inlineSignOutButtonText, textStyle]}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#495057',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#e9ecef',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#495057',
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    flex: 1,
    backgroundColor: '#dc3545',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  // Inline button styles
  inlineSignOutButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  inlineSignOutButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default SignOutComponent;