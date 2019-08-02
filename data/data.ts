interface Person {
  name: string;
  age: string;
  hometown: string;
  occupation: string;
}

type Notes = 'quit' | 'disqualified'|'removed'|'eliminated Week 1 then returned and re-eliminated';

interface Contestant extends Person {
  status: Status;
  notes?: Notes;
}

type Status =
  "unknown" |
  "Winner" |
  "Winner but then broken up with" |
  "Runner-Up but later married" |
  "Runner-Up" |
  "Week 1" |
  "Week 2" |
  "Week 3" |
  "Week 4" |
  "Week 5" |
  "Week 6" |
  "Week 7" |
  "Week 8" |
  "Week 9" |
  "Week 10" |
  "Week 11" |
  "Week 12" |
  "Week 1 (quit)" |
  "Week 2 (quit)" |
  "Week 3 (quit)" |
  "Week 4 (quit)" |
  "Week 5 (quit)" |
  "Week 6 (quit)" |
  "Week 7 (quit)" |
  "Week 8 (quit)" |
  "Week 9 (quit)" |
  "Week 10 (quit)" |
  "Week 11 (quit)" |
  "Week 12 (quit)";

interface Eligible extends Person {
  status: string;
}

interface Season {
  eligible: Eligible;
  contestants: Array<Contestant>;
}

interface Show {
  "1"?: Season;
  "2"?: Season;
  "3"?: Season;
  "4"?: Season;
  "5"?: Season;
  "6"?: Season;
  "7"?: Season;
  "8"?: Season;
  "9"?: Season;
  "10"?: Season;
  "11"?: Season;
  "12"?: Season;
  "13"?: Season;
  "14"?: Season;
  "15"?: Season;
  "16"?: Season;
  "17"?: Season;
  "18"?: Season;
  "19"?: Season;
  "20"?: Season;
  "21"?: Season;
  "22"?: Season;
  "23"?: Season;
  "24"?: Season;
}

interface BachelorDataInterface {
    bachelor: Show;
}

interface BacheloretteDataInterface {
    bachelorette: Show;
}

interface DataInterface {
  bachelor: Show;
  bachelorette: Show;
}

