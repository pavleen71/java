var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Offic Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineerer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];
function displayStaff() {
    // Clear previous staff list
    $("#staffList").empty();

    // Loop through the dataSet array
    dataSet.forEach(function(staff) {
        // Create HTML elements to display staff information
        var staffInfo = "<div>";
        staffInfo += "<p>Name: " + staff[0] + "</p>";
        staffInfo += "<p>Title: " + staff[1] + "</p>";
        staffInfo += "<p>Location: " + staff[2] + "</p>";
        staffInfo += "<p>ID: " + staff[3] + "</p>"
        staffInfo += "<p>Join Date: " + staff[4] + "</p>"
        staffInfo += "<p>Salary: " + staff[5] + "</p>";
        staffInfo += "</div>";

        // Append staff information to staffList div
        $("#staffList").append(staffInfo);
    });
}

// Initial display of staff information
displayStaff();

// Sort by name button click event
$("#sortByName").click(function() {
    $("#searchForm").css("display","none");
    // Sort dataSet by name
    dataSet.sort(function(a, b) {
        return a[0].localeCompare(b[0]);
    });
    // Redisplay sorted staff information
    displayStaff();
});

// Sort by salary button click event
$("#sortBySalary").click(function() {
    $("#searchForm").css("display","none");
    // Sort dataSet by salary
    dataSet.sort(function(a, b) {
        return parseInt(a[5].replace("$", "").replace(/,/g, "") - parseInt(b[5].replace("$", "").replace(/,/g, "")));
    });
    // Redisplay sorted staff information
    displayStaff();
});
$("#findById").click(function() {
    //Display form to input id 
    $("#searchForm").css("display","block");
});
// Find button click event inside search form
$("#find").click(function(){
    var input=$("#searchId").val();
    //match the input id 
    var get=dataSet.find(function (s){
 return s[3] ==input;
    })
// If staff member is found, display their information
    if(get){
        $("#searchResult").html("<div> <p>Name: " + get[0] + "</p> <p>Title: " + get[1] + "</p><p>Location: " + get[2] + "</p><p>ID: " + get[3] + "</p> <p>Join Date: " + get[4] + "</p><p>Salary: " + get[5] + "</p></div>");
        $("#staffList").css("display","none");
    }
    else{
        $("#searchResult").text("not found");
        $("#staffList").css("display","block");
    }
});
//Display the current year 
document.querySelector("span").textContent = new Date().getFullYear();