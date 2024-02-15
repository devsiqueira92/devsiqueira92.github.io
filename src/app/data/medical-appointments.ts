export let MedicalAppointments = [
  {
    id: '1',
    // patientId: '1',
    // doctorId: '2',
    // schedulingId: '1',
    date: new Date(),
    patient: {
      id: '1',
      name: 'Eduardo',
    },
    doctor: {
      id: '2',
      name: 'Geovanna',
    },

    // scheduling: {
    //   id: '1',
    //   date: new Date(),
    //   patient: {
    //     id: '1',
    //     name: 'Eduardo',
    //   },
    //   doctor: {
    //     id: '2',
    //     name: 'Geovanna',
    //   },
    // },

    bpm: 80,
    bloodPressure: '150 x 90',
    details: 'very long, long, long content',
    evolution: 'steps of patient evolution',
  },
];
