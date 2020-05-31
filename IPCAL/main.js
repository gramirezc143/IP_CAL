function validateIp() {
    var divData = document.getElementById("tableData").innerHTML = "";
    var ip_address = document.getElementById("ipvalidation").value;
    console.info(ip_address);
    if (ip_address == "") {
        alert("Name must be filled out");
        return false;
    }

    var ip = ip_address.split(".");
    ipClass(ip[0]);
    defaultSubnetMask(ip[0]);
    networkSegment(ip[0]);
    hostSegment(ip[0]);
    firstAddressAvailable(ip);
    lastAddressAvailable(ip);
    broadcastAddress(ip);
}
//In this fuction determine the class of the ip address
function ipClass(classIP) {
    var dataTable = document.getElementById("tableData");

    //Column for class ip
    var rowClass = document.createElement("tr");
    var rowLabel = document.createElement("td");
    var rowData = document.createElement("td");
    rowLabel.innerHTML = "IP Address Class";
    rowClass.appendChild(rowLabel);

    switch (true) {
        case (classIP < 128 && classIP >= 0):
            rowData.innerHTML = "Clase A --> Redes grandes";
            rowClass.appendChild(rowData);
            break;

        case (classIP < 192 && classIP > 127):
            rowData.innerHTML = "Clase B --> Redes Medianas";
            rowClass.appendChild(rowData);
            break;

        case (classIP < 224 && classIP > 191):
            rowData.innerHTML = "Clase C --> Redes Pequeñas";
            rowClass.appendChild(rowData);
            break;

        case (classIP < 240 && classIP > 223):
            rowData.innerHTML = "Clase D --> Multicast";
            rowClass.appendChild(rowData);
            break;

        case (classIP < 256 && classIP > 239):
            rowData.innerHTML = "Clase E --> Investigacion";
            rowClass.appendChild(rowData);
            break;

        default:
            console.log("No pertenece a ninguna dirección IP");
            break;
    }
    dataTable.appendChild(rowClass);
}

function defaultSubnetMask(classIP) {
    var dataTable = document.getElementById("tableData");
    //Column for default subnet mask
    var rowMask = document.createElement("tr");
    var rowMaskLabel = document.createElement("td");
    var rowMaskData = document.createElement("td");
    rowMaskLabel.innerHTML = "Subnet Mask";
    rowMask.appendChild(rowMaskLabel);

    switch (true) {
        case (classIP < 128 && classIP >= 0):
            rowMaskData.innerHTML = "255.0.0.0";
            rowMask.appendChild(rowMaskData);
            break;

        case (classIP < 192 && classIP > 127):
            rowMaskData.innerHTML = "255.255.0.0";
            rowMask.appendChild(rowMaskData);
            break;

        case (classIP < 224 && classIP > 191):
            rowMaskData.innerHTML = "255.255.255.0";
            rowMask.appendChild(rowMaskData);
            break;

        case (classIP < 240 && classIP > 223):
            rowMaskData.innerHTML = "Sin definir";
            rowMask.appendChild(rowMaskData);
            break;

        case (classIP < 256 && classIP > 239):
            rowMaskData.innerHTML = "Sin definir";
            rowMask.appendChild(rowMaskData);
            break;

        default:
            console.log("No pertenece a ninguna dirección IP");
            break;
    }
    dataTable.appendChild(rowMask);
}

function networkSegment(classIP) {
    var dataTable = document.getElementById("tableData");
    //Column for Bnetwork segment
    var rowSegment = document.createElement("tr");
    var rowSegmentLabel = document.createElement("td");
    var rowSegmentData = document.createElement("td");
    rowSegmentLabel.innerHTML = "Network Segment";
    rowSegment.appendChild(rowSegmentLabel);

    switch (true) {
        case (classIP < 128 && classIP >= 0):
            rowSegmentData.innerHTML = "8 bits";
            rowSegment.appendChild(rowSegmentData);
            break;

        case (classIP < 192 && classIP > 127):
            rowSegmentData.innerHTML = "16 bits";
            rowSegment.appendChild(rowSegmentData);
            break;

        case (classIP < 224 && classIP > 191):
            rowSegmentData.innerHTML = "24 bits";
            rowSegment.appendChild(rowSegmentData);
            break;

        case (classIP < 240 && classIP > 223):
            rowSegmentData.innerHTML = "Sin definir";
            rowSegment.appendChild(rowSegmentData);
            break;

        case (classIP < 256 && classIP > 239):
            rowSegmentData.innerHTML = "Sin definir";
            rowSegment.appendChild(rowSegmentData);
            break;

        default:
            console.log("No pertenece a ninguna dirección IP");
            break;
    }
    dataTable.appendChild(rowSegment);
}

function hostSegment(classIP) {
    var dataTable = document.getElementById("tableData");
    //Column for default subnet mask
    var rowHost = document.createElement("tr");
    var rowHostLabel = document.createElement("td");
    var rowHostData = document.createElement("td");
    rowHostLabel.innerHTML = "Host Segment";
    rowHost.appendChild(rowHostLabel);

    switch (true) {
        case (classIP < 128 && classIP >= 0):
            rowHostData.innerHTML = "24 bits";
            rowHost.appendChild(rowHostData);
            break;

        case (classIP < 192 && classIP > 127):
            rowHostData.innerHTML = "16 bits";
            rowHost.appendChild(rowHostData);
            break;

        case (classIP < 224 && classIP > 191):
            rowHostData.innerHTML = "8 bits";
            rowHost.appendChild(rowHostData);
            break;

        case (classIP < 240 && classIP > 223):
            rowHostData.innerHTML = "Sin definir";
            rowHost.appendChild(rowHostData);
            break;

        case (classIP < 256 && classIP > 239):
            rowHostData.innerHTML = "Sin definir";
            rowHost.appendChild(rowHostData);
            break;

        default:
            console.log("No pertenece a ninguna dirección IP");
            break;
    }
    dataTable.appendChild(rowHost);
}

function networkAddress() {}

function firstAddressAvailable(ip) {
    var dataTable = document.getElementById("tableData");
    //Column for default First address
    var rowFirst = document.createElement("tr");
    var rowFirstLabel = document.createElement("td");
    var rowFirstData = document.createElement("td");
    rowFirstLabel.innerHTML = "First Address";
    rowFirst.appendChild(rowFirstLabel);
    rowFirstData.innerHTML = ip[0] + "." + ip[1] + "." + ip[2] + ".1";
    rowFirst.appendChild(rowFirstData);
    dataTable.appendChild(rowFirst);
}


function lastAddressAvailable(ip) {
    var dataTable = document.getElementById("tableData");
    //Column for default Last address
    var rowLast = document.createElement("tr");
    var rowLastLabel = document.createElement("td");
    var rowLastData = document.createElement("td");
    rowLastLabel.innerHTML = "Last Address";
    rowLast.appendChild(rowLastLabel);
    rowLastData.innerHTML = ip[0] + "." + ip[1] + "." + ip[2] + ".254";
    rowLast.appendChild(rowLastData);
    dataTable.appendChild(rowLast);
}

function broadcastAddress(ip) {
    var dataTable = document.getElementById("tableData");
    //Column for default Broadcast address
    var rowBroadcast = document.createElement("tr");
    var rowLabel = document.createElement("td");
    var rowData = document.createElement("td");
    rowLabel.innerHTML = "Broadcast Address";
    rowBroadcast.appendChild(rowLabel);
    rowData.innerHTML = ip[0] + "." + ip[1] + "." + ip[2] + ".255";
    rowBroadcast.appendChild(rowData);
    dataTable.appendChild(rowBroadcast);
}