export interface jobType {
    _id: string;
    name: string;
    status: boolean;
    date: Date;
    location:String;
    jobDescription:String;
    companyDescription:string;
    requierments:[String]
  }

  export interface candidatesType {
    _id: string;
    name: string;
    status: boolean;
    date: Date;
    location:String;
    jobDescription:String;
    companyDescription:string;
    requierments:[String]
  }