const bachelorData: BachelorDataInterface = {
    "bachelor": {
        "1": {
            "eligible": {
                "name": "Alex Michel",
                "age": "32",
                "hometown": "Charlottesville, Virginia",
                "occupation": "management consultant",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Amanda Marsh",
                    "age": "23",
                    "hometown": "Chanute, Kansas",
                    "occupation": "Event Planner",
                    "status": "Winner"
                },
                {
                    "name": "Trista Rehn",
                    "age": "29",
                    "hometown": "Miami, Florida",
                    "occupation": "Miami Heat Dancer",
                    "status": "Runner-Up"
                },
                {
                    "name": "Shannon Oliver",
                    "age": "24",
                    "hometown": "Dallas, Texas",
                    "occupation": "Financial Management Consultant",
                    "status": "Week 5"
                },
                {
                    "name": "Kim",
                    "age": "24",
                    "hometown": "Tempe, Arizona",
                    "occupation": "Nanny",
                    "status": "Week 4"
                },
                {
                    "name": "Cathy Grimes",
                    "age": "22",
                    "hometown": "Terra Haute, Indiana",
                    "occupation": "Graduate Student",
                    "status": "Week 3"
                },
                {
                    "name": "Christina",
                    "age": "28",
                    "hometown": "Bonita, California",
                    "occupation": "Attorney",
                    "status": "Week 3"
                },
                {
                    "name": "LaNease Adams",
                    "hometown": "Los Angeles, California",
                    "occupation": "Actress",
                    "status": "Week 3",
                    "age": "23"
                },
                {
                    "name": "Rhonda",
                    "age": "28",
                    "hometown": "Woodward, Oklahoma",
                    "occupation": "Commercial Real Estate agent",
                    "status": "Week 3"
                },
                {
                    "name": "Alexa",
                    "age": "27",
                    "hometown": "Beverly Hills, California",
                    "occupation": "Special Ed. Teacher",
                    "status": "Week 2"
                },
                {
                    "name": "Amy",
                    "age": "28",
                    "hometown": "New York, New York",
                    "occupation": "Production Coordinator",
                    "status": "Week 2"
                },
                {
                    "name": "Angela",
                    "age": "25",
                    "hometown": "Avondale, Arizona",
                    "occupation": "Hooters Waitress",
                    "status": "Week 2"
                },
                {
                    "name": "Angelique",
                    "age": "27",
                    "hometown": "Burbank, California",
                    "occupation": "Actress",
                    "status": "Week 2"
                },
                {
                    "name": "Katie",
                    "age": "23",
                    "hometown": "Malden, Massachusetts",
                    "occupation": "Power Tool Sales Rep.",
                    "status": "Week 2"
                },
                {
                    "name": "Melissa",
                    "age": "25",
                    "hometown": "Tempe, Arizona",
                    "occupation": "Photographer",
                    "status": "Week 2"
                },
                {
                    "name": "Tina",
                    "age": "27",
                    "hometown": "Plano, Texas",
                    "occupation": "Graduate Student",
                    "status": "Week 2"
                },
                {
                    "name": "Amber",
                    "age": "29",
                    "hometown": "Los Angeles, California",
                    "occupation": "Business Development Director",
                    "status": "Week 1"
                },
                {
                    "name": "Daniela",
                    "age": "30",
                    "hometown": "Seattle, Washington",
                    "occupation": "Neuropsychologist",
                    "status": "Week 1"
                },
                {
                    "name": "Denise",
                    "age": "30",
                    "hometown": "Honolulu, Hawaii",
                    "occupation": "Doctor",
                    "status": "Week 1"
                },
                {
                    "name": "Jackie",
                    "age": "22",
                    "hometown": "Pittsburgh, Pennsylvania",
                    "occupation": "Bar Manager",
                    "status": "Week 1"
                },
                {
                    "name": "Jill",
                    "age": "31",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Retail Manager",
                    "status": "Week 1"
                },
                {
                    "name": "Kristina",
                    "age": "27",
                    "hometown": "Los Angeles, California",
                    "occupation": "Advertising Executive",
                    "status": "Week 1"
                },
                {
                    "name": "Lisa",
                    "age": "29",
                    "hometown": "Dallas, Texas",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Paula",
                    "age": "24",
                    "hometown": "Swansea, Massachusetts",
                    "occupation": "Insurance Representative",
                    "status": "Week 1"
                },
                {
                    "name": "Rachel",
                    "age": "29",
                    "hometown": "Eastchester, New York",
                    "occupation": "6th Grade Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Wendi",
                    "age": "26",
                    "hometown": "Dallas, Texas",
                    "occupation": "Technology Specialist",
                    "status": "Week 1"
                }
            ]
        },
        "2": {
            "eligible": {
                "name": "Aaron Grant Buerge",
                "age": "28",
                "hometown": "Butler, Missouri",
                "occupation": "banker",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Helene Eksterowicz",
                    "age": "27",
                    "hometown": "Gloucester, New Jersey",
                    "occupation": "School Psychologist",
                    "status": "Winner"
                },
                {
                    "name": "Brooke Smith",
                    "age": "22",
                    "hometown": "Albertville, Alabama",
                    "occupation": "College Student",
                    "status": "Runner-Up"
                },
                {
                    "name": "Gwen Gioia",
                    "age": "31",
                    "hometown": "Philadelphia, Pennsylvania",
                    "occupation": "Executive Recruiter",
                    "status": "Week 6"
                },
                {
                    "name": "Angela",
                    "age": "27",
                    "hometown": "Kansas City, Missouri",
                    "occupation": "Registered Nurse",
                    "status": "Week 5"
                },
                {
                    "name": "Hayley",
                    "age": "28",
                    "hometown": "Lake Oswego, Oregon",
                    "occupation": "Retail Manager",
                    "status": "Week 4"
                },
                {
                    "name": "Heather Crawford",
                    "age": "30",
                    "hometown": "Dallas, Texas",
                    "occupation": "Flight Attendant",
                    "status": "Week 4"
                },
                {
                    "name": "Christi",
                    "age": "23",
                    "hometown": "Boise, Idaho",
                    "occupation": "Assistant Financial Advisor",
                    "status": "Week 3"
                },
                {
                    "name": "Heather",
                    "age": "24",
                    "hometown": "Walnut Creek, California",
                    "occupation": "Marriage Therapy Trainee",
                    "status": "Week 3"
                },
                {
                    "name": "Kyla",
                    "age": "22",
                    "hometown": "Midvale, Utah",
                    "occupation": "Airline Supervisor",
                    "status": "Week 3"
                },
                {
                    "name": "Shannon",
                    "age": "26",
                    "hometown": "Long Island, New York",
                    "occupation": "Graphic Artist",
                    "status": "Week 3"
                },
                {
                    "name": "Dana",
                    "age": "24",
                    "hometown": "Beverly Hills, California",
                    "occupation": "Radio Sales",
                    "status": "Week 2"
                },
                {
                    "name": "Erin",
                    "age": "25",
                    "hometown": "Westchester, Pennsylvania",
                    "occupation": "Publications Quality Control",
                    "status": "Week 2"
                },
                {
                    "name": "Suzanne",
                    "age": "33",
                    "hometown": "Redondo Beach, California",
                    "occupation": "Flight Attendant",
                    "status": "Week 2"
                },
                {
                    "name": "Frances",
                    "age": "30",
                    "hometown": "San Francisco, California",
                    "occupation": "Strategic Planning Analyst",
                    "status": "Week 2",
                    "notes": "quit"
                },
                {
                    "name": "Anindita",
                    "age": "27",
                    "hometown": "New York, New York",
                    "occupation": "Attorney",
                    "status": "Week 2",
                    "notes": "quit"
                },
                {
                    "name": "Amber",
                    "age": "26",
                    "hometown": "Chapel Hill, North Carolina",
                    "occupation": "Psychologist",
                    "status": "Week 1"
                },
                {
                    "name": "Camille",
                    "age": "29",
                    "hometown": "Los Angeles, California",
                    "occupation": "Actress",
                    "status": "Week 1"
                },
                {
                    "name": "Cari",
                    "age": "29",
                    "hometown": "Granite City, Illinois",
                    "occupation": "3rd Grade Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Christy",
                    "age": "24",
                    "hometown": "Avondale, Arizona",
                    "occupation": "Radiological Technologist",
                    "status": "Week 1"
                },
                {
                    "name": "Erin",
                    "age": "24",
                    "hometown": "Houston, Texas",
                    "occupation": "Interior Designer",
                    "status": "Week 1"
                },
                {
                    "name": "Fatima",
                    "age": "22",
                    "hometown": "Long Beach, California",
                    "occupation": "College Student",
                    "status": "Week 1"
                },
                {
                    "name": "Liangy",
                    "age": "30",
                    "hometown": "Coral Gables, Florida",
                    "occupation": "Paralegal",
                    "status": "Week 1"
                },
                {
                    "name": "Lori",
                    "age": "26",
                    "hometown": "Dallas, Texas",
                    "occupation": "Former NBA Cheerleader",
                    "status": "Week 1"
                },
                {
                    "name": "Merrilee",
                    "age": "28",
                    "hometown": "Forked River, New Jersey",
                    "occupation": "1st Grade Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Suzi",
                    "age": "28",
                    "hometown": "Richmond, Virginia",
                    "occupation": "Communications Specialist",
                    "status": "Week 1"
                }
            ]
        },
        "3": {
            "eligible": {
                "name": "Andrew Boulton Firestone",
                "age": "28",
                "hometown": "Santa Barbara, California",
                "occupation": "sales manager",
                "status": "broke up"
            },
            "contestants": []
        },
        "4": {
            "eligible": {
                "name": "Robert 'Bob' Guiney",
                "age": "32",
                "hometown": "Riverview, Michigan",
                "occupation": "creator of a mortgage company",
                "status": "broke up"
            },
            "contestants": []
        },
        "5": {
            "eligible": {
                "name": "Jesse Palmer",
                "age": "26",
                "hometown": "Toronto, Ontario",
                "occupation": "college football player",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Jessica Bowlin",
                    "age": "22",
                    "hometown": "Huntington Beach, California",
                    "occupation": "Student",
                    "status": "Winner"
                },
                {
                    "name": "Tara Huckeby",
                    "age": "23",
                    "hometown": "Shawnee, Oklahoma",
                    "occupation": "General contractor",
                    "status": "Week 7"
                },
                {
                    "name": "Mandy Jaye Jeffreys",
                    "age": "26",
                    "hometown": "Midland, Texas",
                    "occupation": "Designer for an architect firm",
                    "status": "Week 6"
                },
                {
                    "name": "Trish Schneider",
                    "age": "28",
                    "hometown": "Atlanta, Georgia",
                    "occupation": "Model",
                    "status": "Week 5"
                },
                {
                    "name": "Suzie Williams",
                    "age": "23",
                    "hometown": "Ann Arbor, Michigan",
                    "occupation": "Prosthetic technician",
                    "status": "Week 4"
                },
                {
                    "name": "Karen Lindsay",
                    "age": "28",
                    "hometown": "Pleasant Grove, Utah",
                    "occupation": "Pharmaceutical sales",
                    "status": "Week 4"
                },
                {
                    "name": "Jessica Holcomb",
                    "age": "25",
                    "hometown": "Pearsall, Texas",
                    "occupation": "Attorney",
                    "status": "Week 3"
                },
                {
                    "name": "Julie Durda",
                    "age": "24",
                    "hometown": "Sacramento, California",
                    "occupation": "Professional Cheerleader",
                    "status": "Week 3"
                },
                {
                    "name": "Jenny De Schiralli",
                    "age": "26",
                    "hometown": "Carrboro, North Carolina",
                    "occupation": "Swim instructor/nanny/personal trainer",
                    "status": "Week 3"
                },
                {
                    "name": "Katie Gehart",
                    "age": "22",
                    "hometown": "Scottsdale, Arizona",
                    "occupation": "LASIK Eye and Skin Center manager",
                    "status": "Week 3"
                },
                {
                    "name": "Jean-Marie Callahan",
                    "age": "26",
                    "hometown": "Gibson, North Carolina",
                    "occupation": "Hair stylist",
                    "status": "Week 2"
                },
                {
                    "name": "Debbie Merkett",
                    "age": "27",
                    "hometown": "Pinetops, North Carolina",
                    "occupation": "Massage therapist/bartender",
                    "status": "Week 2"
                },
                {
                    "name": "Anne-Catherine Labbé",
                    "age": "27",
                    "hometown": "Quebec City, Quebec",
                    "occupation": "Model/make-up artist",
                    "status": "Week 2"
                },
                {
                    "name": "Amber LaRoux",
                    "age": "27",
                    "hometown": "Sunriver, Oregon",
                    "occupation": "Consultant",
                    "status": "Week 2"
                },
                {
                    "name": "Mandy Clemens",
                    "age": "25",
                    "hometown": "San Diego, California",
                    "occupation": "Professional soccer player",
                    "status": "Week 2"
                },
                {
                    "name": "Kristy Romero",
                    "age": "25",
                    "hometown": "Dearborn, Michigan",
                    "occupation": "Student",
                    "status": "Week 2"
                },
                {
                    "name": "Celeste Creel",
                    "age": "24",
                    "hometown": "Ithaca, New York",
                    "occupation": "Model/executive assistant",
                    "status": "Week 2"
                },
                {
                    "name": "Jenny Matthews",
                    "age": "24",
                    "hometown": "Canton, Michigan",
                    "occupation": "Retail manager",
                    "status": "Week 2"
                },
                {
                    "name": "Dolores Farburg",
                    "age": "26",
                    "hometown": "Madison, New Jersey",
                    "occupation": "Account manager",
                    "status": "Week 1"
                },
                {
                    "name": "Francine Jones",
                    "age": "25",
                    "hometown": "Houston, Texas",
                    "occupation": "Retail manager",
                    "status": "Week 1"
                },
                {
                    "name": "DeShaun Warner",
                    "age": "25",
                    "hometown": "Phillipsburg, New Jersey",
                    "occupation": "Account manager/sales",
                    "status": "Week 1"
                },
                {
                    "name": "Jessica Kyron",
                    "age": "21",
                    "hometown": "Cincinnati, Ohio",
                    "occupation": "Student",
                    "status": "Week 1"
                },
                {
                    "name": "Holly Reeder",
                    "age": "26",
                    "hometown": "Tulsa, Oklahoma",
                    "occupation": "Bank representative",
                    "status": "Week 1"
                },
                {
                    "name": "Rachel Clementi",
                    "age": "26",
                    "hometown": "Buffalo, New York",
                    "occupation": "Fashion public relations manager",
                    "status": "Week 1"
                },
                {
                    "name": "Kristin Clearwater",
                    "age": "25",
                    "hometown": "Sausalito, California",
                    "occupation": "Singer",
                    "status": "Week 1"
                }
            ]
        },
        "6": {
            "eligible": {
                "name": "Byron Velvick",
                "age": "40",
                "hometown": "Downey, California",
                "occupation": "professional bass fisherman",
                "status": "broke up"
            },
            "contestants": []
        },
        "7": {
            "eligible": {
                "name": "Charles 'Charlie' O'Connell",
                "age": "31",
                "hometown": "New York City, New York",
                "occupation": "actor",
                "status": "broke up, got back together, broke up"
            },
            "contestants": []
        },
        "8": {
            "eligible": {
                "name": "Travis Lane Stork",
                "age": "32",
                "hometown": "Fort Collins, Colorado",
                "occupation": "doctor",
                "status": "broke up"
            },
            "contestants": []
        },
        "9": {
            "eligible": {
                "name": "Prince Lorenzo Borghese",
                "age": "34",
                "hometown": "Milan, Italy",
                "occupation": "cosmetics entrepreneur",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Jennifer Wilson",
                    "age": "24",
                    "hometown": "Pembroke Pines, Florida",
                    "occupation": "Teacher",
                    "status": "Winner"
                },
                {
                    "name": "Sadie Murray",
                    "age": "23",
                    "hometown": "Carlsbad, California",
                    "occupation": "Publicist",
                    "status": "Week 7"
                },
                {
                    "name": "Lisa Blank",
                    "age": "25",
                    "hometown": "Portland, Oregon",
                    "occupation": "Marketing manager",
                    "status": "Week 6"
                },
                {
                    "name": "Agnese Polliza",
                    "age": "24",
                    "hometown": "Venice, Italy",
                    "occupation": "Student",
                    "status": "Week 5"
                },
                {
                    "name": "Jeanette Pawula",
                    "age": "23",
                    "hometown": "Bloomingdale, Illinois",
                    "occupation": "Teacher",
                    "status": "Week 4"
                },
                {
                    "name": "Desiree Valentin",
                    "age": "22",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Realtor",
                    "status": "Week 4"
                },
                {
                    "name": "Jami Matzke",
                    "age": "27",
                    "hometown": "Galveston, Texas",
                    "occupation": "Event planner",
                    "status": "Week 3"
                },
                {
                    "name": "Gina Clark",
                    "age": "28",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Ultrasound technician",
                    "status": "Week 3"
                },
                {
                    "name": "Erica Rose",
                    "age": "23",
                    "hometown": "Houston, Texas",
                    "occupation": "Socialite",
                    "status": "Week 3"
                },
                {
                    "name": "Sarah Schnare",
                    "age": "30",
                    "hometown": "Nelson, British Columbia",
                    "occupation": "Journalist",
                    "status": "Week 2"
                },
                {
                    "name": "Kim Jackson",
                    "age": "27",
                    "hometown": "Newport Beach, California",
                    "occupation": "Interior designer",
                    "status": "Week 2"
                },
                {
                    "name": "Ellen DeMaio",
                    "age": "30",
                    "hometown": "New Haven, Connecticut",
                    "occupation": "Realtor",
                    "status": "Week 2"
                },
                {
                    "name": "Tara Durr",
                    "age": "24",
                    "hometown": "St. Augustine, Florida",
                    "occupation": "Realtor",
                    "status": "Week 1"
                },
                {
                    "name": "Rosella Fratto",
                    "age": "27",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Make-up artist",
                    "status": "Week 1"
                },
                {
                    "name": "Rita Ghazal",
                    "age": "29",
                    "hometown": "Richmond, Virginia",
                    "occupation": "Policy advisor",
                    "status": "Week 1"
                },
                {
                    "name": "Renee Snell",
                    "age": "30",
                    "hometown": "Baltimore, Maryland",
                    "occupation": "Broadcast marketer",
                    "status": "Week 1"
                },
                {
                    "name": "Meri Barr",
                    "age": "27",
                    "hometown": "Biloxi, Mississippi",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Laura Morgan",
                    "age": "29",
                    "hometown": "San Diego, California",
                    "occupation": "Dolphin trainer",
                    "status": "Week 1"
                },
                {
                    "name": "Jessica Horner",
                    "age": "25",
                    "hometown": "Charlotte, North Carolina",
                    "occupation": "Assistant buyer",
                    "status": "Week 1"
                },
                {
                    "name": "Heather Sneed",
                    "age": "34",
                    "hometown": "Aliquippa, Pennsylvania",
                    "occupation": "Registered nurse",
                    "status": "Week 1"
                },
                {
                    "name": "Elyse Greenebaum",
                    "age": "27",
                    "hometown": "New York, New York",
                    "occupation": "Physician",
                    "status": "Week 1"
                },
                {
                    "name": "Cosetta Blanca",
                    "age": "",
                    "hometown": "Italy",
                    "occupation": "Dancer",
                    "status": "Week 1"
                },
                {
                    "name": "Claudia Gismondi",
                    "age": "22",
                    "hometown": "Boca Raton, Florida",
                    "occupation": "Restaurateur",
                    "status": "Week 1"
                },
                {
                    "name": "Carissa Ilburg",
                    "age": "25",
                    "hometown": "Cattaraugus, New York",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Brit Keeder",
                    "age": "28",
                    "hometown": "Columbus, Ohio",
                    "occupation": "Beer chemist",
                    "status": "Week 1"
                },
                {
                    "name": "Andrea Shirley",
                    "age": "28",
                    "hometown": "Cincinnati, Ohio",
                    "occupation": "Hotel concierge",
                    "status": "Week 1"
                },
                {
                    "name": "April Jacobs",
                    "age": "23",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Model",
                    "status": "Week 1"
                }
            ]
        },
        "10": {
            "eligible": {
                "name": "Andy Baldwin",
                "age": "30",
                "hometown": "Lancaster, Pennsylvania",
                "occupation": "physician and sportsman",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Tessa Horst",
                    "age": "26",
                    "hometown": "San Francisco, California",
                    "occupation": "Social Worker",
                    "status": "Winner"
                },
                {
                    "name": "Bevin Nicole Powers",
                    "age": "28",
                    "hometown": "Palo Alto, California",
                    "occupation": "Assistant",
                    "status": "Week 8"
                },
                {
                    "name": "Danielle Imwalle",
                    "age": "25",
                    "hometown": "Bethel, Connecticut",
                    "occupation": "Graphic Designer",
                    "status": "Week 7"
                },
                {
                    "name": "Amber Alchalabi",
                    "age": "23",
                    "hometown": "Sugar Land, Texas",
                    "occupation": "Teacher",
                    "status": "Week 6"
                },
                {
                    "name": "Stephanie Wilhite",
                    "age": "23",
                    "hometown": "Overland Park, Kansas",
                    "occupation": "Project Manager",
                    "status": "Week 5"
                },
                {
                    "name": "Tina Wu",
                    "age": "26",
                    "hometown": "Los Angeles, California",
                    "occupation": "Medical student",
                    "status": "Week 5"
                },
                {
                    "name": "Kate Brockhouse",
                    "age": "24",
                    "hometown": "Charleston, South Carolina",
                    "occupation": "Boutique owner",
                    "status": "Week 4"
                },
                {
                    "name": "Nicole Clary",
                    "age": "26",
                    "hometown": "Charleston, South Carolina",
                    "occupation": "Sales Manager",
                    "status": "Week 4"
                },
                {
                    "name": "Stephanie Tipper",
                    "age": "27",
                    "hometown": "Folly Beach, South Carolina",
                    "occupation": "Organ donor coordinator",
                    "status": "Week 4"
                },
                {
                    "name": "Amanda Hackney",
                    "age": "26",
                    "hometown": "Dallas, Texas",
                    "occupation": "Financial analyst",
                    "status": "Week 3"
                },
                {
                    "name": "Erin Parker",
                    "age": "24",
                    "hometown": "Logansport, Louisiana",
                    "occupation": "Financial analyst",
                    "status": "Week 3"
                },
                {
                    "name": "Peyton Wright",
                    "age": "24",
                    "hometown": "Dallas, Texas",
                    "occupation": "Sorority recruiter",
                    "status": "Week 3"
                },
                {
                    "name": "Alexis Young",
                    "age": "26",
                    "hometown": "Southlake, Texas",
                    "occupation": "Attorney",
                    "status": "Week 2"
                },
                {
                    "name": "Susan Anderson",
                    "age": "23",
                    "hometown": "The Woodlands, Texas",
                    "occupation": "Boutique manager",
                    "status": "Week 2"
                },
                {
                    "name": "Tiffany Warren",
                    "age": "28",
                    "hometown": "Boston, Massachusetts",
                    "occupation": "Medical equipment sales rep",
                    "status": "Week 2"
                },
                {
                    "name": "Blakeney Rowe",
                    "age": "29",
                    "hometown": "Birmingham, Alabama",
                    "occupation": "Radio sales",
                    "status": "Week 1"
                },
                {
                    "name": "Candace DeCost",
                    "age": "23",
                    "hometown": "Hilton Head Island, South Carolina",
                    "occupation": "Waitress",
                    "status": "Week 1"
                },
                {
                    "name": "Catherine Warren",
                    "age": "23",
                    "hometown": "Lake Forest, Illinois",
                    "occupation": "Former Miss Illinois",
                    "status": "Week 1"
                },
                {
                    "name": "Danielle Vallis",
                    "age": "26",
                    "hometown": "Bronx, New York",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Jackie Topelli",
                    "age": "23",
                    "hometown": "Minneapolis, Minnesota",
                    "occupation": "Executive coordinator",
                    "status": "Week 1"
                },
                {
                    "name": "Jeanette Alvarez",
                    "age": "27",
                    "hometown": "Tampa, Florida",
                    "occupation": "Health care manager",
                    "status": "Week 1"
                },
                {
                    "name": "Jessica Devallo",
                    "age": "32",
                    "hometown": "New York, New York",
                    "occupation": "Hedge fund analyst",
                    "status": "Week 1"
                },
                {
                    "name": "Linda Malek",
                    "age": "33",
                    "hometown": "Cuyahoga Falls, Ohio",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Lindsay Smith",
                    "age": "22",
                    "hometown": "Lawrence, Kansas",
                    "occupation": "Student",
                    "status": "Week 1"
                },
                {
                    "name": "Tiffany Forester",
                    "age": "27",
                    "hometown": "St. Louis Park, Minnesota",
                    "occupation": "Real estate sales/development",
                    "status": "Week 1"
                }
            ]
        },
        "11": {
            "eligible": {
                "name": "Stephen Bradley 'Brad' Womack",
                "age": "35",
                "hometown": "Austin, Texas",
                "occupation": "winemaker",
                "status": "there was no winner he rejected everyone"
            },
            "contestants": [
                {
                    "name": "Deanna Pappas",
                    "age": "25",
                    "hometown": "Newnan, Georgia",
                    "occupation": "Realtor",
                    "status": "Week 8"
                },
                {
                    "name": "Jenni Croft",
                    "age": "27",
                    "hometown": "Wichita, Kansas",
                    "occupation": "Phoenix Suns Cheerleader",
                    "status": "Week 8"
                },
                {
                    "name": "Bettina Bell",
                    "age": "27",
                    "hometown": "Washington, D.C.",
                    "occupation": "Realtor",
                    "status": "Week 7"
                },
                {
                    "name": "Sheena Stewart",
                    "age": "23",
                    "hometown": "Walnut Creek, California",
                    "occupation": "Internet marketing executive",
                    "status": "Week 6"
                },
                {
                    "name": "Hillary Reisinger",
                    "age": "27",
                    "hometown": "Philadelphia, Pennsylvania",
                    "occupation": "Registered nurse",
                    "status": "Week 5"
                },
                {
                    "name": "Kristy Katzmann",
                    "age": "29",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Acupuncturist",
                    "status": "Week 5"
                },
                {
                    "name": "Estefania 'Stephy' Kootz",
                    "age": "26",
                    "hometown": "Atlanta, Georgia",
                    "occupation": "Executive assistant",
                    "status": "Week 4"
                },
                {
                    "name": "Jade Beazley",
                    "age": "24",
                    "hometown": "Nashville, Tennessee",
                    "occupation": "Boutique sales worker",
                    "status": "Week 4"
                },
                {
                    "name": "McCarten Delaney",
                    "age": "26",
                    "hometown": "San Diego, California",
                    "occupation": "Account manager",
                    "status": "Week 4"
                },
                {
                    "name": "Lindsey Hawkins",
                    "age": "25",
                    "hometown": "Livonia, Michigan",
                    "occupation": "Model",
                    "status": "Week 3"
                },
                {
                    "name": "Sarah Newlon",
                    "age": "23",
                    "hometown": "O'Fallon, Illinois",
                    "occupation": "Bar manager",
                    "status": "Week 3"
                },
                {
                    "name": "Solisa Shoop",
                    "age": "25",
                    "hometown": "Georgetown, Texas",
                    "occupation": "Esthetician",
                    "status": "Week 3"
                },
                {
                    "name": "Michele Leavy",
                    "age": "30",
                    "hometown": "South Brunswick, New Jersey",
                    "occupation": "Realtor",
                    "status": "Week 2"
                },
                {
                    "name": "Mallory Simons",
                    "age": "24",
                    "hometown": "Honolulu, Hawaii",
                    "occupation": "Nanny",
                    "status": "Week 2"
                },
                {
                    "name": "Erin Gardner",
                    "age": "25",
                    "hometown": "Tampa, Florida",
                    "occupation": "Publishing sales executive",
                    "status": "Week 2"
                },
                {
                    "name": "Jessica Kiss",
                    "age": "27",
                    "hometown": "Lady Lake, Florida",
                    "occupation": "News anchor",
                    "status": "Week 1"
                },
                {
                    "name": "Juli Gilliam",
                    "age": "24",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Law student",
                    "status": "Week 1"
                },
                {
                    "name": "Kim Orville",
                    "age": "31",
                    "hometown": "Woodbridge, Connecticut",
                    "occupation": "Realtor",
                    "status": "Week 1"
                },
                {
                    "name": "Lori Langley",
                    "age": "33",
                    "hometown": "Annapolis, Maryland",
                    "occupation": "Biology teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Melissa Buschel",
                    "age": "28",
                    "hometown": "Westchester, New York",
                    "occupation": "Event planner",
                    "status": "Week 1"
                },
                {
                    "name": "Morgan Becker",
                    "age": "24",
                    "hometown": "Tempe, Arizona",
                    "occupation": "Graduate student",
                    "status": "Week 1"
                },
                {
                    "name": "Natalie Penner",
                    "age": "25",
                    "hometown": "Duncanville, Texas",
                    "occupation": "Law student",
                    "status": "Week 1"
                },
                {
                    "name": "Regina Doringa",
                    "age": "31",
                    "hometown": "San Diego, California",
                    "occupation": "Account representative",
                    "status": "Week 1"
                },
                {
                    "name": "Tauni Nessler ",
                    "age": "31",
                    "hometown": "St. Louis Park, Minnesota",
                    "occupation": "Emergency room nurse",
                    "status": "Week 1"
                },
                {
                    "name": "Susan Stein",
                    "age": "35",
                    "hometown": "St. Charles, Illinois",
                    "occupation": "Project analyst",
                    "status": "Week 1"
                }
            ]
        },
        "12": {
            "eligible": {
                "name": "Matt Grant",
                "age": "28",
                "hometown": "London, United Kingdom",
                "occupation": "financier and business development manager",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Shayne Lamas",
                    "age": "22",
                    "hometown": "Malibu, California",
                    "occupation": "Actress",
                    "status": "Winner"
                },
                {
                    "name": "Chelsea Wanstrath",
                    "age": "25",
                    "hometown": "Durango, Colorado",
                    "occupation": "Pharmaceutical sales rep.",
                    "status": "Week 8"
                },
                {
                    "name": "Amanda Rantuccio",
                    "age": "27",
                    "hometown": "Niceville, Florida",
                    "occupation": "Account Executive",
                    "status": "Week 7"
                },
                {
                    "name": "Noelle Drake",
                    "age": "26",
                    "hometown": "Loveland, Colorado",
                    "occupation": "Photographer",
                    "status": "Week 6"
                },
                {
                    "name": "Marshana Ritchie",
                    "age": "27",
                    "hometown": "Brooklyn, New York",
                    "occupation": "Fashion designer",
                    "status": "Week 5"
                },
                {
                    "name": "Robin Canfield",
                    "age": "22",
                    "hometown": "Holland, Michigan",
                    "occupation": "Advertising coordinator",
                    "status": "Week 5"
                },
                {
                    "name": "Ashlee Williss",
                    "age": "22",
                    "hometown": "Jacksonville Beach, Florida",
                    "occupation": "Singer-songwriter",
                    "status": "Week 4"
                },
                {
                    "name": "Kelly",
                    "age": "25",
                    "hometown": "Hollywood, California",
                    "occupation": "Medical sales rep.",
                    "status": "Week 4"
                },
                {
                    "name": "Holly Durst",
                    "age": "24",
                    "hometown": "Suffield, Ohio",
                    "occupation": "Children's book author",
                    "status": "Week 4"
                },
                {
                    "name": "Erin S.",
                    "age": "33",
                    "hometown": "Venice, California",
                    "occupation": "Hot-dog vendor",
                    "status": "Week 3"
                },
                {
                    "name": "Amy",
                    "age": "22",
                    "hometown": "Stockton, California",
                    "occupation": "Nanny",
                    "status": "Week 3"
                },
                {
                    "name": "Kristine Heffelfinger",
                    "age": "33",
                    "hometown": "Dillsburg, Pennsylvania",
                    "occupation": "Personal trainer",
                    "status": "Week 3"
                },
                {
                    "name": "Michelle",
                    "age": "28",
                    "hometown": "Syracuse, New York",
                    "occupation": "Administrative assistant",
                    "status": "Week 2"
                },
                {
                    "name": "Carri Perrier",
                    "age": "25",
                    "hometown": "Oklahoma City, Oklahoma",
                    "occupation": "Church marketing rep.",
                    "status": "Week 2"
                },
                {
                    "name": "Erin Harper",
                    "age": "25",
                    "hometown": "Seattle, Washington",
                    "occupation": "Event planner",
                    "status": "Week 2"
                },
                {
                    "name": "Alyssa",
                    "age": "24",
                    "hometown": "Boise, Idaho",
                    "occupation": "Biology student",
                    "status": "Week 1"
                },
                {
                    "name": "Amanda Petterman",
                    "age": "26",
                    "hometown": "LaFollette, Tennessee",
                    "occupation": "Law student",
                    "status": "Week 1"
                },
                {
                    "name": "Denise",
                    "age": "30",
                    "hometown": "Washington, D.C",
                    "occupation": "Attorney and former White House aide",
                    "status": "Week 1"
                },
                {
                    "name": "Devon",
                    "age": "24",
                    "hometown": "Austin, Texas",
                    "occupation": "Makeup artist",
                    "status": "Week 1"
                },
                {
                    "name": "Lesley Geyer",
                    "age": "23",
                    "hometown": "Tampa, Florida",
                    "occupation": "Youth minister",
                    "status": "Week 1"
                },
                {
                    "name": "Michele",
                    "age": "33",
                    "hometown": "Laguna Niguel, California",
                    "occupation": "Interior designer",
                    "status": "Week 1"
                },
                {
                    "name": "Rebecca",
                    "age": "30",
                    "hometown": "Alamo, California",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Stacey Elza",
                    "age": "26",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Graduate student",
                    "status": "Week 1"
                },
                {
                    "name": "Tamara",
                    "age": "23",
                    "hometown": "Beverly Hills, California",
                    "occupation": "Cocktail waitress",
                    "status": "Week 1"
                },
                {
                    "name": "Tiffany",
                    "age": "33",
                    "hometown": "San Francisco, California",
                    "occupation": "Real estate marketing rep.",
                    "status": "Week 1"
                }
            ]
        },
        "13": {
            "eligible": {
                "name": "Jason Mesnick",
                "age": "33",
                "hometown": "Kirkland, Washington",
                "occupation": "account executive",
                "status": "broke up - still married to runner up"
            },
            "contestants": [
                {
                    "name": "Melissa Rycroft",
                    "age": "25",
                    "hometown": "Dallas, Texas",
                    "occupation": "Sales Representative",
                    "status": "Winner"
                },
                {
                    "name": "Molly Malaney",
                    "age": "23",
                    "hometown": "Grand Rapids, Michigan",
                    "occupation": "Department Store Buyer",
                    "status": "Runner-Up"
                },
                {
                    "name": "Jillian Harris",
                    "age": "29",
                    "hometown": "Peace River, Alberta",
                    "occupation": "Interior Designer",
                    "status": "Week 7"
                },
                {
                    "name": "Naomi Rose Crespo",
                    "age": "24",
                    "hometown": "Carlsbad, California",
                    "occupation": "Flight Attendant",
                    "status": "Week 6"
                },
                {
                    "name": "Stephanie Hogan",
                    "age": "34",
                    "hometown": "Huntsville, Alabama",
                    "occupation": "Single Mother & Medical Marketing Rep.",
                    "status": "Week 5"
                },
                {
                    "name": "Lauren",
                    "age": "27",
                    "hometown": "Marlboro, New Jersey",
                    "occupation": "Teacher",
                    "status": "Week 4"
                },
                {
                    "name": "Megan Parris",
                    "age": "25",
                    "hometown": "Sewickley, Pennsylvania",
                    "occupation": "Single Mother and Lacrosse Coach",
                    "status": "Week 4"
                },
                {
                    "name": "Shannon Bair",
                    "age": "29",
                    "hometown": "Marshall, Missouri",
                    "occupation": "Dental Hygienist",
                    "status": "Week 4"
                },
                {
                    "name": "Nicole 'Nikki' Kaapke",
                    "age": "29",
                    "hometown": "Blue Island, Illinois",
                    "occupation": "Administrative Assistant",
                    "status": "Week 4"
                },
                {
                    "name": "Erica",
                    "age": "25",
                    "hometown": "Monroe, Connecticut",
                    "occupation": "Account Executive",
                    "status": "Week 3"
                },
                {
                    "name": "Kari Fajen",
                    "age": "27",
                    "hometown": "Lee's Summit, Missouri",
                    "occupation": "Account Executive",
                    "status": "Week 3"
                },
                {
                    "name": "Natalie Getz",
                    "age": "27",
                    "hometown": "Morton, Illinois",
                    "occupation": "Human Resources Recruiter",
                    "status": "Week 3"
                },
                {
                    "name": "Raquel Medeiros",
                    "age": "27",
                    "hometown": "Recife, Pernambuco, Brazil",
                    "occupation": "Medical Student",
                    "status": "Week 2"
                },
                {
                    "name": "Sharon Staebell",
                    "age": "32",
                    "hometown": "Batavia, New York",
                    "occupation": "Teacher",
                    "status": "Week 2"
                },
                {
                    "name": "Lisa Gonzalez",
                    "age": "28",
                    "hometown": "Boise, Idaho",
                    "occupation": "Public Relations Associate",
                    "status": "Week 2",
                    "notes": "quit"
                },
                {
                    "name": "Ann Lueders",
                    "age": "24",
                    "hometown": "Phoenix, Arizona",
                    "occupation": "Flight Attendant",
                    "status": "Week 1"
                },
                {
                    "name": "Dominique",
                    "age": "26",
                    "hometown": "Mt. Carmel, Pennsylvania",
                    "occupation": "Medical Sales Rep.",
                    "status": "Week 1"
                },
                {
                    "name": "Emily",
                    "age": "23",
                    "hometown": "Seattle, Washington",
                    "occupation": "Casino Marketing Rep.",
                    "status": "Week 1"
                },
                {
                    "name": "Jackie",
                    "age": "26",
                    "hometown": "Springfield, Massachusetts",
                    "occupation": "Wedding Coordinator",
                    "status": "Week 1"
                },
                {
                    "name": "Julie",
                    "age": "26",
                    "hometown": "Columbus, Ohio",
                    "occupation": "Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Nicole",
                    "age": "25",
                    "hometown": "Calgary, Alberta",
                    "occupation": "Menswear Buyer",
                    "status": "Week 1"
                },
                {
                    "name": "Renee",
                    "age": "36",
                    "hometown": "Southfield, Michigan",
                    "occupation": "Jewelry Designer",
                    "status": "Week 1"
                },
                {
                    "name": "Shelby",
                    "age": "23",
                    "hometown": "Stockton, California",
                    "occupation": "Account Executive",
                    "status": "Week 1"
                },
                {
                    "name": "Stacia",
                    "age": "24",
                    "hometown": "Orem, Utah",
                    "occupation": "Single Mother & Charity Accountant",
                    "status": "Week 1"
                },
                {
                    "name": "Treasure",
                    "age": "28",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Single Mother and Nurse Practitioner",
                    "status": "Week 1"
                }
            ]
        },
        "14": {
            "eligible": {
                "name": "Jake Pavelka",
                "age": "32",
                "hometown": "Dallas, Texas",
                "occupation": "pilot",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Vienna Girardi",
                    "age": "23",
                    "hometown": "Geneva, Florida",
                    "occupation": "Marketing Representative",
                    "status": "Winner"
                },
                {
                    "name": "Tenley Molzahn",
                    "age": "25",
                    "hometown": "Newberg, Oregon",
                    "occupation": "College Admissions",
                    "status": "Runner-Up"
                },
                {
                    "name": "Gia Allemand",
                    "age": "26",
                    "hometown": "New York, New York",
                    "occupation": "Swimsuit Model",
                    "status": "Week 7"
                },
                {
                    "name": "Ali Fedotowsky",
                    "age": "25",
                    "hometown": "Williamstown, Massachusetts",
                    "occupation": "Advertising Account Manager",
                    "status": "Week 6",
                    "notes": "quit"
                },
                {
                    "name": "Corrie Adamson",
                    "age": "23",
                    "hometown": "Kissimmee, Florida",
                    "occupation": "Wardrobe Consultant",
                    "status": "Week 5"
                },
                {
                    "name": "Ashleigh Hunt",
                    "age": "25",
                    "hometown": "North Potomac, Maryland",
                    "occupation": "Account Manager",
                    "status": "Week 4"
                },
                {
                    "name": "Jessie Sulidis",
                    "age": "25",
                    "hometown": "Oakville, Ontario",
                    "occupation": "Cosmetic Sales Manager",
                    "status": "Week 4"
                },
                {
                    "name": "Kathryn Sherlock",
                    "age": "25",
                    "hometown": "Lexington, Kentucky",
                    "occupation": "Corporate Flight Attendant",
                    "status": "Week 4"
                },
                {
                    "name": "Ella Nolan",
                    "age": "30",
                    "hometown": "La Follette, Tennessee",
                    "occupation": "Hair Stylist",
                    "status": "Week 4"
                },
                {
                    "name": "Elizabeth Kitt (NE)",
                    "age": "29",
                    "hometown": "Imperial, Nebraska",
                    "occupation": "Nanny",
                    "status": "Week 3"
                },
                {
                    "name": "Valishia Savage",
                    "age": "32",
                    "hometown": "San Bernardino, California",
                    "occupation": "Homemaker",
                    "status": "Week 3"
                },
                {
                    "name": "Michelle Kujawa",
                    "age": "26",
                    "hometown": "Anaheim, California",
                    "occupation": "Office Manager",
                    "status": "Week 3"
                },
                {
                    "name": "Ashley Elmore",
                    "age": "29",
                    "hometown": "Pittsburgh, Pennsylvania",
                    "occupation": "Teacher",
                    "status": "Week 2"
                },
                {
                    "name": "Christina McCasland",
                    "age": "25",
                    "hometown": "San Diego, California",
                    "occupation": "Restaurant Manager",
                    "status": "Week 2"
                },
                {
                    "name": "Rozlyn Papa",
                    "age": "28",
                    "hometown": "Richmond, Virginia",
                    "occupation": "Model/Make-Up Artist",
                    "status": "Week 2",
                    "notes": "disqualified"
                },
                {
                    "name": "Alexa McAllister",
                    "age": "25",
                    "hometown": "Galloway, Ohio",
                    "occupation": "Entrepreneur",
                    "status": "Week 1"
                },
                {
                    "name": "Caitlyn McCabe",
                    "age": "24",
                    "hometown": "Winfield, Illinois",
                    "occupation": "Spokesmodel",
                    "status": "Week 1"
                },
                {
                    "name": "Channy Choch",
                    "age": "29",
                    "hometown": "Santa Rosa, California",
                    "occupation": "Mortgage Loan Officer",
                    "status": "Week 1"
                },
                {
                    "name": "Elizabeth Kreft (D.C.)",
                    "age": "29",
                    "hometown": "Union, Kentucky",
                    "occupation": "Captain, Air National Guard",
                    "status": "Week 1"
                },
                {
                    "name": "Emily Harkins",
                    "age": "23",
                    "hometown": "West Chester, Ohio",
                    "occupation": "Fitness Model",
                    "status": "Week 1"
                },
                {
                    "name": "Kimberly Sullivan",
                    "age": "24",
                    "hometown": "Norman, Oklahoma",
                    "occupation": "NBA Dancer",
                    "status": "Week 1"
                },
                {
                    "name": "Kirsten Pittman",
                    "age": "25",
                    "hometown": "Aurora, Colorado",
                    "occupation": "Waitress",
                    "status": "Week 1"
                },
                {
                    "name": "Sheila Marie Lidner",
                    "age": "25",
                    "hometown": "Scottsdale, Arizona",
                    "occupation": "Commercial Pilot",
                    "status": "Week 1"
                },
                {
                    "name": "Stephanie Mueller",
                    "age": "24",
                    "hometown": "Morris, Illinois",
                    "occupation": "Dance Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Tiana Kruzel",
                    "age": "31",
                    "hometown": "Calgary, Alberta",
                    "occupation": "Medical Technician",
                    "status": "Week 1"
                }
            ]
        },
        "15": {
            "eligible": {
                "name": "Stephen Bradley 'Brad' Womack",
                "age": "38",
                "hometown": "Austin, Texas",
                "occupation": "winemaker",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Emily Maynard",
                    "age": "25",
                    "hometown": "Morgantown, West Virginia",
                    "occupation": "Children's Hospital Event Planner",
                    "status": "Winner"
                },
                {
                    "name": "Chantal O'Brien",
                    "age": "28",
                    "hometown": "Mercer Island, Washington",
                    "occupation": "Executive Assistant",
                    "status": "Runner-Up"
                },
                {
                    "name": "Ashley Hebert",
                    "age": "26",
                    "hometown": "Madawaska, Maine",
                    "occupation": "Dental Student",
                    "status": "Week 9"
                },
                {
                    "name": "Shawntel Newton",
                    "age": "25",
                    "hometown": "Chico, California",
                    "occupation": "Funeral Director",
                    "status": "Week 8"
                },
                {
                    "name": "Michelle Money",
                    "age": "30",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Hair stylist",
                    "status": "Week 7"
                },
                {
                    "name": "Britt Billmaier",
                    "age": "25",
                    "hometown": "Woodinville, Washington",
                    "occupation": "Food writer",
                    "status": "Week 7"
                },
                {
                    "name": "Jackie Gordon",
                    "age": "26",
                    "hometown": "Newport, Rhode Island",
                    "occupation": "Artist",
                    "status": "Week 6"
                },
                {
                    "name": "Alli Travis",
                    "age": "24",
                    "hometown": "Columbus, Ohio",
                    "occupation": "Apparel merchant",
                    "status": "Week 6"
                },
                {
                    "name": "Lisa Morrisey",
                    "age": "24",
                    "hometown": "Ottawa, Kansas",
                    "occupation": "Marketing Coordinator",
                    "status": "Week 5"
                },
                {
                    "name": "Marissa May",
                    "age": "26",
                    "hometown": "Mesa, Arizona",
                    "occupation": "Sports Publicist",
                    "status": "Week 5"
                },
                {
                    "name": "Ashley Spivey",
                    "age": "26",
                    "hometown": "Ellerbe, North Carolina",
                    "occupation": "Nanny",
                    "status": "Week 5"
                },
                {
                    "name": "Lindsay Hill",
                    "age": "25",
                    "hometown": "Plano, Texas",
                    "occupation": "First grade teacher",
                    "status": "Week 4"
                },
                {
                    "name": "Meghan Merritt",
                    "age": "30",
                    "hometown": "Princeton, New Jersey",
                    "occupation": "Fashion Marketer",
                    "status": "Week 4"
                },
                {
                    "name": "Stacey Quirpel",
                    "age": "26",
                    "hometown": "Quincy, Massachusetts",
                    "occupation": "Bartender",
                    "status": "Week 4"
                },
                {
                    "name": "Kimberly Coon",
                    "age": "27",
                    "hometown": "Orlando, Florida",
                    "occupation": "Marketing Coordinator",
                    "status": "Week 3"
                },
                {
                    "name": "Sarah Powell",
                    "age": "27",
                    "hometown": "Denver, Colorado",
                    "occupation": "Real Estate Broker",
                    "status": "Week 3"
                },
                {
                    "name": "Madison Garton",
                    "age": "25",
                    "hometown": "Vail, Colorado",
                    "occupation": "Model",
                    "status": "Week 3",
                    "notes": "quit"
                },
                {
                    "name": "Keltie Colleen",
                    "age": "28",
                    "hometown": "Sherwood Park, Alberta",
                    "occupation": "Radio City Rockette",
                    "status": "Week 2"
                },
                {
                    "name": "Melissa Schreiber",
                    "age": "32",
                    "hometown": "Westport, Connecticut",
                    "occupation": "Waitress",
                    "status": "Week 2"
                },
                {
                    "name": "Raichel Goodyear",
                    "age": "29",
                    "hometown": "Fullerton, California",
                    "occupation": "Manscaper",
                    "status": "Week 2"
                },
                {
                    "name": "Britnee",
                    "age": "25",
                    "hometown": "Holland, Pennsylvania",
                    "occupation": "Paralegal",
                    "status": "Week 1"
                },
                {
                    "name": "Cristy Caserta",
                    "age": "30",
                    "hometown": "Davie, Florida",
                    "occupation": "Attorney",
                    "status": "Week 1"
                },
                {
                    "name": "Jessica 'J'",
                    "age": "26",
                    "hometown": "Seattle, Washington",
                    "occupation": "Operations Manager",
                    "status": "Week 1"
                },
                {
                    "name": "Jill Ruskowski",
                    "age": "28",
                    "hometown": "Frisco, Texas",
                    "occupation": "Sales director",
                    "status": "Week 1"
                },
                {
                    "name": "Lacey Garbelman",
                    "age": "27",
                    "hometown": "Tampa, Florida",
                    "occupation": "Insurance agent",
                    "status": "Week 1"
                },
                {
                    "name": "Lauren Moore",
                    "age": "26",
                    "hometown": "Culpeper, Virginia",
                    "occupation": "High School Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Lisa P.",
                    "age": "27",
                    "hometown": "Dix Hills, New York",
                    "occupation": "Sales Consultant",
                    "status": "Week 1"
                },
                {
                    "name": "Rebecca",
                    "age": "30",
                    "hometown": "Mission Viejo, California",
                    "occupation": "Esthetician",
                    "status": "Week 1"
                },
                {
                    "name": "Renee Halpin",
                    "age": "28",
                    "hometown": "Palos Hills, Illinois",
                    "occupation": "Nanny",
                    "status": "Week 1"
                },
                {
                    "name": "Sarah Ledtke",
                    "age": "25",
                    "hometown": "Saginaw, Michigan",
                    "occupation": "Musical Theatre Performer",
                    "status": "Week 1"
                }
            ]
        },
        "16": {
            "eligible": {
                "name": "Ben Flajnik",
                "age": "28",
                "hometown": "Sonoma, California",
                "occupation": "winemaker and owner of Envolve wines",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Courtney Robertson",
                    "age": "28",
                    "hometown": "Scottsdale, Arizona",
                    "occupation": "Model",
                    "status": "Winner"
                },
                {
                    "name": "Lindzi Cox",
                    "age": "27",
                    "hometown": "Newcastle, Washington[Note 2]",
                    "occupation": "Business development manager",
                    "status": "Runner-Up"
                },
                {
                    "name": "Nicki Sterling",
                    "age": "26",
                    "hometown": "Hurst, Texas",
                    "occupation": "Dental hygienist",
                    "status": "Week 9"
                },
                {
                    "name": "Kacie Boguskie",
                    "age": "24",
                    "hometown": "Clarksville, Tennessee[Note 3]",
                    "occupation": "Administrative assistant",
                    "status": "Week 8"
                },
                {
                    "name": "Emily O'Brien",
                    "age": "27",
                    "hometown": "Chapel Hill, North Carolina",
                    "occupation": "PhD Student",
                    "status": "Week 7"
                },
                {
                    "name": "Rachel Truehart",
                    "age": "27",
                    "hometown": "Southampton, Massachusetts",
                    "occupation": "Fashion sales representative",
                    "status": "Week 7"
                },
                {
                    "name": "Jamie Otis",
                    "age": "25",
                    "hometown": "Dryden, New York",
                    "occupation": "Registered nurse",
                    "status": "Week 6"
                },
                {
                    "name": "Casey Shteamer",
                    "age": "26",
                    "hometown": "Leawood, Kansas",
                    "occupation": "Trading clerk",
                    "status": "Week 6",
                    "notes": "removed"
                },
                {
                    "name": "Blakeley Jones",
                    "age": "33",
                    "hometown": "Rutherfordton, North Carolina",
                    "occupation": "VIP cocktail waitress",
                    "status": "Week 6"
                },
                {
                    "name": "Jennifer Fritsch",
                    "age": "28",
                    "hometown": "Cache, Oklahoma",
                    "occupation": "Accountant",
                    "status": "Week 5"
                },
                {
                    "name": "Elyse Myers",
                    "age": "24",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Personal trainer",
                    "status": "Week 5"
                },
                {
                    "name": "Monica Spannbauer",
                    "age": "33",
                    "hometown": "Yuba, California",
                    "occupation": "Dental consultant",
                    "status": "Week 4"
                },
                {
                    "name": "Samantha Levey",
                    "age": "26",
                    "hometown": "Pittsburgh, Pennsylvania",
                    "occupation": "Advertising account manager",
                    "status": "Week 4"
                },
                {
                    "name": "Jaclyn Swartz",
                    "age": "27",
                    "hometown": "Newton, Massachusetts",
                    "occupation": "Advertising account manager",
                    "status": "Week 3"
                },
                {
                    "name": "Erika Uhlig",
                    "age": "23",
                    "hometown": "Charlottesville, Virginia",
                    "occupation": "Law student",
                    "status": "Week 3"
                },
                {
                    "name": "Brittney Schreiner",
                    "age": "26",
                    "hometown": "Colorado Springs, Colorado",
                    "occupation": "Medical sales representative",
                    "status": "Week 3",
                    "notes": "quit"
                },
                {
                    "name": "Shawn Reynolds",
                    "age": "28",
                    "hometown": "Cincinnati, Ohio",
                    "occupation": "Financial advisor",
                    "status": "Week 2"
                },
                {
                    "name": "Jenna Burke",
                    "age": "27",
                    "hometown": "Loveland, Ohio",
                    "occupation": "Blogger",
                    "status": "Week 2"
                },
                {
                    "name": "Amber Bacon",
                    "age": "23",
                    "hometown": "Port Coquitlam, British Columbia",
                    "occupation": "Labor and delivery nurse",
                    "status": "Week 1"
                },
                {
                    "name": "Amber Tierney",
                    "age": "28",
                    "hometown": "Waverly, Nebraska",
                    "occupation": "Critical care nurse",
                    "status": "Week 1"
                },
                {
                    "name": "Anna Snowball",
                    "age": "25",
                    "hometown": "Detroit, Michigan",
                    "occupation": "Student",
                    "status": "Week 1"
                },
                {
                    "name": "Dianna Martinez",
                    "age": "30",
                    "hometown": "San Gabriel, California",
                    "occupation": "Nonprofit director",
                    "status": "Week 1"
                },
                {
                    "name": "Holly Johnson",
                    "age": "34",
                    "hometown": "Salyersville, Kentucky",
                    "occupation": "Pharmaceutical sales representative",
                    "status": "Week 1"
                },
                {
                    "name": "Lyndsie James",
                    "age": "29",
                    "hometown": "London, England",
                    "occupation": "Internet entrepreneur",
                    "status": "Week 1"
                },
                {
                    "name": "Shira Astrof",
                    "age": "35",
                    "hometown": "Massapequa Park, New York",
                    "occupation": "Actress",
                    "status": "Week 1"
                }
            ]
        },
        "17": {
            "eligible": {
                "name": "Sean Lowe",
                "age": "28",
                "hometown": "McKinney, Texas",
                "occupation": "former Kansas State fooball player",
                "status": "still married"
            },
            "contestants": [
                {
                    "name": "Catherine Giudici",
                    "age": "26",
                    "hometown": "Seattle, Washington",
                    "occupation": "Graphic Designer",
                    "status": "Winner"
                },
                {
                    "name": "Lindsay Yenter",
                    "age": "24",
                    "hometown": "Fort Bragg, North Carolina",
                    "occupation": "Substitute Teacher",
                    "status": "Runner-Up"
                },
                {
                    "name": "AshLee Frazier",
                    "age": "32",
                    "hometown": "Houston, Texas",
                    "occupation": "Personal Organizer",
                    "status": "Week 9"
                },
                {
                    "name": "Desiree Hartsock",
                    "age": "26",
                    "hometown": "Northglenn, Colorado",
                    "occupation": "Bridal Stylist",
                    "status": "Week 8"
                },
                {
                    "name": "Lesley Murphy",
                    "age": "24",
                    "hometown": "Fort Smith, Arkansas",
                    "occupation": "Political Consultant",
                    "status": "Week 7"
                },
                {
                    "name": "Tierra LiCausi",
                    "age": "24",
                    "hometown": "Las Vegas, Nevada",
                    "occupation": "Leasing Consultant",
                    "status": "Week 7"
                },
                {
                    "name": "Daniella McBride",
                    "age": "24",
                    "hometown": "Belmont, California",
                    "occupation": "Commercial Casting Associate",
                    "status": "Week 6"
                },
                {
                    "name": "Selma Alameri",
                    "age": "29",
                    "hometown": "San Diego, California",
                    "occupation": "Real Estate Dealer",
                    "status": "Week 6"
                },
                {
                    "name": "Sarah Herron",
                    "age": "26",
                    "hometown": "Evergreen, Colorado",
                    "occupation": "Advertising Executive",
                    "status": "Week 6"
                },
                {
                    "name": "Robyn Howard",
                    "age": "24",
                    "hometown": "Houston, Texas",
                    "occupation": "Oil Field Account Manager",
                    "status": "Week 5"
                },
                {
                    "name": "Jackie Parr",
                    "age": "25",
                    "hometown": "Ormond Beach, Florida",
                    "occupation": "Cosmetics Consultant",
                    "status": "Week 5"
                },
                {
                    "name": "Amanda Meyer",
                    "age": "26",
                    "hometown": "Bakersfield, California",
                    "occupation": "Fit Model",
                    "status": "Week 4"
                },
                {
                    "name": "Leslie Hughes",
                    "age": "28",
                    "hometown": "Ruskin, Florida",
                    "occupation": "Poker Dealer",
                    "status": "Week 4"
                },
                {
                    "name": "Kristy Kaminski",
                    "age": "25",
                    "hometown": "Darien, Wisconsin",
                    "occupation": "Model",
                    "status": "Week 3"
                },
                {
                    "name": "Taryn Renee Daniels",
                    "age": "30",
                    "hometown": "Troutdale, Oregon",
                    "occupation": "Health Club Manager",
                    "status": "Week 3"
                },
                {
                    "name": "Kacie Boguskie",
                    "age": "25",
                    "hometown": "See below",
                    "occupation": "See below",
                    "status": "Week 3"
                },
                {
                    "name": "Brooke Burchette",
                    "age": "25",
                    "hometown": "Pittsburgh, Pennsylvania",
                    "occupation": "Community Organizer",
                    "status": "Week 2"
                },
                {
                    "name": "Diana Weeks Willardson",
                    "age": "31",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Salon Owner",
                    "status": "Week 2"
                },
                {
                    "name": "Katie Levans",
                    "age": "27",
                    "hometown": "Woodstock, Illinois",
                    "occupation": "Yoga Instructor",
                    "status": "Week 2",
                    "notes": "quit"
                },
                {
                    "name": "Ashley Harper",
                    "age": "25",
                    "hometown": "Garner, North Carolina",
                    "occupation": "Fashion Model",
                    "status": "Week 1"
                },
                {
                    "name": "Ashley Palenkas",
                    "age": "28",
                    "hometown": "Macomb, Michigan",
                    "occupation": "Hair Stylist",
                    "status": "Week 1"
                },
                {
                    "name": "Kelly Dutton",
                    "age": "28",
                    "hometown": "Nashville, Tennessee",
                    "occupation": "Cruise Ship Entertainer",
                    "status": "Week 1"
                },
                {
                    "name": "Keriann Miranda",
                    "age": "29",
                    "hometown": "Agoura Hills, California",
                    "occupation": "Entrepreneur",
                    "status": "Week 1"
                },
                {
                    "name": "Lacey Latka",
                    "age": "24",
                    "hometown": "Valencia, California",
                    "occupation": "Graduate Student",
                    "status": "Week 1"
                },
                {
                    "name": "Lauren Marchetti",
                    "age": "27",
                    "hometown": "Cranston, Rhode Island",
                    "occupation": "Journalist",
                    "status": "Week 1"
                },
                {
                    "name": "Paige Vigil",
                    "age": "25",
                    "hometown": "New York City, New York",
                    "occupation": "Jumbotron Operator",
                    "status": "Week 1"
                }
            ]
        },
        "18": {
            "eligible": {
                "name": "Juan Pablo Galavis",
                "age": "32",
                "hometown": "Miami, Florida",
                "occupation": "professional soccer player",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Nikki Ferrell",
                    "age": "26",
                    "hometown": "Kearney, Missouri",
                    "occupation": "Pediatric Nurse",
                    "status": "Winner"
                },
                {
                    "name": "Clare Crawley",
                    "age": "32",
                    "hometown": "Sacramento, California",
                    "occupation": "Hairstylist",
                    "status": "Runner-Up"
                },
                {
                    "name": "Andi Dorfman",
                    "age": "26",
                    "hometown": "Atlanta, Georgia",
                    "occupation": "Assistant District Attorney",
                    "status": "Week 9",
                    "notes": "quit"
                },
                {
                    "name": "Renee Oteri",
                    "age": "32",
                    "hometown": "Martha's Vineyard, Massachusetts[Note 1]",
                    "occupation": "Real Estate agent",
                    "status": "Week 8"
                },
                {
                    "name": "Chelsie Webster",
                    "age": "24",
                    "hometown": "Lexington, Ohio",
                    "occupation": "Science Educator",
                    "status": "Week 7"
                },
                {
                    "name": "Sharleen Joynt",
                    "age": "29",
                    "hometown": "Ottawa, Ontario",
                    "occupation": "Opera Singer",
                    "status": "Week 7",
                    "notes": "quit"
                },
                {
                    "name": "Kat Hurd",
                    "age": "29",
                    "hometown": "Iowa City, Iowa",
                    "occupation": "Medical Sales Representative/NBA Dancer",
                    "status": "Week 6"
                },
                {
                    "name": "Cassandra Ferguson",
                    "age": "22",
                    "hometown": "Shelby Charter Township, Michigan",
                    "occupation": "Former NBA Dancer",
                    "status": "Week 6"
                },
                {
                    "name": "Alli Restko",
                    "age": "26",
                    "hometown": "Orland Park, Illinois",
                    "occupation": "Nanny",
                    "status": "Week 5"
                },
                {
                    "name": "Danielle Ronco",
                    "age": "25",
                    "hometown": "Litchfield, Illinois",
                    "occupation": "Psychiatric Nurse",
                    "status": "Week 5"
                },
                {
                    "name": "Kelly Travis",
                    "age": "27",
                    "hometown": "Conyers, Georgia",
                    "occupation": "Dog Lover",
                    "status": "Week 5"
                },
                {
                    "name": "Elise Mosca",
                    "age": "27",
                    "hometown": "Forty Fort, Pennsylvania",
                    "occupation": "First Grade Teacher",
                    "status": "Week 4"
                },
                {
                    "name": "Lauren Solomon",
                    "age": "26",
                    "hometown": "Austin, Texas",
                    "occupation": "Music Composer",
                    "status": "Week 4"
                },
                {
                    "name": "Christy Hansen",
                    "age": "24",
                    "hometown": "Aurora, Illinois",
                    "occupation": "Marketing Manager",
                    "status": "Week 3"
                },
                {
                    "name": "Lucy Aragon",
                    "age": "25",
                    "hometown": "Santa Barbara, California",
                    "occupation": "Free Spirit",
                    "status": "Week 3"
                },
                {
                    "name": "Amy Long",
                    "age": "27",
                    "hometown": "Clermont, Florida",
                    "occupation": "Local News Reporter",
                    "status": "Week 2"
                },
                {
                    "name": "Chantel Forrest",
                    "age": "27",
                    "hometown": "Miami, Florida",
                    "occupation": "Account Manager",
                    "status": "Week 2"
                },
                {
                    "name": "Victoria Lima",
                    "age": "24",
                    "hometown": "Porto Alegre, Brazil",
                    "occupation": "Legal Assistant",
                    "status": "Week 2"
                },
                {
                    "name": "Alexis Morgado",
                    "age": "24",
                    "hometown": "Tampa, Florida",
                    "occupation": "Communications Director/NHL Ice Girl",
                    "status": "Week 1"
                },
                {
                    "name": "Amy Jokinen",
                    "age": "31",
                    "hometown": "Apopka, Florida",
                    "occupation": "Massage Therapist",
                    "status": "Week 1"
                },
                {
                    "name": "Ashley Poe",
                    "age": "25",
                    "hometown": "Roanoke, Texas",
                    "occupation": "Grade School Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Christine Llano",
                    "age": "23",
                    "hometown": "Miami, Florida",
                    "occupation": "Police Support Specialist",
                    "status": "Week 1"
                },
                {
                    "name": "Kylie Lewis",
                    "age": "23",
                    "hometown": "Rockford, Illinois",
                    "occupation": "Interior Designer",
                    "status": "Week 1"
                },
                {
                    "name": "Lacy Faddoul",
                    "age": "25",
                    "hometown": "Antelope Acres, California",
                    "occupation": "Nursing Home Owner",
                    "status": "Week 1"
                },
                {
                    "name": "Lauren Higginson",
                    "age": "25",
                    "hometown": "Edmond, Oklahoma",
                    "occupation": "Mineral Coordinator",
                    "status": "Week 1"
                },
                {
                    "name": "Maggie Gantt",
                    "age": "25",
                    "hometown": "Wagener, South Carolina",
                    "occupation": "Personal Banker",
                    "status": "Week 1"
                },
                {
                    "name": "Valerie Eredia",
                    "age": "26",
                    "hometown": "Sutter, California",
                    "occupation": "Personal Trainer",
                    "status": "Week 1"
                }
            ]
        },
        "19": {
            "eligible": {
                "name": "Chris Soules",
                "age": "33",
                "hometown": "Arlington, Iowa",
                "occupation": "farmer",
                "status": "broke up"
            },
            "contestants": [
                {
                    "name": "Ashley Iaconetti",
                    "age": "26",
                    "hometown": "Great Falls, Virginia",
                    "occupation": "Nanny/Freelance Journalist",
                    "status": "Week 6"
                },
                {
                    "name": "Becca Tilley",
                    "age": "26",
                    "hometown": "Shreveport, Louisiana[b]",
                    "occupation": "Chiropractic Assistant",
                    "status": "Runner-Up"
                },
                {
                    "name": "Britt Nilsson",
                    "age": "27",
                    "hometown": "Hollywood, California",
                    "occupation": "Waitress",
                    "status": "Week 7"
                },
                {
                    "name": "Carly Waddell",
                    "age": "29",
                    "hometown": "Arlington, Texas",
                    "occupation": "Cruise Ship Singer",
                    "status": "Week 7"
                },
                {
                    "name": "Jade Roper",
                    "age": "28",
                    "hometown": "Los Angeles, California",
                    "occupation": "Cosmetics Developer",
                    "status": "Week 8"
                },
                {
                    "name": "Kaitlyn Bristowe",
                    "age": "29",
                    "hometown": "Leduc, Alberta[c]",
                    "occupation": "Dance Instructor",
                    "status": "Week 9"
                },
                {
                    "name": "Kelsey Poe",
                    "age": "28",
                    "hometown": "Hudsonville, Michigan[d]",
                    "occupation": "Guidance Counselor",
                    "status": "Week 6"
                },
                {
                    "name": "Mackenzie Deonigi",
                    "age": "21",
                    "hometown": "Maple Valley, Washington",
                    "occupation": "Dental Assistant",
                    "status": "Week 5"
                },
                {
                    "name": "Megan Bell",
                    "age": "24",
                    "hometown": "Nashville, Tennessee",
                    "occupation": "Make-Up Artist",
                    "status": "Week 6"
                },
                {
                    "name": "Samantha Steffen",
                    "age": "27",
                    "hometown": "Indianapolis, Indiana[e]",
                    "occupation": "Fashion Designer",
                    "status": "Week 5"
                },
                {
                    "name": "Whitney Bischoff",
                    "age": "29",
                    "hometown": "Chicago, Illinois",
                    "occupation": "Fertility Nurse",
                    "status": "Winner"
                },
                {
                    "name": "Ashley Salter",
                    "age": "24",
                    "hometown": "Brooklyn, New York",
                    "occupation": "Hair Stylist",
                    "status": "Week 4"
                },
                {
                    "name": "Juelia Kinney",
                    "age": "30",
                    "hometown": "Portland, Oregon",
                    "occupation": "Esthetician",
                    "status": "Week 4"
                },
                {
                    "name": "Nikki Delventhal",
                    "age": "26",
                    "hometown": "New York, New York",
                    "occupation": "Former NFL Cheerleader",
                    "status": "Week 4"
                },
                {
                    "name": "Jillian Anderson",
                    "age": "25",
                    "hometown": "Howland, Ohio",
                    "occupation": "News Producer",
                    "status": "Week 4"
                },
                {
                    "name": "Amber James",
                    "age": "29",
                    "hometown": "Kankakee, Illinois",
                    "occupation": "Bartender",
                    "status": "Week 3"
                },
                {
                    "name": "Tracy Darakis",
                    "age": "29",
                    "hometown": "Wellington, Florida",
                    "occupation": "Fourth Grade Teacher",
                    "status": "Week 3"
                },
                {
                    "name": "Trina Scherenberg",
                    "age": "33",
                    "hometown": "Algonquin, Illinois[h]",
                    "occupation": "Special Education Teacher",
                    "status": "Week 3"
                },
                {
                    "name": "Alissa Giambrone",
                    "age": "24",
                    "hometown": "Hamilton, New Jersey",
                    "occupation": "Flight Attendant",
                    "status": "Week 2"
                },
                {
                    "name": "Jordan Branch",
                    "age": "24",
                    "hometown": "Windsor, Colorado",
                    "occupation": "Student",
                    "status": "Week 2"
                },
                {
                    "name": "Kimberly Sherbach",
                    "age": "28",
                    "hometown": "Wantagh, New York",
                    "occupation": "Yoga Instructor",
                    "status": "Week 2",
                    "notes": "eliminated Week 1 then returned and re-eliminated"
                },
                {
                    "name": "Tandra Steiner",
                    "age": "30",
                    "hometown": "Sandy, Utah",
                    "occupation": "Executive Assistant",
                    "status": "Week 2"
                },
                {
                    "name": "Tara Eddings",
                    "age": "26",
                    "hometown": "Fort Lauderdale, Florida",
                    "occupation": "Sport Fishing Enthusiast",
                    "status": "Week 2"
                },
                {
                    "name": "Amanda Goerlitz",
                    "age": "24",
                    "hometown": "Lake in the Hills, Illinois",
                    "occupation": "Ballet Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Bo Stanley",
                    "age": "25",
                    "hometown": "Carpinteria, California",
                    "occupation": "Plus-Size Model",
                    "status": "Week 1"
                },
                {
                    "name": "Brittany Fetkin",
                    "age": "26",
                    "hometown": "Orlando, Florida",
                    "occupation": "WWE Diva-in-Training",
                    "status": "Week 1"
                },
                {
                    "name": "Kara Wilson",
                    "age": "25",
                    "hometown": "Brownsville, Kentucky",
                    "occupation": "High School Soccer Coach",
                    "status": "Week 1"
                },
                {
                    "name": "Michelle Davis",
                    "age": "25",
                    "hometown": "Provo, Utah",
                    "occupation": "Wedding Cake Decorator",
                    "status": "Week 1"
                },
                {
                    "name": "Nicole",
                    "age": "31",
                    "hometown": "Scottsdale, Arizona",
                    "occupation": "Real Estate agent",
                    "status": "Week 1"
                },
                {
                    "name": "Reegan Cornwell",
                    "age": "28",
                    "hometown": "Manhattan Beach, California",
                    "occupation": "Cadaver Tissue Saleswoman",
                    "status": "Week 1"
                }
            ]
        },
        "20": {
            "eligible": {
                "name": "Ben Higgins",
                "age": "26",
                "hometown": "Warsaw, Indiana",
                "occupation": "software salesman",
                "status": "engaged"
            },
            "contestants": [
                {
                    "name": "Amanda Stanton",
                    "age": "25",
                    "hometown": "Rancho Santa Margarita, California",
                    "occupation": "Esthetician",
                    "status": "Week 8"
                },
                {
                    "name": "Becca Tilley",
                    "age": "26",
                    "hometown": "San Diego, California",
                    "occupation": "Chiropractic Assistant",
                    "status": "Week 7"
                },
                {
                    "name": "Caila Quinn",
                    "age": "24",
                    "hometown": "Hudson, Ohio",
                    "occupation": "Software Sales Representative",
                    "status": "Week 9"
                },
                {
                    "name": "Emily Ferguson",
                    "age": "23",
                    "hometown": "Las Vegas, Nevada",
                    "occupation": "Twin",
                    "status": "Week 7"
                },
                {
                    "name": "Joelle 'JoJo' Fletcher",
                    "age": "24",
                    "hometown": "Dallas, Texas",
                    "occupation": "Real Estate Developer",
                    "status": "Runner-Up"
                },
                {
                    "name": "Lauren Bushnell",
                    "age": "25",
                    "hometown": "West Linn, Oregon",
                    "occupation": "Flight Attendant",
                    "status": "Winner"
                },
                {
                    "name": "Lauren Himle",
                    "age": "25",
                    "hometown": "Dexter, Michigan",
                    "occupation": "Kindergarten Teacher",
                    "status": "Week 6"
                },
                {
                    "name": "Olivia Caridi",
                    "age": "23",
                    "hometown": "Austin, Texas",
                    "occupation": "Former News Anchor",
                    "status": "Week 6"
                },
                {
                    "name": "Leah Block",
                    "age": "25",
                    "hometown": "Aurora, Colorado",
                    "occupation": "Event Planner",
                    "status": "Week 6"
                },
                {
                    "name": "Jennifer Saviano",
                    "age": "25",
                    "hometown": "Lauderdale Lakes, Florida",
                    "occupation": "Small Business Owner",
                    "status": "Week 5"
                },
                {
                    "name": "Jubilee Sharpe",
                    "age": "24",
                    "hometown": "Fort Lauderdale, Florida",
                    "occupation": "War Veteran",
                    "status": "Week 5"
                },
                {
                    "name": "Amber James",
                    "age": "30",
                    "hometown": "Kankakee, Illinois",
                    "occupation": "Bartender",
                    "status": "Week 4"
                },
                {
                    "name": "Rachel Tchen",
                    "age": "23",
                    "hometown": "Little Rock, Arkansas",
                    "occupation": "Unemployed",
                    "status": "Week 4"
                },
                {
                    "name": "Haley Ferguson",
                    "age": "23",
                    "hometown": "Las Vegas, Nevada",
                    "occupation": "Twin",
                    "status": "Week 4"
                },
                {
                    "name": "Jami Letain",
                    "age": "23",
                    "hometown": "St. Albert, Alberta",
                    "occupation": "Bartender",
                    "status": "Week 3"
                },
                {
                    "name": "Shushanna Mkrtychyan",
                    "age": "27",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Mathematician",
                    "status": "Week 3"
                },
                {
                    "name": "Lace Morris",
                    "age": "25",
                    "hometown": "Denver, Colorado",
                    "occupation": "Real Estate agent",
                    "status": "Week 3",
                    "notes": "quit"
                },
                {
                    "name": "Amanda 'Mandi' Kremer",
                    "age": "28",
                    "hometown": "Portland, Oregon",
                    "occupation": "Dentist",
                    "status": "Week 2"
                },
                {
                    "name": "Jacqueline 'Jackie' Dion",
                    "age": "23",
                    "hometown": "Newport Beach, California",
                    "occupation": "Gerontologist",
                    "status": "Week 2"
                },
                {
                    "name": "Samantha Passmore",
                    "age": "26",
                    "hometown": "New Smyrna Beach, Florida",
                    "occupation": "Attorney",
                    "status": "Week 2"
                },
                {
                    "name": "Lauren 'LB' Barr",
                    "age": "23",
                    "hometown": "Stillwater, Oklahoma",
                    "occupation": "Fashion Buyer",
                    "status": "Week 2",
                    "notes": "quit"
                },
                {
                    "name": "Breanne Rice",
                    "age": "30",
                    "hometown": "Seattle, Washington",
                    "occupation": "Nutritional Therapist",
                    "status": "Week 1"
                },
                {
                    "name": "Isabel 'Izzy' Goodkind",
                    "age": "24",
                    "hometown": "Branford, Connecticut",
                    "occupation": "Graphic Designer",
                    "status": "Week 1"
                },
                {
                    "name": "Jessica Moser",
                    "age": "23",
                    "hometown": "Boca Raton, Florida",
                    "occupation": "Accountant",
                    "status": "Week 1"
                },
                {
                    "name": "Laura Esselman",
                    "age": "24",
                    "hometown": "Louisville, Kentucky",
                    "occupation": "Account Executive",
                    "status": "Week 1"
                },
                {
                    "name": "Lauren Russell",
                    "age": "26",
                    "hometown": "Houston, Texas",
                    "occupation": "Math Teacher",
                    "status": "Week 1"
                },
                {
                    "name": "Maegan Miller",
                    "age": "30",
                    "hometown": "Visalia, California",
                    "occupation": "Cowgirl",
                    "status": "Week 1"
                },
                {
                    "name": "Tiara Soleim",
                    "age": "27",
                    "hometown": "Redmond, Washington",
                    "occupation": "Chicken Enthusiast",
                    "status": "Week 1"
                }
            ]
        },
        "21": {
            "eligible": {
                "name": "Nick Viall",
                "age": "36",
                "hometown": "Milwaukee, Wisconsin",
                "occupation": "software sales executive",
                "status": "engaged"
            },
            "contestants": [
                {
                    "name": "Vanessa Grimaldi",
                    "age": "29",
                    "hometown": "Montreal, Quebec",
                    "occupation": "Special Education Teacher",
                    "status": "Winner"
                },
                {
                    "name": "Raven Gates",
                    "age": "25",
                    "hometown": "Hoxie, Arkansas",
                    "occupation": "Fashion Boutique Owner",
                    "status": "Runner-Up"
                },
                {
                    "name": "Rachel Lindsay",
                    "age": "31",
                    "hometown": "Dallas, Texas",
                    "occupation": "Attorney",
                    "status": "Week 9"
                },
                {
                    "name": "Corinne Olympios",
                    "age": "24",
                    "hometown": "Miami, Florida",
                    "occupation": "Business Owner",
                    "status": "Week 8"
                },
                {
                    "name": "Kristina Schulman",
                    "age": "24",
                    "hometown": "Lexington, Kentucky",
                    "occupation": "Dental Hygienist",
                    "status": "Week 7"
                },
                {
                    "name": "Danielle Maltby",
                    "age": "31",
                    "hometown": "Colgate, Wisconsin",
                    "occupation": "Neonatal Nurse",
                    "status": "Week 7"
                },
                {
                    "name": "Danielle Lombard",
                    "age": "27",
                    "hometown": "Danville, California",
                    "occupation": "Small Business Owner",
                    "status": "Week 6"
                },
                {
                    "name": "Whitney Fransway",
                    "age": "25",
                    "hometown": "Chanhassen, Minnesota",
                    "occupation": "Pilates Instructor",
                    "status": "Week 6"
                },
                {
                    "name": "Jasmine Goode",
                    "age": "29",
                    "hometown": "Maplewood, New Jersey",
                    "occupation": "Pro Basketball Dancer",
                    "status": "Week 6"
                },
                {
                    "name": "Jaimi King",
                    "age": "28",
                    "hometown": "New Orleans, Louisiana",
                    "occupation": "Chef",
                    "status": "Week 5"
                },
                {
                    "name": "Josephine Tutman",
                    "age": "24",
                    "hometown": "Santa Cruz, California",
                    "occupation": "Registered Nurse",
                    "status": "Week 5"
                },
                {
                    "name": "Alexis Waters",
                    "age": "23",
                    "hometown": "Secaucus, New Jersey",
                    "occupation": "Aspiring Dolphin Trainer",
                    "status": "Week 5"
                },
                {
                    "name": "Taylor Nolan",
                    "age": "23",
                    "hometown": "Seattle, Washington",
                    "occupation": "Mental Health Counselor",
                    "status": "Week 5"
                },
                {
                    "name": "Astrid Loch",
                    "age": "26",
                    "hometown": "Tampa, Florida",
                    "occupation": "Plastic Surgery Office Manager",
                    "status": "Week 4"
                },
                {
                    "name": "Sarah Vendal",
                    "age": "26",
                    "hometown": "Palmdale, California",
                    "occupation": "Grade School Teacher",
                    "status": "Week 4"
                },
                {
                    "name": "Brittany Farrar",
                    "age": "26",
                    "hometown": "Santa Monica, California",
                    "occupation": "Travel Nurse",
                    "status": "Week 3"
                },
                {
                    "name": "Christen Whitney",
                    "age": "25",
                    "hometown": "Martinsville, Indiana",
                    "occupation": "Wedding Videographer",
                    "status": "Week 3"
                },
                {
                    "name": "Dominique Alexis",
                    "age": "25",
                    "hometown": "Los Angeles, California",
                    "occupation": "Restaurant Server",
                    "status": "Week 3"
                },
                {
                    "name": "Lacey Mark",
                    "age": "25",
                    "hometown": "Towaco, New Jersey",
                    "occupation": "Digital Marketing Manager",
                    "status": "Week 2"
                },
                {
                    "name": "Hailey Merkt",
                    "age": "23",
                    "hometown": "Vancouver, British Columbia",
                    "occupation": "Photographer",
                    "status": "Week 2"
                },
                {
                    "name": "Elizabeth Whitelaw",
                    "age": "24",
                    "hometown": "New Trier, Illinois",
                    "occupation": "Marketing Manager",
                    "status": "Week 2"
                },
                {
                    "name": "Elizabeth 'Liz' Sandoz",
                    "age": "29",
                    "hometown": "Scottsbluff, Nebraska",
                    "occupation": "Doula",
                    "status": "Week 2"
                },
                {
                    "name": "Angela Amezcua",
                    "age": "26",
                    "hometown": "Cumberland, Maryland",
                    "occupation": "Model",
                    "status": "Week 1"
                },
                {
                    "name": "Jasmine Brown",
                    "age": "25",
                    "hometown": "Tacoma, Washington",
                    "occupation": "Flight Attendant",
                    "status": "Week 1"
                },
                {
                    "name": "Olivia Burnette",
                    "age": "25",
                    "hometown": "Anchorage, Alaska",
                    "occupation": "Apparel Sales Representative",
                    "status": "Week 1"
                },
                {
                    "name": "Ida Marie DeLosSantos",
                    "age": "23",
                    "hometown": "Harlingen, Texas",
                    "occupation": "Sales Manager",
                    "status": "Week 1"
                },
                {
                    "name": "Briana Guertler",
                    "age": "28",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Surgical Unit Nurse",
                    "status": "Week 1"
                },
                {
                    "name": "Lauren Hussey",
                    "age": "30",
                    "hometown": "Naples, Florida",
                    "occupation": "Law School Graduate",
                    "status": "Week 1"
                },
                {
                    "name": "Susannah Milan",
                    "age": "26",
                    "hometown": "San Diego, California",
                    "occupation": "Account Manager",
                    "status": "Week 1"
                },
                {
                    "name": "Michelle Ramkissoon",
                    "age": "24",
                    "hometown": "Los Angeles, California",
                    "occupation": "Food Truck Owner",
                    "status": "Week 1"
                }
            ]
        },
        "22": {
            "eligible": {
                "name": "Arie",
                "age": "26",
                "hometown": "Scottsdale, Arizona",
                "occupation": "real estate agent, former race car driver",
                "status": "married"
            },
            "contestants": [
                {
                    "name": "Rebecca 'Becca' Kufrin",
                    "age": "27",
                    "hometown": "Prior Lake, Minnesota",
                    "occupation": "Publicist",
                    "status": "Winner but then broken up with",
                },
                {
                    "name": "Lauren Burnham",
                    "age": "25",
                    "hometown": "Virginia Beach, Virginia",
                    "occupation": "Technology Salesperson",
                    "status": "Runner-Up but later married",
                },
                {
                    "name": "Kendall Long",
                    "age": "26",
                    "hometown": "Santa Clarita, California",
                    "occupation": "Creative Director",
                    "status": "Week 9",
                },
                {
                    "name": "Tia Booth",
                    "age": "26",
                    "hometown": "Weiner, Arkansas",
                    "occupation": "Physical Therapist",
                    "status": "Week 8",
                },
                {
                    "name": "Rebekah 'Bekah' Martinez",
                    "age": "22",
                    "hometown": "Fresno, California",
                    "occupation": "Nanny",
                    "status": "Week 7",
                },
                {
                    "name": "Seinne Fleming",
                    "age": "27",
                    "hometown": "Long Beach, California",
                    "occupation": "Commercial Real Estate agent",
                    "status": "Week 6"
                },
                {
                    "name": "Jacqueline Trumbull",
                    "age": "26",
                    "hometown": "Morgantown, West Virginia",
                    "occupation": "Research Coordinator",
                    "status": "Week 7 (quit)"
                },
                {
                    "name": "Chelsea Roy",
                    "age": "29",
                    "hometown": "South Portland, Maine",
                    "occupation": "Real Estate Executive Assistant",
                    "status": "Week 6",
                },
                {
                    "name": "Jenna Cooper",
                    "age": "28",
                    "hometown": "Raleigh, North Carolina",
                    "occupation": "Social Media Manager",
                    "status": "unknown"
                },
                {
                    "name": "Krystal Nielson",
                    "age": "30",
                    "hometown": "Missoula, Montana",
                    "occupation": "Fitness Coach",
                    "status": "Week 10"
                },
                {
                    "name": "Ashley Luebke",
                    "age": "25",
                    "hometown": "West Palm Beach, Florida",
                    "occupation": "Real Estate agent",
                    "status": "Week 5",
                },
                {
                    "name": "Maquel Cooper",
                    "age": "23",
                    "hometown": "American Fork, Utah",
                    "occupation": "Photographer",
                    "status": "unknown"
                },
                {
                    "name": "Marikh Mathias",
                    "age": "27",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Restaurant Owner",
                    "status": "unknown"
                },
                {
                    "name": "Brittany Taylor",
                    "age": "30",
                    "hometown": "Belton, South Carolina",
                    "occupation": "Tech Recruiter",
                    "status": "Week 4",
                },
                {
                    "name": "Caroline Lunny",
                    "age": "26",
                    "hometown": "Holliston, Massachusetts",
                    "occupation": "Realtor",
                    "status": "unknown"
                },
                {
                    "name": "Bibiana Julian",
                    "age": "30",
                    "hometown": "Miami, Florida",
                    "occupation": "Executive Assistant",
                    "status": "Week 3",
                },
                {
                    "name": "Annaliese Puccini",
                    "age": "32",
                    "hometown": "San Mateo, California",
                    "occupation": "Event Designer",
                    "status": "unknown"
                },
                {
                    "name": "Lauren Schleyer",
                    "age": "31",
                    "hometown": "Dallas, Texas",
                    "occupation": "Social Media Manager",
                    "status": "unknown"
                },
                {
                    "name": "Jennifer 'Jenny' Delaney",
                    "age": "25",
                    "hometown": "Northbrook, Illinois",
                    "occupation": "Graphic Designer",
                    "status": "Week 2",
                },
                {
                    "name": "Lauren Griffin",
                    "age": "26",
                    "hometown": "Indianapolis, Indiana",
                    "occupation": "Executive Recruiter",
                    "status": "unknown"
                },
                {
                    "name": "Valerie Biles",
                    "age": "26",
                    "hometown": "Nashville, Tennessee",
                    "occupation": "Server",
                    "status": "unknown"
                },
                {
                    "name": "Alison 'Ali' Harrington",
                    "age": "27",
                    "hometown": "Lawton, Oklahoma",
                    "occupation": "Personal Stylist",
                    "status": "Week 1",
                },
                {
                    "name": "Amber Wilkerson",
                    "age": "29",
                    "hometown": "Denver, Colorado",
                    "occupation": "Business Owner",
                    "status": "unknown"
                },
                {
                    "name": "Brianna 'Bri' Amaranthus",
                    "age": "25",
                    "hometown": "Grants Pass, Oregon",
                    "occupation": "Sports Reporter",
                    "status": "unknown"
                },
                {
                    "name": "Brittane Johnson",
                    "age": "27",
                    "hometown": "San Diego, California",
                    "occupation": "Marketing Manager",
                    "status": "unknown"
                },
                {
                    "name": "Jessica Carroll",
                    "age": "26",
                    "hometown": "Calgary, Alberta, Canada",
                    "occupation": "Television Host",
                    "status": "unknown"
                },
                {
                    "name": "Lauren Jarreau",
                    "age": "33",
                    "hometown": "New Roads, Louisiana",
                    "occupation": "Recent Master's Graduate",
                    "status": "unknown"
                },
                {
                    "name": "D'Nysha 'Nysha' Norris",
                    "age": "30",
                    "hometown": "Anderson, South Carolina",
                    "occupation": "Orthopedic Nurse",
                    "status": "unknown"
                },
                {
                    "name": "Olivia Goethals",
                    "age": "23",
                    "hometown": "Geneseo, Illinois",
                    "occupation": "Marketing Associate",
                    "status": "unknown"
                }
            ]
        },
        "23": {
            "eligible": {
                "name": "Colton Underwood",
                "age": "26",
                "hometown": "Washington, Illinois",
                "occupation": "Former Pro Football Player",
                "status": "engaged"
            },
            "contestants": [
                {
                    "name": "Rebecca 'Becca' Kufrin",
                    "age": "27",
                    "hometown": "Prior Lake, Minnesota",
                    "occupation": "Publicist",
                    "status": "Winner",
                },
                {
                    "name": "Lauren Burnham",
                    "age": "25",
                    "hometown": "Virginia Beach, Virginia",
                    "occupation": "Technology Salesperson",
                    "status": "Runner-Up",
                },
                {
                    "name": "Kendall Long",
                    "age": "26",
                    "hometown": "Santa Clarita, California",
                    "occupation": "Creative Director",
                    "status": "Week 9",
                },
                {
                    "name": "Tia Booth",
                    "age": "26",
                    "hometown": "Weiner, Arkansas",
                    "occupation": "Physical Therapist",
                    "status": "Week 8",
                },
                {
                    "name": "Rebekah 'Bekah' Martinez",
                    "age": "22",
                    "hometown": "Fresno, California",
                    "occupation": "Nanny",
                    "status": "Week 7",
                },
                {
                    "name": "Seinne Fleming",
                    "age": "27",
                    "hometown": "Long Beach, California",
                    "occupation": "Commercial Real Estate agent",
                    "status": "Week 6"
                },
                {
                    "name": "Jacqueline Trumbull",
                    "age": "26",
                    "hometown": "Morgantown, West Virginia",
                    "occupation": "Research Coordinator",
                    "status": "Week 7 (quit)"
                },
                {
                    "name": "Chelsea Roy",
                    "age": "29",
                    "hometown": "South Portland, Maine",
                    "occupation": "Real Estate Executive Assistant",
                    "status": "Week 6",
                },
                {
                    "name": "Jenna Cooper",
                    "age": "28",
                    "hometown": "Raleigh, North Carolina",
                    "occupation": "Social Media Manager",
                    "status": "unknown",
                },
                {
                    "name": "Krystal Nielson",
                    "age": "30",
                    "hometown": "Missoula, Montana",
                    "occupation": "Fitness Coach",
                    "status": "unknown",
                },
                {
                    "name": "Ashley Luebke",
                    "age": "25",
                    "hometown": "West Palm Beach, Florida",
                    "occupation": "Real Estate agent",
                    "status": "Week 5",
                },
                {
                    "name": "Maquel Cooper",
                    "age": "23",
                    "hometown": "American Fork, Utah",
                    "occupation": "Photographer",
                    "status": "unknown",
                },
                {
                    "name": "Marikh Mathias",
                    "age": "27",
                    "hometown": "Salt Lake City, Utah",
                    "occupation": "Restaurant Owner"
                },
                {
                    "name": "Brittany Taylor",
                    "age": "30",
                    "hometown": "Belton, South Carolina",
                    "occupation": "Tech Recruiter",
                    "status": "Week 4",
                },
                {
                    "name": "Caroline Lunny",
                    "age": "26",
                    "hometown": "Holliston, Massachusetts",
                    "occupation": "Realtor",
                    "status": "unknown",
                },
                {
                    "name": "Bibiana Julian",
                    "age": "30",
                    "hometown": "Miami, Florida",
                    "occupation": "Executive Assistant",
                    "status": "Week 3",
                },
                {
                    "name": "Annaliese Puccini",
                    "age": "32",
                    "hometown": "San Mateo, California",
                    "occupation": "Event Designer",
                    "status": "unknown"
                },
                {
                    "name": "Lauren Schleyer",
                    "age": "31",
                    "hometown": "Dallas, Texas",
                    "occupation": "Social Media Manager",
                    "status": "unknown"
                },
                {
                    "name": "Jennifer 'Jenny' Delaney",
                    "age": "25",
                    "hometown": "Northbrook, Illinois",
                    "occupation": "Graphic Designer",
                    "status": "Week 2",
                },
                {
                    "name": "Lauren Griffin",
                    "age": "26",
                    "hometown": "Indianapolis, Indiana",
                    "occupation": "Executive Recruiter",
                    "status": "unknown"
                },
                {
                    "name": "Valerie Biles",
                    "age": "26",
                    "hometown": "Nashville, Tennessee",
                    "occupation": "Server",
                    "status": "unknown"
                },
                {
                    "name": "Alison 'Ali' Harrington",
                    "age": "27",
                    "hometown": "Lawton, Oklahoma",
                    "occupation": "Personal Stylist",
                    "status": "Week 1",
                },
                {
                    "name": "Amber Wilkerson",
                    "age": "29",
                    "hometown": "Denver, Colorado",
                    "occupation": "Business Owner",
                    "status": "unknown"
                },
                {
                    "name": "Brianna 'Bri' Amaranthus",
                    "age": "25",
                    "hometown": "Grants Pass, Oregon",
                    "occupation": "Sports Reporter",
                    "status": "unknown"
                },
                {
                    "name": "Brittane Johnson",
                    "age": "27",
                    "hometown": "San Diego, California",
                    "occupation": "Marketing Manager",
                    "status": "unknown"
                },
                {
                    "name": "Jessica Carroll",
                    "age": "26",
                    "hometown": "Calgary, Alberta, Canada",
                    "occupation": "Television Host",
                    "status": "unknown"
                },
                {
                    "name": "Lauren Jarreau",
                    "age": "33",
                    "hometown": "New Roads, Louisiana",
                    "occupation": "Recent Master's Graduate",
                    "status": "unknown"
                },
                {
                    "name": "D'Nysha 'Nysha' Norris",
                    "age": "30",
                    "hometown": "Anderson, South Carolina",
                    "occupation": "Orthopedic Nurse",
                    "status": "unknown"
                },
                {
                    "name": "Olivia Goethals",
                    "age": "23",
                    "hometown": "Geneseo, Illinois",
                    "occupation": "Marketing Associate",
                    "status": "unknown"
                }
            ]
        }
    }
};

