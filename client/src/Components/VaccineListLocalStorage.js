let vaccine = [{
    user_id: 1,
    vaccineName:"MMR (M-M-R II)",
    dateGiven: Date(4/10/2014),
    dose:"One of two",
    expiration: Date(4/10/20), 
    manufacturer:"Merck and Co., Inc.", 
    medicalProfessional: "Jennifer Ashton MD", 
    frequency: "Children should get two doses of MMR vaccine, starting with the first dose at 12 to 15 months of age, and the second dose at 4 through 6 years of age. Teens and adults should also be up to date on their MMR vaccination." ,
    description: "The MMR vaccine is a vaccine against measles, mumps, and rubella, abbreviated as MMR."
}, {
    user_id: 1,
    vaccineName:"Comirnaty COVID-19",
    dateGiven: Date(8/20/2022),
    dose:"two of two",
    expiration: "Unknow",
    manufacturer:"Pfizer-BioNTech SE", 
    medicalProfessional: "Drew Weissman MD", 
    frequency: "Third primary series dose for individuals 5 years of age and older who have been determined to have certain kinds of immunocompromise.",
    description: "Comirnaty is a monovalent COVID-19 vaccine. As COVID-19 vaccines are administered across world, our safety monitoring and durability is ongoing."
}, {
    user_id: 1,
    vaccineName:"Tdap",
    dateGiven: Date(1/11/2022),
    dose:"One of one",
    expiration: Date(1/11/2032), 
    manufacturer:"GlaxoSmithKline Inc", 
    medicalProfessional: "Andrew Baldwin MD", 
    frequency: "Give adults who have never received Tdap a single dose of Tdap. This can be given at any time, regardless of when they last got Td. This should be followed by either a Td or Tdap booster every 10 years." ,
    description: "This vaccine is used to keep up protection (immunity) against diphtheria, tetanus (lockjaw) and pertussis (whooping cough) in children and adults who have been vaccinated for these diseases in the past. It may also be given during the third trimester of pregnancy to help prevent pertussis in the newborn baby."
}, {
    user_id: 1,
    vaccineName:"HepA-HepB",
    dateGiven: Date(2/11/2021),
    dose:"one of two",
    expiration: Date(2/12/2022),
    manufacturer:"GlaxoSmithKline Inc", 
    medicalProfessional: "Deepak Chopra MD", 
    frequency: "There should be at least 4 weeks between doses 1 and 2, and at least 8 weeks between doses 2 and 3." ,
    description: "Hepatitis A and hepatitis B combination vaccine is used to prevent infection caused by the hepatitis A and hepatitis B virus. The vaccine works by causing your body to produce its own protection (antibodies) against the disease.  Studies indicate that immunologic memory remains intact for at least 30 years among healthy people who initiated hepatitis B vaccination at >6 months of age."
}, {
    user_id: 2,
    vaccineName:"HPV9",
    dateGiven: Date(9/9/1999),
    dose:"two of three",
    expiration: Date(11/9/1999),
    manufacturer:"Merck Sharp & Dohme Corp.", 
    medicalProfessional: "Lyn Christie MD", 
    frequency: "For the 3-dose schedule, GARDASIL 9 should be administered at 0, 2 months, and 6 months. For individuals 15 through 45 years of age, GARDASIL 9 is administered using a 3-dose schedule at 0, 2 months, and 6 months." ,
    description: "GARDASIL 9 is a vaccine indicated in females 9 through 45 years of age for the prevention of cervical, vulvar, vaginal, anal, oropharyngeal and other head and neck cancers caused by human papillomavirus (HPV) Types 16, 18, 31, 33, 45, 52, and 58. Protection against infections with the targeted HPV types has been found to last for at least 10 years with Gardasil, up to 11 years with Cervarix, and at least 6 years with Gardasil 9."
}, {
    user_id: 2,
    vaccineName:"YF (YF-Vax)",
    dateGiven: Date(3/29/2012),
    dose:"one of one",
    expiration: "None",
    manufacturer:"Sanofi Pasteur and the U.S. CDC", 
    medicalProfessional: "Terry Dubrow MD", 
    frequency: "Yellow fever vaccine is recommended for people who are 9 months old or older and who are traveling to or living in areas at risk for yellow fever virus in Africa and South America. For most people, a single dose of yellow fever vaccine provides long-lasting protection and a booster dose of the vaccine is not needed. However, travelers going to areas with ongoing outbreaks may consider getting a booster dose of yellow fever vaccine if it has been 10 years or more since they were last vaccinated.",
    description: "Yellow fever vaccine is a live-attenuated virus vaccine that has been available since the 1930s."
}, {
    user_id: 2,
    vaccineName:"Comirnaty COVID-19",
    dateGiven: Date(8/20/2022),
    dose:"two of two",
    expiration: "Unknow",
    manufacturer:"Pfizer-BioNTech SE", 
    medicalProfessional: "Drew Weissman MD", 
    frequency: "Third primary series dose for individuals 5 years of age and older who have been determined to have certain kinds of immunocompromise.",
    description: "Comirnaty is a monovalent COVID-19 vaccine. As COVID-19 vaccines are administered across world, our safety monitoring and durability is ongoing."
}, {
    user_id: 2,
    vaccineName:"HepA-HepB",
    dateGiven: Date(2/11/2021),
    dose:"one of two",
    expiration: Date(2/12/2022),
    manufacturer:"GlaxoSmithKline Inc", 
    medicalProfessional: "Deepak Chopra MD", 
    frequency: "There should be at least 4 weeks between doses 1 and 2, and at least 8 weeks between doses 2 and 3." ,
    description: "Hepatitis A and hepatitis B combination vaccine is used to prevent infection caused by the hepatitis A and hepatitis B virus. The vaccine works by causing your body to produce its own protection (antibodies) against the disease.  Studies indicate that immunologic memory remains intact for at least 30 years among healthy people who initiated hepatitis B vaccination at >6 months of age."
}, {
    user_id: 3,
    vaccineName:"HPV9",
    dateGiven: Date(9/9/1999),
    dose:"two of three",
    expiration: Date(11/9/1999),
    manufacturer:"Merck Sharp & Dohme Corp.", 
    medicalProfessional: "Lyn Christie MD", 
    frequency: "For the 3-dose schedule, GARDASIL 9 should be administered at 0, 2 months, and 6 months. For individuals 15 through 45 years of age, GARDASIL 9 is administered using a 3-dose schedule at 0, 2 months, and 6 months." ,
    description: "GARDASIL 9 is a vaccine indicated in females 9 through 45 years of age for the prevention of cervical, vulvar, vaginal, anal, oropharyngeal and other head and neck cancers caused by human papillomavirus (HPV) Types 16, 18, 31, 33, 45, 52, and 58. Protection against infections with the targeted HPV types has been found to last for at least 10 years with Gardasil, up to 11 years with Cervarix, and at least 6 years with Gardasil 9."
}, {
    user_id: 3,
    vaccineName:"MMR (M-M-R II)",
    dateGiven: Date(4/10/2014),
    dose:"One of two",
    expiration: Date(4/10/20), 
    manufacturer:"Merck and Co., Inc.", 
    medicalProfessional: "Jennifer Ashton MD", 
    frequency: "Children should get two doses of MMR vaccine, starting with the first dose at 12 to 15 months of age, and the second dose at 4 through 6 years of age. Teens and adults should also be up to date on their MMR vaccination." ,
    description: "The MMR vaccine is a vaccine against measles, mumps, and rubella, abbreviated as MMR."
}, {
    user_id: 3,
    vaccineName:"Comirnaty COVID-19",
    dateGiven: Date(8/20/2022),
    dose:"two of two",
    expiration: "Unknow",
    manufacturer:"Pfizer-BioNTech SE", 
    medicalProfessional: "Drew Weissman MD", 
    frequency: "Third primary series dose for individuals 5 years of age and older who have been determined to have certain kinds of immunocompromise.",
    description: "Comirnaty is a monovalent COVID-19 vaccine. As COVID-19 vaccines are administered across world, our safety monitoring and durability is ongoing."
} ,{
    user_id: 1,
    vaccineName:"Tdap",
    dateGiven: Date(1/11/2022),
    dose:"One of one",
    expiration: Date(1/11/2032), 
    manufacturer:"GlaxoSmithKline Inc", 
    medicalProfessional: "Andrew Baldwin MD", 
    frequency: "Give adults who have never received Tdap a single dose of Tdap. This can be given at any time, regardless of when they last got Td. This should be followed by either a Td or Tdap booster every 10 years." ,
    description: "This vaccine is used to keep up protection (immunity) against diphtheria, tetanus (lockjaw) and pertussis (whooping cough) in children and adults who have been vaccinated for these diseases in the past. It may also be given during the third trimester of pregnancy to help prevent pertussis in the newborn baby."
},]

let users = [
    {name: "Marki", 
    email: "marki@gmail.com",
    password: 123
    }, 
    {name: "Agnes", 
    email: "agnes@gmail.com",
    password: 123
    },
    {name: "Marina", 
    email: "marina@gmail.com",
    password: 123
    },
    {name: "Sachi", 
    email: "sachi@gmail.com",
    password: 123
    },
    {name: "Lais", 
    email: "lais@gmail.com",
    password: 123
    }

]

 