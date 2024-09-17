export const data = [
    {
      id: 1,
      doctor_name: "Aravinth",
      specialist: "General Physician",
      consult_fee: 500,
      languages: "Tamil, English, Malayalam",
      rating: 4,
      about: "I'm Aravinth",
      location: "Coimbatore",
      experience: 4,
      slot_details: [
        {
          slot_date: "17/08/2024",
          slot_timing: [
            { id: 1, time: '9:00 AM', available: 0 }, // booked
            { id: 2, time: '9:30 AM', available: 1 },
            { id: 3, time: '10:00 AM', available: 1 },
            { id: 4, time: '10:30 AM', available: 0 },
            { id: 5, time: '11:00 AM', available: 1 },
            { id: 6, time: '11:30 AM', available: 0 },
            { id: 7, time: '12:00 PM', available: 1 }
          ],
        },
        {
          slot_date: "18/08/2024",
          slot_timing: [
            { id: 1, time: '9:00 AM', available: 1 },
            { id: 2, time: '9:30 AM', available: 0 }, // booked
            { id: 3, time: '10:00 AM', available: 1 },
            { id: 4, time: '10:30 AM', available: 1 },
            { id: 5, time: '11:00 AM', available: 1 },
            { id: 6, time: '11:30 AM', available: 0 }, // booked
            { id: 7, time: '12:00 PM', available: 1 }
          ],
        },
        {
          slot_date: "19/08/2024",
          slot_timing: [
            { id: 1, time: '9:00 AM', available: 0 }, // booked
            { id: 2, time: '9:30 AM', available: 1 },
            { id: 3, time: '10:00 AM', available: 0 }, // booked
            { id: 4, time: '10:30 AM', available: 1 },
            { id: 5, time: '11:00 AM', available: 1 },
            { id: 6, time: '11:30 AM', available: 1 },
            { id: 7, time: '12:00 PM', available: 1 }
          ],
        },
        {
          slot_date: "20/08/2024",
          slot_timing: [
            { id: 1, time: '9:00 AM', available: 1 },
            { id: 2, time: '9:30 AM', available: 1 },
            { id: 3, time: '10:00 AM', available: 0 }, // booked
            { id: 4, time: '10:30 AM', available: 1 },
            { id: 5, time: '11:00 AM', available: 0 }, // booked
            { id: 6, time: '11:30 AM', available: 1 },
            { id: 7, time: '12:00 PM', available: 1 }
          ],
        },
        {
          slot_date: "21/08/2024",
          slot_timing: [
            { id: 1, time: '9:00 AM', available: 1 },
            { id: 2, time: '9:30 AM', available: 1 },
            { id: 3, time: '10:00 AM', available: 1 },
            { id: 4, time: '10:30 AM', available: 1 },
            { id: 5, time: '11:00 AM', available: 0 }, // booked
            { id: 6, time: '11:30 AM', available: 1 },
            { id: 7, time: '12:00 PM', available: 1 }
          ],
        },
        {
          slot_date: "22/08/2024",
          slot_timing: [
            { id: 1, time: '9:00 AM', available: 0 }, // booked
            { id: 2, time: '9:30 AM', available: 1 },
            { id: 3, time: '10:00 AM', available: 1 },
            { id: 4, time: '10:30 AM', available: 1 },
            { id: 5, time: '11:00 AM', available: 1 },
            { id: 6, time: '11:30 AM', available: 0 }, // booked
            { id: 7, time: '12:00 PM', available: 1 }
          ],
        }
      ]
    },
    {
        id: 2,
        doctor_name: "Sakthi",
        specialist: "Cardiologist",
        consult_fee: 600,
        languages: "Tamil, English",
        rating: 4.5,
        about: "Experienced cardiologist with 5 years of practice.",
        location: "Chennai",
        experience: 5,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
      {
        id: 3,
        doctor_name: "Venkatesh",
        specialist: "Orthopedic",
        consult_fee: 700,
        languages: "English, Hindi",
        rating: 4.3,
        about: "Specialist in bone and joint care with 8 years of experience.",
        location: "Bangalore",
        experience: 8,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
      {
        id: 4,
        doctor_name: "Balaji",
        specialist: "Dermatologist",
        consult_fee: 400,
        languages: "Tamil, English",
        rating: 4.2,
        about: "Skin specialist with 6 years of experience.",
        location: "Madurai",
        experience: 6,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
      {
        id: 5,
        doctor_name: "Pradap",
        specialist: "Pediatrician",
        consult_fee: 550,
        languages: "Tamil, English",
        rating: 4.7,
        about: "Pediatrician with 9 years of experience in child care.",
        location: "Tirunelveli",
        experience: 9,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
      {
        id: 6,
        doctor_name: "Chandru",
        specialist: "Dentist",
        consult_fee: 350,
        languages: "Tamil, English",
        rating: 4.6,
        about: "Dentist with 7 years of experience in oral care.",
        location: "Salem",
        experience: 7,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
      {
        id: 7,
        doctor_name: "Arun",
        specialist: "ENT Specialist",
        consult_fee: 650,
        languages: "English, Hindi",
        rating: 4.4,
        about: "ENT specialist with 10 years of experience.",
        location: "Hyderabad",
        experience: 10,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
      {
        id: 8,
        doctor_name: "Ravi",
        specialist: "General Physician",
        consult_fee: 500,
        languages: "Tamil, English, Malayalam",
        rating: 4,
        about: "I'm Ravi",
        location: "Coimbatore",
        experience: 4,
        slot_details: [
          {
            slot_date: "17/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 0 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "18/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 0 }, // booked
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "19/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "20/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 0 }, // booked
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "21/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 1 },
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 0 }, // booked
              { id: 6, time: '11:30 AM', available: 1 },
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          },
          {
            slot_date: "22/08/2024",
            slot_timing: [
              { id: 1, time: '9:00 AM', available: 0 }, // booked
              { id: 2, time: '9:30 AM', available: 1 },
              { id: 3, time: '10:00 AM', available: 1 },
              { id: 4, time: '10:30 AM', available: 1 },
              { id: 5, time: '11:00 AM', available: 1 },
              { id: 6, time: '11:30 AM', available: 0 }, // booked
              { id: 7, time: '12:00 PM', available: 1 }
            ],
          }
        ]
      },
  ];