const bacheloretteData: BacheloretteDataInterface = {
  "bachelorette": {
    "1": {
      "eligible": {
        "name": "Trista Rehn",
        "age": "31",
        "hometown": "Indianapolis, Indiana",
        "occupation": "physical therapist",
        "status": "married"
      },
      "contestants": [
        {
          "name": "Ryan Sutter",
          "age": "29",
          "hometown": "Vail, Colorado",
          "occupation": "Firefighter",
          "status": "Winner"
        },
        {
          "name": "Charlie Maher",
          "age": "28",
          "hometown": "Hermosa Beach, California",
          "occupation": "Financial Analyst",
          "status": "Runner-Up"
        },
        {
          "name": "Russ",
          "age": "30",
          "hometown": "San Rafael, California",
          "occupation": "Writer",
          "status": "Week 5"
        },
        {
          "name": "Greg T.",
          "age": "28",
          "hometown": "Manhattan, New York",
          "occupation": "Importer",
          "status": "Week 4"
        },
        {
          "name": "Bob Guiney",
          "age": "31",
          "hometown": "Ferndale, Michigan",
          "occupation": "Mortgage Broker",
          "status": "Week 3"
        },
        {
          "name": "Jamie Blyth",
          "age": "27",
          "hometown": "Chicago, Illinois",
          "occupation": "Professional Basketball Player",
          "status": "Week 3"
        },
        {
          "name": "Mike",
          "age": "24",
          "hometown": "Cincinnati, Ohio",
          "occupation": "Sales and Consulting",
          "status": "Week 3"
        },
        {
          "name": "Rob",
          "age": "29",
          "hometown": "Dallas, Texas",
          "occupation": "Computer Programmer",
          "status": "Week 3"
        },
        {
          "name": "Brian C.",
          "age": "28",
          "hometown": "Dallas, Texas",
          "occupation": "Mortgage Broker",
          "status": "Week 2"
        },
        {
          "name": "Brian S.",
          "age": "28",
          "hometown": "Dallas, Texas",
          "occupation": "Sales Engineer",
          "status": "Week 2"
        },
        {
          "name": "Brook",
          "age": "29",
          "hometown": "Dallas, Texas",
          "occupation": "Rodeo Cowboy",
          "status": "Week 2"
        },
        {
          "name": "Jack",
          "age": "27",
          "hometown": "Pepper Pike, Ohio",
          "occupation": "Firefighter",
          "status": "Week 2"
        },
        {
          "name": "Jeff",
          "age": "25",
          "hometown": "San Diego, California",
          "occupation": "Professional Football Player",
          "status": "Week 2"
        },
        {
          "name": "Josh",
          "age": "31",
          "hometown": "Boca Raton, Florida",
          "occupation": "Radio Advertising Executive",
          "status": "Week 2"
        },
        {
          "name": "Brian H.",
          "age": "30",
          "hometown": "Cleveland, Ohio",
          "occupation": "National Sales Manager",
          "status": "Week 2 (quit)"
        },
        {
          "name": "Billy",
          "age": "28",
          "hometown": "Hermosa Beach, California",
          "occupation": "Firefighter",
          "status": "Week 1"
        },
        {
          "name": "Brian K.",
          "age": "31",
          "hometown": "San Francisco, California",
          "occupation": "Breast Implant Sales",
          "status": "Week 1"
        },
        {
          "name": "Chris",
          "age": "35",
          "hometown": "Sugarloaf, Pennsylvania",
          "occupation": "V.P. of Auto Parts Company",
          "status": "Week 1"
        },
        {
          "name": "Duane",
          "age": "28",
          "hometown": "Chisago City, Minnesota",
          "occupation": "Flight Instructor",
          "status": "Week 1"
        },
        {
          "name": "Eric",
          "age": "33",
          "hometown": "St. Louis, Missouri",
          "occupation": "Commercial Pilot",
          "status": "Week 1"
        },
        {
          "name": "Gregg H.",
          "age": "34",
          "hometown": "Freehold, New Jersey",
          "occupation": "Marble Company Owner",
          "status": "Week 1"
        },
        {
          "name": "Matt",
          "age": "42",
          "hometown": "Marina Del Rey, California",
          "occupation": "Gym Owner",
          "status": "Week 1"
        },
        {
          "name": "Paul",
          "age": "26",
          "hometown": "Honolulu, Hawaii",
          "occupation": "Telecommunications",
          "status": "Week 1"
        },
        {
          "name": "Peter",
          "age": "25",
          "hometown": "Long Island, New York",
          "occupation": "Construction Business Owner",
          "status": "Week 1"
        },
        {
          "name": "Wayne",
          "age": "37",
          "hometown": "Sacramento, California",
          "occupation": "Commercial Pilot",
          "status": "Week 1"
        }
      ]
    },
    "2": {
      "eligible": {
        "name": "Meredith Phillips",
        "age": "30",
        "hometown": "Beaverton, Oregon",
        "occupation": "make-up artist",
        "status": "broke up"
      },
      "contestants": [
        {
          "name": "Ian McKee",
          "age": "29",
          "hometown": "New York, New York",
          "occupation": "Equity Research Sales",
          "status": "Winner"
        },
        {
          "name": "Matthew Hickl",
          "age": "28",
          "hometown": "Friendswood, Texas",
          "occupation": "Pharmaceutical Sales Rep",
          "status": "Week 8"
        },
        {
          "name": "Chad",
          "age": "31",
          "hometown": "Buffalo, New York",
          "occupation": "Pharmaceutical Sales Rep",
          "status": "Week 6"
        },
        {
          "name": "Lanny",
          "age": "26",
          "hometown": "Aubrey, Texas",
          "occupation": "Stallion and Breeding Manager",
          "status": "Week 5"
        },
        {
          "name": "Brad",
          "age": "29",
          "hometown": "Grand Rapids, Michigan",
          "occupation": "Pharmaceutical Sales Rep",
          "status": "Week 4"
        },
        {
          "name": "Ryan M.",
          "age": "30",
          "hometown": "Santa Barbara, California",
          "occupation": "Financial Advisor",
          "status": "Week 4"
        },
        {
          "name": "Sean",
          "age": "31",
          "hometown": "Wall, New Jersey",
          "occupation": "CPA",
          "status": "Week 4"
        },
        {
          "name": "Rick",
          "age": "29",
          "hometown": "San Diego, California",
          "occupation": "Business Manager",
          "status": "Week 3"
        },
        {
          "name": "Ryan R.",
          "age": "29",
          "hometown": "Wynola, California",
          "occupation": "Sales/Marketing",
          "status": "Week 3"
        },
        {
          "name": "Todd",
          "age": "36",
          "hometown": "San Francisco, California",
          "occupation": "Options Trader",
          "status": "Week 3"
        },
        {
          "name": "Damon",
          "age": "28",
          "hometown": "Cardiff, California",
          "occupation": "Arena Football Player",
          "status": "Week 2"
        },
        {
          "name": "Eliot",
          "age": "25",
          "hometown": "Mountain View, California",
          "occupation": "Options Trader",
          "status": "Week 2"
        },
        {
          "name": "Harold Hersh",
          "age": "29",
          "hometown": "Rock Island, Illinois",
          "occupation": "Professional Hockey Player",
          "status": "Week 2"
        },
        {
          "name": "Marcus",
          "age": "26",
          "hometown": "Los Angeles, California",
          "occupation": "Personal Trainer",
          "status": "Week 2"
        },
        {
          "name": "Robert",
          "age": "32",
          "hometown": "El Segundo, California",
          "occupation": "Alliance Development",
          "status": "Week 2"
        },
        {
          "name": "Aaron",
          "age": "32",
          "hometown": "Sacramento, California",
          "occupation": "Title and Escrow Sales",
          "status": "Week 1"
        },
        {
          "name": "Andy Chang",
          "age": "33",
          "hometown": "Dallas, Texas",
          "occupation": "Dentist",
          "status": "Week 1"
        },
        {
          "name": "Anselm Clinard",
          "age": "32",
          "hometown": "Venice, California",
          "occupation": "Art Designer",
          "status": "Week 1"
        },
        {
          "name": "Brian",
          "age": "31",
          "hometown": "Quincy, Massachusetts",
          "occupation": "Attorney",
          "status": "Week 1"
        },
        {
          "name": "Chris",
          "age": "31",
          "hometown": "Boston, Massachusetts",
          "occupation": "Accountant",
          "status": "Week 1"
        },
        {
          "name": "Cory Higgins",
          "age": "24",
          "hometown": "Long Beach Island, New Jersey",
          "occupation": "Small Business Owner",
          "status": "Week 1"
        },
        {
          "name": "Jeff O'Quinn",
          "age": "30",
          "hometown": "Macon, Georgia",
          "occupation": "Pharmaceutical Sales Rep",
          "status": "Week 1"
        },
        {
          "name": "Justin",
          "age": "25",
          "hometown": "Orlando, Florida",
          "occupation": "Professional Baseball Player",
          "status": "Week 1"
        },
        {
          "name": "Keith",
          "age": "31",
          "hometown": "Baltimore, Maryland",
          "occupation": "Financial Analyst",
          "status": "Week 1"
        },
        {
          "name": "Trever",
          "age": "35",
          "hometown": "North Wales, Pennsylvania",
          "occupation": "Restaurateur",
          "status": "Week 1"
        }
      ]
    },
    "3": {
      "eligible": {
        "name": "Jennifer 'Jen' Schefft",
        "age": "29",
        "hometown": "Mentor, Ohio",
        "occupation": "publicist",
        "status": "rejected both, then chose Jerry Ferris, then broke up"
      },
      "contestants": []
    },
    "4": {
      "eligible": {
        "name": "DeAnna Pappas",
        "age": "27",
        "hometown": "Marietta, Georgia",
        "occupation": "real estate agent",
        "status": "broke up"
      },
      "contestants": [
        {
          "name": "Jesse Csincsak",
          "age": "26",
          "hometown": "Breckenridge, Colorado",
          "occupation": "Professional snowboarder",
          "status": "Winner"
        },
        {
          "name": "Jason Mesnick",
          "age": "31",
          "hometown": "Cleveland, Ohio",
          "occupation": "Account executive",
          "status": "Runner-Up"
        },
        {
          "name": "Jeremy Anderson",
          "age": "30",
          "hometown": "Dallas, Texas",
          "occupation": "Real estate attorney",
          "status": "Week 7"
        },
        {
          "name": "Graham Bunn",
          "age": "29",
          "hometown": "Raleigh, North Carolina",
          "occupation": "Professional basketball player",
          "status": "Week 6"
        },
        {
          "name": "Sean Ramey",
          "age": "33",
          "hometown": "Louisville, Kentucky",
          "occupation": "Martial artist",
          "status": "Week 5"
        },
        {
          "name": "Blaine Twilley",
          "age": "33",
          "hometown": "Tulsa, Oklahoma",
          "occupation": "Debt manager",
          "status": "Week 5"
        },
        {
          "name": "Brian Westendorf",
          "age": "31",
          "hometown": "Balch Springs, Texas",
          "occupation": "High school football coach",
          "status": "Week 4"
        },
        {
          "name": "Frederick 'Fred' Greif",
          "age": "30",
          "hometown": "Skokie, Illinois",
          "occupation": "Lawyer",
          "status": "Week 4"
        },
        {
          "name": "Robert Fair",
          "age": "28",
          "hometown": "San Francisco, California",
          "occupation": "Chef",
          "status": "Week 4"
        },
        {
          "name": "Paul Brosseau",
          "age": "23",
          "hometown": "Bonnyville, Alberta",
          "occupation": "Sales manager",
          "status": "Week 3"
        },
        {
          "name": "Ronald Mayer",
          "age": "36",
          "hometown": "Greeley, Colorado",
          "occupation": "Barber shop owner",
          "status": "Week 3"
        },
        {
          "name": "Richard Mathy",
          "age": "27",
          "hometown": "Sauquoit, New York",
          "occupation": "Science teacher",
          "status": "Week 3"
        },
        {
          "name": "Christopher 'Chris' Bradshaw",
          "age": "29",
          "hometown": "Fort Worth, Texas",
          "occupation": "Medical sales rep.",
          "status": "Week 2"
        },
        {
          "name": "Eric Papachristos",
          "age": "32",
          "hometown": "Boston, Massachusetts",
          "occupation": "Senior analyst",
          "status": "Week 2"
        },
        {
          "name": "Ryan Hoag",
          "age": "28",
          "hometown": "Minneapolis, Minnesota",
          "occupation": "Professional football player",
          "status": "Week 2"
        },
        {
          "name": "Brian Winchester",
          "age": "29",
          "hometown": "New Castle, Indiana",
          "occupation": "Computer network consultant",
          "status": "Week 1"
        },
        {
          "name": "Chandler Fulton",
          "age": "25",
          "hometown": "Virginia Beach, Virginia",
          "occupation": "Insurance rep.",
          "status": "Week 1"
        },
        {
          "name": "Donato Capodanno",
          "age": "26",
          "hometown": "Lexington, South Carolina",
          "occupation": "Sales rep.",
          "status": "Week 1"
        },
        {
          "name": "Gregory 'Greg' Matthew",
          "age": "28",
          "hometown": "Rockport, Massachusetts",
          "occupation": "Personal trainer",
          "status": "Week 1"
        },
        {
          "name": "Jeffrey Harris",
          "age": "27",
          "hometown": "Miami, Florida",
          "occupation": "Mathematics teacher",
          "status": "Week 1"
        },
        {
          "name": "Jonathan 'Jon' Konkel",
          "age": "35",
          "hometown": "Williston, North Dakota",
          "occupation": "Resort manager",
          "status": "Week 1"
        },
        {
          "name": "Luke Hamilton",
          "age": "27",
          "hometown": "Faith, North Carolina",
          "occupation": "Oyster farmer",
          "status": "Week 1"
        },
        {
          "name": "Patrick Carlson",
          "age": "26",
          "hometown": "Glenwood, Illinois",
          "occupation": "Financial analyst",
          "status": "Week 1"
        },
        {
          "name": "Patrick Durrere",
          "age": "27",
          "hometown": "Elmhurst, Illinois",
          "occupation": "Internet marketing",
          "status": "Week 1"
        },
        {
          "name": "Spero Stamboulis",
          "age": "38",
          "hometown": "Ellington, Connecticut",
          "occupation": "Actor",
          "status": "Week 1"
        }
      ]
    },
    "5": {
      "eligible": {
        "name": "Jillian Harris",
        "age": "30",
        "hometown": "Peace river, Alberta",
        "occupation": "Interior Designer",
        "status": "broke up"
      },
      "contestants": [
        {
          "name": "Ed Swiderski",
          "age": "29",
          "hometown": "Monroe, Michigan",
          "occupation": "Technology Consultant",
          "status": "Winner"
        },
        {
          "name": "Kiptyn Locke",
          "age": "31",
          "hometown": "Encinitas, California",
          "occupation": "Business Developer",
          "status": "Runner-Up"
        },
        {
          "name": "Reid Rosenthal",
          "age": "30",
          "hometown": "Upper Dublin, Pennsylvania",
          "occupation": "Realtor",
          "status": "Week 9"
        },
        {
          "name": "Wes Hayden",
          "age": "32",
          "hometown": "Huntsville, Texas",
          "occupation": "Musician",
          "status": "Week 8"
        },
        {
          "name": "Jesse Kovacs",
          "age": "27",
          "hometown": "Carmel Valley, California",
          "occupation": "Wine Maker",
          "status": "Week 7"
        },
        {
          "name": "Michael Stagliano",
          "age": "25",
          "hometown": "Tacoma, Washington",
          "occupation": "Break Dance Instructor",
          "status": "Week 7"
        },
        {
          "name": "Jake Pavelka",
          "age": "31",
          "hometown": "Denton, Texas",
          "occupation": "Commercial Pilot",
          "status": "Week 6"
        },
        {
          "name": "Tanner Pope",
          "age": "30",
          "hometown": "Brownfield, Texas",
          "occupation": "Financial Analyst",
          "status": "Week 6"
        },
        {
          "name": "Robby Descant",
          "age": "25",
          "hometown": "Spring, Texas",
          "occupation": "Bartender",
          "status": "Week 6"
        },
        {
          "name": "Mark Huebner",
          "age": "26",
          "hometown": "Woodstock, Illinois",
          "occupation": "Pizza Entrepreneur",
          "status": "Week 5"
        },
        {
          "name": "David Good",
          "age": "27",
          "hometown": "West Alexandria, Ohio",
          "occupation": "Trucking Contractor",
          "status": "Week 4"
        },
        {
          "name": "Juan Barbieri",
          "age": "35",
          "hometown": "Buenos Aires, Argentina",
          "occupation": "General Contractor",
          "status": "Week 4"
        },
        {
          "name": "Mike Steinberg",
          "age": "28",
          "hometown": "New York, New York",
          "occupation": "Baseball Camp Owner",
          "status": "Week 4"
        },
        {
          "name": "Brad Seberhagen",
          "age": "27",
          "hometown": "Park Ridge, Illinois",
          "occupation": "Financial Advisor",
          "status": "Week 3"
        },
        {
          "name": "Tanner Fanello",
          "age": "28",
          "hometown": "Derby, Kansas",
          "occupation": "Sales Representative",
          "status": "Week 3"
        },
        {
          "name": "Sasha Petrovic",
          "age": "27",
          "hometown": "Houston, Texas",
          "occupation": "Oil & Gas Consultant",
          "status": "Week 3"
        },
        {
          "name": "Brian Duke",
          "age": "32",
          "hometown": "Birmingham, Alabama",
          "occupation": "IT Consultant",
          "status": "Week 2"
        },
        {
          "name": "Julien Hug",
          "age": "34",
          "hometown": "San Diego, California",
          "occupation": "Restaurateur",
          "status": "Week 2"
        },
        {
          "name": "Mathue Johnson",
          "age": "25",
          "hometown": "Andover, Kansas",
          "occupation": "Personal Trainer",
          "status": "Week 2"
        },
        {
          "name": "Simon Ambrose",
          "age": "26",
          "hometown": "Bradford, England",
          "occupation": "Soccer Coach",
          "status": "Week 2"
        },
        {
          "name": "Adam Duvendeck",
          "age": "27",
          "hometown": "Santa Barbara, California",
          "occupation": "Olympic Cyclist",
          "status": "Week 1"
        },
        {
          "name": "Bryan Vaderman",
          "age": "28",
          "hometown": "Lawton, Oklahoma",
          "occupation": "High School Coach",
          "status": "Week 1"
        },
        {
          "name": "Bryce Harlow",
          "age": "31",
          "hometown": "Fort Lauderdale, Florida",
          "occupation": "Furniture Dealer",
          "status": "Week 1"
        },
        {
          "name": "Caleb Kuhl",
          "age": "27",
          "hometown": "Kansas City, Missouri",
          "occupation": "Photographer",
          "status": "Week 1"
        },
        {
          "name": "Greg Bilbro",
          "age": "31",
          "hometown": "Albuquerque, New Mexico",
          "occupation": "Entrepreneur",
          "status": "Week 1"
        },
        {
          "name": "John Hardesty",
          "age": "27",
          "hometown": "Boise, Idaho",
          "occupation": "Branding Consultant",
          "status": "Week 1"
        },
        {
          "name": "John Presser",
          "age": "29",
          "hometown": "Fort Wayne, Indiana",
          "occupation": "Marketing Specialist",
          "status": "Week 1"
        },
        {
          "name": "Josh Yocam",
          "age": "25",
          "hometown": "Tustin, California",
          "occupation": "Lifeguard",
          "status": "Week 1"
        },
        {
          "name": "Kyle Yauch",
          "age": "26",
          "hometown": "Austin, Texas",
          "occupation": "Graphic Designer",
          "status": "Week 1"
        },
        {
          "name": "Stephen Reich",
          "age": "30",
          "hometown": "Lexington, Massachusetts",
          "occupation": "Lawyer",
          "status": "Week 1"
        }
      ]
    },
    "6": {
      "eligible": {
        "name": "Ali Fedotowsky",
        "age": "26",
        "hometown": "Williamstown, Massachusetts",
        "occupation": "advertising account manager",
        "status": "broke up"
      },
      "contestants": [
        {
          "name": "Roberto Martinez",
          "age": "26",
          "hometown": "Tampa, Florida",
          "occupation": "Insurance agent",
          "status": "Winner"
        },
        {
          "name": "Chris Lambton",
          "age": "33",
          "hometown": "Dennis, Massachusetts",
          "occupation": "Landscaper",
          "status": "Runner-Up"
        },
        {
          "name": "Frank Neuschaefer",
          "age": "31",
          "hometown": "Bartlett, Illinois",
          "occupation": "Retail Manager",
          "status": "Week 9"
        },
        {
          "name": "Kirk DeWindt",
          "age": "27",
          "hometown": "Green Bay, Wisconsin",
          "occupation": "Sales Consultant",
          "status": "Week 8"
        },
        {
          "name": "Ty Brown",
          "age": "31",
          "hometown": "Booneville, Mississippi",
          "occupation": "Medical Sales",
          "status": "Week 7"
        },
        {
          "name": "Craig Robinson",
          "age": "27",
          "hometown": "Langhorne, Pennsylvania",
          "occupation": "Lawyer",
          "status": "Week 6"
        },
        {
          "name": "Justin Rego",
          "age": "26",
          "hometown": "Toronto, Ontario",
          "occupation": "Entertainment Wrestler",
          "status": "Week 6"
        },
        {
          "name": "Chris Nordhorn",
          "age": "29",
          "hometown": "Winter Park, Florida",
          "occupation": "Entrepreneur",
          "status": "Week 5"
        },
        {
          "name": "Kasey Kahl",
          "age": "27",
          "hometown": "Fresno, California",
          "occupation": "Advertising Account Executive",
          "status": "Week 5"
        },
        {
          "name": "Jesse Beck",
          "age": "24",
          "hometown": "Peculiar, Missouri",
          "occupation": "General Contractor",
          "status": "Week 4"
        },
        {
          "name": "Jonathan Novack",
          "age": "30",
          "hometown": "Boston, Massachusetts",
          "occupation": "Weatherman",
          "status": "Week 4"
        },
        {
          "name": "John Crivello",
          "age": "32",
          "hometown": "Mukilteo, Washington",
          "occupation": "Hotel Business Development",
          "status": "Week 3"
        },
        {
          "name": "Steve Kocsis",
          "age": "28",
          "hometown": "Chesterland, Ohio",
          "occupation": "Sales Representative",
          "status": "Week 3"
        },
        {
          "name": "Hunter Wagner",
          "age": "28",
          "hometown": "Fair Oaks Ranch, Texas",
          "occupation": "Internet Account Executive",
          "status": "Week 3"
        },
        {
          "name": "Chris Hasek-Watt",
          "age": "27",
          "hometown": "Campbell River, British Columbia",
          "occupation": "Real Estate Developer",
          "status": "Week 2"
        },
        {
          "name": "Craig McKinnon",
          "age": "34",
          "hometown": "Sarnia, Ontario",
          "occupation": "Dental Sales",
          "status": "Week 2"
        },
        {
          "name": "Tyler Vermette",
          "age": "25",
          "hometown": "Chelsea, Vermont",
          "occupation": "Online Advertising",
          "status": "Week 2"
        },
        {
          "name": "Derek",
          "age": "28",
          "hometown": "Warren, Michigan",
          "occupation": "Sales Manager",
          "status": "Week 1"
        },
        {
          "name": "Derrick Schuster",
          "age": "27",
          "hometown": "Manhattan Beach, California",
          "occupation": "Construction Engineer",
          "status": "Week 1"
        },
        {
          "name": "Jason Whitehead",
          "age": "27",
          "hometown": "Johnson City, Tennessee",
          "occupation": "Construction Consultant",
          "status": "Week 1"
        },
        {
          "name": "Jay Resmini",
          "age": "29",
          "hometown": "Barrington, Rhode Island",
          "occupation": "Lawyer",
          "status": "Week 1"
        },
        {
          "name": "John N.",
          "age": "27",
          "hometown": "Wichita, Kansas",
          "occupation": "Engineering Software Sales",
          "status": "Week 1"
        },
        {
          "name": "Kyle Higgins",
          "age": "26",
          "hometown": "Highlands Ranch, Colorado",
          "occupation": "Outdoorsman",
          "status": "Week 1"
        },
        {
          "name": "Phil Kayden",
          "age": "30",
          "hometown": "Elmore, Ohio",
          "occupation": "Investment Manager",
          "status": "Week 1"
        },
        {
          "name": "Tyler Morrow",
          "age": "25",
          "hometown": "Helena, Montana",
          "occupation": "Catering Manager",
          "status": "Week 1"
        }
      ]
    },
    "7": {
      "eligible": {
        "name": "Ashley Hebert",
        "age": "27",
        "hometown": "Madawaska, Maine",
        "occupation": "children's hospital event planner",
        "status": "married"
      },
      "contestants": [
        {
          "name": "J.P. Rosenbaum",
          "age": "34",
          "hometown": "Roslyn, New York",
          "occupation": "Construction Manager",
          "status": "Winner"
        },
        {
          "name": "Ben Flajnik",
          "age": "28",
          "hometown": "Sonoma, California",
          "occupation": "Wine Maker",
          "status": "Runner-Up"
        },
        {
          "name": "Constantine Tzortzis",
          "age": "30",
          "hometown": "Cumming, Georgia",
          "occupation": "Restaurant Owner",
          "status": "Week 9"
        },
        {
          "name": "Ames Brown",
          "age": "31",
          "hometown": "Chadds Ford, Pennsylvania",
          "occupation": "Portfolio Manager",
          "status": "Week 8"
        },
        {
          "name": "Lucas Daniels",
          "age": "30",
          "hometown": "Odessa, Texas",
          "occupation": "Oilfield Equipment Distributor",
          "status": "Week 7"
        },
        {
          "name": "Ryan Park",
          "age": "31",
          "hometown": "San Luis Obispo, California",
          "occupation": "Solar Energy Executive",
          "status": "Week 7"
        },
        {
          "name": "Blake Julian",
          "age": "27",
          "hometown": "Steamboat Springs, Colorado",
          "occupation": "Dentist",
          "status": "Week 6"
        },
        {
          "name": "Ryan 'Mickey' McLean",
          "age": "31",
          "hometown": "Rochester, New York",
          "occupation": "Chef",
          "status": "Week 6 (quit)"
        },
        {
          "name": "Nick Peterson",
          "age": "26",
          "hometown": "Odessa, Florida",
          "occupation": "Personal Trainer",
          "status": "Week 5"
        },
        {
          "name": "William Holman",
          "age": "30",
          "hometown": "Fostoria, Ohio",
          "occupation": "Cellular Phone Salesman",
          "status": "Week 5"
        },
        {
          "name": "Ben Castoriano",
          "age": "28",
          "hometown": "Lake Charles, Louisiana",
          "occupation": "Lawyer",
          "status": "Week 5"
        },
        {
          "name": "West Lee",
          "age": "30",
          "hometown": "Walhalla, South Carolina",
          "occupation": "Lawyer",
          "status": "Week 4"
        },
        {
          "name": "Chris Drish",
          "age": "25",
          "hometown": "Moline, Illinois",
          "occupation": "Sports Marketing Coordinator",
          "status": "Week 3"
        },
        {
          "name": "Jeff Medolla",
          "age": "35",
          "hometown": "St. Louis, Missouri",
          "occupation": "Entrepreneur",
          "status": "Week 3"
        },
        {
          "name": "Bentley Williams",
          "age": "28",
          "hometown": "Alpine, Utah",
          "occupation": "Businessman",
          "status": "Week 3 (quit)"
        },
        {
          "name": "Matt Colombo",
          "age": "28",
          "hometown": "Bridgewater, Massachusetts",
          "occupation": "Office Supply Salesman",
          "status": "Week 2"
        },
        {
          "name": "Ryan Miller",
          "age": "27",
          "hometown": "Novi, Michigan",
          "occupation": "Constructor Estimator",
          "status": "Week 2"
        },
        {
          "name": "Stephen D'Amico",
          "age": "27",
          "hometown": "Portland, Connecticut",
          "occupation": "Hairstylist",
          "status": "Week 2"
        },
        {
          "name": "Anthony Santucci",
          "age": "28",
          "hometown": "Saddle River, New Jersey",
          "occupation": "Butcher",
          "status": "Week 1"
        },
        {
          "name": "Chris Malhomme",
          "age": "27",
          "hometown": "Gibbons, Alberta",
          "occupation": "Construction Company CEO",
          "status": "Week 1"
        },
        {
          "name": "Frank Carpenter",
          "age": "29",
          "hometown": "Anchorage, Alaska",
          "occupation": "College Admissions Director",
          "status": "Week 1"
        },
        {
          "name": "Jon Ellsworth",
          "age": "26",
          "hometown": "Vancouver, Washington",
          "occupation": "E-Commerce Executive",
          "status": "Week 1"
        },
        {
          "name": "Michael Burns",
          "age": "29",
          "hometown": "Providence, Rhode Island",
          "occupation": "Technology Salesman",
          "status": "Week 1"
        },
        {
          "name": "Rob Dahm",
          "age": "27",
          "hometown": "Monroe, Michigan",
          "occupation": "Technology Executive",
          "status": "Week 1"
        },
        {
          "name": "Tim McCormack",
          "age": "35",
          "hometown": "Massapequa, New York",
          "occupation": "Liquor Distributor",
          "status": "Week 1"
        }
      ]
    },
    "8": {
      "eligible": {
        "name": "Emily Maynard",
        "age": "26",
        "hometown": "Morgantown, West Virginia",
        "occupation": "Children's Hospital Event Planner",
        "status": "broke up"
      },
      "contestants": [
        {
          "name": "Jef Holm",
          "age": "27",
          "hometown": "St. George, Utah",
          "occupation": "Entrepreneur",
          "status": "Winner"
        },
        {
          "name": "Arie Luyendyk, Jr.",
          "age": "30",
          "hometown": "Scottsdale, Arizona",
          "occupation": "Race Car Driver",
          "status": "Runner-Up"
        },
        {
          "name": "Sean Lowe",
          "age": "28",
          "hometown": "Irving, Texas",
          "occupation": "Insurance agent",
          "status": "Week 9"
        },
        {
          "name": "Chris Bukowski",
          "age": "25",
          "hometown": "Chicago, Illinois",
          "occupation": "Corporate Sales Director",
          "status": "Week 8"
        },
        {
          "name": "John Wolfner",
          "age": "30",
          "hometown": "Creve Coeur, Missouri",
          "occupation": "Data Destruction Specialist",
          "status": "Week 7"
        },
        {
          "name": "Doug Clerget",
          "age": "33",
          "hometown": "Tacoma, Washington",
          "occupation": "Single Dad/Real Estate agent",
          "status": "Week 7"
        },
        {
          "name": "Ryan Bowers",
          "age": "31",
          "hometown": "Evans, Georgia",
          "occupation": "Pro Sports Trainer",
          "status": "Week 6"
        },
        {
          "name": "Travis Pope",
          "age": "30",
          "hometown": "Madison, Mississippi",
          "occupation": "Advertising Sales Representative",
          "status": "Week 6"
        },
        {
          "name": "Alejandro Velez",
          "age": "25",
          "hometown": "San Francisco, California",
          "occupation": "Mushroom Farmer",
          "status": "Week 5"
        },
        {
          "name": "Kalon McMahon",
          "age": "27",
          "hometown": "Houston, Texas",
          "occupation": "Luxury Brand Consultant",
          "status": "Week 5"
        },
        {
          "name": "Charlie Grogan",
          "age": "32",
          "hometown": "Worcester, Massachusetts",
          "occupation": "Recruiter",
          "status": "Week 4"
        },
        {
          "name": "Michael Nance",
          "age": "26",
          "hometown": "Austin, Texas",
          "occupation": "Rehab Counselor",
          "status": "Week 4"
        },
        {
          "name": "Nathan Baake",
          "age": "25",
          "hometown": "Casa Grande, Arizona",
          "occupation": "Accountant",
          "status": "Week 4"
        },
        {
          "name": "Stevie Alberino",
          "age": "26",
          "hometown": "Monroe Township, New Jersey",
          "occupation": "Party M.C.",
          "status": "Week 3"
        },
        {
          "name": "Alessandro Goulart",
          "age": "30",
          "hometown": "Saint Paul, Minnesota",
          "occupation": "Grain Merchant",
          "status": "Week 3"
        },
        {
          "name": "Tony Pieper",
          "age": "31",
          "hometown": "Beaverton, Oregon",
          "occupation": "Single Dad/Lumber Trader",
          "status": "Week 3"
        },
        {
          "name": "Aaron Martell",
          "age": "36",
          "hometown": "North Sydney, Nova Scotia",
          "occupation": "Biology Teacher",
          "status": "Week 2"
        },
        {
          "name": "Kyle Dillon",
          "age": "29",
          "hometown": "Long Beach, California",
          "occupation": "Financial Adviser",
          "status": "Week 2"
        },
        {
          "name": "Joe Gendreau",
          "age": "27",
          "hometown": "Orlando, Florida",
          "occupation": "Field Energy Adviser",
          "status": "Week 2"
        },
        {
          "name": "Brent Richter",
          "age": "41",
          "hometown": "Midland, Texas",
          "occupation": "Technology Salesman",
          "status": "Week 1"
        },
        {
          "name": "David Homyk",
          "age": "33",
          "hometown": "Charlottesville, Virginia",
          "occupation": "Singer/Songwriter",
          "status": "Week 1"
        },
        {
          "name": "Jackson Longnecker",
          "age": "29",
          "hometown": "Lockport, Illinois",
          "occupation": "Fitness Model",
          "status": "Week 1"
        },
        {
          "name": "Jean-Paul LaCount",
          "age": "35",
          "hometown": "Moraga, California",
          "occupation": "Marine Biologist",
          "status": "Week 1"
        },
        {
          "name": "Lerone Anu",
          "age": "29",
          "hometown": "Laguna Beach, California",
          "occupation": "Real Estate Consultant",
          "status": "Week 1"
        },
        {
          "name": "Randy Lee Woyak",
          "age": "30",
          "hometown": "Oak Creek, Wisconsin",
          "occupation": "Marketing Manager",
          "status": "Week 1"
        }
      ]
    },
    "9": {
      "eligible": {
        "name": "Desiree Hartsock",
        "age": "27",
        "hometown": "Northglenn, Colorado",
        "occupation": "bridal stylist",
        "status": "married"
      },
      "contestants": [
        {
          "name": "Chris Siegfried",
          "age": "27",
          "hometown": "McMinnville, Oregon",
          "occupation": "Mortgage Broker",
          "status": "Winner"
        },
        {
          "name": "Drew Kenney",
          "age": "27",
          "hometown": "Scottsdale, Arizona",
          "occupation": "Digital Marketing Analyst",
          "status": "Runner-Up"
        },
        {
          "name": "Brooks Forester",
          "age": "28",
          "hometown": "Blackfoot, Idaho",
          "occupation": "Sales & Marketing",
          "status": "Week 9"
        },
        {
          "name": "Zak Waddell",
          "age": "31",
          "hometown": "Dallas, Texas",
          "occupation": "Drilling Fluid Engineer",
          "status": "Week 8"
        },
        {
          "name": "Michael Garofola",
          "age": "33",
          "hometown": "Lindenhurst, New York",
          "occupation": "Federal Prosecutor",
          "status": "Week 7"
        },
        {
          "name": "James Case",
          "age": "27",
          "hometown": "Marietta, Georgia",
          "occupation": "Advertising Executive",
          "status": "Week 6"
        },
        {
          "name": "Juan Pablo Galavis",
          "age": "31",
          "hometown": "Barquisimeto, Venezuela",
          "occupation": "Former Pro Soccer Player",
          "status": "Week 6"
        },
        {
          "name": "Kasey Stewart",
          "age": "29",
          "hometown": "Tulsa, Oklahoma",
          "occupation": "Advertising Executive",
          "status": "Week 6"
        },
        {
          "name": "Mikey Tenerelli",
          "age": "30",
          "hometown": "Glen Ellyn, Illinois",
          "occupation": "Plumbing Contractor",
          "status": "Week 5"
        },
        {
          "name": "Ben Scott",
          "age": "28",
          "hometown": "Lubbock, Texas",
          "occupation": "Entrepreneur",
          "status": "Week 5"
        },
        {
          "name": "Bryden Vukasin",
          "age": "26",
          "hometown": "Havre, Montana",
          "occupation": "Iraq War Veteran",
          "status": "Week 5 (quit)"
        },
        {
          "name": "Zack Kalter",
          "age": "28",
          "hometown": "Phillips Ranch, California",
          "occupation": "Book Publisher",
          "status": "Week 4"
        },
        {
          "name": "Brad McKinzie",
          "age": "27",
          "hometown": "Denver, Colorado",
          "occupation": "Accountant/DJ",
          "status": "Week 4"
        },
        {
          "name": "Brandon Andreen",
          "age": "26",
          "hometown": "Blaine, Minnesota",
          "occupation": "Painting Contractor",
          "status": "Week 3"
        },
        {
          "name": "Dan Cox",
          "age": "30",
          "hometown": "Dublin, California",
          "occupation": "Beverage Sales Director",
          "status": "Week 3"
        },
        {
          "name": "Brian Jarosinski",
          "age": "29",
          "hometown": "Olney, Maryland",
          "occupation": "Financial Advisor",
          "status": "Week 3"
        },
        {
          "name": "Nick Mucci",
          "age": "27",
          "hometown": "Rochester, New York",
          "occupation": "Investment Adviser",
          "status": "Week 2"
        },
        {
          "name": "Robert Graham",
          "age": "30",
          "hometown": "Glendale, Arizona",
          "occupation": "Advertising Entrepreneur",
          "status": "Week 2"
        },
        {
          "name": "Will Reese",
          "age": "28",
          "hometown": "Federal Way, Washington",
          "occupation": "Banker",
          "status": "Week 2"
        },
        {
          "name": "Diogo Custodio",
          "age": "29",
          "hometown": "Penha, Brazil",
          "occupation": "Ski Resort Manager",
          "status": "Week 1"
        },
        {
          "name": "Larry Burchett",
          "age": "34",
          "hometown": "Overland Park, Kansas",
          "occupation": "ER Doctor",
          "status": "Week 1"
        },
        {
          "name": "Micah",
          "age": "32",
          "hometown": "Detroit Lakes, Minnesota",
          "occupation": "Law Student",
          "status": "Week 1"
        },
        {
          "name": "Mike",
          "age": "28",
          "hometown": "London, England",
          "occupation": "Dental Student",
          "status": "Week 1"
        },
        {
          "name": "Nick Roy",
          "age": "26",
          "hometown": "Ridgefield, Connecticut",
          "occupation": "Tailor/Magician",
          "status": "Week 1"
        },
        {
          "name": "Jonathan Vollinger",
          "age": "26",
          "hometown": "Hickory, North Carolina",
          "occupation": "Lawyer",
          "status": "Week 1"
        }
      ]
    },
    "10": {
      "eligible": {
        "name": "Andi Dorfman,",
        "age": "26",
        "hometown": "Atlanta, Georgia",
        "occupation": "assistant district attorney",
        "status": "broke up"
      },
      "contestants": [
        {
          "name": "Josh Murray",
          "age": "29",
          "hometown": "Athens, Georgia",
          "occupation": "Former Professional Baseball Player",
          "status": "Winner"
        },
        {
          "name": "Nick Viall",
          "age": "33",
          "hometown": "Waukesha, Wisconsin",
          "occupation": "Software Sales Executive",
          "status": "Runner-Up"
        },
        {
          "name": "Chris Soules",
          "age": "32",
          "hometown": "Lamont, Iowa",
          "occupation": "Farmer",
          "status": "Week 9"
        },
        {
          "name": "Marcus Grodd",
          "age": "25",
          "hometown": "Medicine Hat, Alberta",
          "occupation": "Sports Medicine Manager",
          "status": "Week 8"
        },
        {
          "name": "Brian Osborne",
          "age": "27",
          "hometown": "Camp Hill, Pennsylvania",
          "occupation": "Basketball Coach",
          "status": "Week 7"
        },
        {
          "name": "Dylan Petitt",
          "age": "26",
          "hometown": "Longmeadow, Massachusetts",
          "occupation": "Accountant",
          "status": "Week 7"
        },
        {
          "name": "J.J. O'Brien",
          "age": "30",
          "hometown": "Hanover, Massachusetts",
          "occupation": "Pantsapreneur",
          "status": "Week 6"
        },
        {
          "name": "Cody Sattler",
          "age": "28",
          "hometown": "Oakley, Kansas",
          "occupation": "Personal Trainer",
          "status": "Week 6"
        },
        {
          "name": "Andrew Poole",
          "age": "30",
          "hometown": "Portola Valley, California",
          "occupation": "Social Media Marketer",
          "status": "Week 5"
        },
        {
          "name": "Marquel Martin",
          "age": "26",
          "hometown": "Rialto, California",
          "occupation": "Sponsorship Salesman",
          "status": "Week 5"
        },
        {
          "name": "Patrick Jagodzinski",
          "age": "29",
          "hometown": "Clinton, New Jersey",
          "occupation": "Advertising Executive",
          "status": "Week 5"
        },
        {
          "name": "Tasos Hernandez",
          "age": "30",
          "hometown": "Denver, Colorado",
          "occupation": "Wedding Event Coordinator",
          "status": "Week 4"
        },
        {
          "name": "Eric Hill",
          "age": "31",
          "hometown": "Citrus Heights, California",
          "occupation": "Explorer",
          "status": "Week 4"
        },
        {
          "name": "Bradley Wisk",
          "age": "32",
          "hometown": "Grosse Pointe, Michigan",
          "occupation": "Opera Singer",
          "status": "Week 3"
        },
        {
          "name": "Brett Melnick",
          "age": "29",
          "hometown": "Warminster, Pennsylvania",
          "occupation": "Hairstylist",
          "status": "Week 3"
        },
        {
          "name": "Ron Worrell",
          "age": "28",
          "hometown": "Nahariya, Israel",
          "occupation": "Beverage Sales Manager",
          "status": "Week 3 (quit)"
        },
        {
          "name": "Carl King",
          "age": "30",
          "hometown": "Hollywood, California",
          "occupation": "Firefighter",
          "status": "Week 2"
        },
        {
          "name": "Craig Muhlbauer",
          "age": "29",
          "hometown": "Defiance, Iowa",
          "occupation": "Tax Accountant",
          "status": "Week 2"
        },
        {
          "name": "Nick Sutter",
          "age": "27",
          "hometown": "Barrington, Illinois",
          "occupation": "Professional Golfer",
          "status": "Week 2"
        },
        {
          "name": "Emil Schaffroth",
          "age": "33",
          "hometown": "Portland, Oregon",
          "occupation": "Helicopter Pilot",
          "status": "Week 1"
        },
        {
          "name": "Jason Leep",
          "age": "35",
          "hometown": "Sturgeon Bay, Wisconsin",
          "occupation": "Urgent Care Physician",
          "status": "Week 1"
        },
        {
          "name": "Josh Bauer",
          "age": "29",
          "hometown": "Evergreen, Colorado",
          "occupation": "Telecommunication Marketer",
          "status": "Week 1"
        },
        {
          "name": "Mike Campanelli",
          "age": "29",
          "hometown": "Guilderland, New York",
          "occupation": "Bartender",
          "status": "Week 1"
        },
        {
          "name": "Rudie Dane",
          "age": "31",
          "hometown": "Yorba Linda, California",
          "occupation": "Attorney",
          "status": "Week 1"
        },
        {
          "name": "Steven Woolworth",
          "age": "30",
          "hometown": "Meadow Vista, California",
          "occupation": "Snowboard Product Developer",
          "status": "Week 1"
        }
      ]
    },
    "11": {
      "eligible": {
        "name": "Kaitlyn Bristowe",
        "age": "27",
        "hometown": "Vancouver, British Columbia",
        "occupation": "spin-class instructor",
        "status": "engaged"
      },
      "contestants": [
        {
          "name": "Shawn Booth",
          "age": "28",
          "hometown": "Windsor Locks, Connecticut",
          "occupation": "Personal Trainer",
          "status": "Winner"
        },
        {
          "name": "Nick Viall",
          "age": "34",
          "hometown": "Waukesha, Wisconsin",
          "occupation": "Software Sales Executive",
          "status": "Runner-Up"
        },
        {
          "name": "Ben Higgins",
          "age": "26",
          "hometown": "Warsaw, Indiana",
          "occupation": "Software Salesman",
          "status": "Week 8"
        },
        {
          "name": "Jared Haibon",
          "age": "26",
          "hometown": "Warwick, Rhode Island",
          "occupation": "Restaurant Manager",
          "status": "Week 7"
        },
        {
          "name": "Joe Bailey",
          "age": "28",
          "hometown": "Glasgow, Kentucky",
          "occupation": "Insurance agent",
          "status": "Week 7"
        },
        {
          "name": "Chris Strandburg",
          "age": "28",
          "hometown": "Granite Bay, California",
          "occupation": "Dentist",
          "status": "Week 7"
        },
        {
          "name": "Ben Zorn",
          "age": "26",
          "hometown": "Falls Church, Virginia",
          "occupation": "Fitness Coach",
          "status": "Week 6"
        },
        {
          "name": "Tanner Tolbert",
          "age": "28",
          "hometown": "Stilwell, Kansas",
          "occupation": "Auto Finance Manager",
          "status": "Week 6"
        },
        {
          "name": "J.J. Lane III",
          "age": "32",
          "hometown": "Dacono, Colorado",
          "occupation": "Former Investment Banker",
          "status": "Week 6"
        },
        {
          "name": "Joshua Albers",
          "age": "31",
          "hometown": "Kuna, Idaho",
          "occupation": "Industrial Welder",
          "status": "Week 5"
        },
        {
          "name": "Justin Reich",
          "age": "28",
          "hometown": "Elgin, Illinois",
          "occupation": "Fitness Trainer",
          "status": "Week 5"
        },
        {
          "name": "Ian Thomson",
          "age": "28",
          "hometown": "Ramsey, New Jersey",
          "occupation": "Executive Recruiter",
          "status": "Week 5 (quit)"
        },
        {
          "name": "Corey Stansell",
          "age": "30",
          "hometown": "New York, New York",
          "occupation": "Investment Banker",
          "status": "Week 4"
        },
        {
          "name": "Jonathan Holloway",
          "age": "33",
          "hometown": "Sylvan Lake, Michigan",
          "occupation": "Automotive Spokesman",
          "status": "Week 4"
        },
        {
          "name": "Ryan Beckett",
          "age": "32",
          "hometown": "Wellington, Florida",
          "occupation": "Realtor",
          "status": "Week 4"
        },
        {
          "name": "Clint Arlis",
          "age": "27",
          "hometown": "Batavia, Illinois",
          "occupation": "Architectural Engineer",
          "status": "Week 3"
        },
        {
          "name": "Tony Harris",
          "age": "35",
          "hometown": "St. Louis, Missouri",
          "occupation": "Healer",
          "status": "Week 3 (quit)"
        },
        {
          "name": "Cory Shivar (NC)",
          "age": "35",
          "hometown": "Seven Springs, North Carolina",
          "occupation": "Residential Developer",
          "status": "Week 2"
        },
        {
          "name": "Daniel Finney",
          "age": "28",
          "hometown": "Nashville, Tennessee",
          "occupation": "Fashion Designer",
          "status": "Week 2"
        },
        {
          "name": "Kupah James",
          "age": "32",
          "hometown": "Boston, Massachusetts",
          "occupation": "Entrepreneur",
          "status": "Week 2"
        },
        {
          "name": "Bradley Cox",
          "age": "25",
          "hometown": "Duluth, Georgia",
          "occupation": "International Auto Shipper",
          "status": "Week 1"
        },
        {
          "name": "David",
          "age": "28",
          "hometown": "Orlando, Florida",
          "occupation": "Real Estate agent",
          "status": "Week 1"
        },
        {
          "name": "Josh Seiter",
          "age": "27",
          "hometown": "Chicago, Illinois",
          "occupation": "Law Student/Exotic Dancer",
          "status": "Week 1"
        },
        {
          "name": "Shawn Evans",
          "age": "31",
          "hometown": "London, Ontario",
          "occupation": "Amateur Sex Coach",
          "status": "Week 1"
        },
        {
          "name": "Brady Toops",
          "age": "33",
          "hometown": "Wauseon, Ohio",
          "occupation": "Singer/Songwriter",
          "status": "Week 1 (quit)"
        },
        {
          "name": "Ryan McDill",
          "age": "28",
          "hometown": "Kansas City, Missouri",
          "occupation": "Junkyard Specialist",
          "status": "Week 1"
        }
      ]
    },
    "12": {
      "eligible": {
        "name": "Joelle 'JoJo' Fletcher",
        "age": "25",
        "hometown": "Dallas, Texas",
        "occupation": "real estate developer",
        "status": "engaged"
      },
      "contestants": [
        {
          "name": "Jordan Rodgers",
          "age": "27",
          "hometown": "Chico, California",
          "occupation": "Former Pro Quarterback",
          "status": "Winner"
        },
        {
          "name": "Robby Hayes",
          "age": "27",
          "hometown": "St. Augustine, Florida",
          "occupation": "Former Competitive Swimmer",
          "status": "Runner-Up"
        },
        {
          "name": "Chase McNary",
          "age": "27",
          "hometown": "Castle Rock, Colorado",
          "occupation": "Medical Sales Rep",
          "status": "Week 9"
        },
        {
          "name": "Luke Pell",
          "age": "31",
          "hometown": "Burnet, Texas",
          "occupation": "War Veteran",
          "status": "Week 8"
        },
        {
          "name": "James Taylor",
          "age": "29",
          "hometown": "Katy, Texas",
          "occupation": "Singer-Songwriter",
          "status": "Week 7"
        },
        {
          "name": "Alex Woytkiw",
          "age": "25",
          "hometown": "Oceanside, California",
          "occupation": "U.S. Marine",
          "status": "Week 7"
        },
        {
          "name": "Derek Peth",
          "age": "29",
          "hometown": "Waverly, Iowa",
          "occupation": "Commercial Banker",
          "status": "Week 6"
        },
        {
          "name": "Wells Adams",
          "age": "31",
          "hometown": "Monterey, California",
          "occupation": "Radio DJ",
          "status": "Week 6"
        },
        {
          "name": "Evan Bass",
          "age": "33",
          "hometown": "Hartford, Connecticut",
          "occupation": "Erectile Dysfunction Specialist",
          "status": "Week 5"
        },
        {
          "name": "Grant Kemp",
          "age": "27",
          "hometown": "San Francisco, California",
          "occupation": "Firefighter",
          "status": "Week 5"
        },
        {
          "name": "Vincent 'Vinny' Ventiera",
          "age": "28",
          "hometown": "Kings Park, New York",
          "occupation": "Barber",
          "status": "Week 5"
        },
        {
          "name": "Daniel Maguire",
          "age": "31",
          "hometown": "Lions Bay, British Columbia",
          "occupation": "Male Model",
          "status": "Week 4"
        },
        {
          "name": "James Fuertes",
          "age": "34",
          "hometown": "Franklin, Tennessee",
          "occupation": "Boxing Club Owner",
          "status": "Week 4"
        },
        {
          "name": "Chad Johnson",
          "age": "28",
          "hometown": "Jenks, Oklahoma",
          "occupation": "Luxury Real Estate agent",
          "status": "Week 4"
        },
        {
          "name": "Ali Zahiri",
          "age": "27",
          "hometown": "Santa Monica, California",
          "occupation": "Bartender",
          "status": "Week 3"
        },
        {
          "name": "Christian Bishop",
          "age": "26",
          "hometown": "Los Angeles, California",
          "occupation": "Telecom Consultant",
          "status": "Week 3"
        },
        {
          "name": "Nick Benvenutti",
          "age": "33",
          "hometown": "Carthage, Illinois",
          "occupation": "Electrical Engineer",
          "status": "Week 3"
        },
        {
          "name": "Brandon Howell",
          "age": "28",
          "hometown": "Marysville, Washington",
          "occupation": "Hipster",
          "status": "Week 2"
        },
        {
          "name": "James Spadafore",
          "age": "27",
          "hometown": "Phoenix, Arizona",
          "occupation": "Bachelor Superfan",
          "status": "Week 2"
        },
        {
          "name": "Will Haduch",
          "age": "26",
          "hometown": "Jersey City, New Jersey",
          "occupation": "Civil Engineer",
          "status": "Week 2"
        },
        {
          "name": "Coley Knust",
          "age": "27",
          "hometown": "Chicago, Illinois",
          "occupation": "Real Estate Consultant",
          "status": "Week 1"
        },
        {
          "name": "Jake Patton",
          "age": "26",
          "hometown": "Playa Vista, California",
          "occupation": "Landscape Architect",
          "status": "Week 1"
        },
        {
          "name": "Jonathan Hamilton",
          "age": "29",
          "hometown": "Vancouver, British Columbia",
          "occupation": "Technical Sales Rep",
          "status": "Week 1"
        },
        {
          "name": "Nick Sharp",
          "age": "26",
          "hometown": "San Francisco, California",
          "occupation": "Software Salesman",
          "status": "Week 1"
        },
        {
          "name": "Peter Medina",
          "age": "26",
          "hometown": "Rockdale, Illinois",
          "occupation": "Staffing agency Manager",
          "status": "Week 1"
        },
        {
          "name": "Sal DeJulio",
          "age": "28",
          "hometown": "Hubbard, Ohio",
          "occupation": "Operations Manager",
          "status": "Week 1"
        }
      ]
    },
    "13": {
      "eligible": {
        "name": "Rachel Lindsay",
        "age": "32",
        "hometown": "Dallas, Texas",
        "occupation": "attorney",
        "status": "engaged"
      },
      "contestants": [
        {
          "name": "Bryan Abasolo",
          "age": "37",
          "hometown": "Miami, Florida",
          "occupation": "Chiropractor",
          "status": "Winner"
        },
        {
          "name": "Peter Kraus ",
          "age": "31",
          "hometown": "Madison, Wisconsin",
          "occupation": "Business Owner",
          "status": "Runner-Up"
        },
        {
          "name": "Eric Bigger",
          "age": "29",
          "hometown": "Baltimore, Maryland",
          "occupation": "Personal Trainer",
          "status": "Week 9"
        },
        {
          "name": "Dean Unglert",
          "age": "26",
          "hometown": "Aspen, Colorado",
          "occupation": "Startup Recruiter",
          "status": "Week 8",
        },
        {
          "name": "Adam Gottschalk",
          "age": "27",
          "hometown": "Dallas, Texas",
          "occupation": "Real Estate agent",
          "status": "Week 7",
        },
        {
          "name": "Matthew 'Matt' Munson",
          "age": "32",
          "hometown": "Meriden, Connecticut",
          "occupation": "Construction Sales Rep",
          "status": "Week 6"
        },
        {
          "name": "Aleksandr 'Alex' Bordyukov",
          "age": "28",
          "hometown": "Grosse Pointe, Michigan",
          "occupation": "Information Systems Supervisor",
          "status": "Week 6",
        },
        {
          "name": "William 'Will' Gaskins",
          "age": "28",
          "hometown": "White Plains, New York",
          "occupation": "Sales Manager",
          "status": "Week 8"
        },
        {
          "name": "Kenny Layne",
          "age": "35",
          "hometown": "Orlando, Florida",
          "occupation": "Professional Wrestler",
          "status": "Week 9"
        },
        {
          "name": "Anthony Battle",
          "age": "26",
          "hometown": "Chicago, Illinois",
          "occupation": "Education Software Manager",
          "status": "Week 5",
        },
        {
          "name": "Josiah Graham",
          "age": "28",
          "hometown": "Plantation, Florida",
          "occupation": "Prosecuting Attorney",
          "status": "unknown"
        },
        {
          "name": "Lee Garrett",
          "age": "30",
          "hometown": "Jacksonville, Florida",
          "occupation": "Singer/Songwriter",
          "status": "Week 12"
        },
        {
          "name": "Ignacio 'Iggy' Rodriguez",
          "age": "30",
          "hometown": "Pasadena, California",
          "occupation": "Consulting Firm CEO",
          "status": "Week 4",
        },
        {
          "name": "Jonathan Treece",
          "age": "31",
          "hometown": "New Smyrna Beach, Florida",
          "occupation": "Tickle Monster"
        },
        {
          "name": "Jack Stone",
          "age": "32",
          "hometown": "Dallas, Texas",
          "occupation": "Attorney",
          "status": "unknown",
        },
        {
          "name": "Brady Ervin",
          "age": "29",
          "hometown": "Eden Prairie, Minnesota",
          "occupation": "Male Model",
          "status": "Week 3",
        },
        {
          "name": "Kenneth 'Diggy' Moreland",
          "age": "31",
          "hometown": "Chicago, Illinois",
          "occupation": "Senior Inventory Analyst"
        },
        {
          "name": "Bryce Powers",
          "age": "30",
          "hometown": "Orlando, Florida",
          "occupation": "Firefighter"
        },
        {
          "name": "Frederick 'Fred' Johnson",
          "age": "27",
          "hometown": "Dallas, Texas",
          "occupation": "Executive Assistant",
          "status": "unknown",
        },
        {
          "name": "Blake Elarbee",
          "age": "31",
          "hometown": "Marina del Rey, California",
          "occupation": "Aspiring Drummer",
          "status": "Week 2",
        },
        {
          "name": "James 'Jamey' Kocan",
          "age": "32",
          "hometown": "Santa Monica, California",
          "occupation": "Sales Account Executive"
        },
        {
          "name": "Lucas Yancey",
          "age": "30",
          "hometown": "Woodside, California",
          "occupation": "Whaboom"
        },
        {
          "name": "DeMario Jackson",
          "age": "30",
          "hometown": "Century City, California",
          "occupation": "Executive Recruiter",
          "status": "unknown",
        },
        {
          "name": "Jedidiah Ballard",
          "age": "35",
          "hometown": "Augusta, Georgia",
          "occupation": "ER Physician",
          "status": "Week 1",
        },
        {
          "name": "Michael Black",
          "age": "26",
          "hometown": "Chicago, Illinois",
          "occupation": "Former Professional Basketball Player"
        },
        {
          "name": "Robert 'Rob' Howard",
          "age": "30",
          "hometown": "Calgary, Canada",
          "occupation": "Law Student"
        },
        {
          "name": "Grant Hubsher",
          "age": "29",
          "hometown": "Palm Harbor, Florida",
          "occupation": "Emergency Medicine Physician"
        },
        {
          "name": "Blake Killpack",
          "age": "29",
          "hometown": "San Francisco, California",
          "occupation": "U.S. Marine Veteran"
        },
        {
          "name": "Milton LaCroix",
          "age": "31",
          "hometown": "North Bay Village, Florida",
          "occupation": "Hotel Recreation Supervisor"
        },
        {
          "name": "Mohit Sehgal",
          "age": "26",
          "hometown": "Pacifica, California",
          "occupation": "Product Manager"
        },
        {
          "name": "Kyle Sherwood",
          "age": "26",
          "hometown": "Stratford, Connecticut",
          "occupation": "Marketing Consultant"
        }
      ]
    },
    "14": {
      "eligible": {
        "name": "Rebecca 'Becca' Kufrin",
        "hometown": "Prior Lake, Minnesota",
        "occupation": "Publicist",
        "age": "28",
        "status": "engaged"
      },
      "contestants": [
        {
          "name": "Garrett Yrigoyen",
          "age": "29",
          "hometown": "Manteca, California",
          "occupation": "Medical Sales Representative",
          "status": "Winner"
        },
        {
          "name": "Blake Horstmann",
          "age": "28",
          "hometown": "Bailey, Colorado",
          "occupation": "Sales Rep",
          "status": "Runner-Up"
        },
        {
          "name": "Jason Tartick ",
          "age": "29",
          "hometown": "Buffalo, New York",
          "occupation": "Senior Corporate Banker",
          "status": "Week 9"
        },
        {
          "name": "Colton Underwood",
          "age": "26",
          "hometown": "Washington, Illinois",
          "occupation": "Former Pro Football Player",
          "status": "Week 8"
        },
        {
          "name": "William 'Wills' Reid",
          "age": "29",
          "hometown": "Los Angeles, California",
          "occupation": "Graphic Designer",
          "status": "Week 7"
        },
        {
          "name": "Leandro 'Leo' Dottavio",
          "age": "31",
          "hometown": "Los Angeles, California",
          "occupation": "Actor",
          "status": "Week 6"
        },
        {
          "name": "Connor Obrochta",
          "age": "25",
          "hometown": "St. Petersburg, Florida",
          "occupation": "Fitness Coach",
          "status": "Week 6"
        },
        {
          "name": "Lincoln Adim",
          "age": "26",
          "hometown": "Boston, Massachusetts",
          "occupation": "Account Sales Executive"
        },
        {
          "name": "Chris Randone",
          "age": "30",
          "hometown": "Pleasantville, New York",
          "occupation": "Sales Trainer",
          "status": "Week 9"
        },
        {
          "name": "John Graham",
          "age": "28",
          "hometown": "Chicago, Illinois",
          "occupation": "Software Engineer",
          "status": "Week 5"
        },
        {
          "name": "Jordan Kimball ",
          "age": "26",
          "hometown": "Crystal River, Florida",
          "occupation": "Male Model",
          "status": "unknown"
        },
        {
          "name": "David Ravitz",
          "age": "25",
          "hometown": "Cherry Hill, New Jersey",
          "occupation": "Venture Capitalist",
          "status": "unknown"
        },
        {
          "name": "Christon Staples",
          "age": "31",
          "hometown": "Los Angeles, California",
          "occupation": "Former Harlem Globetrotter",
          "status": "Week 4"
        },
        {
          "name": "Nicholas 'Nick' Spetsas",
          "age": "27",
          "hometown": "Palm Coast, Florida",
          "occupation": "Attorney",
          "status": "unknown"
        },
        {
          "name": "Jean Blanc",
          "age": "31",
          "hometown": "Boston, Massachusetts",
          "occupation": "Colognoisseur",
          "status": "unknown"
        },
        {
          "name": "Michael 'Mike' Renner",
          "age": "27",
          "hometown": "Cincinnati, Ohio",
          "occupation": "Sports Analyst",
          "status": "Week 3",
        },
        {
          "name": "Ryan Peterson",
          "age": "26",
          "hometown": "Mashpee, Massachusetts",
          "occupation": "Banjoist",
          "status": "unknown"
        },
        {
          "name": "Clay Harbor",
          "age": "30",
          "hometown": "Chicago, Illinois",
          "occupation": "Pro Football Player",
          "status": "unknown"
        },
        {
          "name": "Alex Templeman",
          "age": "31",
          "hometown": "Atlanta, Georgia",
          "occupation": "Construction Manager",
          "status": "Week 2"
        },
        {
          "name": "Rickey Jasper",
          "age": "27",
          "hometown": "Ashburn, Virginia",
          "occupation": "IT Consultant",
          "status": "unknown"
        },
        {
          "name": "Trent Jespersen",
          "age": "28",
          "hometown": "Carroll, Iowa",
          "occupation": "Realtor",
            "status": "unknown"
        },
        {
          "name": "Chase Vergason",
          "age": "27",
          "hometown": "Sanford, Florida",
          "occupation": "Advertising Vice President",
          "status": "Week 1"
        },
        {
          "name": "Christian Estrada",
          "age": "28",
          "hometown": "San Diego, California",
          "occupation": "Banker",
            "status": "unknown"
        },
        {
          "name": "Darius Feaster",
          "age": "26",
          "hometown": "Sherman Oaks, California",
          "occupation": "Pharmaceutical Sales Rep",
            "status": "unknown"
        },
        {
          "name": "Grant Vandevanter",
          "age": "27",
          "hometown": "Danville, California",
          "occupation": "Electrician",
            "status": "unknown"
        },
        {
          "name": "Joe Amabile",
          "age": "31",
          "hometown": "Chicago, Illinois",
          "occupation": "Grocery Store Owner",
            "status": "unknown"
        },
        {
          "name": "Kamil Nicalek",
          "age": "30",
          "hometown": "Monroe, New York",
          "occupation": "Social Media Participant",
            "status": "unknown"
        },
        {
          "name": "Jake Enyeart",
          "age": "29",
          "hometown": "Minneapolis, Minnesota",
          "occupation": "Marketing Consultant",
          "status": "unknown"
        }
      ]
    }
  }
};

const data: DataInterface = {...bacheloretteData, ...bachelorData};
