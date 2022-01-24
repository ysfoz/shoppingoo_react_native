import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {CostumInput} from '../components';


import {useFormik} from 'formik';
import * as Yup from 'yup';
import {login} from '../helper/requestMethods';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('username is required')
        .min(3, 'Username is too short - should be 3 chars minimum.'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 6 chars minimum.'),
      
    }),
    onSubmit: values => {
      login(dispatch, values).then(props.navigation.navigate('home'));
    },
  });




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>SIGN IN</Text>
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
            placeholder="password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            password
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={styles.error}>{formik.errors.password}</Text>
          ) : null}

       
          <TouchableOpacity style={styles.bottomButton} onPress={formik.handleSubmit}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={()=>props.navigation.navigate("register")}>
            <Text>Create a new Account</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export {Login};

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


  bottomButton: {
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom:10
  },
  error: {
    color: 'crimson',
  },
});
