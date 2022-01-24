import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';

import {CostumInput} from '../components';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {createUser} from '../helper/requestMethods';
import {useDispatch} from 'react-redux';

const Register = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      img: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('username is required')
        .min(3, 'Username is too short - should be 3 chars minimum.'),
      email: Yup.string()
        .email('Invalid Email')
        .required('Email is required!!'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 6 chars minimum.'),
      img: Yup.string(),
    }),
    onSubmit: values => {
      createUser(dispatch, values).then(props.navigation.navigate("login"))
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Create An Account</Text>
          <CostumInput
            placeholder="username"
            value={formik.values.username.toLowerCase()}
            onChangeText={formik.handleChange('username')}
            onBlur={formik.handleBlur('username')}
          />
          {formik.touched.username && formik.errors.username ? (
            <Text style={styles.error}>{formik.errors.username}</Text>
          ) : null}
          <CostumInput
            placeholder="email"
            value={formik.values.email.toLowerCase()}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text style={styles.error}>{formik.errors.email}</Text>
          ) : null}
          <CostumInput
            placeholder="password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            password
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={styles.error}>{formik.errors.password}</Text>
          ) : null}
          <TouchableOpacity style={styles.button}>
            <Text>Add an profile photo</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={formik.handleSubmit}>
              <Text>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <Text>Sign In</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.notice}>
            By creating an account, I consept to processing of my personal data
            in accordance with the PRIVACY POLICY
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Register};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#80cbc4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    marginBottom: 20,
    fontSize: 24,
  },
  button: {
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  notice: {
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'space-between',
  },
  bottomButton: {
    width: Dimensions.get('window').width * 0.35,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  error: {
    color: 'crimson',
  },
});
