// Bundled airport geometry for India, drawn at true geographic position so
// departures and arrivals visibly line up with the runways. Runway endpoint
// coordinates and widths are from the OurAirports dataset (public domain):
// https://github.com/davidmegginson/ourairports-data
//
// 215 airports with runway geometry, sorted large -> small.
// To add airports elsewhere, append entries in the same shape.

export interface Runway {
  leIdent: string;
  heIdent: string;
  le: [number, number]; // [lat, lon]
  he: [number, number];
  widthFt: number;
}

export interface Airport {
  icao: string;
  /** Short label drawn on the map (IATA where available, else local code). */
  code: string;
  /** Full airport name. */
  name: string;
  type: "large_airport" | "medium_airport" | "small_airport";
  runways: Runway[];
}

export const AIRPORTS: Airport[] = [
  {
    icao: "VAAH",
    code: "AMD",
    name: "Sardar Vallabh Patel International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [23.066, 72.622704], he: [23.0884, 72.646599], widthFt: 150 },
    ],
  },
  {
    icao: "VIAR",
    code: "ATQ",
    name: "Sri Guru Ram Das Ji International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "16", heIdent: "34", le: [31.723301, 74.790604], he: [31.6959, 74.803902], widthFt: 148 },
    ],
  },
  {
    icao: "VEBS",
    code: "BBI",
    name: "Biju Patnaik International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [20.2402, 85.812302], he: [20.2484, 85.823196], widthFt: 150 },
      { leIdent: "14", heIdent: "32", le: [20.2572, 85.8078], he: [20.2409, 85.820503], widthFt: 150 },
    ],
  },
  {
    icao: "VABO",
    code: "BDQ",
    name: "Vadodara International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [22.328199, 73.218002], he: [22.344101, 73.234596], widthFt: 150 },
    ],
  },
  {
    icao: "VABP",
    code: "BHO",
    name: "Raja Bhoj International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [23.291401, 77.323997], he: [23.282801, 77.341698], widthFt: 148 },
    ],
  },
  {
    icao: "VOBL",
    code: "BLR",
    name: "Kempegowda International Airport Bengaluru",
    type: "large_airport",
    runways: [
      { leIdent: "09L", heIdent: "27R", le: [13.207164, 77.686073], he: [13.206847, 77.722969], widthFt: 148 },
      { leIdent: "09R", heIdent: "27L", le: [13.189734, 77.68998], he: [13.189414, 77.726875], widthFt: 148 },
    ],
  },
  {
    icao: "VABB",
    code: "BOM",
    name: "Chhatrapati Shivaji Maharaj International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [19.0884, 72.848], he: [19.0889, 72.881104], widthFt: 197 },
      { leIdent: "14", heIdent: "32", le: [19.098499, 72.8573], he: [19.080099, 72.877197], widthFt: 148 },
    ],
  },
  {
    icao: "VOCL",
    code: "CCJ",
    name: "Calicut International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [11.1393, 75.942398], he: [11.1344, 75.968201], widthFt: 150 },
    ],
  },
  {
    icao: "VECC",
    code: "CCU",
    name: "Netaji Subhash Chandra Bose International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "01L", heIdent: "19R", le: [22.6402, 88.444], he: [22.661699, 88.446503], widthFt: 150 },
      { leIdent: "01R", heIdent: "19L", le: [22.6422, 88.446297], he: [22.674801, 88.450104], widthFt: 150 },
    ],
  },
  {
    icao: "VOCB",
    code: "CJB",
    name: "Coimbatore International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [11.0219, 77.034897], he: [11.0382, 77.051903], widthFt: 150 },
    ],
  },
  {
    icao: "VOCI",
    code: "COK",
    name: "Cochin International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [10.1514, 76.386398], he: [10.1526, 76.417397], widthFt: 148 },
    ],
  },
  {
    icao: "VIDP",
    code: "DEL",
    name: "Indira Gandhi International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [28.570499, 77.087997], he: [28.569799, 77.116997], widthFt: 148 },
      { leIdent: "10", heIdent: "28", le: [28.5672, 77.084801], he: [28.5585, 77.122498], widthFt: 148 },
      { leIdent: "11L", heIdent: "29R", le: [28.550125, 77.068176], he: [28.540747, 77.111877], widthFt: 148 },
      { leIdent: "11R", heIdent: "29L", le: [28.547171, 77.065491], he: [28.537729, 77.109528], widthFt: 197 },
    ],
  },
  {
    icao: "VEGT",
    code: "GAU",
    name: "Lokpriya Gopinath Bordoloi International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "02", heIdent: "20", le: [26.0947, 91.580597], he: [26.1175, 91.591202], widthFt: 150 },
    ],
  },
  {
    icao: "VOGO",
    code: "GOI",
    name: "Goa Dabolim International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [15.3778, 73.815598], he: [15.3839, 73.847198], widthFt: 148 },
    ],
  },
  {
    icao: "VOGA",
    code: "GOX",
    name: "Manohar International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [15.745697, 73.844513], he: [15.743109, 73.877076], widthFt: 148 },
    ],
  },
  {
    icao: "VAHS",
    code: "HSR",
    name: "Rajkot International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [22.36997, 71.02877], he: [22.38831, 71.05073], widthFt: 148 },
    ],
  },
  {
    icao: "VIHR",
    code: "HSS",
    name: "Maharaja Agrasen International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [29.182199, 75.749901], he: [29.176701, 75.760696], widthFt: 150 },
    ],
  },
  {
    icao: "VIHX",
    code: "HWR",
    name: "Halwara International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [30.756701, 75.619003], he: [30.7404, 75.640602], widthFt: 148 },
    ],
  },
  {
    icao: "VOHS",
    code: "HYD",
    name: "Rajiv Gandhi International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09L", heIdent: "27R", le: [17.230587, 78.412323], he: [17.231141, 78.453304], widthFt: 148 },
      { leIdent: "09R", heIdent: "27L", le: [17.228572, 78.412823], he: [17.229103, 78.452866], widthFt: 197 },
    ],
  },
  {
    icao: "VAID",
    code: "IDR",
    name: "Devi Ahilya Bai Holkar International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [22.717501, 75.791], he: [22.726101, 75.811096], widthFt: 148 },
    ],
  },
  {
    icao: "VEIM",
    code: "IMF",
    name: "Bir Tikendrajit International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [24.7498, 93.889], he: [24.7701, 93.904404], widthFt: 148 },
    ],
  },
  {
    icao: "VAOZ",
    code: "ISK",
    name: "Nashik International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [20.1178, 73.898697], he: [20.120399, 73.927101], widthFt: 148 },
    ],
  },
  {
    icao: "VEBD",
    code: "IXB",
    name: "Bagdogra Airport",
    type: "large_airport",
    runways: [
      { leIdent: "18", heIdent: "36", le: [26.6936, 88.328903], he: [26.6689, 88.328201], widthFt: 150 },
    ],
  },
  {
    icao: "VICG",
    code: "IXC",
    name: "Shaheed Bhagat Singh International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [30.678499, 76.775497], he: [30.6684, 76.801598], widthFt: 148 },
    ],
  },
  {
    icao: "VOML",
    code: "IXE",
    name: "Mangaluru International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [12.949111, 74.877617], he: [12.96015, 74.895905], widthFt: 151 },
    ],
  },
  {
    icao: "VOPB",
    code: "IXZ",
    name: "Veer Savarkar International Airport / INS Utkrosh",
    type: "large_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [11.6292, 92.720802], he: [11.6531, 92.738701], widthFt: 148 },
    ],
  },
  {
    icao: "VIJP",
    code: "JAI",
    name: "Jaipur International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [26.822901, 75.798203], he: [26.8255, 75.826202], widthFt: 148 },
      { leIdent: "15", heIdent: "33", le: [26.8351, 75.794601], he: [26.8235, 75.804001], widthFt: 148 },
    ],
  },
  {
    icao: "VILK",
    code: "LKO",
    name: "Chaudhary Charan Singh International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [26.760401, 80.875504], he: [26.760799, 80.903099], widthFt: 148 },
    ],
  },
  {
    icao: "VOMM",
    code: "MAA",
    name: "Chennai International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [12.9841, 80.153], he: [12.996, 80.184402], widthFt: 148 },
      { leIdent: "12", heIdent: "30", le: [13.0019, 80.165802], he: [12.9934, 80.182503], widthFt: 148 },
    ],
  },
  {
    icao: "VANP",
    code: "NAG",
    name: "Dr. Babasaheb Ambedkar International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [21.108999, 79.033798], he: [21.0858, 79.052299], widthFt: 150 },
    ],
  },
  {
    icao: "IN-0276",
    code: "NMI",
    name: "Navi Mumbai International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [18.9824, 73.0479], he: [18.98684, 73.0827], widthFt: 148 },
    ],
  },
  {
    icao: "VAPO",
    code: "PNQ",
    name: "Pune International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [18.582899, 73.906303], he: [18.5814, 73.930298], widthFt: 150 },
      { leIdent: "14", heIdent: "32", le: [18.584999, 73.916397], he: [18.573799, 73.928703], widthFt: 150 },
    ],
  },
  {
    icao: "VASD",
    code: "SAG",
    name: "Shirdi International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [19.688496, 74.365168], he: [19.689142, 74.388857], widthFt: 148 },
    ],
  },
  {
    icao: "VASU",
    code: "STV",
    name: "Surat International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [21.110399, 72.738197], he: [21.117701, 72.745399], widthFt: 148 },
    ],
  },
  {
    icao: "VISR",
    code: "SXR",
    name: "Sheikh ul Alam International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [33.999001, 74.760696], he: [33.9753, 74.787804], widthFt: 150 },
    ],
  },
  {
    icao: "VOTP",
    code: "TIR",
    name: "Tirupati International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [13.631, 79.532799], he: [13.634, 79.553703], widthFt: 148 },
    ],
  },
  {
    icao: "VOTV",
    code: "TRV",
    name: "Thiruvananthapuram International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [8.49315, 76.909401], he: [8.47109, 76.930901], widthFt: 150 },
    ],
  },
  {
    icao: "VOTR",
    code: "TRZ",
    name: "Tiruchirappalli International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [10.7652, 78.707298], he: [10.7665, 78.724297], widthFt: 150 },
    ],
  },
  {
    icao: "VOBZ",
    code: "VGA",
    name: "Vijayawada International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [16.5289, 80.788803], he: [16.532, 80.804901], widthFt: 148 },
    ],
  },
  {
    icao: "VEBN",
    code: "VNS",
    name: "Lal Bahadur Shastri International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [25.4529, 82.848602], he: [25.451799, 82.870399], widthFt: 148 },
    ],
  },
  {
    icao: "VEVZ",
    code: "VTZ",
    name: "Visakhapatnam International Airport",
    type: "large_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [17.715599, 83.218102], he: [17.7267, 83.230904], widthFt: 150 },
      { leIdent: "10", heIdent: "28", le: [17.7243, 83.218803], he: [17.722, 83.247498], widthFt: 148 },
    ],
  },
  {
    icao: "VIAG",
    code: "AGR",
    name: "Agra Airport / Agra Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [27.149401, 77.9515], he: [27.166599, 77.971397], widthFt: 148 },
      { leIdent: "12", heIdent: "30", le: [27.1612, 77.952599], he: [27.153999, 77.969101], widthFt: 148 },
    ],
  },
  {
    icao: "VOAT",
    code: "AGX",
    name: "Agatti Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [10.8189, 72.1726], he: [10.8284, 72.179497], widthFt: 98 },
    ],
  },
  {
    icao: "VELP",
    code: "AJL",
    name: "Lengpui Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "17", heIdent: "35", le: [23.851801, 92.617897], he: [23.829399, 92.621597], widthFt: 148 },
    ],
  },
  {
    icao: "VAAK",
    code: "AKD",
    name: "Akola Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [20.7003, 77.053001], he: [20.6978, 77.064301], widthFt: 145 },
    ],
  },
  {
    icao: "VIBY",
    code: "BEK",
    name: "Bareilly Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [28.426701, 79.437897], he: [28.4174, 79.463799], widthFt: 150 },
    ],
  },
  {
    icao: "VOBI",
    code: "BEP",
    name: "Bellary Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [15.1655, 76.878502], he: [15.1601, 76.8871], widthFt: 50 },
    ],
  },
  {
    icao: "VABJ",
    code: "BHJ",
    name: "Bhuj Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [23.2798, 69.661499], he: [23.295799, 69.678902], widthFt: 150 },
    ],
  },
  {
    icao: "VABV",
    code: "BHU",
    name: "Bhavnagar Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [21.749001, 72.1772], he: [21.755501, 72.194298], widthFt: 150 },
    ],
  },
  {
    icao: "VIBK",
    code: "BKB",
    name: "Nal Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [28.061701, 73.197304], he: [28.0795, 73.217102], widthFt: 148 },
    ],
  },
  {
    icao: "VOHY",
    code: "BPM",
    name: "Begumpet Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [17.452999, 78.453903], he: [17.4536, 78.484299], widthFt: 148 },
    ],
  },
  {
    icao: "VIBT",
    code: "BUP",
    name: "Bhatinda Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [30.2784, 74.744698], he: [30.2619, 74.7668], widthFt: 150 },
    ],
  },
  {
    icao: "VOCX",
    code: "CBD",
    name: "Car Nicobar Air Force Base",
    type: "medium_airport",
    runways: [
      { leIdent: "02", heIdent: "20", le: [9.14106, 92.8153], he: [9.16395, 92.823898], widthFt: 140 },
    ],
  },
  {
    icao: "VOCP",
    code: "CDP",
    name: "Kadapa Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [14.5115, 78.768097], he: [14.5084, 78.777496], widthFt: 148 },
    ],
  },
  {
    icao: "VEDB",
    code: "DBD",
    name: "Dhanbad Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [23.8332, 86.420097], he: [23.836399, 86.430702], widthFt: 93 },
    ],
  },
  {
    icao: "VEDH",
    code: "DBR",
    name: "Darbhanga Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [26.195029, 85.903799], he: [26.191501, 85.930877], widthFt: 150 },
    ],
  },
  {
    icao: "VIDN",
    code: "DED",
    name: "Dehradun Jolly Grant Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [30.188801, 78.1745], he: [30.190599, 78.185997], widthFt: 150 },
    ],
  },
  {
    icao: "VIGG",
    code: "DHM",
    name: "Kangra Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "15", heIdent: "33", le: [32.170502, 76.259399], he: [32.159801, 76.267403], widthFt: 98 },
    ],
  },
  {
    icao: "VEMN",
    code: "DIB",
    name: "Dibrugarh Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [27.478001, 95.0103], he: [27.4897, 95.023499], widthFt: 148 },
    ],
  },
  {
    icao: "VEMR",
    code: "DMU",
    name: "Dimapur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [25.8888, 93.761497], he: [25.879101, 93.7817], widthFt: 148 },
    ],
  },
  {
    icao: "VEGY",
    code: "GAY",
    name: "Gaya Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [24.746799, 84.940201], he: [24.741899, 84.962097], widthFt: 148 },
    ],
  },
  {
    icao: "VA2C",
    code: "GDB",
    name: "Gondia Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [21.5207, 80.284698], he: [21.531799, 80.296204], widthFt: 150 },
    ],
  },
  {
    icao: "VEGK",
    code: "GOP",
    name: "Gorakhpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [26.7446, 83.436996], he: [26.7349, 83.462402], widthFt: 150 },
    ],
  },
  {
    icao: "VIGR",
    code: "GWL",
    name: "Gwalior Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [26.2873, 78.215797], he: [26.2994, 78.2397], widthFt: 150 },
    ],
  },
  {
    icao: "VAHB",
    code: "HBX",
    name: "Hubballi Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [15.3608, 75.077103], he: [15.3627, 75.092598], widthFt: 100 },
    ],
  },
  {
    icao: "VAKJ",
    code: "HJR",
    name: "Khajuraho Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "01", heIdent: "19", le: [24.807199, 79.916], he: [24.8272, 79.921204], widthFt: 148 },
    ],
  },
  {
    icao: "VEAT",
    code: "IXA",
    name: "Agartala - Maharaja Bir Bikram Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "18", heIdent: "36", le: [23.897301, 91.241302], he: [23.876699, 91.239601], widthFt: 148 },
    ],
  },
  {
    icao: "VIAL",
    code: "IXD",
    name: "Prayagraj Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [25.435301, 81.7239], he: [25.441, 81.737], widthFt: 150 },
      { leIdent: "12", heIdent: "30", le: [25.4436, 81.726097], he: [25.432899, 81.747597], widthFt: 150 },
    ],
  },
  {
    icao: "VABM",
    code: "IXG",
    name: "Belagavi Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [15.858, 74.610298], he: [15.8609, 74.626297], widthFt: 148 },
    ],
  },
  {
    icao: "VEKR",
    code: "IXH",
    name: "Kailashahar Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "03", heIdent: "21", le: [24.3041, 92.004898], he: [24.312201, 92.009399], widthFt: 100 },
    ],
  },
  {
    icao: "VELR",
    code: "IXI",
    name: "Lilabari North Lakhimpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [27.287901, 94.089798], he: [27.303101, 94.105499], widthFt: 150 },
    ],
  },
  {
    icao: "VIJU",
    code: "IXJ",
    name: "Jammu Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "18", heIdent: "36", le: [32.698399, 74.8368], he: [32.679901, 74.837997], widthFt: 148 },
    ],
  },
  {
    icao: "VAKS",
    code: "IXK",
    name: "Keshod Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [21.313101, 70.265297], he: [21.3211, 70.275497], widthFt: 150 },
    ],
  },
  {
    icao: "VILH",
    code: "IXL",
    name: "Leh Kushok Bakula Rimpochee Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "07L", heIdent: "25R", le: [34.131302, 77.5326], he: [34.1404, 77.560402], widthFt: 150 },
    ],
  },
  {
    icao: "VOMD",
    code: "IXM",
    name: "Madurai Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [9.83396, 78.085098], he: [9.83505, 78.1017], widthFt: 148 },
    ],
  },
  {
    icao: "VIPK",
    code: "IXP",
    name: "Pathankot Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "01", heIdent: "19", le: [32.2215, 75.632301], he: [32.2458, 75.636902], widthFt: 150 },
    ],
  },
  {
    icao: "VERC",
    code: "IXR",
    name: "Birsa Munda Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [23.3225, 85.3116], he: [23.306801, 85.331802], widthFt: 148 },
    ],
  },
  {
    icao: "VEKU",
    code: "IXS",
    name: "Silchar Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [24.9084, 92.971199], he: [24.9174, 92.986298], widthFt: 148 },
    ],
  },
  {
    icao: "VAAU",
    code: "IXU",
    name: "Aurangabad Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [19.8629, 75.38195], he: [19.863159, 75.40905], widthFt: 148 },
    ],
  },
  {
    icao: "VEAN",
    code: "IXV",
    name: "Along Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [28.174601, 94.800903], he: [28.1761, 94.8032], widthFt: 100 },
    ],
  },
  {
    icao: "VEJS",
    code: "IXW",
    name: "Sonari Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [22.8123, 86.163002], he: [22.813999, 86.174698], widthFt: 100 },
    ],
  },
  {
    icao: "VOBR",
    code: "IXX",
    name: "Bidar Airport / Bidar Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "02", heIdent: "20", le: [17.896999, 77.483398], he: [17.9154, 77.4897], widthFt: 148 },
      { leIdent: "08", heIdent: "26", le: [17.904699, 77.470398], he: [17.908501, 77.489403], widthFt: 150 },
    ],
  },
  {
    icao: "VAKE",
    code: "IXY",
    name: "Kandla Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [23.108299, 70.094597], he: [23.1171, 70.106003], widthFt: 94 },
    ],
  },
  {
    icao: "VIJO",
    code: "JDH",
    name: "Jodhpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [26.2423, 73.0392], he: [26.259899, 73.058502], widthFt: 150 },
    ],
  },
  {
    icao: "VAJM",
    code: "JGA",
    name: "Jamnagar Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [22.4573, 69.996399], he: [22.4681, 70.017799], widthFt: 148 },
      { leIdent: "12", heIdent: "30", le: [22.471001, 70.000801], he: [22.460899, 70.022499], widthFt: 148 },
    ],
  },
  {
    icao: "VAJB",
    code: "JLR",
    name: "Jabalpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [23.1731, 80.0438], he: [23.182501, 80.060303], widthFt: 150 },
    ],
  },
  {
    icao: "VEJT",
    code: "JRH",
    name: "Jorhat Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [26.7227, 94.165802], he: [26.7404, 94.185204], widthFt: 150 },
    ],
  },
  {
    icao: "VIJR",
    code: "JSA",
    name: "Jaisalmer Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [26.879601, 70.855598], he: [26.897699, 70.874298], widthFt: 150 },
    ],
  },
  {
    icao: "VOKU",
    code: "KJB",
    name: "Kurnool Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [15.717823, 78.159119], he: [15.715044, 78.177536], widthFt: 98 },
    ],
  },
  {
    icao: "VAKP",
    code: "KLH",
    name: "Kolhapur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [16.6625, 74.283302], he: [16.6668, 74.295403], widthFt: 147 },
    ],
  },
  {
    icao: "VICX",
    code: "KNU",
    name: "Kanpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [26.4041, 80.400101], he: [26.4046, 80.428299], widthFt: 150 },
    ],
  },
  {
    icao: "VIKO",
    code: "KTU",
    name: "Kota Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [25.158899, 75.8396], he: [25.1616, 75.851601], widthFt: 150 },
    ],
  },
  {
    icao: "VIBR",
    code: "KUU",
    name: "Kullu Manali Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "16", heIdent: "34", le: [31.881399, 77.152199], he: [31.872, 77.156502], widthFt: 100 },
    ],
  },
  {
    icao: "VALT",
    code: "LTU",
    name: "Murod Kond Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [18.4069, 76.458801], he: [18.416, 76.470596], widthFt: 100 },
    ],
  },
  {
    icao: "VILD",
    code: "LUH",
    name: "Ludhiana Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [30.857901, 75.9459], he: [30.8515, 75.959297], widthFt: 98 },
    ],
  },
  {
    icao: "VEMZ",
    code: "MZU",
    name: "Muzaffarpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [26.120501, 85.3078], he: [26.117701, 85.319504], widthFt: 90 },
    ],
  },
  {
    icao: "VAND",
    code: "NDC",
    name: "Nanded Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [19.1828, 77.311897], he: [19.1812, 77.324898], widthFt: 148 },
    ],
  },
  {
    icao: "VADN",
    code: "NMB",
    name: "Daman Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "03", heIdent: "21", le: [20.423, 72.837502], he: [20.4377, 72.844902], widthFt: 150 },
      { leIdent: "09", heIdent: "27", le: [20.4349, 72.835503], he: [20.4342, 72.8451], widthFt: 80 },
    ],
  },
  {
    icao: "VEBU",
    code: "PAB",
    name: "Bilaspur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "17", heIdent: "35", le: [21.995199, 82.109497], he: [21.9816, 82.112503], widthFt: 82 },
    ],
  },
  {
    icao: "VEPT",
    code: "PAT",
    name: "Jay Prakash Narayan Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [25.5881, 85.078903], he: [25.594601, 85.097], widthFt: 148 },
    ],
  },
  {
    icao: "VAPR",
    code: "PBD",
    name: "Porbandar Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [21.6485, 69.650597], he: [21.648899, 69.663902], widthFt: 150 },
    ],
  },
  {
    icao: "VIPT",
    code: "PGH",
    name: "Pantnagar Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [29.0341, 79.468102], he: [29.0327, 79.479401], widthFt: 100 },
    ],
  },
  {
    icao: "VOPC",
    code: "PNY",
    name: "Pondicherry Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [11.9667, 79.804901], he: [11.9707, 79.815201], widthFt: 100 },
    ],
  },
  {
    icao: "VOPN",
    code: "PUT",
    name: "Sri Sathya Sai Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [14.1498, 77.7808], he: [14.1488, 77.801498], widthFt: 145 },
    ],
  },
  {
    icao: "VARK",
    code: "RAJ",
    name: "Rajkot Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [22.303499, 70.773003], he: [22.3148, 70.786003], widthFt: 148 },
    ],
  },
  {
    icao: "VA1G",
    code: "REW",
    name: "Rewa Airport, Chorhata, REWA",
    type: "medium_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [24.5016, 81.214798], he: [24.505301, 81.225899], widthFt: 95 },
    ],
  },
  {
    icao: "VORY",
    code: "RJA",
    name: "Rajahmundry Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [17.097309, 81.801277], he: [17.114416, 81.825104], widthFt: 148 },
    ],
  },
  {
    icao: "VARP",
    code: "RPR",
    name: "Swami Vivekananda Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [21.1758, 81.730797], he: [21.184999, 81.746803], widthFt: 150 },
    ],
  },
  {
    icao: "VERK",
    code: "RRK",
    name: "Rourkela Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [22.2565, 84.805702], he: [22.2568, 84.823402], widthFt: 98 },
    ],
  },
  {
    icao: "VARG",
    code: "RTC",
    name: "Ratnagiri Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [17.0091, 73.323402], he: [17.0182, 73.332199], widthFt: 148 },
    ],
  },
  {
    icao: "IN-0107",
    code: "SDW",
    name: "Sindhudurg Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [16.001644, 73.517944], he: [16.003452, 73.541229], widthFt: 148 },
    ],
  },
  {
    icao: "VEBI",
    code: "SHL",
    name: "Shillong Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [25.6973, 91.973], he: [25.709999, 91.984497], widthFt: 150 },
    ],
  },
  {
    icao: "VASL",
    code: "SSE",
    name: "Solapur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "15", heIdent: "33", le: [17.632999, 75.931198], he: [17.6229, 75.938499], widthFt: 145 },
    ],
  },
  {
    icao: "VOSM",
    code: "SXV",
    name: "Salem Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [11.7766, 78.060898], he: [11.7901, 78.070297], widthFt: 150 },
    ],
  },
  {
    icao: "VETZ",
    code: "TEZ",
    name: "Tezpur Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [26.7003, 92.775101], he: [26.718, 92.794403], widthFt: 150 },
    ],
  },
  {
    icao: "VAUD",
    code: "UDR",
    name: "Maharana Pratap Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [24.616199, 73.884903], he: [24.6192, 73.907303], widthFt: 150 },
    ],
  },
  {
    icao: "VEUK",
    code: "UKE",
    name: "Utkela Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "03", heIdent: "21", le: [20.093901, 83.181503], he: [20.100901, 83.186096], widthFt: 100 },
    ],
  },
  {
    icao: "VEHX",
    code: "VE44",
    name: "Hashimara Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "11R", heIdent: "29L", le: [26.7017, 89.355904], he: [26.694799, 89.382301], widthFt: 148 },
    ],
  },
  {
    icao: "VEPH",
    code: "VEPH",
    name: "Panagarh Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "15", heIdent: "33", le: [23.485001, 87.4207], he: [23.463699, 87.434303], widthFt: 150 },
    ],
  },
  {
    icao: "VIAM",
    code: "VI18",
    name: "Ambala Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "12L", heIdent: "30R", le: [30.3783, 76.802299], he: [30.365, 76.827202], widthFt: 150 },
    ],
  },
  {
    icao: "VIDD",
    code: "VIDD",
    name: "Safdarjung Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [28.5881, 77.200104], he: [28.5809, 77.211502], widthFt: 150 },
    ],
  },
  {
    icao: "VISA",
    code: "VISA",
    name: "Sirsa Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [29.553101, 74.994797], he: [29.568001, 75.017403], widthFt: 140 },
    ],
  },
  {
    icao: "VIUX",
    code: "VIUX",
    name: "Udhampur Air Force Station",
    type: "medium_airport",
    runways: [
      { leIdent: "18", heIdent: "36", le: [32.9146, 75.155899], he: [32.889801, 75.156502], widthFt: 148 },
    ],
  },
  {
    icao: "VOBG",
    code: "VOBG",
    name: "HAL Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [12.9488, 77.655502], he: [12.9515, 77.685799], widthFt: 200 },
    ],
  },
  {
    icao: "VO94",
    code: "VOBX",
    name: "Campbell Bay Airport / INS Baaz",
    type: "medium_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [7.00978, 93.919403], he: [7.01631, 93.9263], widthFt: 98 },
    ],
  },
  {
    icao: "VODG",
    code: "VODG",
    name: "Dundigul Air Force Academy",
    type: "medium_airport",
    runways: [
      { leIdent: "10L", heIdent: "28R", le: [17.631399, 78.390198], he: [17.627701, 78.413498], widthFt: 150 },
      { leIdent: "10R", heIdent: "28L", le: [17.6264, 78.395302], he: [17.623301, 78.414497], widthFt: 150 },
    ],
  },
  {
    icao: "VEZO",
    code: "ZER",
    name: "Ziro Airport",
    type: "medium_airport",
    runways: [
      { leIdent: "18", heIdent: "36", le: [27.5938, 93.8284], he: [27.5828, 93.827698], widthFt: 100 },
    ],
  },
  {
    icao: "VIAX",
    code: "AIP",
    name: "Adampur Airport",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [31.4422, 75.748199], he: [31.425301, 75.769402], widthFt: 148 },
    ],
  },
  {
    icao: "VECO",
    code: "COH",
    name: "Cooch Behar Airport",
    type: "small_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [26.327101, 89.463501], he: [26.3339, 89.470901], widthFt: 100 },
    ],
  },
  {
    icao: "VA1P",
    code: "DIU",
    name: "Diu Airport",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [20.708, 70.914299], he: [20.718201, 70.928001], widthFt: 148 },
      { leIdent: "13", heIdent: "31", le: [20.7183, 70.916199], he: [20.7118, 70.924004], widthFt: 100 },
    ],
  },
  {
    icao: "VAGN",
    code: "GUX",
    name: "Guna Airport",
    type: "small_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [24.6579, 77.344498], he: [24.651501, 77.350197], widthFt: 45 },
    ],
  },
  {
    icao: "VIDX",
    code: "HDO",
    name: "Hindon Airport / Hindon Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [28.7078, 77.344902], he: [28.7076, 77.372902], widthFt: 150 },
    ],
  },
  {
    icao: "VIAH",
    code: "HRH",
    name: "Aligarh Airport",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [27.863823, 78.138077], he: [27.859241, 78.152275], widthFt: 75 },
    ],
  },
  {
    icao: "IN-0023",
    code: "IN-0023",
    name: "Amreli Airport",
    type: "small_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [21.6168, 71.221603], he: [21.6259, 71.230904], widthFt: 90 },
    ],
  },
  {
    icao: "IN-0177",
    code: "IN-0177",
    name: "Mehsana Airport",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [23.598138, 72.370507], he: [23.604172, 72.377413], widthFt: 100 },
    ],
  },
  {
    icao: "VAJL",
    code: "JLG",
    name: "Jalgaon Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [20.963182, 75.619507], he: [20.962164, 75.635834], widthFt: 148 },
    ],
  },
  {
    icao: "VEJH",
    code: "JRG",
    name: "Jharsuguda Airport",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [21.908447, 84.040924], he: [21.918322, 84.061501], widthFt: 148 },
    ],
  },
  {
    icao: "VISM",
    code: "SLV",
    name: "Shimla Airport",
    type: "small_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [31.086399, 77.0644], he: [31.0772, 77.071602], widthFt: 75 },
    ],
  },
  {
    icao: "VISP",
    code: "SWN",
    name: "Sarsawa Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [29.9939, 77.411102], he: [29.993999, 77.439499], widthFt: 150 },
    ],
  },
  {
    icao: "VOTK",
    code: "TCR",
    name: "Tuticorin Airport",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [8.72538, 78.019897], he: [8.72309, 78.031799], widthFt: 95 },
    ],
  },
  {
    icao: "VOTJ",
    code: "TJV",
    name: "Thanjavur Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "07", heIdent: "25", le: [10.7194, 79.094597], he: [10.7257, 79.109001], widthFt: 150 },
      { leIdent: "14", heIdent: "32", le: [10.7244, 79.099602], he: [10.7149, 79.108803], widthFt: 150 },
    ],
  },
  {
    icao: "VIST",
    code: "TNI",
    name: "Satna Airport",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [24.563801, 80.849998], he: [24.560801, 80.859901], widthFt: 95 },
    ],
  },
  {
    icao: "VA1B",
    code: "VA1B",
    name: "Chanda Airport",
    type: "small_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [19.9939, 79.218002], he: [19.995501, 79.226997], widthFt: 100 },
    ],
  },
  {
    icao: "VA1C",
    code: "VA1C",
    name: "Birlagram Airport",
    type: "small_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [23.452101, 75.415604], he: [23.441799, 75.424896], widthFt: 80 },
    ],
  },
  {
    icao: "VA1D",
    code: "VA1D",
    name: "Muirpur Airport",
    type: "small_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [24.1245, 83.0336], he: [24.125799, 83.0476], widthFt: 85 },
    ],
  },
  {
    icao: "VA1E",
    code: "VA1E",
    name: "Bhilai Airport",
    type: "small_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [21.2903, 81.375504], he: [21.298, 81.383499], widthFt: 95 },
    ],
  },
  {
    icao: "VA1F",
    code: "VA1F",
    name: "Sidhi Airport",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [24.4002, 81.809998], he: [24.404499, 81.819504], widthFt: 50 },
    ],
  },
  {
    icao: "VA1H",
    code: "VA1H",
    name: "Ondwa Airport",
    type: "small_airport",
    runways: [
      { leIdent: "18", heIdent: "36", le: [25.146799, 74.610703], he: [25.1362, 74.612198], widthFt: 98 },
    ],
  },
  {
    icao: "VA1J",
    code: "VA1J",
    name: "Dhana Airport",
    type: "small_airport",
    runways: [
      { leIdent: "17", heIdent: "35", le: [23.757999, 78.855103], he: [23.749201, 78.8564], widthFt: 75 },
    ],
  },
  {
    icao: "VA1L",
    code: "VA1L",
    name: "Amla Airport",
    type: "small_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [21.9256, 78.110298], he: [21.9266, 78.116997], widthFt: 175 },
    ],
  },
  {
    icao: "VA1M",
    code: "VA1M",
    name: "Karad Airport",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [17.286501, 74.1521], he: [17.2852, 74.164001], widthFt: 100 },
    ],
  },
  {
    icao: "VA1N",
    code: "VA1N",
    name: "Nimach Airport",
    type: "small_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [24.434601, 74.864304], he: [24.427, 74.8713], widthFt: 95 },
    ],
  },
  {
    icao: "VA1O",
    code: "VA1O",
    name: "Burhar Airport",
    type: "small_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [23.2393, 81.500504], he: [23.231199, 81.507004], widthFt: 50 },
    ],
  },
  {
    icao: "VA2A",
    code: "VA2A",
    name: "Phalodi Airport",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [27.115101, 72.384102], he: [27.1108, 72.393898], widthFt: 55 },
    ],
  },
  {
    icao: "VA2B",
    code: "VA2B",
    name: "Dr. Bhimrao Ambedkar Airstrip",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [28.907499, 77.669899], he: [28.9023, 77.684799], widthFt: 75 },
    ],
  },
  {
    icao: "VA2D",
    code: "VA2D",
    name: "Ratlam Airport",
    type: "small_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [23.380301, 75.020203], he: [23.382601, 75.031097], widthFt: 75 },
    ],
  },
  {
    icao: "IN-VA38",
    code: "VA38",
    name: "Sirohi Airport",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [24.900101, 72.839104], he: [24.8901, 72.852699], widthFt: 50 },
    ],
  },
  {
    icao: "IN-VA51",
    code: "VA51",
    name: "Banswara Airport",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [23.590599, 74.306602], he: [23.588699, 74.318802], widthFt: 55 },
    ],
  },
  {
    icao: "IN-0363",
    code: "VA53",
    name: "Dhulia Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [20.927, 74.731102], he: [20.926001, 74.743103], widthFt: 100 },
    ],
  },
  {
    icao: "IN-0364",
    code: "VA74",
    name: "Abu Road Airport",
    type: "small_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [24.493401, 72.776001], he: [24.4951, 72.787102], widthFt: 49 },
    ],
  },
  {
    icao: "VADS",
    code: "VADS",
    name: "Deesa Airport",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [24.2652, 72.2005], he: [24.2707, 72.208397], widthFt: 65 },
    ],
  },
  {
    icao: "IN-0382",
    code: "VANR",
    name: "Gandhinagar Airfield",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [19.964001, 73.801102], he: [19.963499, 73.814201], widthFt: 150 },
    ],
  },
  {
    icao: "VA1K",
    code: "VANY",
    name: "Naliya Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [23.216299, 68.879601], he: [23.2286, 68.902901], widthFt: 150 },
    ],
  },
  {
    icao: "VE23",
    code: "VE23",
    name: "Burnpur Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [23.6313, 86.969498], he: [23.631599, 86.981499], widthFt: 75 },
    ],
  },
  {
    icao: "VE24",
    code: "VE24",
    name: "Sookerating (Doomdooma) Airport",
    type: "small_airport",
    runways: [
      { leIdent: "03", heIdent: "21", le: [27.545401, 95.564796], he: [27.560301, 95.5765], widthFt: 148 },
    ],
  },
  {
    icao: "VEPI",
    code: "VE31",
    name: "Barrackpore Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "02", heIdent: "20", le: [22.7729, 88.356598], he: [22.789101, 88.3619], widthFt: 150 },
    ],
  },
  {
    icao: "VE36",
    code: "VE36",
    name: "Nuagaon Airport",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [20.508699, 83.442802], he: [20.514799, 83.4533], widthFt: 55 },
    ],
  },
  {
    icao: "VE41",
    code: "VE41",
    name: "Giridih Airport",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [24.203501, 86.285599], he: [24.2003, 86.293999], widthFt: 75 },
    ],
  },
  {
    icao: "VE54",
    code: "VE54",
    name: "Daltonganj Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [24.019199, 84.090599], he: [24.0194, 84.099602], widthFt: 100 },
    ],
  },
  {
    icao: "VE62",
    code: "VE62",
    name: "Cuttack Airport / Charbatia Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "04", heIdent: "22", le: [20.540501, 85.877502], he: [20.5588, 85.895103], widthFt: 150 },
    ],
  },
  {
    icao: "VE67",
    code: "VE67",
    name: "Mechuka Advanced Landing Ground",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [28.6064, 94.116997], he: [28.6035, 94.130203], widthFt: 80 },
    ],
  },
  {
    icao: "VE85",
    code: "VE85",
    name: "Bentayan Airport",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [23.098, 75.881104], he: [23.0921, 75.889397], widthFt: 70 },
    ],
  },
  {
    icao: "VE91",
    code: "VE91",
    name: "Vijaynagar Advanced Landing Ground",
    type: "small_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [27.196301, 96.998398], he: [27.1908, 97.009003], widthFt: 70 },
    ],
  },
  {
    icao: "VE96",
    code: "VE96",
    name: "Thuniabhand Airport",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [22.003, 78.911797], he: [22.000299, 78.9226], widthFt: 98 },
    ],
  },
  {
    icao: "VEAZ",
    code: "VEAZ",
    name: "Tuirial Airfield",
    type: "small_airport",
    runways: [
      { leIdent: "01", heIdent: "19", le: [23.741501, 92.802002], he: [23.751699, 92.803497], widthFt: 70 },
    ],
  },
  {
    icao: "VEBK",
    code: "VEBK",
    name: "Bokaro Airport",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [23.6483, 86.142899], he: [23.6387, 86.1549], widthFt: 100 },
    ],
  },
  {
    icao: "VECA",
    code: "VECA",
    name: "Chabua Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [27.454201, 95.107101], he: [27.4702, 95.128197], widthFt: 148 },
    ],
  },
  {
    icao: "VEDX",
    code: "VEDX",
    name: "Kharagpur Airport / Kalaikunda Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "17", heIdent: "35", le: [22.351801, 87.2127], he: [22.3272, 87.216202], widthFt: 150 },
    ],
  },
  {
    icao: "VEHK",
    code: "VEHK",
    name: "Hirakud Airport",
    type: "small_airport",
    runways: [
      { leIdent: "15", heIdent: "33", le: [21.5846, 84.002502], he: [21.5748, 84.009003], widthFt: 55 },
    ],
  },
  {
    icao: "VENP",
    code: "VENP",
    name: "Nawapara Airport",
    type: "small_airport",
    runways: [
      { leIdent: "01", heIdent: "19", le: [20.8654, 82.519402], he: [20.874701, 82.519699], widthFt: 96 },
    ],
  },
  {
    icao: "VEPU",
    code: "VEPU",
    name: "Purnea Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [25.7596, 87.396797], he: [25.7596, 87.423203], widthFt: 150 },
    ],
  },
  {
    icao: "VIRB",
    code: "VERB",
    name: "Fursatganj Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [26.2484, 81.371902], he: [26.248501, 81.389099], widthFt: 138 },
    ],
  },
  {
    icao: "VI20",
    code: "VI20",
    name: "Narnaul Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [28.077, 76.1996], he: [28.077101, 76.210403], widthFt: 80 },
    ],
  },
  {
    icao: "VI40",
    code: "VI40",
    name: "Karnal Airport",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [29.716999, 77.034103], he: [29.7113, 77.041], widthFt: 150 },
    ],
  },
  {
    icao: "VI43",
    code: "VI43",
    name: "Suratgarh New Airport",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [29.3799, 73.892998], he: [29.3957, 73.914803], widthFt: 148 },
    ],
  },
  {
    icao: "VI57",
    code: "VI57",
    name: "Thoise Airport",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [34.656601, 77.359802], he: [34.648602, 77.391701], widthFt: 145 },
    ],
  },
  {
    icao: "VI65",
    code: "VI65",
    name: "Kargil Airport",
    type: "small_airport",
    runways: [
      { leIdent: "02", heIdent: "20", le: [34.516602, 76.152199], he: [34.531898, 76.159698], widthFt: 106 },
    ],
  },
  {
    icao: "VI66",
    code: "VI66",
    name: "Fukche Advanced Landing Ground",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [32.946499, 79.203201], he: [32.928299, 79.223198], widthFt: 164 },
    ],
  },
  {
    icao: "VI69",
    code: "VI69",
    name: "Jhunjhunu Airport",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [28.1082, 75.368698], he: [28.1052, 75.382401], widthFt: 135 },
    ],
  },
  {
    icao: "VI70",
    code: "VI70",
    name: "Pilani New Airport",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [28.350599, 75.588097], he: [28.346901, 75.599197], widthFt: 150 },
    ],
  },
  {
    icao: "VI71",
    code: "VI71",
    name: "Pinjore Airfield and Flying Club",
    type: "small_airport",
    runways: [
      { leIdent: "16", heIdent: "34", le: [30.825199, 76.889801], he: [30.817499, 76.8937], widthFt: 78 },
    ],
  },
  {
    icao: "VI73",
    code: "VI73",
    name: "Nagaur Airport",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [27.2047, 73.707001], he: [27.211901, 73.715698], widthFt: 55 },
    ],
  },
  {
    icao: "VI75",
    code: "VI75",
    name: "IIT Kanpur Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [26.520599, 80.2285], he: [26.520201, 80.237297], widthFt: 80 },
    ],
  },
  {
    icao: "VI76",
    code: "VI76",
    name: "Band Tal Airport",
    type: "small_airport",
    runways: [
      { leIdent: "08", heIdent: "26", le: [25.9995, 78.255699], he: [26.000601, 78.267899], widthFt: 150 },
    ],
  },
  {
    icao: "VI82",
    code: "VI82",
    name: "Maa Ganga Airport Uttarkashi",
    type: "small_airport",
    runways: [
      { leIdent: "16", heIdent: "34", le: [30.587099, 78.321404], he: [30.578699, 78.325302], widthFt: 75 },
    ],
  },
  {
    icao: "VI88",
    code: "VI88",
    name: "Beas Airport",
    type: "small_airport",
    runways: [
      { leIdent: "16", heIdent: "34", le: [31.565201, 75.339203], he: [31.5548, 75.343498], widthFt: 105 },
    ],
  },
  {
    icao: "VI90",
    code: "VI90",
    name: "Akbarpur Mahamaya Rajkiya Airport",
    type: "small_airport",
    runways: [
      { leIdent: "11", heIdent: "29", le: [26.4494, 82.561996], he: [26.4457, 82.574303], widthFt: 75 },
    ],
  },
  {
    icao: "VIAW",
    code: "VIAW",
    name: "Awantipura Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [33.884701, 74.961304], he: [33.868599, 74.989998], widthFt: 150 },
    ],
  },
  {
    icao: "VIBL",
    code: "VIBL",
    name: "Bakshi Ka Talab Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [26.9888, 80.879303], he: [26.9879, 80.906898], widthFt: 150 },
    ],
  },
  {
    icao: "VIBW",
    code: "VIBW",
    name: "Bhiwani Airport",
    type: "small_airport",
    runways: [
      { leIdent: "12", heIdent: "30", le: [28.839399, 76.174301], he: [28.8347, 76.183899], widthFt: 72 },
    ],
  },
  {
    icao: "VIJN",
    code: "VIJN",
    name: "Jhansi Airport",
    type: "small_airport",
    runways: [
      { leIdent: "15", heIdent: "33", le: [25.4953, 78.555397], he: [25.487, 78.561501], widthFt: 70 },
    ],
  },
  {
    icao: "VIKA",
    code: "VIKA",
    name: "Kanpur Civil Airport (Old)",
    type: "small_airport",
    runways: [
      { leIdent: "10", heIdent: "28", le: [26.442499, 80.359398], he: [26.440399, 80.370399], widthFt: 135 },
    ],
  },
  {
    icao: "VIDF",
    code: "VIPG",
    name: "Pithoragarh Airport",
    type: "small_airport",
    runways: [
      { leIdent: "14", heIdent: "32", le: [29.5984, 80.2351], he: [29.5889, 80.243401], widthFt: 50 },
    ],
  },
  {
    icao: "VIPL",
    code: "VIPL",
    name: "Patiala Airport",
    type: "small_airport",
    runways: [
      { leIdent: "15", heIdent: "33", le: [30.3193, 76.361298], he: [30.3104, 76.367599], widthFt: 150 },
    ],
  },
  {
    icao: "VIUT",
    code: "VIUT",
    name: "Uttarlai Airport",
    type: "small_airport",
    runways: [
      { leIdent: "02", heIdent: "20", le: [25.801399, 71.477501], he: [25.8246, 71.487], widthFt: 150 },
    ],
  },
  {
    icao: "VO26",
    code: "VO26",
    name: "Kovilpatti Airport",
    type: "small_airport",
    runways: [
      { leIdent: "17", heIdent: "35", le: [9.15909, 77.819603], he: [9.14869, 77.822701], widthFt: 50 },
    ],
  },
  {
    icao: "VO52",
    code: "VO52",
    name: "Harihar Airport",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [14.5316, 75.781403], he: [14.5385, 75.793404], widthFt: 56 },
    ],
  },
  {
    icao: "VO95",
    code: "VO95",
    name: "Hosur Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [12.661996, 77.762059], he: [12.662532, 77.778687], widthFt: 150 },
    ],
  },
  {
    icao: "VOAR",
    code: "VOAR",
    name: "INS Rajali / Arakkonam Naval Air Station",
    type: "small_airport",
    runways: [
      { leIdent: "06", heIdent: "24", le: [13.0616, 79.675003], he: [13.0808, 79.707397], widthFt: 155 },
    ],
  },
  {
    icao: "VOCC",
    code: "VOCC",
    name: "INS Garuda / Willingdon Island Naval Air Station",
    type: "small_airport",
    runways: [
      { leIdent: "13", heIdent: "31", le: [9.94886, 76.271202], he: [9.94083, 76.281303], widthFt: 145 },
      { leIdent: "17", heIdent: "35", le: [9.95543, 76.271202], he: [9.93943, 76.274902], widthFt: 145 },
    ],
  },
  {
    icao: "VOHK",
    code: "VOHK",
    name: "Hakimpet Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [17.5525, 78.512703], he: [17.5541, 78.532402], widthFt: 148 },
    ],
  },
  {
    icao: "VONS",
    code: "VONS",
    name: "Nagarjuna Sagar Airport",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [16.5424, 79.311501], he: [16.5429, 79.325897], widthFt: 100 },
    ],
  },
  {
    icao: "VOSX",
    code: "VOSX",
    name: "Coimbatore Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [11.0061, 77.151001], he: [11.021, 77.168404], widthFt: 148 },
    ],
  },
  {
    icao: "VOTX",
    code: "VOTX",
    name: "Tambaram Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "05", heIdent: "23", le: [12.9005, 80.115501], he: [12.9105, 80.125], widthFt: 150 },
      { leIdent: "12", heIdent: "30", le: [12.91, 80.116898], he: [12.9019, 80.1315], widthFt: 150 },
    ],
  },
  {
    icao: "VOYK",
    code: "VOYK",
    name: "Yelahanka Air Force Station",
    type: "small_airport",
    runways: [
      { leIdent: "09", heIdent: "27", le: [13.1356, 77.595901], he: [13.1354, 77.616096], widthFt: 145 },
    ],
  },
];

/** Convenience: the primary Delhi airport (default view). */
export const DELHI = AIRPORTS.find((a) => a.icao === "VIDP")!;
