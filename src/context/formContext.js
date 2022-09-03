import React from 'react';

export const formContext = {
  firstName: '',
  lastName: '',
  birthMonth: '',
  birthDay: 1,
  birthYear: 1900,
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: 11111,
  prevExperience: [],
  education: [],
};

/*
prevExperience = [
  {
    company: 'Fake Co.',
    jobTitle: 'Fake Title',
    description: '',
    startMo: '',
    startDay: 1,
    startYear: 1900,
    currentJob: false,
  },
  {
    company: 'Fake Co. 2',
    jobTitle: 'Fake Title 2',
    description: '',
    startMo: '',
    startDay: 1,
    startYear: 1900,
    currentJob: false,
  },
]

education = [
  {
    school: '',
    startMo: '',
    startDay: 1,
    startYear: 1900,
    endMo: '',
    endDay: 1,
    endYear: 1900,
    graduate: true,
    degree: '',
    gpa: '',
  }
]
*/
