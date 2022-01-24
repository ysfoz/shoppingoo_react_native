import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getUserStart, getUserFailure,setTokenRedux,deleteSuccess} from "../redux/userRedux"

import {CostumInput} from '../components';
import avatar from '../assets/avatar.jpeg';

const Profile = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state?.user?.currentUser);
  console.log("🚀 ~ file: Profile.js ~ line 29 ~ currentUser", currentUser)

  const confirmDelete = () =>
    Alert.alert('Shoppingoo', 'Are you sure to delete', [
      {
        text: 'Cancel',
        onPress: () => console.log('OK Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          deleteUser();
          props.navigation.navigate('home');
        },
      },
    ]);

  const updateUser = async (values) => {
    dispatch(getUserStart());
    try {
      const res = await axios.put(
        `https://mern-e-commerce-api.herokuapp.com/api/users/${currentUser?._id}`,
        values,
        {headers: {token: `Bearer ${currentUser?.jwtToken}`}},
      );
      await AsyncStorage.setItem('@current_User',JSON.stringify(res.data));
      dispatch(setTokenRedux(res?.data));
      console.log(
        '🚀 ~ file: requestMethods.js ~ line 78 ~ updateUser ~ res?.data',
        res?.data,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    dispatch(getUserStart());
    try {
      await axios.delete(`https://mern-e-commerce-api.herokuapp.com/api/users/${currentUser._id}`, {
        headers: {token: `Bearer ${currentUser.jwtToken}`},
      });
      await AsyncStorage.removeItem('@current_User');
      dispatch(deleteSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: currentUser?.username,
      email: currentUser?.email,
      adress: currentUser?.adress,
      city: currentUser?.city,
      postalcode: currentUser?.postalcode,
      tel: currentUser?.tel,
      fullname: currentUser?.fullname,
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('username is required'),
      email: Yup.string()
        .email('Invalid Email')
        .required('Email is required!!'),
      tel: Yup.number(),
      adress: Yup.string(),
      fullname: Yup.string(),
      country: Yup.string(),
      city: Yup.string(),
      postalcode: Yup.number(),
      img: Yup.string(),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 6 chars minimum.'),
    }),
    onSubmit: values => {
      updateUser(values);
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={currentUser.img ? {uri: currentUser.img} : avatar}
        />
      </TouchableOpacity>

      <CostumInput
        value={formik.values.username.toLowerCase()}
        placeholder="username"
        style={styles.input}
        text="Username"
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username ? (
        <Text style={styles.error}>{formik.errors.username}</Text>
      ) : null}
      <CostumInput
        value={formik.values.fullname}
        placeholder="Full name"
        style={styles.input}
        text="Full name"
        onChangeText={formik.handleChange('fullname')}
        onBlur={formik.handleBlur('fullname')}
      />
      {formik.touched.fullname && formik.errors.fullname ? (
        <Text style={styles.error}>{formik.errors.fullname}</Text>
      ) : null}
      <CostumInput
        value={formik.values.email.toLowerCase()}
        placeholder="Email"
        style={styles.input}
        text="Email"
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.error}>{formik.errors.email}</Text>
      ) : null}

      <CostumInput
        value={formik.values.adress}
        placeholder="street"
        style={styles.input}
        text="Adress"
        onChangeText={formik.handleChange('adress')}
        onBlur={formik.handleBlur('adress')}
      />
      {formik.touched.adress && formik.errors.adress ? (
        <Text style={styles.error}>{formik.errors.adress}</Text>
      ) : null}
      <CostumInput
        value={formik.values.city}
        placeholder="city"
        style={styles.input}
        text="City"
        onChangeText={formik.handleChange('city')}
        onBlur={formik.handleBlur('city')}
      />
      {formik.touched.city && formik.errors.city ? (
        <Text style={styles.error}>{formik.errors.city}</Text>
      ) : null}
      <CostumInput
        value={formik.values.postalcode}
        placeholder="Post Code"
        style={styles.input}
        text="Postal Code"
        onChangeText={formik.handleChange('postalcode')}
        onBlur={formik.handleBlur('postalcode')}
      />
      {formik.touched.postalcode && formik.errors.postalcode ? (
        <Text style={styles.error}>{formik.errors.postalcode}</Text>
      ) : null}
      <CostumInput
        value={formik.values.tel}
        placeholder="Phone"
        style={styles.input}
        text="Phone"
        onChangeText={formik.handleChange('tel')}
        onBlur={formik.handleBlur('tel')}
      />
      {formik.touched.tel && formik.errors.tel ? (
        <Text style={styles.error}>{formik.errors.tel}</Text>
      ) : null}
      <CostumInput
        value={formik.values.password}
        placeholder="password"
        style={styles.input}
        text="password"
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        password
      />
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#29b6f6'}]}
          onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={confirmDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export {Profile};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  img: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 30,
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.9,
  },
  button: {
    backgroundColor: '#ec407a',
    width: Dimensions.get('window').width * 0.43,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'crimson',
  },
});
