// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract EMR {
    struct EHR {
        string patient_name;
        uint age;
        address payable patient_address;
    }

    struct HospitalData {
        string name;
        string addr;
        address manager;
    }
    
    address public Owner;
    uint HospitalCount=0;
    uint PatientCount=0;
    mapping(address => bool) public Hospitals;
    mapping(uint => address) public HospitalsAddr;
    mapping(address => bool) public Patients; 
    mapping(address => address) public Hospital_patients; //many to one
    mapping(address => EHR) public Patients_EHR;
    mapping(address => HospitalData) public Hospital_Data;

    constructor() {
        Owner = 0xce7Dc242c3Bc4556C34Ed50fd10F79fAfbE1AddC;
    }

    modifier restrictedToHospital() {
        require(Hospitals[msg.sender]);
        _;
    }

    modifier restrictedTopatients() {
        require(Patients[msg.sender]);
        _;
    }


    function Add_Hospitals(address Hospital,address manager,  string calldata name,string calldata addr) public  {
        require(msg.sender==Owner);
        HospitalData storage newHospitalData = Hospital_Data[Hospital];
        Hospitals[Hospital]=true;
        HospitalsAddr[HospitalCount]=Hospital;
        HospitalCount ++;
        newHospitalData.name=name;
        newHospitalData.addr=addr;
        newHospitalData.manager=manager;


    }

    function Add_Patient(address patient) restrictedToHospital public  {
    
        Hospital_patients [patient] = msg.sender;
        Patients[msg.sender]=true;
        PatientCount ++;
    }
    
    function Add_Patient_EHR(string calldata patient_name,uint age,address payable patient_address) restrictedToHospital public {
    require(Hospital_patients [patient_address] == msg.sender);
    EHR storage newEHR = Patients_EHR[patient_address];
    newEHR.patient_name=patient_name;
    newEHR.age=age;
    newEHR.patient_address=patient_address;

    }
     
    function Emergency_EHR_Transfer(address To,address From,address payable patient_address) public {
    require(Hospital_patients [patient_address] == msg.sender);
    require(msg.sender==Hospital_Data[From].manager);
    Hospital_patients[patient_address]=To;
    }

    function EHR_Transfer(address To,address From,address payable patient_address) public {
    require(Hospital_patients [patient_address] == From);
    Hospital_patients[patient_address]=To;  
    }
 
    function getCounts() public view  returns (uint,uint) {
    return (HospitalCount,PatientCount);
}

    function updateEHR(address patient,string calldata patient_name,uint age,address payable patient_address) public restrictedToHospital{
    require(patient==Hospital_patients[msg.sender]);
    Patients_EHR[patient].patient_name=patient_name;
    Patients_EHR[patient].age=age;
    Patients_EHR[patient].patient_address=patient_address;
    }

    function getEHRsummary(address patient) public view  returns (string memory,uint,address) 
    {
        return(
    Patients_EHR[patient].patient_name,
    Patients_EHR[patient].age,
    Patients_EHR[patient].patient_address);
    }

    function getHospitalData(address Hospital) public view  returns (string memory,string memory,address) 
    {
        return(
    Hospital_Data[Hospital].name,
    Hospital_Data[Hospital].addr,
    Hospital_Data[Hospital].manager);

    }

    function getHospitalsAddress() public view returns(address[] memory)
    {
      address[] memory ret = new address[](HospitalCount);
    for (uint i = 0; i < HospitalCount; i++) {
        ret[i]=HospitalsAddr[i];
    }
    return ret;
    }

}