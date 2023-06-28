export interface candidatesInfo {
  candidatesId: string;
  rating: Number;
  cognitive: Number;
  personality: Number;
  reliability: Number;
  interview: Boolean;
  screeningCall: Boolean;
  task: Boolean;
  cv: String
}

export interface jobType {
  _id: string;
  name: string;
  status: boolean;
  date: Date;
  location: String;
  jobDescription: String;
  companyDescription: string;
  requierments: [String]
  candidatesList: [candidatesInfo]
}

export interface candidatesType {
  _id: string;
  name: string;
  tel:String;
  email:String;
  info:String
}