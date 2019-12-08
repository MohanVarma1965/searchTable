(function(document) {
    'use strict';

    var TableFilter = (function(Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            if(row.rowIndex!= 0) {
                row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
            }
        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });

})(document);


(function CreateTableFromJSON() {


    var myContacts = [
        {
            "Name": "Dr.Vijay Vemuri",
            "Department": "Administration",
            "Designation": "South Region Head",
            "DMobile": "7799073777",
            "Ext": "2233",
            "SD#": ""
        },
        {
            "Name": "Mr. Nilesh Gupta",
            "Department": "Administration",
            "Designation": "Zonal Director",
            "DMobile": "8861201220",
            "Ext": "2280",
            "SD#": "*730"
        },
        {
            "Name": "Dr. Ravi Kiran M",
            "Department": "Administration",
            "Designation": "Medical Superintendent",
            "DMobile": "8008697776",
            "Ext": "2279",
            "SD#": "*232"
        },
        {
            "Name": "Dr. R.P.Raju",
            "Department": "Executive Management",
            "Designation": "Management",
            "DMobile": "9849912989",
            "Ext": "1999",
            "SD#": "*199"
        },
        {
            "Name": "Mr. Andrew",
            "Department": "Executive Management",
            "Designation": "Management",
            "DMobile": "8008242345",
            "Ext": "2211",
            "SD#": "*188"
        },
        {
            "Name": "Mr. Joe Nicholas",
            "Department": "Executive Management",
            "Designation": "Management",
            "DMobile": "9701002911",
            "Ext": "2299",
            "SD#": "*195"
        },
        {
            "Name": "Mr. Jagparag",
            "Department": "Administration",
            "Designation": "CEO",
            "DMobile": "7337333447",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Babaiah M",
            "Department": "Radiation Oncology",
            "Designation": "Medical Director",
            "DMobile": "9963667511",
            "Ext": "9909",
            "SD#": "*204"
        },
        {
            "Name": "Mr. Rajesh Manthena",
            "Department": "Administration",
            "Designation": "Executive Vice President",
            "DMobile": "8790100773",
            "Ext": "9989",
            "SD#": "*182"
        },
        {
            "Name": "Mrs. Smitha Raju",
            "Department": "Administration",
            "Designation": "VP-Planning & Business Development",
            "DMobile": "7702041234",
            "Ext": "2244",
            "SD#": "*192"
        },
        {
            "Name": "Mr.Atul Rastogi",
            "Department": "Finance & Accounts",
            "Designation": "Chief Financial Officer",
            "DMobile": "9999989905",
            "Ext": "",
            "SD#": "*198"
        },
        {
            "Name": "Dr. Sushant Agarwal",
            "Department": "Administration",
            "Designation": "Chief Executive Officer",
            "DMobile": "7680070755",
            "Ext": "9984",
            "SD#": "*313"
        },
        {
            "Name": "Mr.Binu John",
            "Department": "Supply Chain Management",
            "Designation": "Vice President",
            "DMobile": "8527706464",
            "Ext": "2588",
            "SD#": "*774"
        },
        {
            "Name": "Mr. Rajesh Sivan",
            "Department": "Projects",
            "Designation": "Head",
            "DMobile": "7032457444",
            "Ext": "2576",
            "SD#": "*744"
        },
        {
            "Name": "Dr. Krishna Komanduri",
            "Department": "Physics",
            "Designation": "Adjunct Professor of Medical Physics(UPMC)",
            "DMobile": "8008055662",
            "Ext": "9904",
            "SD#": "*215"
        },
        {
            "Name": "Mr. Vinayan Ramakrishnan",
            "Department": "Marketing",
            "Designation": "Group Head",
            "DMobile": "7702220795",
            "Ext": "2577",
            "SD#": "*732"
        },
        {
            "Name": "Mr.Shibaji Chattopadhyaya",
            "Department": "Zonal Director",
            "Designation": "Zonal Director",
            "DMobile": "7330689897",
            "Ext": "",
            "SD#": "*191"
        },
        {
            "Name": "Dr Shashikanth",
            "Department": "Operations",
            "Designation": "DGM",
            "DMobile": "7702521234",
            "Ext": "2181",
            "SD#": "*612"
        },
        {
            "Name": "Dr. Amit Dhawan",
            "Department": "Facility Head-Ludhiana",
            "Designation": "General Manager",
            "DMobile": "9910382407/7888499231",
            "Ext": "",
            "SD#": "*735"
        },
        {
            "Name": "",
            "Department": "CITIZENS SPECIALITY & AOI DOCTOR LIST",
            "Designation": "",
            "DMobile": "",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Abhilash",
            "Department": "Clinical Operations",
            "Designation": "Clinical Operations",
            "DMobile": "8978666966",
            "Ext": "",
            "SD#": "*279"
        },
        {
            "Name": "Dr. Venu Gopal",
            "Department": "Anesthesia",
            "Designation": "Anaesthesiologist",
            "DMobile": "9963244004",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Aruna",
            "Department": "Anesthesia",
            "Designation": "Anaesthesiologist",
            "DMobile": "9177778831",
            "Ext": "",
            "SD#": "*203"
        },
        {
            "Name": "Dr. Manvi Mehta",
            "Department": "Anesthesia",
            "Designation": "Anaesthesiologist",
            "DMobile": "9849280412",
            "Ext": "",
            "SD#": "*296"
        },
        {
            "Name": "Dr. Sunjoy Verma M",
            "Department": "Anesthesia",
            "Designation": "Anaesthesiologist",
            "DMobile": "9949908844",
            "Ext": "",
            "SD#": "*268"
        },
        {
            "Name": "Akbar Khan",
            "Department": "Anesthesia Technician",
            "Designation": "Anesthesia Technician",
            "DMobile": "9502477977/8008000543",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Kodavath Devender",
            "Department": "Anesthesia Technician",
            "Designation": "OPERATION THEATRE",
            "DMobile": "8886083144",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Juturu Vijay Kumar",
            "Department": "Anesthesia Technician",
            "Designation": "Operation Theatre",
            "DMobile": "8297029618",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Seri Dinesh",
            "Department": "Anesthesia Technician",
            "Designation": "Operation Theatre",
            "DMobile": "9393144314",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Sriram",
            "Department": "Audiometry",
            "Designation": "Speech Theraphy",
            "DMobile": "9704656318",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Rakesh Babu",
            "Department": "Blood Bank",
            "Designation": "Medical Officer",
            "DMobile": "9618358450",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Navuri Prathap",
            "Department": "Blood Bank",
            "Designation": "Consultant",
            "DMobile": "9640355844",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Sangeetha Gayam",
            "Department": "Transfusion Medicine, Blood Bank",
            "Designation": "Consultant",
            "DMobile": "9553112986",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Parashuram S",
            "Department": "Blood Bank",
            "Designation": "Technician",
            "DMobile": "7893605464",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Bangari Ramaswamy",
            "Department": "Blood Bank",
            "Designation": "Senior Technician",
            "DMobile": "9550941210",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Atiketi Govardhan Rao",
            "Department": "Senior Technician",
            "Designation": "Blood Bank",
            "DMobile": "9989388001",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Hari Ram",
            "Department": "Cardiology",
            "Designation": "Cardiologist",
            "DMobile": "9866253911",
            "Ext": "2147",
            "SD#": ""
        },
        {
            "Name": "Dr. Sudheer Koganti",
            "Department": "Cardiology",
            "Designation": "Cardiologist",
            "DMobile": "9912911177 / 9848046785",
            "Ext": "2146",
            "SD#": ""
        },
        {
            "Name": "Dr. Vikram Reddy Aerra",
            "Department": "Cardiology",
            "Designation": "Cardio Thoracic Surgeon",
            "DMobile": "9177778832",
            "Ext": "2149",
            "SD#": "*314"
        },
        {
            "Name": "Dr. Madhu Babu S",
            "Department": "Cardiology",
            "Designation": "Cardiologist",
            "DMobile": "9849392986 / 9848046785",
            "Ext": "",
            "SD#": "*305"
        },
        {
            "Name": "Dr.Srikanth",
            "Department": "Cardiology",
            "Designation": "Cardiologist",
            "DMobile": "9945281448",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Arun Kanala",
            "Department": "oncosurgeon",
            "Designation": "On call Doctors",
            "DMobile": "9441283503",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "NARESH  GAJJI",
            "Department": "Cardiology",
            "Designation": "Technician",
            "DMobile": "8501026890",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Sundeep Kumar Hanumanth",
            "Department": "Clincal Operations",
            "Designation": "RMO",
            "DMobile": "9100035535/9704343887",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Prathibha Yadavalli",
            "Department": "Clinical Operations",
            "Designation": "RMO",
            "DMobile": "9959002958",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Vaddi Naveen Chaitanya",
            "Department": "Resident Medical Officer",
            "Designation": "Clinical Operations",
            "DMobile": "9989456820",
            "Ext": "",
            "SD#": "*201"
        },
        {
            "Name": "Dr. Srinivas.Jakkinaboina",
            "Department": "Critical Care",
            "Designation": "Critical Care Consultant",
            "DMobile": "9652342973",
            "Ext": "",
            "SD#": "*754"
        },
        {
            "Name": "Dr. Githa Y",
            "Department": "Critical Care",
            "Designation": "Critical Care Consultant",
            "DMobile": "9701813358",
            "Ext": "2482",
            "SD#": "*237"
        },
        {
            "Name": "Dr.Akkala Abhinav",
            "Department": "Critical Care",
            "Designation": "Resident",
            "DMobile": "8277770827",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Goutham Punugoti",
            "Department": "Critical Care",
            "Designation": "Resident",
            "DMobile": "9113848129",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Ajit Kumar Choudary",
            "Department": "Critical Care",
            "Designation": "Resident",
            "DMobile": "8886148833",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Rajesh Reddy Karri",
            "Department": "Dental Department",
            "Designation": "Dental Surgeon",
            "DMobile": "9908873366",
            "Ext": "2089",
            "SD#": "*226"
        },
        {
            "Name": "Dr. Sri Harsha",
            "Department": "Dental Department",
            "Designation": "Dental Surgeon",
            "DMobile": "7675070658",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Chaitanya",
            "Department": "Dental Department",
            "Designation": "Dentist",
            "DMobile": "9030089696",
            "Ext": "",
            "SD#": "*247"
        },
        {
            "Name": "Dr. Suhas",
            "Department": "Dental Department",
            "Designation": "Dentist",
            "DMobile": "8125360807",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Shalini Patodiya",
            "Department": "Dermatology",
            "Designation": "Dermatologist",
            "DMobile": "9687315136/ 7021866909",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Vijaya Deepika Narra",
            "Department": "Dermatology",
            "Designation": "Dermatologist",
            "DMobile": "9618452115",
            "Ext": "",
            "SD#": "*284"
        },
        {
            "Name": "Dr. Lakshmi Deepak Bhattu",
            "Department": "Emergency Department",
            "Designation": "Registrar",
            "DMobile": "9247697297/7989487763",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Tataji Nandipa",
            "Department": "Emergency Department",
            "Designation": "ER Physician",
            "DMobile": "9177100707",
            "Ext": "",
            "SD#": "*331"
        },
        {
            "Name": "Dr.Vangapally Nickhil",
            "Department": "Emergency Department",
            "Designation": "Consultant",
            "DMobile": "9866456120",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Ashok Kumar Uppiretla",
            "Department": "Emergency Department",
            "Designation": "Consultant",
            "DMobile": "9539848798",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Manohar Kanchi",
            "Department": "Emergency Department",
            "Designation": "Consultant",
            "DMobile": "8447222388",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Durga Devi Rayudu",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "9581051999",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Kishore Kumar Goud T",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "8885471394",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Pooja.P.R",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "8970042754/9441270538",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Bandi Manmohan Goud",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "8008460948/8413401240",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Nikhil Bhargav Mamidipalli",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "8553448331",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Pandiri Srilaxmi",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "8886852402",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Khyaama mani Senapaty",
            "Department": "Emergency Department",
            "Designation": "Resident",
            "DMobile": "9556796201",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Kola Shashikanth Goud",
            "Department": "Emergency Department",
            "Designation": "Registrar",
            "DMobile": "8106782691",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Emergency Department",
            "Department": "Emergency Department",
            "Designation": "",
            "DMobile": "",
            "Ext": "2000/2001",
            "SD#": ""
        },
        {
            "Name": "Shiva Sagar",
            "Department": "Emergency Department",
            "Designation": "Emergency Department -Coordinator",
            "DMobile": "9848457523",
            "Ext": "2002",
            "SD#": "*113"
        },
        {
            "Name": "Sandeep.R",
            "Department": "Emergency Department",
            "Designation": "Emergency Department -Coordinator",
            "DMobile": "8143006005",
            "Ext": "2002",
            "SD#": "*749"
        },
        {
            "Name": "Avez",
            "Department": "Emergency Department",
            "Designation": "Emergency Department -Coordinator",
            "DMobile": "9989266530",
            "Ext": "2002",
            "SD#": "*114"
        },
        {
            "Name": "Dr. G. Kalyan Chakravarthy",
            "Department": "Endocrinology",
            "Designation": "Endocrinologist",
            "DMobile": "9866198527",
            "Ext": "2174",
            "SD#": "*294"
        },
        {
            "Name": "Dr. Sashikanth J",
            "Department": "ENT",
            "Designation": "Consultant Head",
            "DMobile": "8897023376",
            "Ext": "2013",
            "SD#": "*240"
        },
        {
            "Name": "Dr.Shareef.M.M",
            "Department": "ENT",
            "Designation": "Consultant ENT Surgeon",
            "DMobile": "8106869119",
            "Ext": "2170",
            "SD#": ""
        },
        {
            "Name": "Dr. AMVR Narendra",
            "Department": "Haemato Oncology & BMT",
            "Designation": "Consultant",
            "DMobile": "9440496212",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. S.K Gupta",
            "Department": "Haemato Oncology & BMT",
            "Designation": "Consultant",
            "DMobile": "9968236658",
            "Ext": "",
            "SD#": "*361"
        },
        {
            "Name": "Prema C",
            "Department": "Haematology",
            "Designation": "Physician Assistant",
            "DMobile": "9900937566",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Hemato - OPD",
            "Department": "Haematology",
            "Designation": "OPD-Front Desk",
            "DMobile": "",
            "Ext": "9852",
            "SD#": ""
        },
        {
            "Name": "Dr. Sandeep Ghanta",
            "Department": "General Medicine",
            "Designation": "Consultant",
            "DMobile": "9908239120",
            "Ext": "2169",
            "SD#": "*238"
        },
        {
            "Name": "Dr. Vijay Kumar Kolukonda",
            "Department": "General Medicine",
            "Designation": "Consultant",
            "DMobile": "9989062368",
            "Ext": "2160",
            "SD#": "*229"
        },
        {
            "Name": "Dr. Rahul Chirag",
            "Department": "General Medicine",
            "Designation": "Consultant",
            "DMobile": "9741967262",
            "Ext": "2160",
            "SD#": ""
        },
        {
            "Name": "Dr. Prashanth Mukka",
            "Department": "Pulmonologist",
            "Designation": "Consultant",
            "DMobile": "9949236374",
            "Ext": "2159",
            "SD#": "*370"
        },
        {
            "Name": "Duty RMO",
            "Department": "RMO",
            "Designation": "Duty RMO",
            "DMobile": "9618788166",
            "Ext": "",
            "SD#": "*761"
        },
        {
            "Name": "",
            "Department": "",
            "Designation": "",
            "DMobile": "",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "A",
            "Department": "B",
            "Designation": "C",
            "DMobile": "D",
            "Ext": "E",
            "SD#": "F"
        },
        {
            "Name": "Duty DMO",
            "Department": "DMO",
            "Designation": "Duty Medical Officer",
            "DMobile": "9618788133",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Afreen Sultana",
            "Department": "Internal Medicine",
            "Designation": "Duty Medical Officer",
            "DMobile": "8977499480",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Dukkipati Vijaya Shanthi",
            "Department": "Internal Medicine",
            "Designation": "Duty Medical Officer",
            "DMobile": "9966726444",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr DEEPIKA U",
            "Department": "Internal Medicine",
            "Designation": "Duty Medical Officer",
            "DMobile": "9505600821",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr Chada Sushma",
            "Department": "Internal Medicine",
            "Designation": "Duty Medical Officer",
            "DMobile": "8790375405",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "S.A. Ahamadi Farhana",
            "Department": "Internal Medicine",
            "Designation": "Duty Medical Officer",
            "DMobile": "9553898724",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Suresh Chandra Hari",
            "Department": "Laparoscopic and Bariatric Surgery",
            "Designation": "Consultant & Surgeon",
            "DMobile": "9848027177",
            "Ext": "2281",
            "SD#": "*244"
        },
        {
            "Name": "Dr.Deepak Sharma",
            "Department": "Laparoscopic and Bariatric Surgery",
            "Designation": "Consultant",
            "DMobile": "9866141070",
            "Ext": "2017",
            "SD#": ""
        },
        {
            "Name": "Dr.Sanjay Chowdary",
            "Department": "General Surgery",
            "Designation": "Registrar",
            "DMobile": "9866075678",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. C H. Srikanth",
            "Department": "General Surgery",
            "Designation": "Registrar",
            "DMobile": "9700555486",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Kiran Peddi",
            "Department": "Medical Gastroenterology",
            "Designation": "Consultant",
            "DMobile": "7730066888/9581000505",
            "Ext": "",
            "SD#": "*363"
        },
        {
            "Name": "Dr. Sarada",
            "Department": "Medical Gastroenterology",
            "Designation": "Consultant",
            "DMobile": "9440519955",
            "Ext": "2036",
            "SD#": "*364"
        },
        {
            "Name": "Gastroentrology Dept No-7th Flo",
            "Department": "Medical Gastroenterology",
            "Designation": "",
            "DMobile": "",
            "Ext": "2780",
            "SD#": ""
        },
        {
            "Name": "Dr. Suguna Chirla",
            "Department": "Medical Oncology & Haematology",
            "Designation": "Consultant",
            "DMobile": "9989774759",
            "Ext": "9803",
            "SD#": "*245"
        },
        {
            "Name": "Dr.Sudha Sinha",
            "Department": "Medical Oncology & Haematology",
            "Designation": "Consultant",
            "DMobile": "8978000874",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Bharat Patodiya",
            "Department": "Medical Oncology",
            "Designation": "Consultant",
            "DMobile": "9004428311",
            "Ext": "",
            "SD#": "*371"
        },
        {
            "Name": "Dr. Deepak Koppaka",
            "Department": "Medical Oncology",
            "Designation": "Consultant",
            "DMobile": "9052289998",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr Naidu N Bethune",
            "Department": "Medical Oncology",
            "Designation": "Consultant",
            "DMobile": "99894 89877",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Suresh Kumar S",
            "Department": "Molecular Diagnostics",
            "Designation": "",
            "DMobile": "9176228882",
            "Ext": "9962",
            "SD#": "*351"
        },
        {
            "Name": "Dr. Rahul Patibandla",
            "Department": "Nephrology",
            "Designation": "Consultant",
            "DMobile": "7799935500",
            "Ext": "2481",
            "SD#": "*266"
        },
        {
            "Name": "Dr. Rajashekar Chakravarthy",
            "Department": "Nephrology",
            "Designation": "Visiting Consultant",
            "DMobile": "9391059322",
            "Ext": "",
            "SD#": "*282"
        },
        {
            "Name": "Dr.Aravind Reddy",
            "Department": "Nephrology",
            "Designation": "Consultant",
            "DMobile": "9985250085",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Sahithi",
            "Department": "Medical Oncology",
            "Designation": "Dr Naidu N Bethune Assistant",
            "DMobile": "9701748492",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Venkatarami Reddy  Sreereddy",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "7799250720",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Narasimha Raju Mekala",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "9030795762",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Syed Hussian",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "9533278755",
            "Ext": "*157",
            "SD#": ""
        },
        {
            "Name": "Vinod Kumar P",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "8341080414/8185808145",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "CS Ahamad Basha",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "9533087127",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Amala Kumari",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "9032633220",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Katakam Sandeep",
            "Department": "Nephrology",
            "Designation": "Technician",
            "DMobile": "9010273721",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Ajay Reddy A",
            "Department": "Neuro Surgery",
            "Designation": "Consultant",
            "DMobile": "9866002032",
            "Ext": "9833",
            "SD#": "*311"
        },
        {
            "Name": "Dr.Sundeep Maddala",
            "Department": "Neuro Surgery",
            "Designation": "Consultant",
            "DMobile": "8096799911",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Aparna Vijay Kumar",
            "Department": "Neurology",
            "Designation": "Consultant",
            "DMobile": "8897175351",
            "Ext": "2150",
            "SD#": "*295"
        },
        {
            "Name": "Dr. Rahul Konduri",
            "Department": "Neurology",
            "Designation": "Consultant",
            "DMobile": "7032655458",
            "Ext": "2141",
            "SD#": ""
        },
        {
            "Name": "Dr.Arun Kumar Reddy.G",
            "Department": "Nuclear Medicine",
            "Designation": "Consultant",
            "DMobile": "8986858484",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Chinna Sai N",
            "Department": "Nutritionist",
            "Designation": "Sr Nutritionist",
            "DMobile": "9642920490",
            "Ext": "2168",
            "SD#": "*273"
        },
        {
            "Name": "Damerla Laxmi Pratibha",
            "Department": "Nutritionist",
            "Designation": "Nutritionist",
            "DMobile": "9502827442",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Suresh Pallemkonda",
            "Department": "Nutritionist",
            "Designation": "Nutritionist",
            "DMobile": "9900729438",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Anitha Kunnaiah",
            "Department": "Obstetrician, Gynaecology",
            "Designation": "Consultant",
            "DMobile": "8095025182",
            "Ext": "2007",
            "SD#": "*360"
        },
        {
            "Name": "Dr.Anitha Huparikar",
            "Department": "Obstetrician, Gynaecology",
            "Designation": "Consultant",
            "DMobile": "8121813850",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Andal Reddy",
            "Department": "Obstetrician & Gynecology",
            "Designation": "Consultant",
            "DMobile": "9949414465",
            "Ext": "1977",
            "SD#": ""
        },
        {
            "Name": "Dr. Radhika B",
            "Department": "Obestrician & Gynaecology",
            "Designation": "Consultant",
            "DMobile": "9515129004",
            "Ext": "2005",
            "SD#": "*224"
        },
        {
            "Name": "Dr Shweta Sikarwar",
            "Department": "Foetal Medicine",
            "Designation": "Consultant",
            "DMobile": "8141377718",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Srilatha",
            "Department": "Obestrician & Gynaecology",
            "Designation": "Consultant OBGY Surgeon",
            "DMobile": "9849167867",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Jamir Arlikar",
            "Department": "Paediatric",
            "Designation": "Consultant Pediatric Surgeon",
            "DMobile": "7032640570",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Rashmita Pranav Shah",
            "Department": "Consultant",
            "Designation": "Obstetrician & Gynecology",
            "DMobile": "9346107770",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Radhika.Ragi",
            "Department": "Opthamalogy",
            "Designation": "Opthamalogist",
            "DMobile": "9963982474",
            "Ext": "9848",
            "SD#": ""
        },
        {
            "Name": "Dr. Kishore Reddy B",
            "Department": "Orthopaedist & Musculo-Skeletal",
            "Designation": "Consultant",
            "DMobile": "7569707316",
            "Ext": "9832",
            "SD#": "*214"
        },
        {
            "Name": "",
            "Department": "Oncology",
            "Designation": "",
            "DMobile": "",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Varun",
            "Department": "Physican Assistant to Dr.Kishore.B",
            "Designation": "",
            "DMobile": "8688845005",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. V S Abhilash Kumar S",
            "Department": "Orthopedic",
            "Designation": "Consultant",
            "DMobile": "9394112323",
            "Ext": "2171",
            "SD#": "*354"
        },
        {
            "Name": "Dr. Sridhar Musthyala",
            "Department": "Orthopedic",
            "Designation": "Consultant",
            "DMobile": "8374717966",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. G K Sudhakar Reddy",
            "Department": "Orthopedics",
            "Designation": "Consultant",
            "DMobile": "9100941709",
            "Ext": "2142",
            "SD#": "*348"
        },
        {
            "Name": "Dr.Cheruvukommu Upender",
            "Department": "Orthopedics",
            "Designation": "Registrar",
            "DMobile": "9849309092",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Shrikanth Ega",
            "Department": "Orthopedics",
            "Designation": "Registrar",
            "DMobile": "7981584477",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Paritosh Anand",
            "Department": "Pediatrics",
            "Designation": "Consultant Pediatric Intensive Care",
            "DMobile": "8886917288",
            "Ext": "2173",
            "SD#": "*318"
        },
        {
            "Name": "Dr.Swarup Regis Paedia",
            "Department": "Pediatrics",
            "Designation": "Consultant",
            "DMobile": "8074010221",
            "Ext": "2172",
            "SD#": ""
        },
        {
            "Name": "Dr.Nandhita Dhanda",
            "Department": "Paediatrics & Neonatology",
            "Designation": "Consultant",
            "DMobile": "8790551592",
            "Ext": "2172",
            "SD#": ""
        },
        {
            "Name": "Dr. Srikakula Srikanth",
            "Department": "Registrar",
            "Designation": "Paediatrics",
            "DMobile": "9632100695",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Parinitha Gutha",
            "Department": "Pediatric Hemato Oncology",
            "Designation": "Consultant",
            "DMobile": "9701945454",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. C S Prithi Reddy",
            "Department": "Pediatrics",
            "Designation": "Registrar",
            "DMobile": "8019935997",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Sarika M",
            "Department": "Pediatrics",
            "Designation": "Registrar",
            "DMobile": "9989298191",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr. Venkatesh Babu G",
            "Department": "Plastic Surgery",
            "Designation": "Plastic and Reconstructive Surgery",
            "DMobile": "9581598761",
            "Ext": "9838",
            "SD#": "*306"
        },
        {
            "Name": "Dr. Venu Gopal Duddu",
            "Department": "Psychiatry",
            "Designation": "Consultant",
            "DMobile": "7673951020",
            "Ext": "2151",
            "SD#": "*323"
        },
        {
            "Name": "Dr. Prabhakar M",
            "Department": "Radiation Oncology",
            "Designation": "Registrar",
            "DMobile": "9652055747",
            "Ext": "9901",
            "SD#": "*218"
        },
        {
            "Name": "Dr. Murlidhar K.R.",
            "Department": "Radiation Oncology",
            "Designation": "Medical Physicist & RSO",
            "DMobile": "9440790359",
            "Ext": "9903",
            "SD#": "*220"
        },
        {
            "Name": "Dr. Babaiah M",
            "Department": "Radiation Oncology",
            "Designation": "Medical Director",
            "DMobile": "9963667511",
            "Ext": "9909",
            "SD#": "*204"
        },
        {
            "Name": "Dr. Mirza Athar Ali",
            "Department": "Radiation Oncology",
            "Designation": "Consultant",
            "DMobile": "9492530297",
            "Ext": "9907",
            "SD#": "*200"
        },
        {
            "Name": "Dr. Siva Prasad Chavva",
            "Department": "Radiology",
            "Designation": "Consultant Radiologist",
            "DMobile": "9989685135",
            "Ext": "9923",
            "SD#": "*209"
        },
        {
            "Name": "Dr.Naga Satish",
            "Department": "Radiology",
            "Designation": "Radiologist",
            "DMobile": "9640675222",
            "Ext": "",
            "SD#": "*613"
        },
        {
            "Name": "Dr. Soujanya Bolla",
            "Department": "Radiology",
            "Designation": "Radiologist",
            "DMobile": "9441224202",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr SATISH PAWAR",
            "Department": "Surgical Oncology",
            "Designation": "Consultant",
            "DMobile": "8499884444",
            "Ext": "9853",
            "SD#": ""
        },
        {
            "Name": "Dr Yugandhar Reddy",
            "Department": "Surgical Oncology",
            "Designation": "Associate Consultant",
            "DMobile": "9290302904",
            "Ext": "9853/ 2018",
            "SD#": ""
        },
        {
            "Name": "Dr Ravi Chander V",
            "Department": "Surgical Oncology",
            "Designation": "Senior Consultant",
            "DMobile": "9177242422",
            "Ext": "9831",
            "SD#": ""
        },
        {
            "Name": "Dr. Avuka Jyothi Naidu",
            "Department": "Surgical Oncology",
            "Designation": "Registrar",
            "DMobile": "9502696602",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "Dr.Sushanth Kulkarni",
            "Department": "Urology",
            "Designation": "Consultant Urologist",
            "DMobile": "8008725021",
            "Ext": "2486",
            "SD#": ""
        },
        {
            "Name": "Dr. Naveen Paul",
            "Department": "Urology",
            "Designation": "Consultant Urologist",
            "DMobile": "9885663662",
            "Ext": "2483",
            "SD#": ""
        },
        {
            "Name": "Blood Bank Component Lab",
            "Department": "Blood Bank",
            "Designation": "",
            "DMobile": "",
            "Ext": "2583",
            "SD#": ""
        },
        {
            "Name": "Blood Bank Issue Counter",
            "Department": "Blood Bank",
            "Designation": "",
            "DMobile": "",
            "Ext": "2580",
            "SD#": ""
        },
        {
            "Name": "Blood Bank Medical Officer",
            "Department": "Blood Bank",
            "Designation": "",
            "DMobile": "",
            "Ext": "2582",
            "SD#": ""
        },
        {
            "Name": "Blood Bank Reception",
            "Department": "Blood Bank",
            "Designation": "",
            "DMobile": "",
            "Ext": "2584",
            "SD#": ""
        },
        {
            "Name": "Blood Bank Shift Mobile",
            "Department": "Blood Bank",
            "Designation": "",
            "DMobile": "",
            "Ext": "",
            "SD#": "*657"
        },
        {
            "Name": "Chekka Subhash",
            "Department": "Blood Bank",
            "Designation": "",
            "DMobile": "9908877371/9603932326",
            "Ext": "",
            "SD#": ""
        },
        {
            "Name": "BMT Consilling Room",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2569",
            "SD#": ""
        },
        {
            "Name": "BMT Nursing Station -1",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2560",
            "SD#": ""
        },
        {
            "Name": "BMT Room-1",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2561",
            "SD#": ""
        },
        {
            "Name": "BMT Room-2",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2562",
            "SD#": ""
        },
        {
            "Name": "BMT Room-3",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2563",
            "SD#": ""
        },
        {
            "Name": "Positive Pressure Room",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2594",
            "SD#": ""
        },
        {
            "Name": "Pre BMT Room-1",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2564",
            "SD#": ""
        },
        {
            "Name": "Pre BMT Room-2",
            "Department": "BMT",
            "Designation": "",
            "DMobile": "",
            "Ext": "2565",
            "SD#": ""
        }
    ]


    // EXTRACT VALUE FOR HTML HEADER.
    // ('Name', 'Department', 'Designation', 'Mobile', 'ext', and  'SD#')


    var col = [];
    for (var i = 0; i < myContacts.length; i++) {
        for (var key in myContacts[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    table.className = "table-info table";
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myContacts.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myContacts[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
})();


/*http://www.convertcsv.com/csv-to-json.htm*/
