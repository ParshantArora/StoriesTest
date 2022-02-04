'use strict';
import React, {useState, useEffect} from 'react';

export const Strings = {
  routes: {
    dashboardTitle: "Dashboard",
    deviceInfo: "Device Info",
    DetailsScreenD: "Details Screen",
    HackerNewsStories:"Hacker News Stories",
    userName : "Dashboard",
    deviceParameter: "Device Parameter",
    commingSoon: "Settings",
    detailsTab: {
      deviceIn: "Device Info",
      activityDataL: "Analytics",
      activityDataRT: "Activity Data",
      DeviceP: "Change Device Parameter"
    }
  },
  error: {
    enterValidNumber: "Please enter a valid number",
    enterNumber: "Please enter number",
    emailEmpty : "Please enter Userid",
    emailError: 'Please enter a valid email address.',
    passwordEmpty : "Please enter Password",
    phoneNumber: 'Please enter a valid phone number.',
    pageNotFound: 'Page Not Found',
    '404': '404',
    error: 'Error',
    goBack: 'Go Back',
    noRecFound: 'No Record Found!',
  },

  placeholder: {
    phone: 'Phone',
    password: 'Password',
    firstname: 'First Name',
    lastname: 'Last Name',
    email: 'Userid',
    dob: 'Date of Birth',
    address: 'Address',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
    currentOperating: "Current value",
    setNewOperating: "New value"

  },
  common: {
    savenCont: 'Save & Continue',
    goBack: 'Go Back',
    request: 'Request',
    continue: 'Continue',
    cancel: 'Cancel',
    enter: 'Enter',
    points: 'Points',
    point: 'Point',
    ok: 'Ok',
    loadMore: "Load More"
  },
  auth: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    notAmember: 'Not yet a Member? ',
    signInHere: 'Already a member? Sign in here!',
    submit: 'Submit',
    createAcAggrement: 'By creating an account you agree to our',
    tNcPP: 'Terms of Service and Privacy Policy',
    logout: 'Logout',
    logoutConfirmMessage: 'Are you sure to logout?',
    checkin: 'Login',
    checkout: 'Check Out',
    checkoutConfirmation: 'Do you really want to check out?',
    checkinConfirmation:
      'Enter Phone Number and Press Check In Button to Check In',
    checkoutPhoneInfo1:
      'Enter Phone Number and Press Check Out Button to Close App',
    dollar: '$',
  },
  deviceParameter: {
    deviceParameter: "Device Parameter",
    saveChanges: 'Save Changes',
    selectDeviceParameter: "Please select Device Parameter Dropdown",
    savedSuccessfully: "Parameter saved successfully"
  },
  activityData: {
    activityData: "Activity Data Logs",
    lineChartTitle: "Timeseries (realtime data)",
    noChartData: "No Activity Data"
  },
  anylyticsData: {
    noAnylytics: "No Analytics Data"
  },
  dashboard: {
    noDeviceFound: "Sorry No devices available"
  },
  comingSoon: {
    commingSoon: "Coming Soon"
  },
  colorsArray:[
  "#ffcc00",
  "#00B3B6",
  "#1E1E1E",
  "#020E31",
  "#707070",
  "#B4C9CC",
  "#8BCC82",
  "red",
  "tomato",
  "#F02000",
  "orange",
  "#A9AFAF",
  "#A9AFAF70",
  "#393B3B",
  "#e0e0e0",
  "#EAEAEA",
  "#EDFBF6",
  "#D8F5F1",
  "#b3e9e7",
  "#00B3B6",
  "#FFFFFF",
  "#FF3700",
  "#F9FDFC",
  "#EFFAF6",
  "#E6E6E6",
  "#D4E1DC",
  "#ADCDCF",
  "#F9F9F9",
  "#CCF0F0",
  "#97A3A3",
  "#859899",
  "#7C7C7C",
  "#555555",
  "#3C3E46",
  "#000000",
  "#050505",
  "#f4f7fd",
  "#707070",
  "#F1FAF7",
  "#FFF1CD",
  "#326080",
  "#356585",
  "#2E5A7B",
  "#051C6A",
  "#654E0A",
  "#FAF3E2",
  "#326080",
  "#020202",
  "#050000",
  "#020000",
  "#030000",
  "#597A9D",
  "#CF240B",
  "#F5EDED",
  "#356282",
  "#AACCCE",
  "#EFFEFF",
  "#BFE1FF",
  "#A8D3F9",
  "#2B79C0",
  "#68E5EE",
  "#dcf3f9",
   "#75BDFF",
  "#421b9a",
   "#37188b",
  "#666666",
  "#ffcc00",
  "#000000",
  "#989898",
  '#f7f7f7',
  "#eeeeee"]
  

};
