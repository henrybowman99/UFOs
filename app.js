// import data 
const tableData = data;

//use d3 to reference the HTML table
var tbody = d3.select("tbody")

function buildTable(data){
    //Clear out any existing data
    tbody.html("");
    
    //loop through data

    data.forEach((dataRow) =>{
        //create new row for each object in data
        let row = tbody.append("tr");
        //create new cell for each value and assign the cell the value
        Object.values(dataRow).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
    }
    );
    });
}

//build function 
function handleClick(){
    //grab the date from the filter
    let date = d3.select("#datetime").property("value");
    //set filtered data to full table data by default
    let filteredData = tableData;
   //check to see if a date was entered and change the filtered data accordingly
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // call buildTable function with the filtered data
    buildTable(filteredData);

};
//direct handlClick to run when filter button is clicked
d3.selectAll("filter-btn").on("click", handleClick);

//make the full table data show up by default when page opens
buildTable(tableData);